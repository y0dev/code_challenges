
var twoSum = function(nums, target) {
    let indexes = [];
    for(let i = 0;i <nums.length; i++)
    {
        
        const num1 = nums[i];
        if (i+1 < nums.length)
        {
            for (let j = i+1; j < nums.length; j++) {
                const num2 = nums[j];
                if (num1 + num2 === target)
                {
                    indexes.push(i,j);
                }
            }
            
        }   
    }
    return indexes;
};

const array1 = [2,7,11,15];
const array2 = [3,2,4];
const array3 = [3,2,3];

const sums1 = twoSum(array1,9);
console.log(sums1);

const sums2 = twoSum(array2,6);
console.log(sums2);

const sums3 = twoSum(array3,6);
console.log(sums3);

var reverse = function(x) 
{
    
}