//exercies 1
//check if an array is an arithmethical sequence
console.log("-------Soal 1-------");
function isArithmeticProgression(numbers) {
    var diff = numbers[1] - numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] - numbers[i - 1]!== diff) {
            return false;
        }
    }
    return true;
}

console.log(isArithmeticProgression([1, 2, 3, 4, 5, 6]));
console.log(isArithmeticProgression([2, 4, 6, 12, 24]));
console.log(isArithmeticProgression([2, 4, 6, 8]));
console.log(isArithmeticProgression([2, 6, 18, 54]));
console.log(isArithmeticProgression([1, 2, 3, 4, 7, 9]));

console.log("-------soal 2-------");
//exercises 2
//check if an string contain letter a and b which have 3 characters in between
function threeStepAB(text) {
    if (/[ab]...[ab]/.test(text)===true) {
        return true;
    }else {
        return false;
    }
}

console.log(threeStepAB('lane borrowed'));
console.log(threeStepAB('i am sick'));
console.log(threeStepAB('you are boring'));
console.log(threeStepAB('barbarian'));
console.log(threeStepAB('bacon and meat'));

console.log("-------soal 3-------");
//exercises 3
//return many array of 2 number that sum to parameter
function sumArray(arr, int) {
    var result = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === int) {
                result.push([arr[i], arr[j]]);
            }
        }
    }
    return result;
}

console.log(sumArray([2, 1, 4, 3], 5));
console.log(sumArray([1, 8, 10, 3], 11));

console.log("-------soal 4-------");
//exercises 4
//return sub array of array with max sum of numbers
function arrSum(arr) {
    var max = 0;
    var result = [];
    var totalResult = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            var sum = 0;
            for (let k = i; k <= j; k++) {
                sum += arr[k];
            }
            if (sum > max) {
                max = sum;
                result = arr.slice(i, j + 1);
            }
        }
    }
    totalResult.push(result);
    totalResult.push(max);
    return totalResult;
}

console.log(arrSum([-2, -3, 4, -1, -2, 1, 5, -3]));