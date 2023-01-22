let objectArray = [
  { id: 1, name: "Object1" },
  { id: 2, name: "Object2" },
  { id: 3, name: "Object3" },
];

// A)   Skapa ett nytt objekt som har följande properties
//      id: 4 och name: "Object4" och lägg in det objektet
//      sist i objectArray.
//      För att lägga in objektet i arrayen ska en inbyggd array-funktion användas.

console.log(objectArray);

let numberArray = [8, 3, 54, 12, 76, 44, 23, 1, -5];
// B)   Filtrera numberArray med en inbyggd arrayfunktion.
//      Filtreringen ska göras så om ett element när det multipliceras med 2
//      är större än 40 så ska det behållas.
//      Resultatet av filtreringen ska vara: [54, 76, 44, 23].

console.log(myFilteredArray);

// C)   Använd en inbyggd arrayfunktion för att 'mappa' numberArray så att
//      den nya arrayen som skapas av mappningen har multiplicerat
//      värdet på alla element med 2.
//      Resultatet ska se ut såhär: [16, 6, 108, 24, 152, 88, 46, 2, -10]

console.log(myMappedArray);

// D)   Skriv en loop som loggar i konsolen namnet på alla objekt i objectArray.
