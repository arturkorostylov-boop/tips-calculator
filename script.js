const tipAmountText = document.querySelector('#tip-amount')
const totalPerPersonText = document.querySelector('#total-per-person')
const billAmountInput = document.querySelector('#bill-amount')
const numberOfPeopleInput = document.querySelector('#number-of-people')
const calculateButton = document.querySelector('#calculate')

calculateButton.addEventListener('click', () => {
    console.dir(billAmountInput.valueAsNumber);
    console.dir(numberOfPeopleInput.valueAsNumber);
    const originalBillAmount = billAmountInput.valueAsNumber
    const numberOfPeople = numberOfPeopleInput.valueAsNumber

    const selectedRadioTip = document.querySelector('input[name="tip"]:checked')
    const tipPercentages = parseInt(selectedRadioTip.value.slice(0, -1))
    console.dir(tipPercentages);

    const totalTip = (originalBillAmount * tipPercentages) / 100
    console.log(totalTip);
    tipAmountText.textContent = totalTip
    
    const totalBill = originalBillAmount + totalTip
    console.log(totalBill);

    const perPerson = (totalBill / numberOfPeople).toFixed(2)
    console.log(perPerson);
    totalPerPersonText.textContent = perPerson
})
