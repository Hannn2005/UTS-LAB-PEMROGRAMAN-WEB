const transferBtn = document.getElementById('transfer');
const cardBtn = document.getElementById('card');
const ewalletBtn = document.getElementById('e-wallet');
const paymentContainer = document.querySelector('.payment-container');


const transferSection = document.querySelector('.transfer-section');
const cardSection = document.querySelector('.card-section');
const ewalletSection = document.querySelector('.e-wallet-section');


transferBtn.addEventListener('click' , displayTransfer);
cardBtn.addEventListener('click' , displayCard);
ewalletBtn.addEventListener('click' , displayEwallet);

function displayTransfer(){   
    paymentContainer.style.display = 'none';
    transferSection.style.display = 'flex';
    
    
}

function displayCard(){   
    paymentContainer.style.display = 'none';
    cardSection.style.display = 'flex';
}


function displayEwallet(){   
    paymentContainer.style.display = 'none';
    ewalletSection.style.display = "flex";
}

