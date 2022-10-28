// https://leetcode.com/problems/regular-expression-matching/
/**
 * Returns true if the given string matches the given regular expression
 */
export function checkIfInputMatchesString(givenString: string, regularExpression: string): boolean {
    const isMatch = (input: string, pattern: string): boolean => {
        if (pattern.length === 0) {
            return input.length === 0;
        }
        const firstMatch = (input.length > 0) && (pattern[0] === input[0] || pattern[0] === '.');
        if (pattern.length >= 2 && pattern[1] === '*') {
            return isMatch(input, pattern.substring(2)) || (firstMatch && isMatch(input.substring(1), pattern));
        } else {
            return firstMatch && isMatch(input.substring(1), pattern.substring(1));
        }
    };
    return isMatch(givenString, regularExpression);
}