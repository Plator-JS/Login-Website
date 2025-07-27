const register = document.getElementById("register");
const myButton2 = document.getElementById("myButton2");
// Warten bis die Seite geladen ist
 document.addEventListener("DOMContentLoaded", function () {
const form1 = document.getElementById("form1");
const form2 = document.getElementById("form2");
const registerLink = document.getElementById("register");

// Anfangszustand: nur Login-Form zeigen
form2.style.display = "none";

// Beim Klick auf "Registrieren"
registerLink.addEventListener("click", function (e) {
    e.preventDefault(); // Verhindert Seitenwechsel
    form1.style.display = "none";
    form2.style.display = "block";
    });
});