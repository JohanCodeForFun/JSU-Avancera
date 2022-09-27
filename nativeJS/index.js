// Ta emot ett nummer (till exempel 1, 2 eller 3) med en prompt-dialogruta, och använd sedan switch i kombination med alert för att visa:

// ett, om “1” skrivs in
// två, om “2” skrivs in
// tre, om “3” skrivs in

// Övriga inmatningar ska visas oförändrade, som de skrevs in. Till exempel ska 13 (inte “tretton”) visas om “13” skrivs in.

let inputNumber = prompt("Skriv en siffra");

switch (inputNumber) {
    case '1':
        alert("ett");
        break
    case '2':
        alert("två");
        break
    case '3':
        alert("tre");
        break
    case '4':
        alert("fyra");
        break
    case '5':
        alert("fem");
        break
    case '6':
        alert("sex");
        break
    case '7':
        alert("sju");
        break
    case '8':
        alert("åtta");
        break
    case '9':
        alert("nio");
        break
    case '10':
        alert("tio");
        break
    case '11':
        alert("elva");
        break
    case '12':
        alert("tolv");
        break
        default:
        alert(inputNumber);
}