"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertStringToInteger = void 0;
// https://leetcode.com/problems/string-to-integer-atoi/
/**
 * Converts a given string to an integer, by removing all non-numeric characters
 */
function convertStringToInteger(givenString) {
    const isNegative = givenString[0] === '-';
    let numberString = '';
    for (let i = 0; i < givenString.length; i++) {
        const character = givenString[i];
        if (isNumeric(character)) {
            numberString += character;
        }
    }
    return isNegative ? -Number(numberString) : Number(numberString);
}
exports.convertStringToInteger = convertStringToInteger;
function isNumeric(character) {
    return character >= '0' && character <= '9';
}
