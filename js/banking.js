
// handle deposit button event

document.getElementById('deposit-button').addEventListener('click', function () {

    // get the amount deposited 
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);

    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);


    const newDepositTotal = previousDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal;

    // update balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceText = balanceTotal.innerText;
    const balanceValue = parseFloat(balanceText);

    const updatedBalance = balanceValue + newDepositAmount;
    balanceTotal.innerText = updatedBalance;


    // clear the deposit input field
    depositInput.value = '';
})

// handle withdraw button event

document.getElementById('withdraw-button').addEventListener('click', function () {

    // get the amount withdrew
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawText);

    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountText);

    const newWithdrawTotal = previousWithdrawAmount + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    // update balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceText = balanceTotal.innerText;
    const balanceValue = parseFloat(balanceText);

    const updatedBalance = balanceValue - newWithdrawAmount;
    balanceTotal.innerText = updatedBalance;

    // clear the withdraw input field
    withdrawInput.value = '';
})