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

/* 
 * Write a function that takes to inputs n and m
 * and outputs the number of unique paths from
 * top left corner to bottom right corner of a
 * n x m grid.
 * 
 * Constraints: You can only move down or 
 * right 1 unit at a time
 *
 * Ex : (n = 2, m = 4): grid_paths = 4
 *      (n = 0, m = 0): grid_paths = 0
 *      (n = 1, m = 0): grid_paths = 1
 *      (n = 2, m = 0): grid_paths = 1
 *      (n = 0, m = 1): grid_paths = 1
 *      (n = 0, m = 2): grid_paths = 1
 *      (n = 1, m = 1): grid_paths = 1
 *      (n = 1, m = 2): grid_paths = 1
 *      (n = 2, m = 2): grid_paths = 2
 *      (n = 2, m = 3): grid_paths = 3
 *      (n = 2, m = 4): grid_paths = 4
 *      (n = 3, m = 2): grid_paths = 3
 *      (n = 4, m = 2): grid_paths = 4
 * 
 */ 

 var grid_paths = (n,m) => {
     // Base Case
     if( n == 1 || m == 1)
        return 1;
    else
        return grid_paths(n - 1, m) + grid_paths(n, m - 1);
 }

console.log(grid_paths(2,4));
console.log(grid_paths(1,5));
console.log(grid_paths(3,3));