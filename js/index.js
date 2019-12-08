"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var staticArray = /** @class */ (function (_super) {
    __extends(staticArray, _super);
    function staticArray(n) {
        var _this = this;
        if (typeof n === "number") {
            _this = _super.call(this, n) || this;
        }
        else if (Array.isArray(n)) {
            _this = _super.apply(this, n) || this;
        }
        else {
            throw new TypeError("staticArray constructor: Arguments have to be a number or an Array");
        }
        return _this;
    }
    return staticArray;
}(Array));
/**
 * @method: Returns n elements out of the array as a new array
 * @param n: Amount of elements, default is an array with only one element
 * @returns: n elements out of the array as a new array
 */
Array.prototype.selectRandom = function (n) {
    if (n === void 0) { n = 1; }
    if (this.length == 2) {
        return (Math.random() > 0.5) ? [this[0]] : [this[1]];
    }
    var result = new Array(n), len = this.length, taken = new Array(len);
    if (n > len)
        throw new RangeError("selectRandom: more elements taken than available");
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
 * @method: Returns a deep copy of the array using recursion
 * @return: A deep copy of the array
 */
Array.prototype.deepcopy = function () {
    var clone = function (items) { return items.map(function (item) { return Array.isArray(item) ? clone(item) : item; }); };
    return clone(this);
};
/**
 * @method: Returns a shallow copy of the array
 * @return: A shallow copy of the array
 */
Array.prototype.shallowCopy = function () {
    return __spreadArrays(this);
};
/**
 * @method: Parses all values of the arrays to strings
 * @returns: A new array only containing stringified values
 */
Array.prototype.toStringArray = function () {
    var x = [];
    for (var i = 0; i < this.length; ++i) {
        x[i] = this[i].toString();
    }
    return x;
};
/**
* @method: Parses all values of the arrays to numbers
* @returns: A new array only containing parsed values
* @param includeNaNs: Whether the Array should keep the same size or remove them, default is false
*/
Array.prototype.toFloatArray = function (includeNaNs) {
    if (includeNaNs === void 0) { includeNaNs = false; }
    var x = [];
    for (var i = 0; i < this.length; ++i) {
        var y = parseFloat(this[i]);
        if (!includeNaNs) {
            if (!isNaN(y))
                x.push(y);
        }
        else {
            x[i] = y;
        }
    }
    return x;
};
/**
* @method: Parses all values of the arrays to numbers
* @returns: A new array only containing parsed values
* @param includeNaNs: Whether the Array should keep the same size or remove them, default is false
*/
Array.prototype.toIntArray = function (includeNaNs) {
    if (includeNaNs === void 0) { includeNaNs = false; }
    var x = [];
    for (var i = 0; i < this.length; ++i) {
        var y = parseInt(this[i]);
        if (!includeNaNs) {
            if (!isNaN(y))
                x.push(y);
        }
        else {
            x[i] = y;
        }
    }
    return x;
};
/**
 * @method: Returns an array of numbers sorted by value
 */
Array.prototype.sortNumeric = function () {
    this.sort(function (a, b) { return a - b; });
};
/**
 * @method: Removes the given item from the array
 * @param item: The value of the item that should be removed
 */
Array.prototype.remove = function (item) {
    this.splice(this.indexOf(item), 1);
};
/**
 * @method: Deleting the given item from the array without changing the indexes of the other items
 * @param item: The value of the item that should be deleted
 */
Array.prototype.delete = function (item) {
    delete this[this.indexOf(item)];
};
/**
 * @method: Replacing a given item in the array
 * @param oldItem: The object that should be replaces
 * @param newItem: The object that replaces the old item
 */
Array.prototype.replace = function (oldItem, newItem) {
    this[this.indexOf(oldItem)] = newItem;
};
