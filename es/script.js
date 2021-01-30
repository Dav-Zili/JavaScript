function inserisciIntero(text,x1,x2)
{
    let x
    do{
        x = +prompt(text,"")
    }while (x < x1 || x > x2)
    return x
}