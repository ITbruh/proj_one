const check = document.querySelector('.processChecked')
const cancel = document.querySelector('.processProgress')
const check2 = document.querySelector('.processChecked2')
const cancel2 = document.querySelector('.processProgress2')

cancel.addEventListener('click', function() {
    check.classList.add('processGood');
    cancel.classList.add('processnone');
});

cancel2.addEventListener('click', function() {
check2.classList.add('processGood');
cancel2.classList.add('processnone');
});
