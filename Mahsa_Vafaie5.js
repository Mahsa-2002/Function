function invert(obj) {
    let result = {};
    for (let key in obj) {
        result[obj[key]] = key;
    }
    return result;
}


console.log(invert({ x: 10, y: 20 }));