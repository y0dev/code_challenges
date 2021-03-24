/**
 * Merge Sort
 * 
 * Time Complexity O(nlog(n)) Space Complexity O(n)
 * 
 * 
 * 
 * @param {Array} array
 * @return {Array}
 */

function mergeSort(array) {
    return mergeSortRecursion(array);
}

function mergeSortRecursion(array) {
    if (array.length === 1)
        return array;
    let leftArray = array.slice(0,Math.floor(array.length/2));
    let rightArray = array.slice(Math.floor(array.length/2));
    return merge(mergeSortRecursion(leftArray),mergeSortRecursion(rightArray));
}

function merge(leftArray,rightArray) {
    let numLA = leftArray.length;
    let numRA = rightArray.length;
    let array = [];
    
    let i = 0, j = 0, k = 0;
    while(i < numLA && j < numRA) {
        if(leftArray[i] <= rightArray[j]) {
            array[k] = leftArray[i];
            i++;
        } else {
            array[k] = rightArray[j];
            j++;
        }
        k++;
    }
    while(i < numLA) { 
        array[k] = leftArray[i];
        i++; k++;
    }
    while(j < numRA) { 
        array[k] = rightArray[j];
        j++; k++;
    }

    // console.log(array);
    return array;
}


let sampA = [9,3,5,2,1,0,4,7,5]
console.log(sampA);
console.log(mergeSort(sampA));

let sampB = [9,2,3,4,7,5,-4,6,1]
console.log(sampB);
console.log(mergeSort(sampB));