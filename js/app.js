// UI
const cake = document.getElementById('bdCake');
const btn = document.getElementById('btn');
const sayar = document.getElementById('sayar');
const wishbox = document.getElementById('wish-box');

window.alert('Please open with laptop or computer for better experience.')


btn.addEventListener('click', ()=>{
    cake.classList.toggle('show');
    sayar.classList.toggle('move');
    wishbox.classList.toggle('move');

    btn.classList.toggle('animation');
});



