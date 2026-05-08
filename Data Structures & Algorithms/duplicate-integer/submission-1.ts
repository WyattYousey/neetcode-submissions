class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]) {
        const seen = new Set();

        for(let i = 0; i < nums.length; i++) {
            if(seen.has(nums[i])) {
                return true;
            } else {
                seen.add(nums[i]);
            }
        }
        return false
    }
}
