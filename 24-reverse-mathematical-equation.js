// Subject;
// Given a mathematical equation using numbers/variables and +, -, *, /. 
// Print the equation in reverse.

// Example:
// Input : 20 - 3 + 5 * 2
// Output : 2 * 5 + 3 - 20

// Input : 25 + 3 - 2 * 11
// Output : 11 * 2 - 3 + 25

// Input : a + b * c - d / e
// Output : e / d - c * b + a

// EX 1:

function reverseEquation(eq){

    let reverseOne = eq.split(" ").reverse().join(" ");
   
    return reverseOne;
 }

let eq = "20 - 3 + 5 * 2"
reverseEquation(eq)

let eq2 = "25 + 3 - 2 * 11"
reverseEquation(eq2)

let eq3 = "a + b * c - d / e"
reverseEquation(eq3)

// EX 2:

class ReverseEquation{
    constructor(eq){
        this.eq = eq
    }

    reverse(){
        let eq = this.eq;
        let reverseOne = eq.split(" ").reverse().join(" ");
   
        return reverseOne;
    }
}

let eqOne = new ReverseEquation("20 - 3 + 5 * 2");
let resOne = eqOne.reverse();
resOne;

let eqTwo = new ReverseEquation("25 + 3 - 2 * 11");
let resTwo = eqTwo.reverse();
resTwo;

let eqThree = new ReverseEquation("a + b * c - d / e");
let resThree = eqThree.reverse();
resThree;

// EX 3
function ReverseEquationProto(eq){
    this.eq = eq
}

ReverseEquationProto.prototype.reverse = function(){
    let eq = this.eq;
    let reverseOne = eq.split(" ").reverse().join(" ");
   
    return reverseOne;

}

let eqOneProto = new ReverseEquationProto("20 - 3 + 5 * 2");
let resOneProto = eqOneProto.reverse();
resOneProto;

let eqTwoProto = new ReverseEquationProto("25 + 3 - 2 * 11");
let resTwoProto = eqTwoProto.reverse();
resTwoProto;

let eqThreeProto = new ReverseEquationProto("a + b * c - d / e");
let resThreeProto = eqThreeProto.reverse();
resThreeProto;