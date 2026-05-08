class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string) {
        const freqS = {};
        const freqT = {};
        const maxLength = s.length;

        if (s.length !== t.length) return false;

        for(let i = 0; i < maxLength; i++) {
            if (Object.keys(freqS).includes(s[i])) {
                freqS[s[i]] += 1;
            } else {
                freqS[s[i]] = 1;
            }
            if (Object.keys(freqT).includes(t[i])) {
                freqT[t[i]] += 1;
            } else {
                freqT[t[i]] = 1;
            }
        }

        for (let key in freqS) {
            if (freqS[key] !== freqT[key]) return false;
        }
        return true;
    }
}
