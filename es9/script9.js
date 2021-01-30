function getRandomInt(min,max){
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
}
function askNumber()
{
    let x
    do{
        x = +prompt("Dimmi un valore tra 0 e 1000")
    }while(x < 0 || x > 1000)
    return x
}
function checkNumber(x)
{
    let number
    do
    {
        number = askNumber()
        if(number === x)
        {
            alert("Hai indovinato")
            break
        }else if(number > x)
        {
            alert("Il tuo numero è troppo alto")
        }else
        {
            alert("Il tuo numero è troppo basso")
        }
    }while(number !== x)
}