const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const ground = new Image(); // Создание объекта
ground.src = "img/p.png"; // поле

const foodImg = new Image(); // Создание объекта
foodImg.src = "img/c.png"; // морковка

var box = 32; //ширина или высота клетки

var score = 0; //переменная, которая будет зранить счет

var food = {
  x: Math.floor((Math.random() * 17 + 1)) * box, // на грунте 17 ячеек по горизонтали
  // Math.floor - округляет до целого числа
  // Math.random - выбирает рандомно число от 0 до 1, именно поэтомы мы умножаем на кол-во ячеек и прибавляем 1 / 3 (пропускаем одну/три клетку по х/y)
  y: Math.floor((Math.random() * 15 + 3)) * box, // на грунте 15 ячеек по вертекали
};

var snake = [];
snake [0] = {
  x: 9 * box,
  y: 10 * box
};

document.addEventListener("keydown", direction); //обработчик события (на всеь документ)
var dir;
function direction(event) {
  if(event.keyCode == 37 && dir != "right")
    dir = "left";
  else if(event.keyCode == 38 && dir != "down")
    dir = "up";
  else if(event.keyCode == 39 && dir != "left")
    dir = "right";
  else if(event.keyCode == 40 && dir != "up")
    dir = "down";
}

function eatTail(head, arr) {
  for (var i = 0; i < arr.length; i++) {
    if(head.x == arr[i].x && head.y == arr[i].y)
      clearInterval(game);
  }
}

function drowGame() {
  ctx.drawImage(ground, 0, 0);

  ctx.drawImage(foodImg, food.x, food.y);

  for(var i = 0; i < snake.length; i++) {
    ctx.fillStyle = i == 0 ? "green" : "#ADFF2F";
    ctx.fillRect(snake[i].x, snake[i].y, box, box);
  }

  ctx.fillStyle = "white"; // цвет шрифта
  ctx.font = "40px Arial"; // шрифт
  ctx.fillText(score, box * 2.5, box * 1.5,);

  var snakeX = snake[0].x;
  var snakeY = snake[0].y;

  if(snakeX == food.x && snakeY == food.y) {
    score++;
    food = {
    x: Math.floor((Math.random() * 17 + 1)) * box, 
    y: Math.floor((Math.random() * 15 + 3)) * box, 
    };
  } else {
    snake.pop();
  }

  // snake.pop(); // pop - удаляет последний элемент в массиве

if(snakeX < box || snakeX > box * 17
    || snakeY < 3 * box || snakeY > box * 17)
    clearInterval(game);

  if(dir == "left") snakeX -= box;
  if(dir == "right") snakeX += box;
  if(dir == "up") snakeY -= box;
  if(dir == "down") snakeY += box;

  var newHead = {
    x: snakeX,
    y: snakeY
  };

  eatTail(newHead, snake);
  snake.unshift(newHead); // unshift - помещает в начало массива
}

var game = setInterval(drowGame, 300); // Вызов функции какждые 300 милисекунд 