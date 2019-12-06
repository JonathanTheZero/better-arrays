"use strict";
/**
 * @method: Returns n elements out of the array as a new array
 * @param n: Amount of elements, default is an array with only one element
 * @returns: n elements out of the array as a new array
 */
Array.prototype.selectRandom = function (n = 1) {
    if (this.length == 2) {
        return (Math.random() > 0.5) ? [this[0]] : [this[1]];
    }
    var result = new Array(n), len = this.length, taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = this[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
};
/**
 * @method: Returns a random element of the array
 * @returns: one item out of the array
 */
Array.prototype.selectOneItem = function () {
    return this[Math.round(Math.random() * this.length)];
};
/**
 * @method: Returns a deep copy of the array
 * @return: A deep copy of the array
 */
Array.prototype.deepcopy = function () {
    return $.extend(true, [], this);
};
/**
     * @method: Parses all values of the arrays to strings
     * @returns: A new array only containing stringified values
     */
Array.prototype.toStringArray = function () {
    let x = [];
    for (let i = 0; i < this.length; ++i) {
        x[i] = this[i].toString();
    }
    return x;
};
/**
* @method: Parses all values of the arrays to numbers
* @returns: A new array only containing parsed values
*/
Array.prototype.toFloatArray = function () {
    let x = [];
    for (let i = 0; i < this.length; ++i) {
        x[i] = parseFloat(this[i]);
    }
    return x;
};