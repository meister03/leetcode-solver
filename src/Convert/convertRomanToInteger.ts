// https://leetcode.com/problems/roman-to-integer/
/**
 * Converts a given roman number to an integer
 */
export function convertRomanToInteger(givenRomanNumber: string): number {
    const romanNumberToIntegerMap = new Map<string, number>();
    romanNumberToIntegerMap.set('I', 1);
    romanNumberToIntegerMap.set('V', 5);
    romanNumberToIntegerMap.set('X', 10);
    romanNumberToIntegerMap.set('L', 50);
    romanNumberToIntegerMap.set('C', 100);
    romanNumberToIntegerMap.set('D', 500);
    romanNumberToIntegerMap.set('M', 1000);
    let integer = 0;
    let previousInteger = 0;
    for (let i = givenRomanNumber.length - 1; i >= 0; i--) {
        const romanNumber = givenRomanNumber[i] as string;
        const currentInteger = romanNumberToIntegerMap.get(romanNumber) as number;
        if (currentInteger < previousInteger) {
            integer -= currentInteger;
        } else {
            integer += currentInteger;
        }
        previousInteger = currentInteger;
    }
    return integer;
}