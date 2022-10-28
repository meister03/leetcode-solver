// https://leetcode.com/problems/remove-nth-node-from-end-of-list/
/**
 * Removes the number on the given array position
 */
export function removeNumberFromArrayWithPosition(nums: number[], position: number): number[] {
    const newArray = [];
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i] as number;
        if (i !== position) {
            newArray.push(num);
        }
    }
    return newArray;
}