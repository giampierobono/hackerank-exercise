const insertionSort = (arrayToSort) => {
    const clone = [...arrayToSort];
    let currentValue;
    let j;
    for(let i = 1; i < clone.length; i++){
        j = i - 1;
        currentValue = clone[i];

        while(j >= 0 && clone[j] > currentValue) {
            clone[j+1] = clone[j];
            j--;
        }
        clone[j+1] = currentValue;
    }
    return clone;
};

console.log(insertionSort([3,5,9,7,1]));
