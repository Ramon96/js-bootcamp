function range(start, end, step=-1){
    let rangeArr = [];
    for(let i = start; i <= end; i+= step){
        rangeArr.push(i);
    }
    return rangeArr;
}

function sum(numberArr){
   let total = 0;
    for(let i in numberArr){
        total += numberArr[i];
    }
    return total;
}
