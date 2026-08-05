class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        // Checking the edge case
        if(s.length !== t.length) {
            return false;
        }

        //Initilizing Map to store the characters and count of them
        let map = new Map();
        
        //Count the frequency of s
        for(let ch of s) {
            map.set(ch, (map.get(ch) || 0) + 1);
        }

        // Reducing the frequency with t
        for(let ch of t) {

            if(!map.has(ch)) {
                return false;
            }

            map.set(ch, map.get(ch) - 1);

            if(map.get(ch) === 0) {
                map.delete(ch);
            }
        }
        return map.size === 0;
    }
}
