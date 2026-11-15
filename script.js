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
function double(n) {
  console.log(n * 2);
}
const r = double(5);
console.log(r);

const li = document.createElement("li");
li.classList.add("tache");
li.textContent = "Test DOM";
document.querySelector(".colonne ul").appendChild(li);

function creerCarte(tache) {
  // 1. Fabriquer les 4 éléments
  const carte = document.createElement("li");
  const entete = document.createElement("div");
  const badge = document.createElement("span");
  const echeance = document.createElement("span");

  // 2. Leur donner classes et textes
  carte.classList.add("tache");
  entete.classList.add("tache-entete");
  badge.classList.add("badge", tache.priorite); // "badge haute"
  badge.textContent = libellePriorite(tache); // "Urgent"
  echeance.classList.add("echeance");
  echeance.textContent = tache.echeance; // "2026-11-15"

  // 3. Emboîter, du plus petit au plus grand
  entete.appendChild(badge);
  entete.appendChild(echeance);
  carte.appendChild(entete);
  carte.append(tache.titre); // le titre, après l'en-tête

  return carte;
}

function afficherTableau() {
  // 1. Vider les 3 colonnes
  document.getElementById("a-faire").textContent = "";
  document.getElementById("en-cours").textContent = "";
  document.getElementById("termine").textContent = "";

  // 2. Poser chaque tâche dans la colonne qui porte son statut
  for (const tache of taches) {
    const colonne = document.getElementById(tache.statut);
    colonne.appendChild(creerCarte(tache));
  }
}

afficherTableau();
