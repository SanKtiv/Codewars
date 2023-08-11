//DESCRIPTION:
//Your task is to write a function toLeetSpeak that converts a regular english sentence to Leetspeak.
//
// More about LeetSpeak You can read at wiki -> https://en.wikipedia.org/wiki/Leet
//
// Consider only uppercase letters (no lowercase letters, no numbers) and spaces.
//
// For example:
//
// toLeetSpeak("LEET") returns "1337"
// In this kata we use a simple LeetSpeak dialect. Use this alphabet:
//
// {
//   A : '@',
//   B : '8',
//   C : '(',
//   D : 'D',
//   E : '3',
//   F : 'F',
//   G : '6',
//   H : '#',
//   I : '!',
//   J : 'J',
//   K : 'K',
//   L : '1',
//   M : 'M',
//   N : 'N',
//   O : '0',
//   P : 'P',
//   Q : 'Q',
//   R : 'R',
//   S : '$',
//   T : '7',
//   U : 'U',
//   V : 'V',
//   W : 'W',
//   X : 'X',
//   Y : 'Y',
//   Z : '2'
// }

//SOLUTION:
function toLeetSpeak (str) {
    let ob = {
        A : '@',
        B : '8',
        C : '(',
        D : 'D',
        E : '3',
        F : 'F',
        G : '6',
        H : '#',
        I : '!',
        J : 'J',
        K : 'K',
        L : '1',
        M : 'M',
        N : 'N',
        O : '0',
        P : 'P',
        Q : 'Q',
        R : 'R',
        S : '$',
        T : '7',
        U : 'U',
        V : 'V',
        W : 'W',
        X : 'X',
        Y : 'Y',
        Z : '2'
    };
    let strRes = '';
    let arr = str.split(' ');
    let arrOb = Object.keys(ob);
    for (let i of arr) {
        for (let j = 0; j < i.length; j++) {
            for (let n of arrOb) {
                if (i[j] == n) {
                    strRes += ob[n];
                }
            }
        }
        strRes += ' ';
    }
    return strRes.slice(0, str.length);
}