let array1 = ["flower", "flow", "flight"];

let array2 =  ["dog","racecar","car"];

function prefix(array) {
    if (!Array.isArray(array) || array.length === 0) return "";

    let s = "",
        count1 = array[0].length,
        count2 = array.length;
    for (let i = 0; i < count1; ++i) {
        let equals = true,
            c = array[0][i];
        for (let j = 1; j < count2; ++j) {
            if (c != array[j][i]) {
                equals = false;
                break;
            }
        }
        if (equals)
            s += c;
    }
    return s;
}
console.log("Array1 = " + prefix(array1));
console.log("Array2 = " + prefix(array2) + " empty");

