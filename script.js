
let doska = []; //массив который содержит клетки
let player1 = createPlayer('Alex'); //Вместо 'Alex' сделать document.querySelector.(...).value;
let player2 = createPlayer('Katya'); //Вместо 'Katya' сделать document.querySelector.(...).value;

for (i = 1; i < 10; i++) {
    doska.push(i);
} //количество клеток в массиве doska

function createPlayer(name) {
    return {
        name: name,
        move: []
    };
} //создание обьекта с помощью фабричной функции

let player = player1; //присвоение первого хода первому игроку

function makeMove(index) {   //функция делающая ход (нажатие на клетку)
    doska = doska.filter(item => item !== index);  //убирает клетку из массива doska
    if ((player1.move).includes(index)||(player2.move).includes(index)) {
        console.log("Эта клетка занята!");
    }
    else {
        player.move.push(index);
    }      //добавляет в массив обьекта игрока клетку, проверяет, занята ли клетка
    player = (player == player1) ? player2 : player1; //реализует передачу хода другому игроку
}
















 






