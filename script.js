console.log("Pilote démarre");
const nomProjet = "Achat immobilier";
let nbTaches = 4;
let projetTermine = false;
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

function estTermirnee(statut) {
  if (statut === "Terminé") {
    return true;
  } else {
    return false;
  }
}
console.log(estTermirnee("Terminé"));
console.log(estTermirnee("En cours"));
