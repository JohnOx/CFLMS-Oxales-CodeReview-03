
//script for calculation button//

function calcInsurance () {

var yourName = document.getElementById("yourName").value;
var age = parseInt(document.getElementById("age").value);
var selectCountry = document.getElementById("country").value;
var horsepower = parseInt(document.getElementById("horsepower").value);

    if (selectCountry == "Austria") {
        var insResult = Math.floor((horsepower * 100/age)+50);
    } else if (selectCountry == "Hungary") {
        var insResult = Math.floor((horsepower * 120/age)+100);
    } else if (selectCountry == "Greece") {
        var insResult = Math.floor((horsepower * 150/(age+3))+50);
    } else 
        return "Not valid!";
    

calcDisplay.innerHTML = yourName  + ", "  + "your insurance costs " + insResult + " €.";
}

document.getElementById('calcExecute').addEventListener("click",calcInsurance,false);