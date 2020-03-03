const areInputsValid = ({arrayLengh, queries}) => 
    arrayLengh >= 3 &&
    arrayLengh <= Math.pow(10, 7) &&
    queries.length >= 1 &&
    queries.length <= 2 * Math.pow(10, 5);

const arrayManipulationPerf = (n, queries) => {
    if(!areInputsValid({arrayLengh: n, queries})) {
        return Number.MIN_SAFE_INTEGER;
    }

    let from = queries[0][0];
    let to = queries [0][1];
    let max = queries [0][2];
    
    for(let i = 1; i < queries.length; i++) {
        console.log("max: " + max + ", from: " + from + ", to: " + to);
        console.log(queries[i]);
        if((queries[i][0] >= from && queries[i][0] <= to) ||
           (queries[i][0] <= from && queries[i][1] >= from) ||
           (queries[i][0] > from && queries[i][1] > to) ||
           (queries[i][0] < from && queries[i][1] > to) ) {
            max += queries[i][2];
            from = from > queries[i][0] ? from : queries[i][0];
            to = to > queries[i][1] ? queries[i][1] : to;
        } else if(queries[i][2] > max) {
            from = queries[i][0];
            to = queries[i][1];
            max = queries[i][2];
        }
    }

    return max;
}
const arrayManipulation = (n, queries) => {
    if(!areInputsValid({arrayLengh: n, queries})) {
        return Number.MIN_SAFE_INTEGER;
    }

    let maxValue = 0;
    const array = [];
    
    for(let i = 0; i< queries.length; i++) {
        console.log(queries[i]);
        for(let j = (queries[i][0] - 1); j < (queries[i][1]); j++) {
            array[j] = (array[j] || 0) + queries[i][2];
            if(maxValue < array[j]) {
                maxValue = array[j];
            }
        }
    }

    return maxValue;
}

// console.log(arrayManipulation(10, [[2,6,8],[3,5,7], [1,8,1], [5, 9, 15]]))
console.log(arrayManipulationPerf(5, [[1,2,100],[2,5,100], [3,4,100], [3,5,100],[3,5,100]]))