console.log("connected!");

const myButton = document.getElementById('button');

const input = document.getElementById('user-input');

const nameElement = document.getElementById('name');

myButton.addEventListener('click', () => {
    nameElement.textContent = input.value;
});

const colorButton = document.getElementById('color-button');

const nameTag = document.getElementById('nametag');

const bottom = document.getElementById('bottom');

colorButton.addEventListener('click', () => {
    nameTag.style.background = "blue";
    bottom.style.background = "blue";
});

const backgroundButton = document.getElementById('background');

const background = document.getElementById('body')

backgroundButton.addEventListener('click', () => {
    background.style.background = "black";
    
});