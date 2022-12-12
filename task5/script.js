const input = document.querySelector('#text-input');
const button = document.querySelector('#button-form');
const text = document.querySelector ('#duplicate-field');

input.addEventListener('input', function(event) {
   text.textContent = input.value;
});

document.addEventListener('submit', (e) => { 
    e.preventDefault();
    
    console.log (text.textContent);
    e.target.reset();
    input.value = '';
    text.textContent = '';
    
    
});