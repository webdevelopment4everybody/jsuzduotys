"use strict";

function skaitmenuKiekisSkaiciuje( num, correct){
    let count=0;
    if(typeof(num) !== 'number'){
        return console.error('ERROR: skaicius netinkamo tipo');
    }
    if( !isFinite(num)){
        return console.error('ERROR: skaicius netinkamos reiksmes');
    }
   //skaiciuojame
   const skaiciusTekstu= '' +num;
    count=skaiciusTekstu.length;
    //jei randame minusa, tai 
    //count --
    if(num < 0 ){
        count--;
    }
    if(num % 1 !==0){
        count--;
    }

    return console.log(count, '->', correct);
}
skaitmenuKiekisSkaiciuje (5,1 ) ;
skaitmenuKiekisSkaiciuje( 781,3 );
skaitmenuKiekisSkaiciuje( 37060123456 );
skaitmenuKiekisSkaiciuje( true );
skaitmenuKiekisSkaiciuje( 'asd' );
skaitmenuKiekisSkaiciuje( NaN );
skaitmenuKiekisSkaiciuje(Infinity);
skaitmenuKiekisSkaiciuje(null);
skaitmenuKiekisSkaiciuje(undefined);
skaitmenuKiekisSkaiciuje(3,65667);
skaitmenuKiekisSkaiciuje([]);
skaitmenuKiekisSkaiciuje([1,2,4,7]);
skaitmenuKiekisSkaiciuje(-1987);



