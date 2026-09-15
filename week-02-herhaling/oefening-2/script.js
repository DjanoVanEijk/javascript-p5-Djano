// ============================================================
//  Week 2 — Oefening 2: Basis DOM-manipulatie
// ============================================================

// 1. Selecteer #title met querySelector en verander de tekst
//    naar iets anders met textContent

document.querySelector("#title").textContent = "Nieuwe tekst";

// 2. Voeg een click event listener toe aan #toggle-btn.
//    Bij klik wisselt de tekstkleur van #message tussen rood en zwart.
//    Gebruik een variabele om bij te houden of de tekst nu rood is.
function wisselkleur(){
    if(document.querySelector("#message").style.color === "black"){
    document.querySelector("#message").style.color = "red";
    }
    else{
    document.querySelector("#message").style.color = "black";
    }
}

document.querySelector("#toggle-btn").addEventListener("click", wisselkleur);


// 3. Voeg een click event listener toe aan #greet-btn.
//    Lees de waarde van #name-input uit en toon 'Hallo, <naam>!' in #greeting.

function greet() {
    const input = document.querySelector("#name-input").value;
    document.querySelector("#greeting").textContent = "Hallo, " + input + "!";
}
document.querySelector("#greet-btn").addEventListener("click", greet);