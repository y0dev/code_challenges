
var twoSum = function(nums, target) {
    let indexes = [];
    nums.sort();
    console.log(nums);
    var lhs = 0, rhs = nums.length - 1;
    while(lhs < rhs) {
        var sum = nums[lhs] + nums[rhs];
        console.log(sum);
        if(sum == target) {
            indexes.push(lhs,rhs);
            lhs++;
            rhs--;
        }
        else if (sum < target)
            lhs ++;
        else 
            rhs --;
    }
    return indexes;
};

const array1 = [2,7,11,15];
const array2 = [3,2,4];
const array3 = [3,2,3];

const sums1 = twoSum(array2,6);
console.log(sums1);
/*
const sums2 = twoSum(array2,6);
console.log(sums2);

const sums3 = twoSum(array3,6);
console.log(sums3);
*/