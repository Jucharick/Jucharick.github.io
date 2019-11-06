function getRandom(anyArray) {
  var randomNumber = Math.floor(Math.random ()* anyArray.length);
  var randomElement = anyArray[randomNumber];
  return randomElement;
}
var pageSettings = {
  red: 200,
  green: 200,
  blue: 200,
  background: ['https://pictures.s3.yandex.net/background.jpg', 'https://pictures.s3.yandex.net/cover-color.jpg', 'https://pictures.s3.yandex.net/cover-grid.jpg', 'https://pictures.s3.yandex.net/cover-typo.jpg', 'https://pictures.s3.yandex.net/cover-wall.jpg'],
}
var bgColor = 'rgb(' + pageSettings.red + ',' + pageSettings.green + ',' + pageSettings.blue + ')'
document.body.style.backgroundColor = bgColor;
var header = document.getElementById('main-header');
header.style.backgroundImage = getRandom(pageSettings.background);
var i=0;
var cards = document.getElementsByClassName('card');
window.addEventListener('scroll', function () {
  var scrollY = window.pageYOffset
  var bgValue = 'rgb('+ (pageSettings.red - scrollY / 8) + ', ' + (pageSettings.green - scrollY / 8) + ', ' + (pageSettings.blue - scrollY / 8) + ')'
  document.body.style.backgroundColor = bgValue;
  for ( var c=0; c<cards.length; c++) {
    var card = cards[c];
    card.style.color = 'rgb(' + (pageSettings.red * 0 + scrollY / 8) + ',' + (pageSettings.green * 0 + scrollY / 8) + ',' + (pageSettings.blue * 0 + scrollY / 8) + ')'
  }
});