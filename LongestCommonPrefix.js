export var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return "";

    let res = "";
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return "";

    let res = "";

    for (let i = 0; i < strs[0].length; i++) {     // character index
        let ch = strs[0][i];

        for (let j = 1; j < strs.length; j++) {   // compare with other strings
            if (i >= strs[j].length || strs[j][i] !== ch) {
                return res;
            }
        }

        res += ch;
    }

    return res;
};

    for (let i = 0; i < strs[0].length; i++) {     // character index
        let ch = strs[0][i];

        for (let j = 1; j < strs.length; j++) {   // compare with other strings
            if (i >= strs[j].length || strs[j][i] !== ch) {
                return res;
            }
        }

        res += ch;
    }

    return res;
};
