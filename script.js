let money = 0;
let item1Cost = 1750;
let item1Owned = 0;

const moneyDisplay = document.getElementById('moneyDisplay');
const clickButton = document.getElementById('clickButton');

clickButton.addEventListener('click', function() {
    money += 1;

    moneyDisplay.textContent = money;
});
