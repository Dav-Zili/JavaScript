function findDivisori(x)
{
    let j = 0
    let divisori = []
    for(let i = 1; i < x; i++)
    {
        if(x%i === 0){
            divisori[j] = i
            j++
        }
    }
    return divisori
}
function isPerfect(x){
    let lista = findDivisori(x)
    let somma = 0
    for (let i = 0; i < lista.length; i++) {
        somma += lista[i] 
    }
    if(x === somma){
        return true
    }
}
function askNumber(){
    let number
    do{
        do{
            number = +prompt("Dimmi un numero positivo", "")            
        }while(number < 0)
        if(isPerfect(number)){
            alert("Il numero è perfetto")
        }     
    }while(number != 0)

}