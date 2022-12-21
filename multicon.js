
function chfToeuros(chf){
    return (chf * 1.13);
}
function celsiusTf(celsius){
    return (celsius * 9 / 5) + 32 ;
}
function litterTogallon(littre) {
    return (littre / 3.785) ;    
}


function askcontinue() {
    var userInput = window.prompt("Do you want to do a conversion:yes/no");
    if (userInput == "yes"){
        return true ;
    }
    else {
        return false ;
     
    }   
}
function askconv(){
    var useri = window.prompt("Which conversion ? (euros/celsius/litres)");
    return useri ; 
}

function askvalue(){
    var value = window.prompt("Which value do you want to convert");
    return value ;
}

while (askcontinue()) {
    var conver = askconv();
    var value = askvalue ();
    var resultmess = "the result is ";
 
    
    if (conver == "euros") {
        resultmess += chfToeuros(Number(value)).toString();
    } 
    else if (conver == "litres") {
        resultmess += litterTogallon(Number(value)).toString();
    } 
    else if (conver == "celsius") {
        resultmess += celsiusTf(Number(value)).toString();
    } 
    else {
        resultmess = "Sorry ! I cant do this conversion..."
    }
    console.log(resultmess);

}
