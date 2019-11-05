// select
let textTitle = document.querySelector('h2');
let button = document.querySelector('button');

// event
textTitle.addEventListener('mouseover', updateColor);
textTitle.addEventListener('mouseout', updateColor2);
button.addEventListener('click', updateFontSize);

// function event
function updateColor(){
    textTitle.style.color = 'red';
}
function updateColor2(){
    textTitle.style.color = 'black';
}
function updateFontSize(){
    textTitle.style.fontSize = '35px';
}