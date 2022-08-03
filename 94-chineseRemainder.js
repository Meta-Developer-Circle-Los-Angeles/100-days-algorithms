// TItle: Chinese Remainder Theorem | Set 2 (Inverse Modulo based Implementation)

// Subject:
// We are given two arrays num[0..k-1] and rem[0..k-1]. In num[0..k-1], every pair is coprime 
// (gcd for every pair is 1). We need to find minimum positive number x such that: 

//      x % num[0]    =  rem[0], 
//      x % num[1]    =  rem[1], 
//      .......................
//      x % num[k-1]  =  rem[k-1]

// Example:
// Input:  num[] = {3, 4, 5}, rem[] = {2, 3, 1}
// Output: 11
// Explanation: 
// 11 is the smallest number such that:
//   (1) When we divide it by 3, we get remainder 2. 
//   (2) When we divide it by 4, we get remainder 3.
//   (3) When we divide it by 5, we get remainder 1.     


// // Reference #1 => https://www.youtube.com/watch?v=e8DtzQkjOMQ
// X = a1(mod m1)
// X = a2(mod m2)
// ......
// X = an(mod mn)

// // 3 separate equations
// X => 2(mod 3)
// X => 3(mod 5)
// X => 2(mod 7)
// // solution:
// X = (a1 M1 M1Inverse + a2 M2 M2Inverse + a3 M3 M3Inverse) mod M
// // a1 = 2, a2 = 3, a3 = 2
// // m1 = 3, m2 = 5, m3 = 7 => 3,5,7 are relatively prime
// M = m1 * m2 * m3 
// M = 3 * 5 * 7
// M = 105

// Chinese Remainder Theorem => above equations have a unique solution if the moduli are 
// relatively prime 
// when m1,m2,m3 are all relatively prime than X = unique solution

// X = (a1 M1 M1Inverse + a2 M2 M2Inverse + ...an Mn MnInverse) mod M


// // Reference #2 => https://www.youtube.com/watch?v=ru7mWZJlRQg

// x => 2(mod 3)
// x => 2(mod 4)
// x => 1(mod 5)

// x = mod3 mod4 mod5
// // 1st section => apply mod 3 => ignore 2nd and 3rd sections by placing 3 in 2nd & 3rd sections
// x =     +  3  + 3

// // 2nd section => get rid of 1st and 3rd sections => include mod 4 in 1st & 3rd sections
// x =   4  +  3  + 3*4
// // multiply 1st & 2nd sections by 5
// x =   4*5  +  3*5  + 3*4
// x = 20 + 15 + 12

// // x should be equivalent to 2(mod 3)
// // x w/ mod 3 => 2nd section mod4 & 3rd section mod5 both divisible by 3
// x = 20 + 0 + 0 (mod3)
//   = 20(mod3)
//   = 2(mod3)

// // consider mod5
// x = 20 + 15 + 12
// x =  0 +  0 + 12 (mod5)
// x = 12(mod5)
// x = 2(mod5)...but should be 1(mod5)...need to find some number * 12 that is === 1
// // 12 === 2 im mod5
// 2 * 3 = 6 = 1(mod 5)
// x = 20 + 15 + 12*3
// x = 20 + 15 + 36

// // find out if x = 2(mod4)
// x = 15 = 3(mod4)
// 3*3 = 9 = 1(mod4)
// x = 20 + 15*3 + 36
// x = 20 + 45 + 36
// x = 1(mod4)
// x = 20 + 15*3 *2 + 36
// x = 2(mod4)
// x = 146


// Reference #3 => https://www.geeksforgeeks.org/chinese-remainder-theorem-set-2-implementation/
// Time Complexity : O(N*LogN)
function moduloInverse(a, m){
    // https://www.geeksforgeeks.org/multiplicative-inverse-under-modulo-m/
    let m0 = m;
    let x0 = 0;
    let x1 = 1;
 
    if (m == 1){
      return 0;
    }   
    // Apply extended Euclid Algorithm
    while (a > 1) {
        let quotient = parseInt(a / m);
        let t = m;
        // m is remainder now, process
        // same as euclid's algo
        m = a % m;
        a = t; 
        t = x0;
        x0 = x1 - quotient * x0;
        x1 = t;
    }
    // Make x1 positive
    if (x1 < 0){
       x1 += m0;
    }
    
    return x1;
}

function findMinXPosNum(num = [], mod = []){
    let numArrLen = num.length;
    let productOfAllNums = 1;
    for (let i = 0; i < numArrLen; i++){
      productOfAllNums *= num[i];
    }
 
    let result = 0;
 
    for (let i = 0; i < numArrLen; i++){
        productOfAllNumsDivByEachNum = parseInt(productOfAllNums / num[i]);
        result += mod[i] * moduloInverse(productOfAllNumsDivByEachNum,
                    num[i]) * productOfAllNumsDivByEachNum;
    }
 
    return result % productOfAllNums;
}
 
function result(num = [], mod = []){
    let out = findMinXPosNum(num, mod);
    return `The minimum positive number for x is ${out}`;
}

result([3, 4, 5], [2, 3, 1]);


