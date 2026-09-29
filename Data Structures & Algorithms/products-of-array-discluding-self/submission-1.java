class Solution {
    public int[] productExceptSelf(int[] nums) {
        
        int[] result = new int[nums.length];

        int pre= 1, post = 1;       // pre = 24 , post = 24

        Arrays.fill(result, 1);

        for(int i=0;i<nums.length;i++) {    //nums = [ 1, 2, 3, 4]
            result[i] = pre;                //result = [ 1, 1, 2, 6]
            pre = nums[i] * pre; 
        }

        for(int i=nums.length-1;i>=0;i--) { // result = [ 24, 12, 8, 6]
            result[i] = result[i] * post;
            post = nums[i] * post;
        }

        return result;
    }
}  
