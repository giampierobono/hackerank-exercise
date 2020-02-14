const selectionSortAscendant = (arrayToSort) => {
    let clone = [...arrayToSort];
    for(let i = 0; i < clone.length; i++) {
        let min_index = i;
        for(let j = i + 1; j < clone.length; j++) {
            if(clone[j] < clone[min_index]) {
                min_index = j;
                const temp = clone[min_index];
                clone[min_index] = clone[i];
                clone[i] = temp;
            }
        }
    }
    return clone;
};

console.log(selectionSortAscendant([1,4,5,2]));
