let userName = prompt("Ange användar namn");
let password = prompt("ange lösenord");

if (userName === "alice" && password === "secret") {
    alert("Inloggad!");
} else {
    alert("Fel användarnamn eller lösenord!");
}