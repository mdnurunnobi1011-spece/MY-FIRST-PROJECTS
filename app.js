const first = document.getElementById('counter');
const second = document.getElementById('plusBtn');
const third = document.getElementById('minusBtn');

let fourth = 0;

const fifth = (value) => {
   fourth = fourth + value;
first.textContent = fourth;

if (fourth >= 10) {
    second.setAttribute('disabled', true);
}
else{
    second.removeAttribute('disabled', false);
};

if (fourth <= 0){
    third.setAttribute('disabled', true);
}
else{third.removeAttribute('disabled', false)}
};

second.addEventListener('click', () => { 
    fifth(1);
})

third.addEventListener('click', () => {
    fifth(-1);
})

