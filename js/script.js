const check = document.querySelector('.processChecked')
const cancel = document.querySelector('.processProgress')
const check2 = document.querySelector('.processChecked2')
const cancel2 = document.querySelector('.processProgress2')

cancel.addEventListener('click', function () {
    check.classList.add('processGood');
    cancel.classList.add('processnone');
});

cancel2.addEventListener('click', function () {
    check2.classList.add('processGood');
    cancel2.classList.add('processnone');
});

const button = document.querySelector('.DiagBtn')
const block = document.querySelector('.boss')
const consultBtn = document.querySelector('.consultBtn')

button.addEventListener('click', function () {
    block.scrollIntoView({
        behavior: 'smooth'
    });
});

consultBtn.addEventListener('click', function () {
    block.scrollIntoView({
        behavior: 'smooth'
    });
});

const buttonPrice = document.querySelector('.priceBtn')
const blockPrice = document.querySelector('.getPrice')
const getPriceBtn = document.querySelector('.jsFunc')

cancel2.addEventListener('click', function () {
    getPriceBtn.classList.add('activeBtn')
});

buttonPrice.addEventListener('click', function () {
    blockPrice.scrollIntoView({
        behavior: 'smooth'
    });
});

const activeBtn = document.querySelector('.diagnBtn2')
const activeBtnClass = document.querySelector('.activeBtn')

cancel.addEventListener('click', function () {
    activeBtn.classList.add('activeBtn');
});

const scrollBtn = document.querySelector('.scrollBtn')

scrollBtn.addEventListener('click', function () {
    blockPrice.scrollIntoView({
        behavior: 'smooth'
    });
});