const prompt = require('prompt-sync')()

let atkOne = {
    nom: "Frappe Rapide",
    puissance: -10,
    precision: 2,
}
let atkTwo = {
    nom: "Soin Léger",
    puissance: 15,
    precision: 3,
}
let atkThree = {
    nom: "Coup Puissant",
    puissance: -20,
    precision: 3,
}
let atkFour = {
    nom: "Frappe Dévastattrice",
    puissance: -30,
    precision: 4,
}
let heroOne = {
    nom: "Guerrier du Feu",
    pv: 50,
    atks: [atkOne, atkTwo, atkThree, atkFour]
}
let heroTwo = {
    nom: "Sombre Lutin",
    pv: 50,
    atks: [atkOne, atkTwo, atkThree, atkFour]
}

console.log("\n" + "Le combat contre le " + heroOne.nom + " et le " + heroTwo.nom + " est sur le point de commencer !\n");
console.log("Préparez vous au combat !\n");
console.log("L'initiative est au " + heroOne.nom + "!!\n");
tourParTour();

function tourParTour(attaquant, defenseur) {
    while (heroOne.pv >= 0 && heroTwo.pv >= 0) {

        let attaque = choix()
        atk(attaque, heroOne, heroTwo)

        console.log("\n    ------------ " + heroTwo.nom + " se prépare a riposté ! ------------\n");

        attaque = heroTwo.atks[random(0, heroTwo.atks.length - 1)]
        console.log(heroTwo.nom + " a choisit " + attaque.nom);

        atk(attaque, heroTwo, heroOne)
        console.log("Le " + heroOne.nom + " dispose de: " + heroOne.pv + " pv. Le " + heroTwo.nom + " dispose de: " + heroTwo.pv + " pv.");
    
        if (heroOne.pv <= 0) {
            console.log("\nLe" + heroTwo.nom + " sort vaiqueur de son combat acharné contre le " + heroOne.nom + " !!!!!!");
        } else if (heroTwo.pv <= 0) {
            console.log("\nLe" + heroOne.nom + " sort vaiqueur de son combat acharné contre le " + heroTwo.nom + " !!!!!!");
        }
        console.log("\n               -----------   TOUR SUIVANT   -------------\n");
    }
}
function choix() {
    console.log(heroOne.nom + ", Quelle attaque choisissez vous?\n");
    console.log("1: " + atkOne.nom + "\n" + "2: " + atkTwo.nom + "\n" + "3: " + atkThree.nom + "\n" + "4: " + atkFour.nom + "\n");
    let choice = Number(prompt("Quel est votre choix: "))
    while (choice != 1 && choice != 2 && choice != 3 && choice != 4) {
        choice = Number(prompt("Quelle attaque 1, 2, 3 ou  4: "))
    }
    return heroOne.atks[choice - 1]

}

function atk(attaque, attaquant, defensseur) {
    if (random(1, attaque.precision) == attaque.precision) {
        console.log("\n" + "L'attaque a réussit !!!!");
        if (attaque.puissance > 0) {
            attaquant.pv += attaque.puissance
            console.log("\n" + attaquant.nom + " s'est soigné de " + attaque.puissance + " pv , ses pv sont maintenant de " + attaquant.pv + "\n");
            return attaquant.pv
        } else {
            defensseur.pv += attaque.puissance
            console.log("\nLes pv du " + defensseur.nom + " tombe de " + attaque.puissance + " pv , ses pv sont maintenant de " + defensseur.pv + "\n");
            return defensseur.pv
        }
    } else {
        console.log("\n" + "L'attaque a échoué !!!!\n");

    }
    return "Les points de vie de " + attaquant.nom + " sont de " + attaquant.pv
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
