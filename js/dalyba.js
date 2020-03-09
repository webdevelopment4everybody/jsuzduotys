"use strict";

function dalyba(a,b){
    if(typeof (a) !== 'number' || typeof (b) !== 'number'){
        return 'ERROR:netinkamas kintamojo tipas'
    }
    if(b === 0 ){
        return 'ERROR:dalyba is nulio negalima'

    }
    if(!isFinite(a) || !isFinite(b)){
        return 'ERROR: skaicius netinkamos reiksmes'
    }
    let reiksme = a/b;
    return reiksme;
}

console.log(dalyba(10,5));//2
console.log(dalyba(true, 3));
console.log(dalyba('',5));

console.log(dalyba(NaN, 3));
console.log(dalyba(10, [1,4,7]));
console.log(dalyba(4, 0));
console.log(dalyba('labas', 0));
console.log(dalyba(76, 3726887461776017871487467));
console.log(dalyba(10.5,5));
console.log(dalyba(-90, -3));
console.log(dalyba(-Infinity,5));
console.log(dalyba(100, -Infinity));
console.log(dalyba(100, 'undefined'));
console.log(dalyba(100, null));
console.log(dalyba(null, -Infinity));



