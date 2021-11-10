let lines = gets().split('\n');

let line = lines.shift().split(" ");
let inicio = parseInt(line[0]);
let final = parseInt(line[1]);

if (inicio >= 0 && final <= 2) {
    print('nova');
} else if (final >= 3 && final <= 96) {
    print('minguante');
} else if (inicio >= 96 && final <= 3) {
    print('crescente');                 //complete o código nos espaços em branco
} else { 
    print('cheia');
}