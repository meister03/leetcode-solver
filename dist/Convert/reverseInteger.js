"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reverseInteger = void 0;
// https://leetcode.com/problems/reverse-integer/
/**
 * Returns the reversed number (0's are removed)
 */
function reverseInteger(givenNumber) {
    const isNegative = givenNumber < 0;
    const reversedNumber = Number(Math.abs(givenNumber).toString().split('').reverse().join(''));
    return isNegative ? -reversedNumber : reversedNumber;
}
exports.reverseInteger = reverseInteger;
