let arr = [1,2,3];
const reversArray = function (x)
{
let k=1;//step
for (let i = 0; i < k; i++)
    x.unshift(x.pop());

return x;

}

console.log(reversArray(arr));