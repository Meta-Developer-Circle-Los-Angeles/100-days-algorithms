let originalStr = "remmargorp a ma I";
let newStr = originalStr.split(" ").reverse().join(" ");

const reverseStr = newStr => {
    let flipped = '';
    flipped = newStr.split(" ")
    .map(word => {
       return word
       .split("")
       .reverse()
       .join("");
    })
    .join(" ");
    return flipped;
 };
 console.log(reverseStr(newStr));