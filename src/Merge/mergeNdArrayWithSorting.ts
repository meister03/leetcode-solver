// https://leetcode.com/problems/merge-k-sorted-lists/
/**
 * Sorts an n-dimensional array
 */
export function mergeNdArrayWithSorting(givenArray: number[][]): number[] {
    return givenArray.reduce((acc, curr) => [...acc, ...curr], []).sort((a, b) => a - b);
}