let inserisciPari = () => {
    let x 
    do{
        x = +prompt("Dimmi un valore","")
    }while(x % 2 !== 0)
    alert(x)
}