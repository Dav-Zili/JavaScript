function askK()
{
    let k
    do
    {
        k = +prompt("Dimmi un numero compreso tra 0 e 1000")
    }while(k < 0 || k > 1000)
    return k
}
function findDivisori(x)
{
    let divisori = 0
    for(let i = 1; i <= x; i++)
    {
        divisori = x%i === 0 ? divisori + 1 : divisori
    }
    alert("Il numero di divisori positivi è " + divisori)
}