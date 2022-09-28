let input = prompt("skriv ett tal för att dra av moms");
let moms = input * 0.8;

// funktion, om input är ett nummer, räkna ut moms.
if (!isNaN(input) && input > 0) {
    alert(moms);
}

// om användaren stänger rutan utan input, avbrytt.
else if (input === !null) {
}

// om användaren anger annat än nummer, ge beskrivande fel meddelande.
else {
    if (isNaN(input)) alert("Du skrev inte in ett nummer.");
}
