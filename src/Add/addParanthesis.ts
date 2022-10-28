// https://leetcode.com/problems/generate-parentheses/
/**
 * Returns the string surrounded by paranthesis
 */
export function addParanthesis(givenString: string, paranthesis?: string): string {
    return `${paranthesis || '('}${givenString}${paranthesis || ')'}`;
}