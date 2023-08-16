//DESCRIPTION:
//Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
//
// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

//SOLUTION:
function digitize(n) {
    let str = n.toString();
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        arr.unshift(Number(str[i]));
    }
    return arr;
}
