// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.


const kmNumber = parseInt ( prompt ('How many km would you like to travel?')) ; 
const agePassenger = parseInt ( prompt ('How old are you?')) ;

const priceGas = 0.21 ; 

const kmForPrice = (kmNumber * priceGas);

const ageMinor = agePassenger < 18;
const discountMinor = kmForPrice * 20 / 100;
const ageOld = agePassenger > 65;
const discountOld = 60;

if (ageMinor) {
    const discountTotMinor = parseInt (kmForPrice - ( kmForPrice * discountMinor / 100));
}

document.getElementById ('output') .innerHTML = 'the price is:' + kmNumber * priceGas + 'euro' ;