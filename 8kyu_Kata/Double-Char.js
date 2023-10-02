//DESCRIPTION:
//Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
//
// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "

//SOLUTION:
function doubleChar(str) {
    let strRes = '';
    for (let i = 0; i < str.length; i++) {
        strRes += str[i] + str[i];
    }
    return strRes;
}