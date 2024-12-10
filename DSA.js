                                                                 // find Even or Odd
function isEven(n){
    if(n%2 == 0){
        console.log("Even")
    }else{
        console.log("Odd")
    }
}
isEven(100);

                                                                   // find Last in a number
let n = 985689;
function lastDigit(n){
    return Math.floor(n % 10);
}
let result = lastDigit(n);
console.log(result);

                                                            // reverse a Number
function reverseNumber(arr){
    const reversedArray = arr.slice().reverse();
    reversedArray.forEach(element => process.stdout.write(element + ""));
}
const arr = [1, 2, 3, 4, 5];
reverseNumber(arr);

                                                                  // power of number

function power(x, n) {
  let pow = 1;

  for (let i = 0; i < n; i++) {
    pow = pow * x;
  }

  return pow;
}



let x = 5;
let n = 3;

let result = power(x, n);
console.log(result);


                                                   // GCD

function Gcd(a, b){     
if(a==0)
return b;

if(b==0)
return a;
      if(a==b)
    return b;

    if(a>b)
    return Gcd(a-b, b);
    return Gcd(a, b-a);
  }
  let a = 45;
  let b = 132;
  console.log(Gcd(a,b));

                                          // Find all factors of a Natural Number
function printDivisors(n)
{
    for (i=0;i<=n;i++)
        if (n%i==0)
           console.log(i + " ");
}

printDivisors(50);

                                          // checking number is prime or  not

let i = 2;
function isPrime(n){
    if(n==0 || n==1){
        return false;
    }
    if(n==i){
        return true;
    }
   if(n % i == 0){
    return false;
   }
    i++;
    return isPrime(n);
}
isPrime(7) ? console.log(true) : console.log(false);

                                                    // number is armstrong number or not

  function isArmstrong(number){
    let digits = number.toString().split('');
    let order = digits.length;
    let sum = digits.reduce((acc, digit) =>
    acc + Math.pow(parseInt(digit),order),0);
    if(sum === number){
        console.log(number + "is an armstrong number");
    }
    else{
        console.log(number + "is not an armstrong number");
    }
  }
  isArmstrong(9474);
  isArmstrong(370);
                                                              // check palindrome or not
function isPalindrome(str){  
    let j = str.length - 1;
    for(let i=0; i < str.length/2 ; i++){
        if(str[i] != str[j]){
            return false;
        }
        j--;
    }
    return true;

}
let str1 = "racecar";
let str2 = "nitin";
let str3 = "Rama";
console.log(isPalindrome(str1));
console.log(isPalindrome(str2));
console.log(isPalindrome(str3));
                                                                  // square root of number

function squareRoot(num){
    let sqr = Math.sqrt(num);
    return sqr;
}
console.log(squareRoot(144));
                       
                                  // array data structure

                                // find max and min elements in an array
function maxmin(arr) {
    const maxmin = {};
    arr.sort((a, b) => a - b);
    maxmin.min = arr[0];
    maxmin.max = arr[arr.length-1];
                                
    return maxmin;
 }
                            
const arr1 = [1000, 11, 445, 1, 330, 3000];
const maxmin1 = maxmin(arr1); 
console.log(maxmin1.max);
console.log(maxmin1.min);
                                 // find thirdmaximum number in an array

function thirdMaximum(arr) {

    const thirdMax = {};
    arr.sort((a, b) => a - b);
    thirdMax.third = arr[2];


    return thirdMax;
}
 

    const arr = [1000, 11, 445, 1, 330, 3000];
    const thirdMax1 = thirdMaximum(arr);
    console.log(thirdMax1.third);

                                               // search element in an array
function search(array, x) {
            for (let i=0;i<array.length;i++){
                if (array[i] === x){
                    return i;
                }
            }
            return -1;
        }
 
const array = [3, 5, 0, 11, 24];
const x = 11;
const result = search(array, x);
console.log(result);
                                     
                                                    // missing number in an array

function missingNumber(n, arr) {
        let sum_of_n = (n*(n+1))/2;
       
    let sum = 0;
        for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
        }



        return  sum_of_n - sum;
        
        
    }

const arr = [1, 2, 4, 5, 6];
const n = 6;
const result = missingNumber(n, arr)
console.log(result);


                                                            // Find repeating number in array
const check_duplicate_in_array = (input_array) => {
    const duplicates =input_array.filter((item, index) =>input_array.indexOf(item) !== index);
    return Array.from(new Set(duplicates));
    }
const arr=[1,1,2,2,3,3,4,5,6,1];
console.log(check_duplicate_in_array(arr));                                                           


                                            // compare two arrays

function areEqual(arr1, arr2)
{
    let N = arr1.length;
    let M = arr2.length;

    if (N != M){
        return false;
}

    arr1.sort();
    arr2.sort();

    for (let i = 0; i < N; i++){
     if(arr1[i] !== arr2[i]){
        return false;
     }
    return true;
    }
}

let arr1 = [3, 5, 2, 5, 2];
let arr2 = [2, 3, 5, 5, 2];

if (areEqual(arr1, arr2))
    console.log("Yes");
else
    console.log("No");

                                                  	// Sort an array of 0s , 1s and 2s

function sort012(arr) {
    let c0 = 0, c1 = 0, c2 = 0;

    // Count 0s, 1s, and 2s
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            c0 += 1;
        } else if (arr[i] === 1) {
            c1 += 1;
        } else {  
            c2 += 1;
        }
    }

    let idx = 0;

    for (let i = 0; i < c0; i++) {
        arr[idx++] = 0;
    }


    for (let i = 0; i < c1; i++) {
        arr[idx++] = 1;
    }


    for (let i = 0; i < c2; i++) {
        arr[idx++] = 2;
    }
}

let arr = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1];

sort012(arr);

console.log(arr.join(' ')); 

                                           // rotate array by k times

const arr1 = [1, 2, 3, 4, 5];
const k = 1;

function rotateArray(arr1, k){
for(let i = 0; i < k; i++){
let element = arr1.pop();
arr1.unshift(element);
}
console.log(arr1);
}
rotateArray(arr1, k);

                                                   // check subset of another array

function isSubset(arr1, arr2){
    let map = {};
    for(let i = 0; i < arr1.length; i++){
        if(map.hasOwnProperty(arr1[i])){
            map[arr1[i]] += 1; 
        }
        else{
            map[arr1[i]] = 1;
        }
    }
    for (let i = 0; i < arr2.length; i++){
        if(!map.hasOwnProperty(arr2[i]) || map.hasOwnProperty(arr2[i]) <= 0){
            return "NO";
        }else{
            map[arr2[i]] -= 1;
        }
        return "YES";
    }
}
const arr1 = [1, 4, 5, 8, 10, 14, 17, 19];
const arr2 = [1, 5, 10, 17, 19];
const result = isSubset(arr1, arr2);
console.log(result);


                                               	// Count frequency of elements in array

function countFreq(arr, n){
    const map ={};
    for (let i = 0; i < n; i++){
       if(map[arr[i]]){
          map[arr[i]] += 1
       }
        else{   
           map[arr[i]] =1
         }
    }
   console.log(map)
}
var arr = [10, 20, 20, 10, 10, 20, 5, 20];
var n = arr.length;
countFreq(arr, n);

                                                    // Two pointer
                                                    	// Find pair with given sum

function hasArrayTwocandidates(arr, x){
    arr.sort((a,b) => a-b);
    let left = 0;
    let right = arr.length-1;
    while(left < right){
        if(arr[left] + arr[right] === x){
            return true;
        } else if(arr[left] + arr[right] > x){
            right--;
        }else if(arr[left] + arr[right] < x){
            left++;
        }
    }
    return false;
}

const arr = [1, 3, 5, 9, 21];
const x = 26;
const result = hasArrayTwocandidates(arr, x);
console.log(result);

                                                   // three sum
function find3Numbers(arr, n, x) {
        
    arr.sort((a, b) => a - b);

    
    for (let i = 0; i < n - 2; i++) {
        let left = i + 1;
        let right = n - 1;

        
            while (left < right) {
            const sum = arr[i] + arr[left] + arr[right];
            
            if (sum === x) {
                return true;  
                } else if (sum < x) {
                left++;  
                } else {
                right--;  
            }
        }
    }
     
    
    return false;
}


const arr = [1, 3, 5, 9, 21];
const n = arr.length;
const x = 27;
const result = find3Numbers(arr, n, x);
console.log(result);


                                                  // Find triplets with zero sum
function findTriplets(arr, n){
        arr.sort((a, b) => a - b)
        for(let i = 0; i < n - 2; i++){
            let left = i + 1;
            let right = n - 1;


            while(left < right){
                const sum = arr[i] + arr[left] + arr[right]
                
                if(sum === 0){
                    return true;
                }else if(sum < 0){
                    left++;
                }else{
                    right--;
                }
            }
        }

        return false;
    }
 const arr = [0, 2, 3, 1, 2];
 const n = arr.length;
 const result = findTriplets(arr, n);
console.log(result);


                                             // Union of two arrays
function doUnion(arr1, arr2) {
    let a = new Set([...arr1,...arr2]);
    return a.size;
}
const arr1 = [1, 3, 4, 6, 9];
const arr2 = [1, 2, 5];
const result = doUnion(arr1, arr2);
console.log(result);


                                                            // Intersection of two arrays
function NumberofElementsInIntersection(a, b, n, m){  
    a = [...new Set(a)];
    b = [...new Set(b)];
    let count_of_a = new Set(a);
    let count = 0;
  
    for (let i = 0; i < m; i++){
        if(count_of_a.has(b[i])){
            count++ ;
        }
    }
    return count;
}
const a = [1, 3, 9, 11, 29];
const b = [8, 10, 12, 9, 29];
const n = a.length;
const m = b.length;
const result = NumberofElementsInIntersection(a, b, n, m);
console.log(result);


                                            // Remove duplicates from array
function remove_duplicate(arr){
    let i = 0;
    for(let j = 1; j < arr.length; j++){
        if(arr[i] != arr[j]){
            i++ ;
         arr[i] == arr[j]
        }
    }
    return i + 1;
}
const arr = [1,2,4,4,5,2,3];
const result = remove_duplicate(arr);
console.log(result);

                                                 	// kth element of 2 sorted arrays
function kthElement(k, arr1, arr2){
    let combinedArr = [...arr1, ...arr2];
    combinedArr.sort((a,b) => a-b);
    if(combinedArr.length >= k){
        let kthElement = combinedArr[k - 1];
        return kthElement;
    }
    else{
        return 0;
    }
}
const arr1 = [1, 3, 4, 5, 9, 11, 29];
const arr2 = [8, 10, 12, 9,37, 29];
const k = 6;
const result = kthElement(k, arr1, arr2);
console.log(result);


                                               // Longest Sub-Array with Sum K
function lenOfLongSubarr(arr,k){
    let map = new Map();
    let maxLength = 0;
    let currentsum = 0;
    for(let i = 0; i < arr.length; i++){
        currentsum += arr[i];
        if(currentsum === k){        
            maxLength = i + 1;
        }
        if(map.has(currentsum-k)){
            maxLength = Math.max(maxLength, i - map.get(currentsum - k));
        }
        if(!map.has(currentsum)){
            map.set(currentsum, i);
        }
    }
    return maxLength;
}
const arr = [8, 31, 1, 5, 19, 2, 38];
const k = 27;
const result = lenOfLongSubarr(arr,k);
console.log(result);

                                      // Trapping Rain Water
function maxWater(arr,n){
    let res = 0;
  
    for(let i = 1; i < n-1; i++){
        let left = arr[i];
        for(let j = 0; j < i; j++){
            left = Math.max(left, arr[j]);
        }
        let right = arr[i];
        for(let j = i + 1; j < n; j++){
            right = Math.max(right, arr[j]);
        }
        res += Math.min(left, right) - arr[i];
    }
    return res;
}
let arr = [ 0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1 ];
let n = arr.length;

console.log(maxWater(arr, n));


                                                // majority element 
function findMajority(arr, n){
    let maxCount = 0;
    let index = 0;                /* -1*/
    for(let i = 0; i < n; i++){
        let count = 0;

        for(let j = 0; j < n; j++){ 
            if(arr[i] === arr[j]){
                count++ ;
            }
        }
        if(count > maxCount){
            maxCount = count;
            index = i;
        }   
    }
    if(maxCount > n/2){
        console.log("the majority element is :", arr[index])
    }
    else{
        console.log("No majority Element");
    }
}
let arr = [ 1, 1, 2, 1, 3, 5, 1 ];
let n = arr.length;

findMajority(arr, n);

                                     
                                        // Kadane's Algorithm
function maxSubarraySum(arr){
    let sum = 0;
    let max = arr[0];

    for(let i = 0; i < arr.length; i++){
        sum += arr[i];

        if(sum > max){
            max = sum;
        }
        if(sum < 0){
           sum = 0;
        }
    }
    return max;
}

const arr = [-2, -3, 4, -1, -2, 1, 5, -3];
console.log("Maximum contiguous sum is " + maxSubarraySum(arr));

                                   
                                            // merge intervals
function merge(intervals){
    if(intervals.length < 2) {
        return intervals;
    }
    let sorted = intervals.sort((a,b) => a[0] - b[0]);
    let next = [];
    let j = 0;
    let first = intervals.shift();
    next.push(first);
    for (let i = 0; i < intervals.length; i++){
        if(next[j][1] >= intervals[i][0]){
            next[j] = [next[j][0], Math.max(intervals[i][1], next[j][1])];
        }else{
            next.push([intervals[i][0], intervals[i][1]]);
            j++ ;        
        }
    }
    return next;
}
const intervals = [[2,6], [1,3], [8,10], [12,15]];
 const result= merge(intervals);
 console.log(result);


                                            // maximim product subarray
function maxSubarrayProduct(arr, n){
    let result = arr[0];

    for (let i = 0; i < n; i++){
        let mul = arr[i];
        for(let j = i+1; j < n; j++){
            mul *= arr[j];
        }
        result = Math.max(result, mul);
    }
    return result;
}
let arr = [ 1, -2, -3, 0, 7, -8, -2 ];
let n = arr.length;
console.log("Maximum Sub array product is "
    + maxSubarrayProduct(arr, n));



                                         // count inversion of an array
function getInvCount(arr){
    let n = arr.length;
    let inv_count = 0;
    for(let i = 0; i < n-1; i++){
        for(let j = i + 1; j < n; j++){

            if(arr[i] >= arr[j]){
                inv_count++ ;
            }
        }
    }
    return inv_count;
}
    let arr = [4, 3, 2, 1];
console.log(getInvCount(arr));


                                     // Recursion
                                     // Print 1 To N Without Loop
function printNos(N){
    let num = 1;
    let arr = [];
    function rec(N){
    if(num > N){
        return;
    }else{
        arr.push(num++);
         rec(N);
    }
}
rec(N);
console.log(arr.join(" "));
}
const N = 10;
printNos(N);


                                               	// Factorial of N numbers
function factorial(n){
    let fact = 1;
    for(let i = 1; i <= n; i++){
        fact *= i;
    }
    return fact;
}
const n = 5;
const result = factorial(n);
console.log(result);


                                           // Nth Fibonacci Number
function nthFibonacci(n){
    let previous = 0;
    let current = 1;
    for(let i = 0; i < n; i++){
        let next = (previous + current) % 1000000007;
        current = previous;
        previous = next;
    }
    return previous;
}
const n = 10;
const result = nthFibonacci(n);
console.log(result);


                               // Print Pattern 
function pattern(n){
    let output = [n];
    while(n > 0){
        n -= 5;
        output.push(n);
    }
    while(n < output[0]){
        n += 5;
        output.push(n);
    }
    return output;
}
const n = 16;
const result = pattern(n);
console.log(result);
