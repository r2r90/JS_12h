const billInput = document.getElementById('billTotalInput');
const tipInput = document.getElementById('tipInput');
const numberOfPeopleDiv = document.getElementById('numberOfPeople');
const perPersonTotalDiv = document.getElementById('perPersonTotal');
let numberOfPeople = Number(numberOfPeopleDiv.innerText);

const calculateBill = () => {
  let bill = Number(billTotalInput.value);
  let tip = Number(tipInput.value);

  let tipAmount = tip / 100;

  let totalAmount = bill + bill * tipAmount;

  let personTotal = totalAmount / numberOfPeople;

  perPersonTotal.innerText = `$${personTotal.toFixed(2).toLocaleString('en-US')}`;
};

const increasePeople = () => {
  numberOfPeople += 1;
  numberOfPeopleDiv.innerText = numberOfPeople;
  calculateBill();
};

const decreasePeople = () => {
  if (numberOfPeople <= 1) {
    return;
  }
  numberOfPeople -= 1;
  numberOfPeopleDiv.innerText = numberOfPeople;

  calculateBill();
};
