// Create input
let userInput = document.createElement("input");
userInput.setAttribute("type", "text");
userInput.setAttribute("value", "");
userInput.setAttribute("placeholder", "AAAA");
document.querySelector("main").appendChild(userInput);

// Create button
let submitButton = document.createElement("button");
submitButton.setAttribute("OnClick", "ageCalc(userInput)");
submitButton.appendChild(document.createTextNode("Ta-daa!"));
document.querySelector("main").appendChild(submitButton);

/**
 * Calcul de l'âge à partir de la date de naissance
 * Format: AAAA
 * @param {int} a
 * @return {int}  
 */
function ageCalc(a) {
    let val = a.value;
    a = Number(val);
    let b = new Date().getFullYear();
    console.log(b - a + " ans");
}

// Create input
let userInputFull = document.createElement("input");
userInputFull.setAttribute("type", "text");
userInputFull.setAttribute("value", "");
userInputFull.setAttribute("placeholder", "JJ-MM-AAAA");
document.querySelector("main").appendChild(userInputFull);

// Create button
let submitButtonFull = document.createElement("button");
submitButtonFull.setAttribute("OnClick", "ageCalcFull(userInputFull)");
submitButtonFull.appendChild(document.createTextNode("Ta-daa!"));
document.querySelector("main").appendChild(submitButtonFull);

/**
 * Calcul l'âge à partir de la date de naissance
 * Format: JJ-MM-AAAA
 * @param {string} a
 * @return {int}
 */

function ageCalcFull(a) {
    let val = a.value;
    val = val.split("-");
    val = val[2];
    a = Number(val);
    let b = new Date().getFullYear();
    if (isNaN(a)) {
        console.log("Veuillez entrer correctement votre date de naissance. Format: JJ-MM-AAAA");
    }
    else {
        console.log(b - a + " ans");
    }
}
