import express from "express"
import cors from "cors"
import pkg from "pg";
import bcrypt from "bcrypt";

const { Pool } = pkg;

const app = express();

app.use(cors());
app.use(express.json())


// koneksi ke neon database

const pool = new Pool({
  connectionString:
    "postgresql://neondb_owner:npg_yViWFlZ2Qcs1@ep-bold-pine-a4zijhk6-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require",
  ssl: { rejectUnauthorized: false } 
});

// user ketika post message di contact kami
app.post("/contact", async (req, res) => {
  const { nama, email, subject, pesan } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO contact_messages (nama, email, subject, pesan)
       VALUES ($1, $2, $3, $4) RETURNING *`,
      [nama, email, subject, pesan]
    );

    res.json({ success: true, data: result.rows[0] });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});


// event card

app.get("/events", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM events ORDER BY id DESC");
    res.json({ success: true, data: result.rows });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});


//register

app.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  try {

    if (!email.includes("@")) {
      return res.status(400).json({ success: false, message: "Email tidak valid" });
    }

   
    const check = await pool.query(
      "SELECT * FROM users WHERE username = $1 OR email = $2",
      [username, email]
    );

    if (check.rows.length > 0) {
      const existingUser = check.rows[0];
      if (existingUser.username === username) {
        return res.status(400).json({ success: false, message: "Username sudah digunakan" });
      }
      if (existingUser.email === email) {
        return res.status(400).json({ success: false, message: "Email sudah terdaftar" });
      }
    }


    const hashed = await bcrypt.hash(password, 10);


    const result = await pool.query(
      `INSERT INTO users (username, email, password)
       VALUES ($1, $2, $3) RETURNING id, username, email`,
      [username, email, hashed]
    );

    res.json({ success: true, user: result.rows[0] });

  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
});

//login

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await pool.query(`SELECT * FROM users WHERE email = $1`, [email]);

    if (result.rows.length === 0) {
      return res.json({ success: false, message: "Email tidak ditemukan" });
    }

    const user = result.rows[0];


    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.json({ success: false, message: "Password salah" });
    }

    res.json({
      success: true,
      user: { id: user.id, username: user.username, email: user.email }
    });

  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});



app.get("/events/:id", async (req,res)=>{
  const { id } = req.params;
  try {
    const result = await pool.query("SELECT * FROM events WHERE id = $1", [id]);
    res.json({ success: true, data: result.rows[0] });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});


app.listen(8383,(req,res)=>{
    console.log("server running on 8383")
})