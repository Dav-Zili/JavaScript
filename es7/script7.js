function askNumber()
{
    let x = +prompt("Dimmi un numero","")
    if(x < 0)
    {
        x *= -1
    }
    return x
}
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
        alert("Il tuo numero non è primo")

    }else{
        alert("Il tuo numero è primo")
    }
}
