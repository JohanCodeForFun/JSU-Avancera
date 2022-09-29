let input = prompt("skriv ett tal för att dra av moms");
let moms = input * 0.8;
if (!isNaN(input) && input > 0) {
    alert(moms);
}
else if (input === !null) {
}
else {
    if (isNaN(input)) alert("Du skrev inte in ett nummer.");
}

//alt lösning
// const n = prompt()

// if (n !== null) {
//     if (isNaN(n)) {
//         alert("Du skrev...")
//     } else {
//         alert(n * 0.8)
//     };
// };