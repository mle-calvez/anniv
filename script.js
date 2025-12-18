const params = new URLSearchParams(window.location.search);
const id = params.get("id");


const questionEl = document.getElementById("question");
const messageEl = document.getElementById("message");


if (!etapes[id]) {
questionEl.innerText = "Étape invalide";
throw new Error("Étape inconnue");
}


questionEl.innerText = etapes[id].question;


function verifier() {
const input = document.getElementById("reponse");
const reponseUser = input.value.toLowerCase().trim();
const bonneReponse = etapes[id].reponse.toLowerCase();


if (reponseUser === bonneReponse) {
if (etapes[id].suivante) {
window.location.href = `etape.html?id=${etapes[id].suivante}`;
} else {
questionEl.innerText = "🎉 Félicitations !";
messageEl.innerText = "Tu as terminé le jeu.";
input.style.display = "none";
}
} else {
messageEl.innerText = "❌ Mauvaise réponse, réessaie.";
}
}