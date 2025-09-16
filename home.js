const validPin = 1285

//funtion for code Reusable 
function getInputValueNumber (id){
    const inputField = document.getElementById(id)
    const inputFieldValue = inputField.value
    const inputFieldValueNumber = parseInt(inputFieldValue)

    return inputFieldValueNumber
}

function getInputValue(id) {
    const inputField = document.getElementById(id)
    const inputFieldValue = inputField.value
    return inputFieldValue
}

//function to toggle
function handleToggle(id){
    const forms = document.getElementsByClassName("form")
    for(const form of forms){
        form.style.display = 'none'
    } 

    document.getElementById(id).style.display = 'block'
}

//function to toggle buttons
function handleButtonToggle(id) {
  const formBtns = document.getElementsByClassName("form-btn");

  for (const btn of formBtns) {
    btn.style.borderColor = "#d1d5db"; // gray-300
    btn.style.backgroundColor = "transparent";
  }

  const activeBtn = document.getElementById(id);
  activeBtn.style.borderColor = "#0874f2";   // ✅ fixed line
  activeBtn.style.backgroundColor = "#0874f20d"; // ✅ fixed line
}



//add money
document.getElementById('add-money-btn').addEventListener('click',function(event){
    event.preventDefault()

    const bank = document.getElementById('add-bank').value 
    const accountNumber = getInputValue('add-number')
    const amount = getInputValueNumber('add-amount')
    const pin = getInputValueNumber('add-pin')

    const availableBalance = parseInt(document.getElementById('available-balance').innerText)

     //some condition for pin and acount number
    if(accountNumber.length < 11){
        alert('Please provide valid account number')
        return;
    }
    if(pin !== validPin){
        alert('Please Provide Valid Pin')
        return;
    }
    //update balance to add money
    const totalAvailableBalance = amount + availableBalance
    document.getElementById('available-balance').innerText = totalAvailableBalance
})




// cash out 
document.getElementById('cash-out-btn').addEventListener('click',function(event){
    event.preventDefault()

    const agentNumber = document.getElementById('agent-number').value
    const cashoutAmount = parseInt(document.getElementById('cash-out-amount').value)
    const pinNum = parseInt(document.getElementById('cash-out-pin').value)

    const updateBalance = parseInt(document.getElementById('available-balance').innerText)

    //some condition for pin and acount number
    if(agentNumber.length < 11){
        alert('Please provide valid account number')
        return;
    }
    if(pinNum !== validPin){
        alert('Please Provide Valid Pin')
        return;
    }
    //update balance to add money
    const totalAvailableBalance = updateBalance - cashoutAmount
    document.getElementById('available-balance').innerText = totalAvailableBalance
})



// toggling features

document.getElementById('add-money').addEventListener('click',function(){

    //using function for code Reusable
    const forms = document.getElementsByClassName("form")
    for(const form of forms){
        form.style.display = 'none'
    } 

    document.getElementById('add-money-parent').style.display = 'block'
    handleButtonToggle('add-money')

})
document.getElementById('cash-out').addEventListener('click',function(){
    handleToggle('cash-out-parent')
    handleButtonToggle('cash-out')

})
document.getElementById('transfer-btn').addEventListener('click',function(){
    handleToggle('transfer-money-parent')
    handleButtonToggle('transfer-btn')
})
document.getElementById('getBonus-btn').addEventListener('click',function(){
    handleToggle('get-bouns-parent')
    handleButtonToggle('getBonus-btn')
})
document.getElementById('payBill-btn').addEventListener('click',function(){
    document.getElementById('add-money-parent').style.display = 'none'
    document.getElementById('cash-out-parent').style.display = 'none'
    document.getElementById('transfer-money-parent').style.display = 'none'
    document.getElementById('get-bouns-parent').style.display = 'none'
    document.getElementById('transaction-parent').style.display = 'none'
    document.getElementById('payBill-parent').style.display = 'block'

    handleButtonToggle('payBill-btn')
})
document.getElementById('Transaction-btn').addEventListener('click',function(){
    handleToggle('transaction-parent')
    handleButtonToggle('Transaction-btn')
})