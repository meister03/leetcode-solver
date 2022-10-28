// https://leetcode.com/problems/reverse-integer/
/**
 * Returns the reversed number (0's are removed)
 */
export function reverseInteger(givenNumber: number): number {
    const isNegative = givenNumber < 0;
    const reversedNumber = Number(Math.abs(givenNumber).toString().split('').reverse().join(''));
    return isNegative ? -reversedNumber : reversedNumber;
}