//login button function
document.getElementById('login-btn')
.addEventListener('click',function(e){
    e.preventDefault()

    const mobileNumber = 1787015981
    const pinNumber = 1285

    const mobileNumberValue = document.getElementById('mobile-number').value
    const mobileNumberValueConverted = parseInt(mobileNumberValue)

    const pinNumberValue = document.getElementById('pin-number').value
    const pinNumberValueConverted = parseInt(pinNumberValue)
    
    if(mobileNumberValueConverted === mobileNumber && pinNumberValueConverted === pinNumber){
        window.location.href="home.html"
    }else{
        console.log("invalid");
    }
})