// Subject:
// Given two strings a and b. The task is to find if the string 'b' can be obtained by rotating another string 'a' by exactly 2 places.

// Example:
// Input:
// a = amazon
// b = azonam
// Output: 1
// Explanation: amazon can be rotated anti clockwise by two places, which will make it as azonam.

// EX 1:

function rotateAntiClockWiseByTwo(a,b){
    let aLen = a.length;
    let bLen = b.length;
 
    if(aLen !== bLen){
        return false;
    }
 
    let firstTwoChars = a.split("").slice(0,2).join(""); //am
 
    let remainingChars = a.split("").slice(2, a.length).join("");//azon
 
    a = remainingChars.concat(firstTwoChars);
 
    for(let i = 0; i < a.length; i++){
        for(let j = 0; j < b.length; j++){
         if(a[i] === b[i]){
             console.log(`${a} === ${b}`)
             return 1;
         }
        }
    }
 }
 
 rotateAntiClockWiseByTwo("amazon", "azonam");
 rotateAntiClockWiseByTwo("amazon", "azonamm");

 // EX 2:

 function rotateAntiClockWiseByTwo(a,b){
    let aLen = a.length;
    let bLen = b.length;
 
    if(aLen !== bLen){
        return false;
    }
 
    let firstTwoChars = a.split("").slice(0,2).join(""); //am
 
    let remainingChars = a.split("").slice(2, a.length).join("");//azon
 
    a = remainingChars.concat(firstTwoChars);
 
    for(let i = 0; i < a.length; i++){
        for(let j = 0; j < b.length; j++){
         if(a[i] === b[i]){
             console.log(`${a} === ${b}`)
             return 1;
         }
        }
    }
 }
 
 rotateAntiClockWiseByTwo("amazon", "azonam");
 rotateAntiClockWiseByTwo("amazon", "azonamm");
 
 class rotateAntiClockWiseByTwo{
     constructor(a, b){
         this.a = a,      
         this.b = b
     }
 
     loopAndRotate(){
 
         let aLen = this.a.length;
         let bLen = this.b.length;
 
         let a = this.a;
         let b = this.b
      
         if(aLen !== bLen){
             return false;
         }
      
         let firstTwoChars = a.split("").slice(0,2).join(""); //am
      
         let remainingChars = a.split("").slice(2, a.length).join("");//azon
      
         a = remainingChars.concat(firstTwoChars);
      
         for(let i = 0; i < a.length; i++){
             for(let j = 0; j < b.length; j++){
              if(a[i] === b[i]){
                  console.log(`${a} === ${b}`);
                  return 1;
              }
             }
         }
     }
 }
 
 const rotateAmazon = new rotateAntiClockWiseByTwo("amazon", "azonam");
 const result = rotateAmazon.loopAndRotate();

 const rotateAmazon2 = new rotateAntiClockWiseByTwo("amazon", "azonamm");
 const result2 = rotateAmazon2.loopAndRotate();

 // EX 3:

 function rotateAntiClockWiseByTwoProto(a,b){
    this.a = a,      
    this.b = b
}

rotateAntiClockWiseByTwoProto.prototype.loopAndRotate = function(){

        let aLen = this.a.length;
        let bLen = this.b.length;

        let a = this.a;
        let b = this.b
     
        if(aLen !== bLen){
            return false;
        }
     
        let firstTwoChars = a.split("").slice(0,2).join(""); //am
     
        let remainingChars = a.split("").slice(2, a.length).join("");//azon
     
        a = remainingChars.concat(firstTwoChars);
     
        for(let i = 0; i < a.length; i++){
            for(let j = 0; j < b.length; j++){
                if(a[i] === b[i]){
                    console.log(`${a} === ${b}`);
                    return 1;
                }
            }
        }
}

const rotateAmazonProto = new rotateAntiClockWiseByTwoProto("amazon", "azonam");
const resultProto = rotateAmazonProto.loopAndRotate();

const rotateAmazonProto2 = new rotateAntiClockWiseByTwoProto("amazon", "azonam");
const resultProto2 = rotateAmazonProto2.loopAndRotate();