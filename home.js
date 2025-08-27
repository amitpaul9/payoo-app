// Add money feature
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



// Cashout Money feature
document.getElementById('withdow-btn').addEventListener('click', function(e){
    e.preventDefault();
    const cashoutAmount = parseInt(document.getElementById('cashout-amount').value);
    const availableBalance = parseInt(document.getElementById('available-balance').innerText);

    const newBalance = availableBalance - cashoutAmount;

    document.getElementById('available-balance').innerText = newBalance;
    alert('Cash out ' + cashoutAmount + '$ successfull')
})



















// toggling feature
document.getElementById('add-money-btn').addEventListener('click', function(){

    document.getElementById('cash-out').style.display = 'none';

    document.getElementById('add-money').style.display = 'block';


})

document.getElementById('cash-out-btn').addEventListener('click', function(){

    document.getElementById('add-money').style.display = 'none';
    document.getElementById('cash-out').style.display = 'block';


})