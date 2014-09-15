/**
 * Created by Rinat on 14.09.14.
 */

var sort = {};
sort.insertionSort = function (array) {
    var i, j, length, key;
    // http://stackoverflow.com/questions/3978492/javascript-fastest-way-to-duplicate-an-array-slice-vs-for-loop
    var A = array.slice(0); // shallow copy array

    for (j = 1, length = A.length; j < length; j++) {
        key = A[j];
        i = j - 1;

        while (i >= 0 && A[i] > key) {
            A[i + 1] = A[i];
            i = i - 1;
        }

        A[i + 1] = key;
    }

    return A;
}

function merge(left, right) {
    var result = [];

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    while (left.length) {
        result.push(left.shift());
    }

    while (right.length) {
        result.push(right.shift());
    }

    return result;
}
function mergeSort(array) {
    if (array.length < 2) {
        return array;
    }

    var middle = Math.floor(array.length / 2);
    // slice - get part array from start to end - 1
    var left = array.slice(0, middle);
    var right = array.slice(middle, array.length);

    return merge(mergeSort(left), mergeSort(right));
}

sort.mergeSort = mergeSort;

module.exports = sort;