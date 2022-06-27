// Title: Rearrange an array in maximum minimum form | Set 2 (O(1) extra space)

// Subject:
// Given a sorted array of positive integers, rearrange the array alternately i.e first element should be the maximum value, second minimum value, third-second max, fourth-second min and so on. 

// Example:
// Input: arr[] = {1, 2, 3, 4, 5, 6, 7} 
// Output: arr[] = {7, 1, 6, 2, 5, 3, 4}
// Input: arr[] = {1, 2, 3, 4, 5, 6} 
// Output: arr[] = {6, 1, 5, 2, 4, 3} 


// non-working EX:
function reArrangeMaxMin(arr=[]){
    let max = [...arr];
    let min = 0;
    let maxNum = max.length - 1;
    let mid = Math.floor((min + maxNum) / 2);
   
    max.reverse();
    //console.log(max); //7,6,5,4,3,2,1
    max.splice(mid + 1); 
    //console.log(max); //7,6,5,4
    min = arr.splice(0, mid); 
    //console.log(min); //1,2,3
    arr = max.concat(min); 
    //console.log(arr);//[ 7, 6, 5, 4, 1, 2, 3 ]
    let temp = [];
    let minNums;
    let maxNums;
    for(let i = 0; i < arr.length;i++){
        //console.log(i); //0,1,2,3,4,5,6
        //console.log(arr[i]);//7,6,5,1,2,3
        if(arr[i] <= mid){
           arr[temp] = arr[i];
           minNums = arr[temp];
           //console.log(minNums);
           //console.log(arr[temp]); // 1,2,3
        }
        
        if(arr[i] > mid){
            arr[temp] = arr[i];
            maxNums = arr[temp];
            //console.log(maxNums);
            //console.log(arr[temp]);//7,6,5,4
          
         }
        if(i % 2 != 0){
            // min = arr[i];
            //console.log(min);//6,4,2
            // arr[i] = minNums;
            arr[i] += arr[minNums];
            //console.log(minNums);
        }
        if(i % 2 == 0){
             max = arr[i];
           // arr[i] += arr[maxNums];
            //maxNums--;
            // console.log(max);//7,5,1,3
        }
        return arr;
    }
 
}


// should return 7, 1, 6, 2, 5, 3, 4 
reArrangeMaxMin([1, 2, 3, 4, 5, 6, 7]); //  [ 7, 6, 5, 4, 1, 2, 3 ] ...incorrect output

// Working EX:
// Reference => https://www.geeksforgeeks.org/javascript-program-for-rearranging-an-array-in-maximum-minimum-form-set-2-o1-extra-space/
function reArrangeMaxMin(arr=[]){
    let arrLen = arr.length;
    let minIndex = 0;
    let maxIndex = arrLen - 1;
    let maxValue = arr[arrLen - 1] + 1;

    for(let i = 0; i < arrLen;i++){
        if(i % 2 == 0){
            arr[i] += ((arr[maxIndex] % maxValue) *
                        maxValue);
            maxIndex--;
        } else {
            arr[i] += ((arr[minIndex] % maxValue) *
            maxValue);
            minIndex++;
        }
    }

    for (let i = 0; i < arrLen; i++){
        arr[i] = Math.floor(arr[i] / maxValue);
    }
        
    for (let i = 0; i < arrLen; i++){
        console.log(arr[i]);
    }

}


reArrangeMaxMin([1,2,3,4,5,6,7]);
