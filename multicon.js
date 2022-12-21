
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
    var user_input = window.prompt("Which conversion ? (euros/celsius/litres)");
    return user_input ; 
}

function askvalue(){
    var value = window.prompt("Which value do you want to convert");
    return value ;
}

while (askcontinue()) {
    var conver = askconv();
    var value = askvalue ();
    var message = "the result is ";
 
    
    if (message == "euros") {
        resultmess += chfToeuros(Number(value)).toString();
    } 
    else if (message == "litres") {
        resultmess += litterTogallon(Number(value)).toString();
    } 
    else if (message == "celsius") {
        resultmess += celsiusTf(Number(value)).toString();
    } 
    else {
        message = "Sorry ! I cant do this conversion..."
    }
    console.log(message);

}
