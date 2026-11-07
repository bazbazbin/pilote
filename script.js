console.log("Pilote démarre");
const nomProjet = "Achat immobilier";
let nbTaches = 4;
let projetTermine = false;

console.log(nomProjet, nbTaches, projetTermine);

nbTaches = nbTaches + 1;
console.log("Après ajout :", nbTaches);
console.log(typeof projetTermine);

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

const taches = [
  {
    id: 1,
    titre: "Négociation du prix",
    priorite: "haute",
    statut: "en-cours",
    echeance: "2026-11-15",
  },
  {
    id: 2,
    titre: "analyse du bien",
    priorite: "moyenne",
    statut: "termine",
    echeance: "2026-10-15",
  },
  {
    id: 3,
    titre: "Revue des conseils",
    priorite: "basse",
    statut: "a-faire",
    echeance: "2026-11-01",
  },
];

function libellePriorite(tache) {
  if (tache.priorite === "haute") {
    return "Urgent";
  } else if (tache.priorite === "moyenne") {
    return "Normal";
  } else {
    return "Plus tard";
  }
}
console.log(libellePriorite(taches[0]));
console.log(libellePriorite(taches[1]));

function estEnRetard(tache) {
  return joursRestants(tache.echeance) < 0 && tache.statut !== "termine";
}

for (const tache of taches) {
  console.log("Tâche :", tache.titre, "| En retard ? :", estEnRetard(tache));
}
console.log(taches.length);

console.log(taches.filter((tache) => tache.priorite === "haute"));
console.log(taches.find((tache) => tache.id === 3));
console.log(taches.map((tache) => tache.titre));

function compterParStatut(statut) {
  return taches.filter((tache) => tache.statut === statut).length;
}
console.log(
  "A faire :",
  compterParStatut("a-faire"),
  "| En cours:",
  compterParStatut("en-cours"),
  "| Terminé :",
  compterParStatut("termine"),
);
