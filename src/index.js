/* Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador, 
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro Se vitórias for entre 11 e 20 = Bronze Se vitórias for entre 21 e 50 = Prata 
Se vitórias for entre 51 e 80 = Ouro Se vitórias for entre 81 e 90 = Diamante Se vitórias for entre 91 e 100= Lendário 
Se vitórias for maior ou igual a 101 = Imortal.
Ao final deve se exibir uma mensagem: "O Herói tem de saldo de {saldoVitorias} está no nível de {nivel}" */

const teclado = require("prompt-sync")();

console.log("WELCOME TO RANK CALCULATOR! [by Pietro Prata]\n")
console.log("Here, you're gonna know how many matches you will need to atchive an specific rank!\n")

while (true) {
    let heroName
    let finalRate = undefined

    function winLoseRate(victory, defeat) {
        finalRate = victory - defeat
        return finalRate
    }

    console.log("Tell me, what's your name, hero? ")
    heroName = teclado()

    let victories;
    let defeats;

    do {
        victories = parseInt(teclado("How many victories do you have? "));
        defeats = parseInt(teclado("And how many defeats do you have? "));
    } while (isNaN(victories) || isNaN(defeats));

    winLoseRate(victories, defeats);

    if (finalRate < 0) {
        console.log("Invalid XP!")
    }
    else if (finalRate <= 10) {
        console.log("The Hero who's name is " + heroName + " has a balance of " + finalRate + " and his rank is **IRON**!\n")
    }
    else if ((finalRate >= 11) && (finalRate <= 20)) {
        console.log("The Hero who's name is " + heroName + " has a balance of " + finalRate + " and his rank is **BRONZE**!\n")
    }
    else if ((finalRate >= 21) && (finalRate <= 50)) {
        console.log("The Hero who's name is " + heroName + " has a balance of " + finalRate + " and his rank is **SILVER*!\n")
    }
    else if ((finalRate >= 51) && (finalRate <= 70)) {
        console.log("The Hero who's name is " + heroName + " has a balance of " + finalRate + " and his rank is **GOLD**!\n")
    }
    else if ((finalRate >= 71) && (finalRate <= 80)) {
        console.log("The Hero who's name is " + heroName + " has a balance of " + finalRate + "winrate and his rank is **DIAMOND**!\n")
    }
    else if ((finalRate >= 81) && (finalRate <= 90)) {
        console.log("The Hero who's name is " + heroName + " has a balance of " + finalRate + " and his rank is **PLATTINUM**!\n")
    }
    else if ((finalRate >= 91) && (finalRate <= 100)) {
        console.log("The Hero who's name is " + heroName + " has a balance of " + finalRate + " and his rank is **LEGENDARY**!\n")
    }
    else {
        console.log("The Hero who's name is " + heroName + " has a balance of " + finalRate + " and his rank is **IMMORTAL**!\n")
    }

    console.log("Thanks for checking in and good luck on your journey!")
    console.log("\nPress enter to continue.");
    teclado();
    console.clear();
}