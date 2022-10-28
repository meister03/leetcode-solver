// @ts-nocheck
// https://leetcode.com/problems/next-permutation/
/**
* Returns the next permutation of the given array
*/
export function getNextPermutation(nums: number[]): number[] {
    const length = nums.length;
    let i = length - 2;
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }
    if (i >= 0) {
        let j = length - 1;
        while (j >= 0 && nums[j] <= nums[i]) {
            j--;
        }
        swap(nums, i, j);
    }
    reverse(nums, i + 1);
    return nums;
}

function swap(nums: number[], i: number, j: number) {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}

function reverse(nums: number[], start: number) {
    let i = start;
    let j = nums.length - 1;
    while (i < j) {
        swap(nums, i, j);
        i++;
        j--;
    }
}