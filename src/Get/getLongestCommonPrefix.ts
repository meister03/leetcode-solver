// https://leetcode.com/problems/longest-common-prefix/
/**
 * Returns the longest common prefix in an array of strings
 */
export function getLongestCommonPrefix(givenStrings: string[]): string {
    let longestCommonPrefix = '';
    // @ts-ignore
    for (let i = 0; i < givenStrings[0].length; i++) {
        // @ts-ignore
        const character = givenStrings[0][i] as string;
        for (let j = 1; j < givenStrings.length; j++) {
            // @ts-ignore
            if (givenStrings[j][i] !== character) {
                return longestCommonPrefix;
            }
        }
        longestCommonPrefix += character;
    }
    return longestCommonPrefix;
}