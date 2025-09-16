const validPin = 1285
const transactionData = []
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
    if(amount <= 0){
        alert('invalid amount')
        return;
    }
    //update balance to add money
    const totalAvailableBalance = amount + availableBalance
    document.getElementById('available-balance').innerText = totalAvailableBalance

    const data = {
        name : 'Add Money',
        date: new Date().toLocaleTimeString()
    }
    transactionData.push(data)
    console.log(transactionData)
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
    if(cashoutAmount <= 0 || cashoutAmount > updateBalance ){
        alert("invalid amount")
        return;
    }
    //update balance to add money
    const totalAvailableBalance = updateBalance - cashoutAmount
    document.getElementById('available-balance').innerText = totalAvailableBalance

    const data = {
        name : 'Cash Out',
        date: new Date().toLocaleTimeString()
    }
    transactionData.push(data)
    console.log(transactionData)
})


// transaction limit
let showAllTransactions = false

document.getElementById('Transaction-btn').addEventListener('click', function () {
    renderTransactions()
})

// "View All" click handle
document.getElementById('view-all').addEventListener('click', function () {
    showAllTransactions = !showAllTransactions
    renderTransactions()
    this.innerText = showAllTransactions ? "Show Less" : "View All"
})

function renderTransactions() {
    const transactionContainer = document.getElementById('transaction-container')
    transactionContainer.innerText = ''

    // যদি showAllTransactions false হয় তাহলে শুধু ৩টা দেখাবে
    const transactionsToShow = showAllTransactions ? transactionData : transactionData.slice(-3)

    for (const data of transactionsToShow) {
        const div = document.createElement("div")
        div.innerHTML = `
            <div class="p-3 bg-white rounded-xl mt-3 flex items-center justify-between">
                <div class="flex items-center">
                    <div class="p-3 rounded-full bg-[#f4f5f7] ">
                        <img src="assets/wallet1.png" class="mx-auto" alt="">
                    </div>
                    <div class="ml-3">
                        <h1>${data.name}</h1>
                        <p>${data.date}</p>
                    </div>
                </div>
                <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
        `
        transactionContainer.appendChild(div)
    }
}


// transfer money
document.getElementById('transfer-money-parent').addEventListener('submit', function (event) {
    event.preventDefault()

    const userAccount = document.getElementById('transfer-account').value
    const transferAmount = parseInt(document.getElementById('transfer-amount').value)
    const transferPin = parseInt(document.getElementById('transfer-pin').value)

    const updateBalance = parseInt(document.getElementById('available-balance').innerText)

    if (userAccount.length < 11) {
        alert('Please provide valid account number')
        return
    }
    if (transferPin !== validPin) {
        alert('Please Provide Valid Pin')
        return
    }
    if (transferAmount <= 0 || transferAmount > updateBalance) {
        alert("invalid amount")
        return
    }

    const totalAvailableBalance = updateBalance - transferAmount
    document.getElementById('available-balance').innerText = totalAvailableBalance

    const data = {
        name: 'Transfer Money',
        date: new Date().toLocaleString()
    }
    transactionData.push(data)
    console.log(transactionData)
})


// get bonus
document.getElementById('get-bouns-parent').addEventListener('submit', function (event) {
    event.preventDefault()

    const coupon = document.getElementById('bonus-coupon').value
    const updateBalance = parseInt(document.getElementById('available-balance').innerText)

    if (coupon.trim() === "") {
        alert("Please enter a valid coupon")
        return
    }

    const bonus = 500
    const totalAvailableBalance = updateBalance + bonus
    document.getElementById('available-balance').innerText = totalAvailableBalance

    const data = {
        name: 'Get Bonus',
        date: new Date().toLocaleString()
    }
    transactionData.push(data)
    console.log(transactionData)
})


// pay bill
document.getElementById('payBill-parent').addEventListener('submit', function (event) {
    event.preventDefault()

    const billerAcc = document.getElementById('biller-account').value
    const payAmount = parseInt(document.getElementById('pay-amount').value)
    const payPin = parseInt(document.getElementById('pay-pin').value)

    const updateBalance = parseInt(document.getElementById('available-balance').innerText)

    if (billerAcc.length < 5) {
        alert('Please provide valid biller account')
        return
    }
    if (payPin !== validPin) {
        alert('Please Provide Valid Pin')
        return
    }
    if (payAmount <= 0 || payAmount > updateBalance) {
        alert("invalid amount")
        return
    }

    const totalAvailableBalance = updateBalance - payAmount
    document.getElementById('available-balance').innerText = totalAvailableBalance

    const data = {
        name: 'Pay Bill',
        date: new Date().toLocaleString()
    }
    transactionData.push(data)
    console.log(transactionData)
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