let stroka_right = "add";
let temp_right = "egg";

let stroka_not_right = "foo";
let temp_not_right = "bar";
const isIsomorphic = function(s, t) {

    for (let idx = 0; idx < s.length; idx++) {

        if (s.indexOf(s[idx], idx + 1) !== t.indexOf(t[idx], idx + 1)) {

            return false;

        }

    }

    return true;

};
console.log(stroka_right + " " + temp_right + " \n" + isIsomorphic(stroka_right,temp_right) + "\n");
console.log(stroka_not_right + " " + temp_not_right + " \n" + isIsomorphic(stroka_not_right,temp_not_right));