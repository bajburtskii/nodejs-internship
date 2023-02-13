let array = [98,2,3,4,5];
first_element = array[0]
last_element = array.pop()

let array1 = [1,2,3,4,5];
first_element1 = array1[0]
last_element1 = array1.pop()
function proverka(s,x) {
    if (s === 1 || x === 1) {
        return true;
    } else {
        return false;
    }
}

console.log(proverka(first_element,last_element))
console.log(proverka(first_element1,last_element1))
