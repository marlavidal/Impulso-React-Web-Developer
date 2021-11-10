
// solução 01

function verificaPalindromo(string){
    if(!string) return;
    console.log(string === string.split('').reverse().join(''));
}
verificaPalindromo('cat');


// solução 02
// omo, 012, abba, 0123

function verificaPalindromo2(string){
    if(!string) return;
    if (!string.lenght) return;
    
    for(let i = 0; i < string.lenght / 2; i++) {
        if(string[i] !== string [string.lenght -1 - i]) {
            return console.log(false);
     }
   }
   return console.log(true);
}
verificaPalindromo2('asa');


console.log (verificaPalindromo("gato"));




function varificaPalindromo2(string) {
	if (!string) return;
	if (!string.length) return;

	for (var i = 0; i < string.length / 2; i++) {
		if (string[i] !== string[string.length - 1 - i]) {
			return console.log(false);
		}
	}
	return console.log(true);
}

varificaPalindromo2('asa');
