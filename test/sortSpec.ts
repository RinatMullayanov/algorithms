/// <reference path="../typings/mocha/mocha.d.ts" />
/// <reference path="../typings/chai/chai.d.ts" />

import chai = require("chai");
var expect = chai.expect;

import algorithms = require('../index');
var sort = new algorithms.Sort();

describe('sort', function () {
    // run before every test
    beforeEach(function () {

    });

    it('insertionSort', function () {
        var unSortedArray = [5, 2, 4, 6, 1, 3];
        var sortedArray = [1, 2, 3, 4, 5, 6];

        var test = sort.insertionSort(unSortedArray);
        expect(test).to.deep.equal(sortedArray);
    });

    it('mergeSort', function () {
        var unSortedArray = [5, 2, 4, 6, 1, 3];
        var sortedArray = [1, 2, 3, 4, 5, 6];

        var test = sort.mergeSort(unSortedArray);
        expect(test).to.deep.equal(sortedArray);
    });

});