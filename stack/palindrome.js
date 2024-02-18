import Stack from "./stack_v1.js";

export function isPalindrome(word) {
    var s = new Stack()
    for (let i = 0; i < word.length; i++) {
        s.push(word[i])
    }
    var rword = ""
    while(s.length() > 0) {
        rword += s.pop()
    }
    if (rword == word) return true
    else return false
}
