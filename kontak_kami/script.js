document.addEventListener('DOMContentLoaded', function() {
    
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const nama = event.target.nama.value;
        const email = event.target.email.value;
        const subjek = event.target.subjek.value;
        const pesan = event.target.pesan.value;
        
        console.log("Data Formulir:");
        console.log("Nama:", nama);
        console.log("Email:", email);
        console.log("Subjek:", subjek);
        console.log("Pesan:", pesan);
        
        alert('Pesan Anda (sudah terekam di konsol)!\nUntuk pengiriman nyata, ini memerlukan backend.');
        
        contactForm.reset();
    });

});