// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.


const kmNumber = parseFloat ( prompt ('How many km would you like to travel?')) ; 
const agePassenger = parseInt ( prompt ('How old are you?')) ;

const priceGas = 0.21 ; 

let kmForPrice = (kmNumber * priceGas);

const ageMinor = agePassenger < 18;
const discountMinor =  20 ;
const ageOld = agePassenger >= 65;
const discountOld = 60;

if (ageMinor === true ) {
    kmForPrice = kmForPrice - ( kmForPrice * discountMinor / 100);
}
else if (ageOld === true){
    kmForPrice = kmForPrice - ( kmForPrice * discountOld / 100);
}

console.log(kmForPrice.toFixed(2)); 

document.getElementById ('output') .innerHTML = 'the price is:' + kmForPrice.toFixed(2);