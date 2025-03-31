let a = "";
let b = "";
let operateur = "";
let resultat = "";

const addition = (a, b) => a + b;
const soustraction = (a, b) => a - b;
const multiplication = (a, b) => a * b;
const division = (a, b) => a / b;

function calculerDirect() {
  if (!a || !b || !operateur) {
    return;
  }

  let nbrA = parseFloat(a);
  let nbrB = parseFloat(b);

  switch (operateur) {
    case "+":
      resultat = addition(nbrA, nbrB);
      break;
    case "-":
      resultat = soustraction(nbrA, nbrB);
      break;
    case "*":
      resultat = multiplication(nbrA, nbrB);
      break;
    case "/":
      if (tempB === 0) {
        resultat = "Erreur";
        break;
      }
      resultat = division(nbrA, nbrB);
      break;
  }

  if (typeof resultat === "number") {
    resultat = Number(resultat.toFixed(4));
  }

  document.getElementById("resultat").value = resultat;
}

function ajouter(valeur) {
  if (valeur === "+" || valeur === "-" || valeur === "*" || valeur === "/") {
    if (a && b && operateur) {
      calculerDirect();
      a = resultat.toString();
      b = "";
    }
    operateur = valeur;
    document.getElementById("resultat-direct").value = "";
    document.getElementById("resultat-direct").value += " " + valeur + " ";
  } else {
    if (!operateur) {
      a += valeur;
    } else {
      b += valeur;
    }
    document.getElementById("resultat-direct").value += valeur;
    if (a && b && operateur) {
      calculerDirect();
    }
  }
}

function calculer() {
  if (!a || !b || !operateur) {
    document.getElementById("resultat").value = "Erreur";
    return;
  }

  a = parseFloat(a);
  b = parseFloat(b);

  switch (operateur) {
    case "+":
      resultat = addition(a, b);
      break;
    case "-":
      resultat = soustraction(a, b);
      break;
    case "*":
      resultat = multiplication(a, b);
      break;
    case "/":
      if (b === 0) {
        resultat = "Erreur";
        break;
      }
      resultat = division(a, b);
      break;
    default:
      resultat = "Erreur";
  }

  if (typeof resultat === "number") {
    resultat = Number(resultat.toFixed(4));
  }

  document.getElementById("resultat").value = resultat;
  a = resultat.toString();
  b = "";
  operateur = "";
}

function effacerDirect() {
  document.getElementById("resultat-direct").value = "";
  // a = "";
  // b = "";
  // operateur = "";
  // resultat = "";
}

function effacer() {
  document.getElementById("resultat").value = "";
  document.getElementById("resultat-direct").value = "";
  a = "";
  b = "";
  operateur = "";
  resultat = "";
}
