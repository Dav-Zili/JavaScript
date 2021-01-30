function inserisciIntero(text,x1,x2)
{
    let x
    do{
        x = +prompt(text,"")
    }while (x < x1 || x > x2)
    return x
}
function askNumbers(n,minimo,massimo)
{
    let numero, pari = 0, somma = 0
    for (let i = 0; i < n; i++){
        do{
            numero = +prompt("Dimmi un numero compreso tra i primi due","")           
        }while (numero < minimo || numero > massimo)
        pari = evenNumber(numero) ? pari+1 : pari
        somma = sumNumber(minimo,massimo,numero) ? somma + numero : somma
    }
    alert("Hai ben " + pari + " numeri pari")
    alert("La somma dei numeri è " + somma)

}
function evenNumber(numero)
{
    if(numero % 2 == 0) {return true}
}
function sumNumber(min,max,numero)
{
    if(numero > ((min+max)/2)){return true}
}