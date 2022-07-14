// Title: Euler’s Totient Function

// Subject: Euler’s Totient function Φ (n) for an input n is the count of numbers in {1, 2, 3, …, n} that are relatively prime to n, i.e., the numbers whose GCD (Greatest Common Divisor) with n is 1.

// Example:
// Φ(1) = 1  
// gcd(1, 1) is 1

// Φ(2) = 1
// gcd(1, 2) is 1, but gcd(2, 2) is 2.

// Φ(3) = 2
// gcd(1, 3) is 1 and gcd(2, 3) is 1

// Φ(4) = 2
// gcd(1, 4) is 1 and gcd(3, 4) is 1

// Φ(5) = 4
// gcd(1, 5) is 1, gcd(2, 5) is 1, 
// gcd(3, 5) is 1 and gcd(4, 5) is 1

// Φ(6) = 2
// gcd(1, 6) is 1 and gcd(5, 6) is 1, 

// Reference #1 => https://www.youtube.com/watch?v=njaJpmBK7QI
// phi(n) = num of ints <= n which are relatively prime to n 
// Reference #2 => https://www.geeksforgeeks.org/eulers-totient-function-for-all-numbers-smaller-than-or-equal-to-n/
// get totient of all nums <= n
// Reference #3 => https://www.geeksforgeeks.org/eulers-totient-function/
// Reference #4 => https://www.cuemath.com/numbers/relatively-prime/

function greatestCommonDivisor(a,b){
  
    if(a == 0){
      return b;
    }

  return greatestCommonDivisor(b % a, a);
}

function phiIndicator(n){
    let res = 1;
    for (let i = 2; i < n; i++){
        if(greatestCommonDivisor(i, n) == 1){
            res++;
        }
    }

    return res;
    
}


function stdout(n){
    let out = `The count of numbers in ${n}) that are relatively prime to n= ${phiIndicator(n)}`;
    return out;
}

stdout(1);
stdout(2);
stdout(3);
stdout(4);
stdout(5);
stdout(6);
