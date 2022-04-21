console.log('Olá, mundo!');

// create colorDivs
const colorPallet = document.getElementById('color-palette');
for (let count = 0; count < 4; count += 1) {
  const colorDiv = document.createElement('div');
  colorDiv.className = 'color';
  colorPallet.appendChild(colorDiv);
}

// create colors
const colorDiv = document.getElementsByClassName('color');
const rgbColors = ['rgb(69, 41, 102)', 'rgb(152, 32, 101)', 'rgb(217, 91, 91)',
  'rgb(255, 180, 110)'];
const firstColor = document.getElementsByClassName('color')[0];
for (let index = 0; index < colorDiv.length; index += 1) {
  colorDiv[index].style.backgroundColor = rgbColors[index];
}
firstColor.style.backgroundColor = 'black';
firstColor.className = 'color selected';

// create coloring board
const pixelBoard = document.getElementById('pixel-board');
for (let line = 0; line < 5; line += 1) {
  const pixelLine = document.createElement('div');
  pixelLine.className = 'lines';
  pixelBoard.appendChild(pixelLine);
}
const line = document.getElementsByClassName('lines');
for (let index = 0; index < line.length; index += 1) {
  for (let width = 0; width < 5; width += 1) {
    const pixelDiv = document.createElement('div');
    pixelDiv.className = 'pixel';
    line[index].appendChild(pixelDiv);
  }
}

// select color
function selectColor(event) {
  const selectedColor = document.getElementsByClassName('selected');
  selectedColor[0].classList.remove('selected');
  event.target.classList.add('selected');
}
for (let index = 0; index < colorDiv.length; index += 1) {
  colorDiv[index].addEventListener('click', selectColor);
}

// coloring the pixel board
const pixel = document.getElementsByClassName('pixel');
const selectedColor = document.getElementsByClassName('color selected');
function coloring(event) {
  event.target.style.backgroundColor = selectedColor[0].style.backgroundColor;
}
for (let index = 0; index < pixel.length; index += 1) {
  pixel[index].addEventListener('click', coloring);
}

// clear the board
const clearButton = document.getElementById('clear-board');
function clearBoard() {
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = 'white';
  }
}
clearButton.addEventListener('click', clearBoard);
