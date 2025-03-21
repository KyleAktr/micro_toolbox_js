let a = "";
let b = "";
let operateur = "";
let resultat = "";

const addition = (a, b) => a + b;
const soustraction = (a, b) => a - b;
const multiplication = (a, b) => a * b;
const division = (a, b) => a / b;

function ajouter(valeur) {
  if (valeur === "+" || valeur === "-" || valeur === "*" || valeur === "/") {
    operateur = valeur;
    document.getElementById("resultat").value += " " + valeur + " ";
  } else {
    if (!operateur) {
      a += valeur;
    } else {
      b += valeur;
    }
    document.getElementById("resultat").value += valeur;
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

  document.getElementById("resultat").value = resultat;
  a = resultat.toString();
  b = "";
  operateur = "";
}

function effacer() {
  document.getElementById("resultat").value = "";
  a = "";
  b = "";
  operateur = "";
  resultat = "";
}
