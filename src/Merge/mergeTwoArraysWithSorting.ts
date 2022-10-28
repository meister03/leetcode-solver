// https://leetcode.com/problems/merge-two-sorted-lists/
/**
 * Returns the merged list of two sorted arrays
 */
export function mergeTwoArraysWithSorting(l1: number[], l2: number[]): number[] {
    return [...l1, ...l2].sort((a, b) => a - b);
}