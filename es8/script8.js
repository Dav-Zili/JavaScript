function askVoti()
{
    let x,i = 0
    let voti = [0,0,0,0,0,0,0,0,0,0,0]
    do{
        x = +prompt("Dimmi un valore tra 1 e 10")
        voti[x] += 1
        i ++
    }while(x !== 0 )
    return voti
}
function findModa(lista)
{
    let max = Math.max(...lista)
    let moda = lista.indexOf(max)
    alert("La moda della lista è " + moda)
}
