// https://leetcode.com/problems/longest-substring-without-repeating-characters/
/**
 * Returns the longest substring without repeating characters
 */
export function getLongestSubstringWithoutCharacterRepeat(givenString: string): string {
    let longestSubstring = '';
    for (let i = 0; i < givenString.length; i++) {
        let substring = givenString[i] as string;
        for (let j = i + 1; j < givenString.length; j++) {
            const character = givenString[j] as string;
            if (substring.indexOf(character) !== -1) {
                break;
            }
            substring += character;
        }
        if (substring.length > longestSubstring.length) {
            longestSubstring = substring;
        }
    }
    return longestSubstring;
}