
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

// function AskData(){
//     let result = Math.random().toString(36).substring(2,12);
//     document.getElementById("advpass").innerHTML = "La tua potentissima password è:";
//     document.getElementById("suggpass").innerText = result;
//     document.getElementById("gen").innerHTML = "Genera nuovamente";
//     document.getElementById("HiddenImg").style.display = "block";
// }

// ----Bonus 3----

function generateRandom(min = 7, max = 17) {

    // find diff
    let difference = max - min;

    // generate random number 
    let rand = Math.random();

    // multiply with difference 
    rand = Math.floor( rand * difference);

    // add with min value 
    rand = rand + min;

    return rand;
}

let a;

function AskData(){
    a = generateRandom();
    let result = Math.random().toString(36).substring(2,a);
    document.getElementById("advpass").innerHTML = "La tua potentissima password è:";
    document.getElementById("suggpass").innerText = result;
    document.getElementById("gen").innerHTML = "Genera nuovamente";
    document.getElementById("HiddenImg").style.display = "block";
}