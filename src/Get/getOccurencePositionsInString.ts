// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/
/**
 * Returns the position of an occurence of a substring in a string
 */
export function getOccurencePositionsInString(givenString: string, substring: string): number[] {
    const occurencePositions: number[] = [];
    let position = givenString.indexOf(substring);
    while (position !== -1) {
        occurencePositions.push(position);
        position = givenString.indexOf(substring, position + 1);
    }
    return occurencePositions;
}