class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {

        // Initilize a counter
        let counter = 0;

        // Initilize a set to store the unique counts
        let set = new Set();

        // Traverese through the array 
        for(let i=0;i<nums.length;i++) {

            if(nums[i] === 1) {
                counter += 1;
                set.add(counter);
            } else {
                set.add(counter);
                counter=0;
            }
        }

        return Math.max(...set);
    }
}
