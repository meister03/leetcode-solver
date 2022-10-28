// https://leetcode.com/problems/palindrome-number/
/**
 * Returns true if the given number is a palindrome
 */
export function isPalindromNumber(givenNumber: number): boolean {
    const isNegative = givenNumber < 0;
    const reversedNumber = Number(Math.abs(givenNumber).toString().split('').reverse().join(''));
    return !isNegative && givenNumber === reversedNumber;
}