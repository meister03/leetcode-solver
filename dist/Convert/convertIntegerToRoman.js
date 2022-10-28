"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertIntegerToRoman = exports.romanNumerals = void 0;
// https://leetcode.com/problems/integer-to-roman/
/**
* Converts a given integer to a roman numeral
*/
exports.romanNumerals = new Map([
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I'],
]);
function convertIntegerToRoman(givenNumber) {
    let romanNumeral = '';
    for (let [number, numeral] of exports.romanNumerals) {
        while (givenNumber >= number) {
            romanNumeral += numeral;
            givenNumber -= number;
        }
    }
    return romanNumeral;
}
exports.convertIntegerToRoman = convertIntegerToRoman;
