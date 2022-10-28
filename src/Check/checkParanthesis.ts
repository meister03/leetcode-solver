// https://leetcode.com/problems/valid-parentheses/
/**
 * Returns true if the given string has valid paranthesis
 */
export function checkParanthesis(givenString: string): boolean {
    const paranthesisMap = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    const paranthesisStack: string[] = [];
    for (let i = 0; i < givenString.length; i++) {
        const character = givenString[i] as string;
        // @ts-ignore
        if (paranthesisMap[character]) {
            // @ts-ignore
            paranthesisStack.push(paranthesisMap[character]);
        } else if (character !== paranthesisStack.pop()) {
            return false;
        }
    }
    return paranthesisStack.length === 0;
}