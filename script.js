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



    const billToPerson = (originalBillAmount / numberOfPeople).toFixed(2)
    console.log(billToPerson);
})