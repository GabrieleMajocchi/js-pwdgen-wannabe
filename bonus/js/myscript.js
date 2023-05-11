
let Name;
let Surname;
let FavCol;



function AskData(){
    Name = prompt("Inserisci il tuo nome:", "Es. Gabriele");
    Surname = prompt("Inserisci il tuo cognome:", "Es. Majocchi");
    FavCol = prompt("Inserisci il tuo colore preferito:", "Es. Arancione");
    document.getElementById("advpass").innerHTML = "La tua potentissima password è:";
    document.getElementById("suggpass").innerText = Name + Surname + FavCol + "23";
    document.getElementById("gen").innerHTML = "Genera nuovamente";
    document.getElementById("HiddenImg").style.display = "block";
}