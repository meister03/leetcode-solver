"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTwoNumbersFromArrayOfDigits = void 0;
// https://leetcode.com/problems/add-two-numbers/
/**
 * Returns the sum of two numbers represented as arrays of digits
 * Does not reverse it as wanted in leet code
 */
function addTwoNumbersFromArrayOfDigits(digitArray1, digitArray2) {
    let addOverflow = 0;
    let finalResult = 0;
    let i = 0;
    while (digitArray1[i] !== undefined || digitArray2[i] !== undefined) {
        const sum = (digitArray1[i] || 0) + (digitArray2[i] || 0) + addOverflow;
        addOverflow = sum > 9 ? 1 : 0;
        // Add the remainder to the next digit
        finalResult = finalResult * 10 + sum % 10;
        i++;
    }
    if (addOverflow) {
        finalResult = finalResult * 10 + addOverflow;
    }
    return finalResult;
}
exports.addTwoNumbersFromArrayOfDigits = addTwoNumbersFromArrayOfDigits;
