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

function estTerminee(statut) {
  return statut === "termine";
}

console.log(estTerminee("termine"));
console.log(estTerminee("en-cours"));

function joursRestants(echeance) {
  const dateEcheance = new Date(echeance); // la date reçue en paramètre
  const ecart = dateEcheance - new Date(); // en millisecondes, écart entre échéance et date d'aujourd'hui
  return Math.ceil(ecart / (1000 * 60 * 60 * 24));
}

console.log(joursRestants("2026-11-30"));
console.log(joursRestants("2026-11-04"));
console.log(joursRestants("2026-10-28"));

const tache1 = {
  titre: "Négociation du prix",
  statut: "en-cours",
  echeance: "2026-11-15",
};

const tache2 = {
  titre: "analyse du bien",
  statut: "termine",
  echeance: "2026-10-15",
};

const tache3 = {
  titre: "Revue des conseils",
  statut: "a-faire",
  echeance: "2026-11-01",
};

console.log(tache1.titre);
console.log(tache1.echeance);

console.log(tache2.titre);
console.log(tache2.echeance);

console.log(tache3.titre);
console.log(tache3.echeance);

function estEnRetard(tache) {
  return joursRestants(tache.echeance) < 0 && tache.statut !== "termine";
}

console.log(estEnRetard(tache1));
console.log(estEnRetard(tache2));
console.log(estEnRetard(tache3));
