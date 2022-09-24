// handle deposit button event
document.getElementById('deposit-button').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-amount');
    const depositAmount = depositInput.value;
    console.log(depositAmount);
})