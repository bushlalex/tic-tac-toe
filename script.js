var res = 1;
let selectName1 = document.querySelector('#player1');
let selectName2 = document.querySelector('#player2');
let безымянныйчел1 = document.querySelector('#player11');
let безымянныйчел2 = document.querySelector('#player22');
let reloadGame = document.querySelector('#reload');
let secretTumbler = 1;
let body = document.querySelector('#body');

let vivod = document.querySelector('#vivod'); 
let doska = []; //массив который содержит клетки
let player1 = createPlayer('безымянныйчел1'); //Вместо 'Alex' сделать document.querySelector.(...).value;
let player2 = createPlayer('безымянныйчел2'); //Вместо 'Katya' сделать document.querySelector.(...).value;

reloadGame.addEventListener('click',  () => location.reload(), document.body.style.backgroundColor = '#452f68')

selectName1.addEventListener('click', () => player1.name = document.querySelector('#player11').value
);

selectName2.addEventListener('click', () => player2.name = document.querySelector('#player22').value
);
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

function makeMove(index) {   
    secretTumbler = 1;    
    doska = doska.filter(item => item !== index);  //убирает клетку из массива doska
    if ((player1.move).includes(index)||(player2.move).includes(index)) {
        console.log("Эта клетка занята!");
        secretTumbler = 2;
    }
    else {
        player.move.push(index);
        (player.move).sort();
        player = (player == player1) ? player2 : player1;
    }      //добавляет в массив обьекта игрока клетку, проверяет, занята ли клетка + сортируем сразу, чтобы потом проверить на выигрышную комбинацию
     //реализует передачу хода другому игроку

    if (player == player1) {
        return player2;
    }
    else {
        return player1;
    } //возвращает обьект игрока, который только что играл
}

function checkResult(x) {
    
    let currentplayer = makeMove(x);
    
    if (checkWinner(currentplayer) == true) {
        vivod.textContent = `Гений на ${currentplayer.name} выиграл!`;
        res = 2;           
    }

    else {

    if (secretTumbler == 1) {
        
        

    if (currentplayer == undefined) {
        return;
    }
    
    else if (doska.length == 0) {
        vivod.textContent = 'Ничья!';
        return;
    }
    else {
        let numberlol = Math.random();
        if (numberlol < 0.33) {
            vivod.textContent = `Какой же ход от гения на ${currentplayer.name}!`;
        }
        else if (numberlol > 0.66) {
            vivod.textContent = `${currentplayer.name} гений?`;
        }
        else {
            vivod.textContent = `Очень умный мув от ${currentplayer.name}!`;
        }
    };
}};
}

let knopki = [];
for (i = 1; i < 10; i++) {
    knopki.push(document.querySelector(`#kletka${i}`));
}

for (let i = 0; i < knopki.length; i++) {
    knopki[i].addEventListener('click', function () {
        if (res == 1) {
        let x = i;
        knopki[i].style = 'color: black; background-color: rgb(34, 97, 105); font-size: 400%; font-weight: bold';
        knopki[i].textContent = x0(player)                     
        knopki[i].disabled = true;
        checkResult(x + 1);                     
    }
        else {
            return false;
        }
    })}

function x0(x) {
    vivod.style.transition = 'none'; 
    void vivod.offsetWidth.offsetWidth; 
    vivod.style.transition = 'color 2s ease-in-out'; 
    vivod.style.color = 'white'
    if (x == player1) {
        return 'X'
    }
   else {
    return 'o';
    }
}

let winCombination = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [1,5,9],
    [3,5,7],
    [2,5,8],
    [3,6,9]
]

function checkWinner(x) {
    const winCombination = [
        [1, 2, 3], 
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7], 
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9], 
        [3, 5, 7]
    ];
   
    for (let combination of winCombination) {
  
        if (combination.every(cell => x.move.includes(cell))) {
            return true; 
        }
    }
    return false; 
}

     
           
     

    



























 






