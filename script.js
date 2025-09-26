let money = 0;

const moneyDisplay = document.getElementById('moneyDisplay');
const clickButton = document.getElementById('clickButton');

clickButton.addEventListener('click', function() {
    money += 1;

    moneyDisplay.textContent = money;
});
