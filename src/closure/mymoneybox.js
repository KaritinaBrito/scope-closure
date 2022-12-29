// function monexBox(coins) {
//     let saveCoins = 0;
//     saveCoins += coins;
//     console.log(`Your moneyBox is: $${saveCoins}`);
// }

// monexBox(6);
// monexBox(5);

//Utilizando Closures

function monexBox() {
    let saveCoins = 0;
    function countCoins(coins) {
        saveCoins += coins;
        console.log(`Your moneyBox is: $${saveCoins}`)
    }
    return countCoins;
}

const moneyJulie = monexBox();
moneyJulie(15);
moneyJulie(16);
const moneyKaren = monexBox();
moneyKaren(22);
moneyKaren(16);
moneyKaren(11);