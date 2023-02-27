let items1 = [[1,1],[4,5],[3,8]];
let items2 = [[3,1],[1,5]];
const mergeSimilarItems = function(items1, items2) {
    let answer = [];
    let map = new Map();

    for (let i = 0; i < items1.length; i++) {
        map.set(items1[i][0], items1[i][1]);
    }

    for (let i = 0; i < items2.length; i++) {
        map.set(items2[i][0], map.get(items2[i][0]) + items2[i][1] || items2[i][1]);
    }

    for (let [key, value] of map) {
        answer.push([key, value]);
    }

    answer.sort((a, b) => a[0] - b[0]);
    return answer;
};

console.log(mergeSimilarItems(items1,items2))