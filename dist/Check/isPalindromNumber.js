"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPalindromNumber = void 0;
// https://leetcode.com/problems/palindrome-number/
/**
 * Returns true if the given number is a palindrome
 */
function isPalindromNumber(givenNumber) {
    const isNegative = givenNumber < 0;
    const reversedNumber = Number(Math.abs(givenNumber).toString().split('').reverse().join(''));
    return !isNegative && givenNumber === reversedNumber;
}
exports.isPalindromNumber = isPalindromNumber;
