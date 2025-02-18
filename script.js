
let doska = [];
let player1 = createPlayer('Alex'); //Вместо 'Alex' сделать document.querySelector.(...).value;
let player2 = createPlayer('Katya'); //Вместо 'Katya' сделать document.querySelector.(...).value;
let gameSpace = [doska, player1, player2];

console.log(player1);
console.log(player2);


for (i = 0; i < 9; i++) {
    doska.push(i);
}

function createPlayer(name) {
    return {
        name: name,
        move: []
    };
} 

let player = player1;

function makeMove(index) {
    delete doska[index];
    player.move.push(index);
    player = (player == player1) ? player2 : player1;
}














 






