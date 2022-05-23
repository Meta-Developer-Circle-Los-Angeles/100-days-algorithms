// Subject: Given a positive integer n, round it to nearest whole number having 
// zero as last digit.

// Example:
// Input : 4722
// Output : 4720

// Input : 38
// Output : 40

// Input : 10
// Output: 10

function roundToNearestWholeNum(num){

    let a = parseInt(num/10) * 10;
    let b = a + 10;

    if(num - a > b - num){
        return b;
    } else {
        return a;
    }

}

roundToNearestWholeNum(4722);
roundToNearestWholeNum(39);
roundToNearestWholeNum(10); 