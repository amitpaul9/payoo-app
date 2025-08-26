
document.getElementById('add-money-btn').addEventListener('click', function(e){
e.preventDefault();

const bank = document.getElementById('bank').value;

const accountNumber = document.getElementById('account-number').value;

const addAmount = parseInt(document.getElementById('add-amount').value);


const pinNumber = document.getElementById('pin-number').value;

const availableBalance = parseInt(document.getElementById('available-balance').innerText);

const totalAvailableBalance = addAmount + availableBalance;

document.getElementById('available-balance').innerText = totalAvailableBalance;


})