
function findDivisori(x)
{
    let divisori = 0
    for(let i = 1; i <= x; i++)
    {
        divisori = x%i === 0 ? divisori + 1 : divisori
    }
    return divisori
}
function isPrimo(x)
{
    let divisori = findDivisori(x)
    if(divisori > 2)
    {
        return false
    }else{
        return true
    }
}function askNumber(min,max){
    let n = +prompt("Dimmi quanti valori vuoi","")
    let i = dispari = primi = 0
    while(i < n){
        do {
            number = +prompt("Dimmi un numero tra " + min + " e " + max , "")
        }while (number < min || number > max)

        dispari = number%2 !== 0 ? dispari +1 : dispari
        primi = isPrimo(number) ? primi + 1 : primi
        i++ 
    }
    alert("I numeri dispari sono " + dispari)
    alert("I numeri primi sono " + primi)
    
}
