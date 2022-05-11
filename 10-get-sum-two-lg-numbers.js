// EX 1

function findSum(str1, str2){
    let num1 = parseInt(str1);
    let num2 = parseInt(str2);
 
    return num1 + num2;
 }
 
let sum = findSum("3333311111111111", "44422222221111"); 
console.log(sum); // 3377733333332222


// EX 2 
// reference => https://medium.com/@nitinpatel_20236/javascript-adding-extremely-large-numbers-and-extra-long-factorials-229b6055cb1a

function getLargeSum(str1,str2){
    let totalSum = "";
    let str1Length = str1.length;
    let str2Length = str2.length; 

    if(str2Length > str1Length){
        let switcharoo = str;
        str2 = str1;
        str1 = switcharoo;
    }

    let carry = 0;
    let num1;
    let num2;
    let tempStr;
    let numSum;

    for(let i = 0; i < str1Length; i++){

        num1 = parseInt(str1.charAt(str1.length - 1 - i)); 
        num2 = parseInt(str2.charAt(str2.length - 1 - i)); 
        num2 = (num2) ? num2 : 0; 

        tempStr = (carry + num1 + num2).toString(); 
        numSum = tempStr.charAt(tempStr.length - 1);  
        carry = parseInt(tempStr.substr(0, tempStr.length - 1))
        carry = (carry) ? carry : 0;  
        totalSum = (i === str1.length - 1) ? tempStr + totalSum : numSum + totalSum;
    }

    return totalSum;

}

console.log(getLargeSum("3333311111111111", "44422222221111")); //3377733333332222