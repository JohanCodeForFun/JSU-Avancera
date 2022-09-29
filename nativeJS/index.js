let number;

while (isNaN(number) || number === null) {
    number = prompt("Skriv in nummer");
    if (!isNaN(number) && number !== null) {
        for (let i = 1; i <= number; i++) {
            alert("Ruta: " + i + " av " + number)
        }
    }
}