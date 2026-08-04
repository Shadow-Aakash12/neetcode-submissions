class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

        //Initilizing set to track duplicate
        let set = new Set();

        //Traversing through the array
        for(let i=0;i<nums.length;i++) {

            if(set.has(nums[i])) {
                return true;
            }

            set.add(nums[i]);
        }

        return false;
    }
}
