// Login button funtionality

document.getElementById('login-btn').addEventListener('click', function(e){
    e.preventDefault();
    const mobileNumber = 1234567890;
    const pinNumber = 1234;
    
    const mobileNumberValue = document.getElementById('mobile-number').value;
    const mobileNumberValueCOnverted = parseInt(mobileNumberValue);

    const pinNumberValue = document.getElementById('pin-number').value;
    const pinNumberValueConverted = parseInt(pinNumberValue);


   if(mobileNumberValueCOnverted === mobileNumber &&  pinNumberValueConverted === pinNumber){
    window.location.href='home.html'
   }

   else{
    alert("Oops!! Invalid Credencials")
   }


})