console.log("Pilote démarre");
const nomProjet = "Achat immobilier";
let nbTaches = 4;
let projetTermine = false;
const aujourdhui = new Date();
const fin = new Date("2026-11-20");
fin - aujourdhui;
console.log(nomProjet, nbTaches, projetTermine);

nbTaches = nbTaches + 1;
console.log("Après ajout :", nbTaches);
console.log(typeof projetTermine);

function libellePriorite(priorite) {
  if (priorite === "haute") {
    return "Urgent";
  } else if (priorite === "moyenne") {
    return "Normal";
  } else {
    return "Plus tard";
  }
}
console.log(libellePriorite("haute"));
console.log(libellePriorite("basse"));

function estTerminee(statut) {
  return statut === "termine";
}

console.log(estTerminee("Terminé"));
console.log(estTerminee("En cours"));

function joursRestants(echeance) {
  return Math.ceil((fin - aujourdhui) / 1000 / 60 / 60 / 24);
}

console.log(joursRestants(echeance));
