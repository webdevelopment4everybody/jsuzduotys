
// 5. Gauti tik skaicius kurie eina po kablelio
// Nepamirstame, kad skaicius gali pasikeisti
// Isvedime nurodome kiek skaiciu yra po kablelio
//ir kokie tai skaiciai
//Jeigu skaicius yra be kablelio
//atspausdiname i console "Skaiciu po kablelio nera"

// let skaicius = 122.2937424;
// if(typeof (skaicius) !== 'number'){ 
//     console.log('ERROR')
// } 
// if(Number.isInteger(skaicius)){
//     console.log("Skaiciu po kablelio nera");
// }else{
// skaicius = skaicius.toString();
// skaicius1 = skaicius.indexOf('.');
// let skaic_po_kab = skaicius.substr(skaicius1+1, skaicius.length);
// let kiekis = skaic_po_kab.length;
// console.log('Skaiciu po kablelio: '+kiekis+ ', jie yra: ' +skaic_po_kab);
// }
// Rezultatas console:
// Skaiciu po kablelio: 9, jie yra: 235346547


// 6. Gauname dideli skaiciu, reikia i console
//atspausdinti visus lyginius skaicius

let ilgasSkaicius = 1827563928374812;
ilgasSkaicius = ilgasSkaicius.toString();
console.log(ilgasSkaicius.length);
ilgasSkaicius = ilgasSkaicius.split('');
console.log(ilgasSkaicius);


for(let i=0; i<ilgasSkaicius.length; i++){
    if(ilgasSkaicius[i] % 2 ===0){
        console.log(ilgasSkaicius[i]);
    }
}



// let skaicius = 13.743534654;
// let iStringa = skaicius.toString();
// let ilgis = iStringa.length;
// let randameTaska = iStringa.indexOf(".");
// let a = iStringa.split('');
// console.log(a);
// let join = '';

// poTasko = randameTaska+1;

// for (let i = randameTaska+1; i <= ilgis-1; i++){
//     console.log(a[i]);
//     join = i.join('');
    

// }


// Rezultatas console:
// 8
// 2
// 6
// 2
// 8
// 4
// 8
// 2
// 3. Parasyti koda, kuris atspausdintu zemiau matoma sablona (OPTIONAL)
// Su ciklu, galima be IF
// * 1
// * * 1 2
// * * * 1 2 3 
// * * * * 1 2 3 4 
// * * * * *

let a = '*';
let stars = '';
for(let i=1; i<=5; i++){
    stars +=a;
    console.log(stars); 
}


// *=*+1
// i=1->*
// i=2 ->**
// 1. Parasyti koda, kuris apdorotu masyva ir atspausdintu N elementu
// A var. Spausdina N elementu is masyvo pradzios
// B var. Spausdina N elementu is masyvo galo

let skaiciuMasyvas = [1,6,7,2,4,63,23,4,6,74,2];

// 2. Turime tekstine eilute su srifto dydziais. Reikia paimti kiekviena dydi ir sukonvertuoti i REM, kiekvieno skaiciavimo rezultata atspausdinti atskiroje eiluteje.

//Var. A zingsniai:
//Pasidaryti masyva is teksto
//Pasirasyti cikla, masyvo apdorojimui
//Iteracijos metu atlikti skaiciavimus
//Iteracijos metu atspausdinti skaiciavimu rezultata

let fontSizes = "14,16,18,30,1,2,3,4,5";
//b var (sunkiau) :
//let fontSizes = "14px, 16px, 18px, 30px";

//Rezultatas matomas console:
//14px = 0.875rem
//16px = 1rem
//18px = 1.125rem
//30px = 1.875rem

// 3. Sudeti bruksnelius tarp gretimai esanciu skaiciu jeigu jie yra lyginiai
// Rezultatas:
// 34-6592-8370-0-2-2-0
// B var. padaryti kad tarp 0 nebutu bruksneliu

let bigNumber = 34659283700220;

// 4. Surasti ir atspausdinti ilgiausia zodi tekstineje eiluteje
// Reikes kintamojo ilgiausio zodzio saugojimui
// Rezultatas:
// Ilgiausias zodis yra: tekstineje

let sentence = "Surasti ilgiausia zodi tekstineje eiluteje";

// 5. Atspausdinti kiekviena tekstines eilutes zodi,
// kuris yra ilgesnis uz pries tai buvusi zodi.
// Pirmas tekstines eilutes zodis nespausdinamas.
// I kableli nekreipiame demesio, skaiciuojame kaip zodzio raide

// Rezultatas:
// Zodziai:
// kuris
// ilgesnis
// pries
// buvusi

let sentence2 = "Atspausdinti kiekviena tekstines eilutes zodi, kuris yra ilgesnis uz pries tai buvusi zodi";

// 6. Pakeitimas 5 uzduociai
// Atspausdinti zodzius ne atskirose eilutese o kaip sakini,
// atskiriant kableliu ir tarpu
// Rezultatas:
// kuris, ilgesnis, pries, buvusi

let sentence3 = "Atspausdinti kiekviena tekstines eilutes zodi, kuris yra ilgesnis uz pries tai buvusi zodi";


// 7. Surasti ir atspausdinti trumpiausia zodi tekstineje eiluteje
// Rezultatas:
// Trumpiausias zodis yra: zodi

let sentence4 = "Surasti trumpiausia zodi tekstineje eiluteje";

// 8. (NE PATS SUNKIAUSIAS!) Parasyti cikla kuris padarytu masyvo kopija. t.y. ciklas turi paimti kiekviena elementa is esamo masyvo ir priskirti juos kito masyvo raktui

let originalArray = ["a", "b", "c", "d"];