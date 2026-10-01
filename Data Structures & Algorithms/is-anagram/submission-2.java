class Solution {
    public boolean isAnagram(String s, String t) {
        // Checking edge case
        if (s.length() != t.length()) {
            return false;
        }

        // Initilizing map to set the frequency of the elements
        Map<Character, Integer> map = new HashMap<>();

        // loop to count frequency of elements in s
        for (char ch : s.toCharArray()) {
            map.put(ch, map.getOrDefault(ch, 0) + 1);
        }

        // loop to check elements in t
        for (char ch : t.toCharArray()) {
            if (!map.containsKey(ch)) {
                return false;
            }

            map.put(ch, map.get(ch) - 1);

            if (map.get(ch) == 0) {
                map.remove(ch);
            }
        }

        return map.size() == 0;
    }
}
