// https://leetcode.com/problems/string-to-integer-atoi/
/**
 * Converts a given string to an integer, by removing all non-numeric characters 
 */
export function convertStringToInteger(givenString: string): number {
    const isNegative = givenString[0] === '-';
    let numberString = '';
    for (let i = 0; i < givenString.length; i++) {
        const character = givenString[i] as string;
        if (isNumeric(character)) {
            numberString += character;
        }
    }
    return isNegative ? -Number(numberString) : Number(numberString);
}

function isNumeric(character: string) {
    return character >= '0' && character <= '9';
}