class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {

        // Check and remove any special characters and spaces
        let cleaned = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

        //Now we have normalized the string we initilize left and right pointers
        let left = 0, right = cleaned.length-1;

        while(left <= right) {

            if(cleaned[left] === cleaned[right]) {
                left++;
                right--;
            } else {
                return false;
            }
        }

        return true;
    }
}
