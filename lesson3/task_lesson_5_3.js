let arr = [11,2,3,9];
let first_element = arr[0];
let last_element = arr.slice(-1)[0];
console.log(first_element + ", " + last_element + " = array number one");

let array = [1,2,3,9];
let first_element1 = array[0];
let last_element2 = array.slice(-1)[0];
console.log(first_element1 + ", " + last_element2 + " = array number two");
function proverka(s,x){
    if (s > x){
        arr = new Array(arr.length).fill(s);
        return arr;
    }
    else{
        arr = new Array(arr.length).fill(x);
        return arr;
    }
}

console.log(proverka(first_element,last_element));
console.log(proverka(first_element1,last_element2));