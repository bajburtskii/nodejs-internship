let a = "ert43 er ertertdfg dfer";
let s = "re4tt7er";
let b = "race a car"
a = a.replace(/[^a-z]/ig, "");
s = s.replace(/[^a-z]/ig, "");
b = b.replace(/[^a-z]/ig, "");

console.log("s = " + s);
console.log("a = " + a);
console.log("b = " + b);
function polindrom(str) {
    return str === str.split('').reverse().join('');
}
console.log("\n" + b + " " + polindrom(b))
console.log("\n" + s + " " + polindrom(s));
console.log("\n" + a + " " + polindrom(a));