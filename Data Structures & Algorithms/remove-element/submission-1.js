class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {

        let k = 0;

        if(nums.length === 1) {
            return 0;
        }

        // Traverse through the given array
        for(let i=0;i<nums.length;i++) {

            if(nums[i] !== val) {
                nums[k] = nums[i];
                k++
            }
        }

        return k;
    }
}
