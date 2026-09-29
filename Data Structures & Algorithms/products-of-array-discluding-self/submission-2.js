class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {

        let result = new Array(nums.length);

        result.fill(1);

        let pre = 1, post = 1;

        for(let i=0;i<nums.length;i++) {
            result[i] = result[i] * pre;
            pre = nums[i] * pre;
        }

        for(let i=nums.length-1;i>=0;i--) {
            result[i] = result[i] * post;
            post = nums[i] * post;
        }

        return result;
    }
}
