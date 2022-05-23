// Subject: Write a function to check whether a given input is an integer or a 
// string.
// Integer: Every element should be a valid digit, i.e '0-9'.
// String: Any one element should be an invalid digit, i.e any symbol other

// Example:
// Input : 127
// Output : Integer
// Explanation : All digits are in the range '0-9'.

// Input : 199.7
// Output : String
// Explanation : A dot is present. 

// Input : 122B
// Output : String
// Explanation : A alphabet is present.

// EX 1:

function checkIfNum(input){
    for(let i = 0; i < input.length; i++){
        let value = input[i];
        if(value < '0' || value > '9'){
            return false;
        }
    }
     return true;
}


function getResult(str){
    if (checkIfNum(str)){
        return `${str} is an integer`;
    } else {
        return `${str} is not an integer`;
    }
      
}

getResult("122b");
getResult("127");
getResult("199.7");

// EX 2:

class checkInput{
    constructor(input){
        this.input = input
    }

    checkIfNum(){
        let input = this.input;
        for(let i = 0; i < input.length; i++){
            let value = input[i];
            if(value < '0' || value > '9'){
                return false;
            }
        }
         return true;
    }

    getResult(str){
        if (this.checkIfNum(str)){
            return `The value that you have provided is an integer`;
        } else {
            return `The value that you have provided is not an integer`;
        }
    }
}

let checkValue1 = new checkInput("122b");
let getValue1 = checkValue1.getResult();
getValue1;

let checkValue2 = new checkInput("127");
let getValue2 = checkValue2.getResult();
getValue2;

let checkValue3 = new checkInput("199.7");
let getValue3 = checkValue3.getResult();
getValue3;

// EX 3:

function checkInputProto(input){
    this.input = input
}

checkInputProto.prototype.getResult = function(){

        let input = this.input;
        for(let i = 0; i < input.length; i++){
            let value = input[i];
            if(value < '0' || value > '9'){
                return `The ${input} includes the character ${value} which is not an integer`;
            }
        }
        return `${input} is an integer`;
}

let checkValue1Proto = new checkInputProto("122b");
let getValue1Proto = checkValue1Proto.getResult();
getValue1Proto;

let checkValue2Proto = new checkInputProto("127");
let getValue2Proto = checkValue2Proto.getResult();
getValue2Proto;

let checkValue3Proto = new checkInputProto("199.7");
let getValue3Proto = checkValue3Proto.getResult();
getValue3Proto;

