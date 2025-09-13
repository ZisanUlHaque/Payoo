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

// toggling features

document.getElementById('add-money').addEventListener('click',function(){
    document.getElementById('cash-out-parent').style.display = 'none'
    document.getElementById('add-money-parent').style.display = 'block'
})
document.getElementById('cash-out').addEventListener('click',function(){
    document.getElementById('add-money-parent').style.display = 'none'
    document.getElementById('cash-out-parent').style.display = 'block'
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