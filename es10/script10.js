function askNumber(min, max){
    let i = somma = pari = 0
    let number 
    let tempNumber = min
    while(i < 10){
        do {
            number = +prompt("Dimmi un numero tra " + min + " e " + max , "")
        }while (number < min || number > max)

        pari = number%2 === 0 ? pari + 1 : pari
        tempNumber = tempNumber < number ? number : tempNumber
        somma += number
        i++
    }
    alert("La media dei numeri è " + somma/10)
    alert("La percentuale dei pari è " + (pari/10)*100 + " %")
    alert("Il numero più grande è " + tempNumber)
}