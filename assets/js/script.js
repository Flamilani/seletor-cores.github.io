window.addEventListener('load', function () {
  seletorColor();
});

function seletorColor() {
  var red = document.querySelector('#red').value;
  var green = document.querySelector('#green').value;
  var blue = document.querySelector('#blue').value;

  var cor = `rgb(${red}, ${green}, ${blue})`;

  document.querySelector('#box').style.background = cor;
  document.querySelector('#code').style.color = cor;
  document.querySelector('#code').innerHTML = `code ${cor}`;

  document.querySelector('#valueRed').value = red;
  document.querySelector('#valueGreen').value = green;
  document.querySelector('#valueBlue').value = blue;

  var cinza = '#ddd';
  document.querySelector('#title-box').style.background = cinza;

  setTimeout('seletorColor()', 10);
}
