import Stack from "./stack_v1.js";

export function isBalancedParenthesis(w) {
    var openingS = new Set("{[(")
    var closingS = new Set("}])")
    var s = new Stack()
    for (let i = 0; i < w.length; i++) {
        var ch = w[i]
        if (openingS.has(w[i])) {
            s.push(w[i])
        } else if (closingS.has(w[i])) {
            var ch = s.pop()
            if (!((ch === '{' && w[i] == '}') || (ch === '[' && w[i] == ']') || (ch === '(' && w[i] == ')'))) {
                return false
            }
        }
    }
    return s.length() == 0
}
