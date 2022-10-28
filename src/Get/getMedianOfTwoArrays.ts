// https://leetcode.com/problems/median-of-two-sorted-arrays/
/**
 * Returns the median of two arrays including numbers
 */
export function getMedianOfTwoArrays(nums1: number[], nums2: number[]): number {
    const mergedArray = [...nums1, ...nums2];
    mergedArray.sort((a, b) => a - b);
    const middleValue = Math.floor(mergedArray.length / 2);
    if (mergedArray.length % 2) {
        return mergedArray[middleValue] as number;
    }
    return (mergedArray[middleValue - 1] as number + (mergedArray[middleValue]as number)) / 2;
}