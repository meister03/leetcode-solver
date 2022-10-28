// https://leetcode.com/problems/integer-to-roman/
/**
* Converts a given integer to a roman numeral
*/
export const romanNumerals = new Map<number, string>([
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

export function convertIntegerToRoman(givenNumber: number): string {
    let romanNumeral = '';
    for (let [number, numeral] of romanNumerals) {
        while (givenNumber >= number) {
            romanNumeral += numeral;
            givenNumber -= number;
        }
    }
    return romanNumeral;
}