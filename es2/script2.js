function askNumber(){
    let n = +prompt("Dimmi un numero","")
    return n
}
function doDelta(a,b,c)
{
    let delta = b**2-(4*a*c)
    alert(delta)
    doSolve(a,b,c,delta)

}
function doSolve(a,b,c,x)
{
    let x1,x2
    x1 = ( -b + Math.sqrt(x) ) / 2*a
    x2 = ( -b - Math.sqrt(x) ) / 2*a
    compare(x1,x2)
}
function compare(x1,x2)
{
    if(x1 === x2)
    {
        alert("Soluzioni coincidenti")
    }else if(isNaN(x1))
    {
        alert("Soluzioni complesse")
    }else
    {
        alert("Soluzioni distinte")
    }
}