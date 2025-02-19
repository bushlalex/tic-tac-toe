
let doska = []; //массив который содержит клетки
let player1 = createPlayer('Alex'); //Вместо 'Alex' сделать document.querySelector.(...).value;
let player2 = createPlayer('Katya'); //Вместо 'Katya' сделать document.querySelector.(...).value;

for (i = 1; i < 10; i++) {
    doska.push(i);
} //количество клеток в массиве doska

function createPlayer(name) {
    return {
        name,
        move: []
    };
} //создание обьекта с помощью фабричной функции 

let player = player1; //присвоение первого хода первому игроку


function makeMove(index) {   //функция делающая ход (нажатие на клетку)
    doska = doska.filter(item => item !== index);  //убирает клетку из массива doska
    if ((player1.move).includes(index)||(player2.move).includes(index)) {
        console.log("Эта клетка занята!");
        return;
    }
    else {
        player.move.push(index);
        (player.move).sort();
    }      //добавляет в массив обьекта игрока клетку, проверяет, занята ли клетка + сортируем сразу, чтобы потом проверить на выигрышную комбинацию
    player = (player == player1) ? player2 : player1; //реализует передачу хода другому игроку

    if (player == player1) {
        return player2;
    }
    else {
        return player1;
    } //возвращает обьект игрока, который только что играл
}

function checkResult() {
    let currentplayer = makeMove(5); //вместо 2 поставить documentqueryselector
           
    if (currentplayer == undefined) {
        return;
    }
    else if  (comparison()) {
        console.log(`Истинный гений на ${currentplayer.name} выиграл`);
    }
    else if (doska.length == 0) {
        console.log('Ничья!');
        return;
    }
    else {
        let numberlol = Math.random();
        if (numberlol < 0.33) {
        console.log(`Какой же ход от гения на ${currentplayer.name}!`);
        }
        else if (numberlol > 0.66) {
            console.log(`${currentplayer.name} гений?`);
        }
        else {
            console.log(`Очень умный мув от ${currentplayer.name}!`);
        }
    };
}

function comparison() {
    let winCombination = [
        123,
        456,
        789,
        147,
        159,
        357,
        258,
        369
    ];
    let z =  player1.move.join('');
    let w = player2.move.join('');
    if ((winCombination.map((item) => item == z).includes(true))||(winCombination.map((item) => item == w).includes(true))) {
        return true;
    }  
    else {
        return false;
    }
}
























 






