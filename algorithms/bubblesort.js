const bubblesort = (array) => {
    if(!array || (array && array.length <= 1)) {
        return array;
    }
    const clone = [...array];
    for(let i=0; i<clone.length; i++) {
        for(let j=i; j<clone.length; j++){ 
            if(clone[i] > clone[j]) {
                const temp = clone[j];
                clone[j] = clone[i];
                clone[i] = temp;
            }
            console.log(clone);
        }
    }
    return clone;
}

console.log(bubblesort([9,8,7,6,5,4,3,2,1]));