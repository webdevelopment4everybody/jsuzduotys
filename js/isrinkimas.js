"use strict";

function isrinktiRaides(text, letter){

    if(typeof (text) !== 'string'){
        return 'ERROR: Pirmasis kintamasis yra netinkamo tipo.'
    } 
    if(typeof(letter) !== 'number'){
        return 'Antrasis kintamasis yra netinkamo tipo.'
        
    }
    
    if( text.length <letter){
        return 'Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.'
    }
    if(!isFinite (letter) ){
        return 'ERROR: antra reiksme turi buti sveikas skaicius'
    }
    if(letter % 1 !==0 ){
        return 'ERROR: antra reiksme turi buti skaicius be liekanos'
    }
    if(letter === 0 ){
        return 'ERROR: antra reiksme negali buti nulis'
    }
    console.log('------------');
    console.log(text,letter);
    
    let answer = '';


    if(letter >0){
        for(let i= letter-1; i <text.length; i+=letter){
            const raide = text[i];
            answer += raide;
        }

    }
    if(letter<0){
        for(let i= text.length+letter; i>=0; i+=letter){
            const raide = text[i];
            answer += raide;
        }
    }
    return answer;
}
// isrinktiRaides( 'nsjncjibsndsjcndincehdnhcijwdnbcjisncjinjncjdincijbvibfvhiebvhifbvhebvivbhevbihbeihbefvibeiwdqdwkmcwkofvmjn', 2 );
// isrinktiRaides( 'abcdefghijkl', -1 );
// isrinktiRaides( 'abc', 0 );
console.log(isrinktiRaides( 'abcdefg', 2));
// isrinktiRaides( 1561, 2 );
// isrinktiRaides( "", 2 );
// isrinktiRaides( '156', '2' );
// isrinktiRaides( "abc", Infinity );
// isrinktiRaides( "abc", NaN );
// isrinktiRaides( "abcdjbshbsivd", 3.17 );
