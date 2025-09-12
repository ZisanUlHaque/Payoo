document.getElementById('add-money-btn').addEventListener('click',function(event){
    event.preventDefault()

    const bank = document.getElementById('add-bank').value 
    const accountNumber = document.getElementById('add-number').value
    const amount = parseInt(document.getElementById('add-amount').value)
    const pin = document.getElementById('add-pin').value

    const availableBalance = parseInt(document.getElementById('available-balance').innerText)

    //update balance to add money
    const totalAvailableBalance = amount + availableBalance
    document.getElementById('available-balance').innerText = totalAvailableBalance
})