const bubbleSort = (arrayToSort) => {
    const clone = [...arrayToSort];

    for(let i = 0; i < arrayToSort.length - 1; i++) {
        for(let j = i; j < arrayToSort.length - 1 - i; j++) {
            if(clone[j] > clone[j + 1]) {
                const temp = clone[j];
                clone[j] = clone[j + 1];
                clone[j + 1] = temp;
            }
        }
    }
    return clone;
};

console.log(bubbleSort([2,1,5,4,7,6,9,8]));
