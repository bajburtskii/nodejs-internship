let arrayNums = [2, 7, 9, 11];
let target = 9;
let twoSum = function(nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];
        if (map.has(diff)) {
            return [map.get(diff), i];
        }
        map.set(nums[i], i);
    }
    return [];
};
console.log(twoSum(arrayNums,target))