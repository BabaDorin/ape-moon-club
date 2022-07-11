let amount = document.getElementById("amount");
const MAX_AMOUNT_ON_WEBSITE = 15;
const MIN_AMOUNT_ON_WEBSITE = 1;

for (i = 1; i <= MAX_AMOUNT_ON_WEBSITE; i++) {
    var span = document.createElement('span');
    span.textContent = i;
    amount.appendChild(span);
}

let num = amount.getElementsByTagName('span');
var index = 0;

function nextNum() {
    num[index].style.display = 'none';
    index = (index + 1) % num.length;
    num[index].style.display = 'initial';
}

function prevNum() {
    num[index].style.display = 'none';
    index = (index - 1 + num.length) % num.length;
    num[index].style.display = 'initial';
}