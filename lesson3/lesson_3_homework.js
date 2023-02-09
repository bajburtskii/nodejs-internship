let a = "ert43";
let s = "re4tt7er";
let b = "race a car"
console.log(b + "\n");
let regex0 = / /ig;
b = b.replace(regex0,"")
let regex = /4/ig;
s = s.replace(regex,"");
let regex1 = /7/ig;
s = s.replace(regex1,"");
let regex2 = /4/ig;
a = a.replace(regex2,"");
let regex3 = /3/ig;
a = a.replace(regex3,"");
let regex4 = /5/ig;
a = a.replace(regex4,"");
let regex5 = /6/ig;
a = a.replace(regex5,"");
console.log("s = " + s);
console.log("a = " + a);
console.log("b = " + b);
function polindrom(str) {
    return str === str.split('').reverse().join('');
}
console.log("\n" + b + " " + polindrom(b))
console.log("\n" + s + " " + polindrom(s));
console.log("\n" + a + " " + polindrom(a));