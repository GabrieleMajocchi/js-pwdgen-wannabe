
let Name;
let Surname;
let FavCol;

Name = prompt("Inserisci il tuo nome:", "Es. Gabriele");
Surname = prompt("Inserisci il tuo cognome:", "Es. Majocchi");
FavCol = prompt("Inserisci il tuo colore preferito:", "Es. Arancione");

document.getElementById("password").innerText = Name + Surname + FavCol + "23";