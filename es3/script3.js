function askNumber(text)
{
    let n = +prompt(text,"")
    return n
}
function maxNumber(x1,x2)
{
    let max = x1 > x2 ? x1 : x2
    return max  
}
function minNumber(x1,x2)
{
    let min = x1 < x2 ? x1 : x2
    return min
}
function sum(x1,x2)
{
    let somma = 0
    for(let i = minNumber(x1,x2); i <= maxNumber(x1,x2); i++)
    {
        somma += i
    }
    return somma
}
function product(x1,x2)
{
    let prodotto = 1
    for(let i = minNumber(x1,x2); i <= maxNumber(x1,x2); i++)
    {
        prodotto = i%2 === 0 && i !== 0 ? prodotto*i : prodotto
    }
    return prodotto
}
function multiple(x1,x2,x3)
{
    for(let i = minNumber(x1,x2); i <= maxNumber(x1,x2); i++)
    {
        if(i%x3 === 0)
        {
            alert(i)
        }
    }
}