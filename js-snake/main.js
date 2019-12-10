(function(width, height, length, current, dx, dy, x, y, hasFood, newEl){     
    
document.body.onkeydown = function(e){
    dx = (e.keyCode - 38) % 2, 
    dy = (e.keyCode - 39) % 2; // перемещение по координатам при нажатии клавиш
};
    
var timer = setInterval(function () {
    x = (x + dx) < 0 ? width - 1 : (x + dx) % width; 
    y = (y + dy) < 0 ? height - 1 : (y + dy) % height;
    
    newEl = document.getElementsByClassName(y + '_' + x)[0]
    if(newEl.className.indexOf('s') > 0) {
      clearInterval(timer), alert('Game Over! Score: ' + length) // завершении игры при попадении в часть змейки
    };
    if(newEl.className.indexOf('f') > 0) {
      newEl.className = newEl.className.replace(' f', ''), length++, hasFood = false;
    }
    newEl.className += ' s', newEl.setAttribute('data-n', current++); // увеличении змейки при съедании бонуса
    for(var i = 0, min = Infinity, item, items = document.getElementsByClassName('s'), len = items.length; i < len && len > length; i++)
      if(+items[i].getAttribute('data-n') < min)
        min = +items[i].getAttribute('data-n'), item = items[i];
    if(!!item) item.className = item.className.replace(' s', '');
    for(var fItem, fX, fY; !hasFood; fX = Math.round(Math.random() * 10 % width), fY = Math.round(Math.random() * 10 % height)) // появление бонуса
      if(!!fX && !!fY && document.getElementsByClassName(fY + '_' + fX)[0].className.indexOf('s') < 0)
        hasFood = true, document.getElementsByClassName(fY + '_' + fX)[0].className += ' f';
}, 700); // скорость движения змейки
})(10, 10, 5, 1, 1, 0, 0, 0, false, null);