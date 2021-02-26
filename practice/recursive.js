/*
 *  Solve a recursive problem
 *  1) What's the simplest possible input? (Base Case)
 *  2) Play around with examples and visualize
 *  3) Relate hard cases to simpler cases
 *  4) Generalize the pattern
 *  5) Write code by combining recursive 
 *     patterns with the bases case
 */

/* 
 * Write a function that given an input n
 * sums all nonnegative integers up to n
 *
 * Ex : (n = 4): 0 + 1 + 2 + 3 + 4 = 10
 *      (n = 3): 0 + 1 + 2 + 3 = 6
 *      (n = 2): 0 + 1 + 2 = 3
 *      (n = 1): 0 + 1 = 1
 *      (n = k): 0 + 1 + 2 + 3 + ... + k
 *          k + sum(k - 1)
 */ 

 var sum = (n) => {
     // Base Case
    if(n == 0)
        return 0;
    else 
        return n + sum(n - 1);
 }

console.log(sum(4));
console.log(sum(5));
console.log(sum(14));

