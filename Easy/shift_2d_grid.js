/*
 * Given a 2D grid of size m x n and an integer k. You need to shift the grid k times.
 * In one shift operation:
 *      Element at grid[i][j] moves to grid[i][j + 1].
 *      Element at grid[i][n - 1] moves to grid[i + 1][0].
 *      Element at grid[m - 1][n - 1] moves to grid[0][0].
 * Return the 2D grid after applying shift operation k times.
 *
 * 
 * 
 * 
 * 
 * 
 */ 


/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
    // Store all element into list
    let list = [];
    let newGrid = new Array();
    for(var row = 0; row < grid.length;row++) {
        for(var col = 0; col < grid[row].length;col++) {
            list.push(grid[row][col]);
        }
    }
    // Append to front while popping off back
    while(k > 0) {
        list.unshift(list.pop());
        k--;
    }
    
    for(var row = 0; row < grid.length;row++) {
        let tempRow = new Array();
        for(var col = 0; col < grid[row].length;col++) {
            tempRow.push(list.shift())
        }
        newGrid.push(tempRow);
    }
    return newGrid;
};

console.log(shiftGrid([[1,2,3],[4,5,6],[7,8,9]],1));
console.log(shiftGrid([[3,8,1,9],[19,7,2,5],[4,6,11,10],[12,0,21,13]],4));