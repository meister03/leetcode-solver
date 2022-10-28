// https://leetcode.com/problems/remove-duplicates-from-sorted-array/
/**
 * Removes the duplicates from the given array
 */
export function removeDuplicatesFromArray(nums: number[]): number {
    const map = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i] as number;
        if (!map.has(num)) {
            map.set(num, i);
        }
    }
    return map.size;
}