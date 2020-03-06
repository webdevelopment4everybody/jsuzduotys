"use strict";

function didziausiasSkaiciusSarase( list, correct){
    let largest = -Infinity;
    if(!Array.isArray(list)){
        return console.error('ERROR:netinkamo tipo reiksme');

    }
    if(list.length === 0){
        return console.error('ERROR: tuscias masyvas');
    }
    for(let i=0; i<list.length; i++){
        const elementas = list[i];
        // console.log(elementas);
        if(typeof (elementas) !== 'number' || !isFinite(elementas)){
        continue;
        }
    
        if(elementas>largest){
            largest = elementas;
        }
    }
    if(largest === -Infinity) {
        return console.error('ERROR:masyve turi buti nors vienas normlaus skaicius');
        
    }


    return console.log(largest, '->', correct);

}
 didziausiasSkaiciusSarase( [ 1 ], 1 ) ;
 didziausiasSkaiciusSarase( [ 1, 2, 3 ], 3 ) ;
 didziausiasSkaiciusSarase( [ -5, 78, 14, 0, 18 ] ) ;
 didziausiasSkaiciusSarase( [ 69, 69, 69, 69, 66 ] ) ;
 didziausiasSkaiciusSarase( [ -1, -2, -3, -4, -5, -6, -7, -8 ] );
 didziausiasSkaiciusSarase( 'pomidoras' );
 didziausiasSkaiciusSarase( [] );
 didziausiasSkaiciusSarase( true);
 didziausiasSkaiciusSarase( null );
 didziausiasSkaiciusSarase( undefined);
 didziausiasSkaiciusSarase( [ 'asd', 1, 2, 3 ], 3 ) ;



// function test( exercise, answer ){
//     if(exercise === answer){
//         console.log('ok');
        
//     }else{
//         console.log(':(...');
//     }
// }
