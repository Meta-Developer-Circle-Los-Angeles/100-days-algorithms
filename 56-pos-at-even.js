// Title: Positive elements at even and negative at odd positions (Relative order not maintained)

// Subject: You have been given an array and you have to make a program to convert that array such that positive elements occur at even numbered places in the array and negative elements occur at odd numbered places in the array. We have to do it in place.
// There can be unequal number of positive and negative values and the extra values have to left as it is.

// Example:

// Input : arr[] = {1, -3, 5, 6, -3, 6, 7, -4, 9, 10}
// Output : arr[] = {1, -3, 5, -3, 6, 6, 7, -4, 9, 10}

// Input : arr[] = {-1, 3, -5, 6, 3, 6, -7, -4, -9, 10}
// Output : arr[] = {3, -1, 6, -5, 3, -7, 6, -4, 10, -9}


function posAtEven(arr=[]){

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 0 && i % 2 == 1){
            for(let j = i + 1; j < arr.length; j++){
                if(arr[j] < 0 && j % 2 == 0){
                    //swap
                    let temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }
      
    }
        
    // for (let i = 0; i < arr.length; i++){
    //   //console.log(arr[i]);
    // }
    return arr;
}

posAtEven([1, -3, 5, 6, -3, 6, 7, -4, 9, 10]); // 1, -3, 5, -3, 6, 6, 7, -4, 9, 10