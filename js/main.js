// Lunghezza del tragitto
const lunghezzaTratta = parseInt(prompt('Quanti km vuoi percorrere?'));
document.getElementById('km-lenght').innerHTML += lunghezzaTratta;
const prezzoParziale = lunghezzaTratta * 0.21;
let prezzoTotale;

// Età passeggero
const etàPasseggero = parseInt(prompt('Quanti anni hai?'));
document.getElementById('passenger-age').innerHTML += etàPasseggero;

if (etàPasseggero < 18){
        prezzoTotale = prezzoParziale - prezzoParziale * 0.2;
} else if (etàPasseggero > 65){
        prezzoTotale = prezzoParziale - prezzoParziale * 0.4;
} else {
        prezzoTotale = prezzoParziale;
}


document.getElementById('finalprice').innerHTML = ` Il prezzo del biglietto è: ${prezzoTotale}&euro;`;