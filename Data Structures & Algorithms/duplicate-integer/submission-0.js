class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const seenElements = new Map();

        for (const element of nums) {

        if (seenElements.has(element)) {
            return true;
        } else
        seenElements.set(element, true);
        }
  return false;
    }
}
