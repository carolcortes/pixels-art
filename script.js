console.log('Olá, mundo!');
const colorPallet = document.getElementById('color-palette');
const rgbColors = ['rgb(69, 41, 102)', 'rgb(152, 32, 101)', 'rgb(217, 91, 91)',
  'rgb(255, 180, 110)', 'rgb(229, 230, 151)', 'rgb(81, 133, 104)'];

for (let count = 0; count < 6; count += 1) {
  const colorDiv = document.createElement('div');
  colorDiv.className = 'color';
  colorPallet.appendChild(colorDiv);
}

const colorDiv = document.getElementsByClassName('color');
for (let index = 0; index < colorDiv.length; index += 1) {
  colorDiv[index].style.backgroundColor = rgbColors[index];
}

