const fetch = require('node-fetch');

function es1() {
	fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json()).then((data) => {
		console.log('Esercizio 1');
		data.filter((e) => e.userId === 4).forEach((e) => console.log(e.id));
	});
}
function es2() {
	fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json()).then((data) => {
		console.log('Esercizio 2');
		data.filter((e) => e.userId % 2 !== 0).forEach((e) => console.log(e.id));
	});
}
function es3() {
	fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json()).then((data) => {
		console.log('Esercizio 3');
		data
			.filter((e) => {
				str = e.title.replace(/(^\s*)|(\s*$)/gi, '');
				str = str.replace(/[ ]{2,}/gi, ' ');
				str = str.replace(/\n /, '\n');
				if (str.split(' ').length % 2 === 0) {
					return e.id;
				}
			})
			.forEach((e) => console.log(e.id));
	});
}
function es4() {
	fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json()).then((data) => {
		console.log('Esercizio 4');
		data
			.filter((e) => {
				titolo = e.body.replace(/\s+/g, '');
				if (titolo.length % 3 === 0) {
					return titolo;
				}
			})
			.forEach((e) => console.log(e.id));
	});
}
function es5() {
	fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json()).then((data) => {
		console.log('Esercizio 5');
		console.log(
			data.filter((e) => e.title[0] === 's').reduce((acc, e) => {
				acc += e.body;
				return acc;
			}, '')
		);
	});
}
es1();
es2();
es3();
es4();
es5();
