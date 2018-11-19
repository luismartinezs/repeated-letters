'use strict';


// PHASE 1 & 2

let myName = 'LUIS'.split('');

console.log('Phase 1 and 2');
for (let i=0; i<myName.length; i++) {

    let item = myName[i];

    if ( isANumber(item) ) {
        console.log(`People's names don't contain numbers!`);
        continue;
    }

    let letterType = isVowel(item) ? 'VOWEL' : 'CONSONANT';

    console.log(`${item} is ${letterType}`);

}


// PHASE 3
console.log('Phase 3');
console.log(letterCounter(myName));


// PHASE 4

let myFamilyName = 'MARTINEZ'.split('');

console.log('Phase 4');
console.log( makeFullName( myName, myFamilyName ) );

/*
@ param {String} str 
@ return {Boolean} true if str is a vowel
*/
function isVowel(str) {
    return str.match(/[aeiou]/i);
}

/*
@ param {String} str
@ return {Boolean} true if str can be converted to a number
*/
function isANumber(str) {
    return !Number.isNaN( Number( str ) );
}

/*
@ param {Array} arr of strings
@ return {Obj} object with keys String and values number of times String is repeated in arr
*/
function letterCounter(arr) {
    let lettersCount = {};

    let newArr = [].concat(arr);
    let sortedArr = newArr.sort();
    let currentElem = '';

    for (let i=0; i<sortedArr.length; i++) {
        if ( sortedArr[i] !== currentElem ) {
            currentElem = sortedArr[i];
            lettersCount[currentElem] = 1;
        } else {
            lettersCount[currentElem]++;
        }
    }

    return lettersCount;
}

/*
@ param {Array} firstArr array of strings
@ param {Array} secondArr array of strings
@ return {Array} array concatenation of firstArr and secondArr, with element ' ' in between
*/
function makeFullName(firstArr, secondArr) {
    let fullName = [];
    fullName.push(...firstArr);
    fullName.push(' ');
    fullName.push(...secondArr);

    return fullName;
}