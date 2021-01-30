/* Librerie da importare */
const fetch = require('node-fetch');
const fs = require('fs');
const PromptSync = require('prompt-sync');
const prompt = require('prompt-sync')();

//funzioni

//variabili
let i = 1;
//pulisco il file
fs.writeFileSync('./output.txt', '', (err) => {});

//chiedo all'utente la parola
let parolaUtente = prompt('Dimmi una parola da cercare nel titolo ');

//fetch
fetch('https://jsonplaceholder.typicode.com/posts')
	.then((response) => response.json())
	.then((data) => {
		data.forEach((e) => {
			if (e.title.includes(parolaUtente)) {
				let word_position = e.title.indexOf(parolaUtente);
				let frase = '';
				for (let s = 0; s < e.title.length; s++) {
					frase =
						s >= word_position && s < word_position + parolaUtente.length // condizione
							? frase + e.title[s].toUpperCase()
							: frase + e.title[s];
					if (s > word_position + parolaUtente.length) {
						break;
					}
				}
				fs.appendFileSync('./output.txt', i + ' ' + frase + '\n', (err) => {
					if (err) {
						throw err;
					}
				});
				i++;
			}
		});
	})
	.catch((error) => console.log(error));
