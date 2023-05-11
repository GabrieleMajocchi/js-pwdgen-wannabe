
// ----Bonus 1----

// let Name;
// let Surname;
// let FavCol;

// function AskData(){
//     Name = prompt("Inserisci il tuo nome:", "Es. Gabriele");
//     Surname = prompt("Inserisci il tuo cognome:", "Es. Majocchi");
//     FavCol = prompt("Inserisci il tuo colore preferito:", "Es. Arancione");
//     document.getElementById("advpass").innerHTML = "La tua potentissima password è:";
//     document.getElementById("suggpass").innerText = Name + Surname + FavCol + "23";
//     document.getElementById("gen").innerHTML = "Genera nuovamente";
//     document.getElementById("HiddenImg").style.display = "block";
// }


// ----Bonus 2----

function AskData(){
    let result = Math.random().toString(36).substring(2,12);
    document.getElementById("advpass").innerHTML = "La tua potentissima password è:";
    document.getElementById("suggpass").innerText = result;
    document.getElementById("gen").innerHTML = "Genera nuovamente";
    document.getElementById("HiddenImg").style.display = "block";
}