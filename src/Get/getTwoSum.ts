// https://leetcode.com/problems/two-sum/
/**
 * Returns from the array the two number positions that sum up to the wished given result
 */
export function getTwoSum(nums: number[], target: number): number[] {
    const map = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i] as number;
        const subtraction = target - num;
        if (map.has(subtraction)) {
            return [map.get(subtraction)!, i];
        }
        map.set(num, i);
    }
    return [];
}