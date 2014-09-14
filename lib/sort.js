/**
 * Created by Rinat on 14.09.14.
 */

var sort = {};
sort.insertionSort = function(array) {
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

module.exports = sort;