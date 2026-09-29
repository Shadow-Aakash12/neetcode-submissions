class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        //Edge case
        if(strs.length === 0) {
            return [];
        }

        //Initilize map
        let map = new Map();

        //First loop through the words in the array
        for(let word of strs) {

            let count = new Array(26).fill(0);

            for(let c of word) {

                let index = c.charCodeAt(0) - 'a'.charCodeAt(0);

                count[index]++;
            }
            
            let key = "";

            for(let i=0;i<26;i++) {
                // key += "#";
                key += count[i];
            }

            if(!map.has(key)) {
                map.set(key, [])
            }

            map.get(key).push(word);
        }

        return Array.from(map.values());
    }
}
