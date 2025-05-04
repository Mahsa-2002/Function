function average(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return arr.length === 0 ? 0 : sum / arr.length;
}

console.log(average([5, 10, 15]));