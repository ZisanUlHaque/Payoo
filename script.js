//login button function
document.getElementById('login-btn')
.addEventListener('click',function(e){
    e.preventDefault()

    const mobileNumber = 17870159810
    const pinNumber = 1285

    const mobileNumberValue = document.getElementById('mobile-number').value
    const mobileNumberValueConverted = parseInt(mobileNumberValue)

    const pinNumberValue = document.getElementById('pin-number').value
    const pinNumberValueConverted = parseInt(pinNumberValue)
    
    if(mobileNumberValueConverted === mobileNumber && pinNumberValueConverted === pinNumber){
        //new windows
        window.location.href="home.html"
    }else{
        alert('Invalid');
    }
})