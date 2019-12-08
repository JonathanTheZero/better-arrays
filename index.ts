export {

}

declare global {
    interface Array<T> {
        selectRandom(n?: number): Array<T>;
        selectOneItem(): T;
        deepcopy(): Array<T>;
        shallowCopy(): Array<T>;
        toStringArray(): Array<string>;
        toFloatArray(includeNans?: boolean): Array<number>;
        toIntArray(includeNans?: boolean): Array<number>;
        sortNumeric(): void;
        remove(item: T): void;
        delete(item: T): void;
        replace(oldItem: T, newItem: T): void;
    }
    class staticArray<T> extends Array<T> {
        constructor(n: number | Array<T>);
    }
}

class staticArray<T> extends Array<T> {
    constructor(n: number |  Array<T>){
        if(typeof n === "number"){
            super(n);
        } 
        else if(Array.isArray(n)){
            super(...n);
        } 
        else {
            throw new TypeError("staticArray constructor: Arguments have to be a number or an Array");
        }
    }
}

/**
 * @method: Returns n elements out of the array as a new array
 * @param n: Amount of elements, default is an array with only one element
 * @returns: n elements out of the array as a new array
 */
Array.prototype.selectRandom = function (n = 1) {
    if (this.length == 2) {
        return (Math.random() > 0.5) ? [this[0]] : [this[1]];
    }
    var result = new Array(n),
        len = this.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("selectRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = this[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}

/**
 * @method: Returns a random element of the array
 * @returns: one item out of the array
 */
Array.prototype.selectOneItem = function () {
    return this[Math.round(Math.random() * this.length)];
}

/**
 * @method: Returns a deep copy of the array using recursion
 * @return: A deep copy of the array
 */
Array.prototype.deepcopy = function () {
    const clone = (items: any) => items.map((item: any) => Array.isArray(item) ? clone(item) : item);
    return clone(this);
}

/**
 * @method: Returns a shallow copy of the array
 * @return: A shallow copy of the array
 */
Array.prototype.shallowCopy = function () {
    return [...this];
}

/**
 * @method: Parses all values of the arrays to strings
 * @returns: A new array only containing stringified values
 */
Array.prototype.toStringArray = function () : Array<string> {
    let x: Array<string> = [];
    for (let i = 0; i < this.length; ++i) {
        x[i] = this[i].toString();
    }
    return x;
}

/**
* @method: Parses all values of the arrays to numbers
* @returns: A new array only containing parsed values
* @param includeNaNs: Whether the Array should keep the same size or remove them, default is false
*/
Array.prototype.toFloatArray = function (includeNaNs=false) : Array<number> {
    let x: Array<number> = [];
    for (let i = 0; i < this.length; ++i) {
        let y: number = parseFloat(this[i]);
        if(!includeNaNs){
            if(!isNaN(y)) x.push(y);
        }
        else {
            x[i] = y;
        }
    }
    return x;
}

/**
* @method: Parses all values of the arrays to numbers
* @returns: A new array only containing parsed values
* @param includeNaNs: Whether the Array should keep the same size or remove them, default is false
*/
Array.prototype.toIntArray = function (includeNaNs=false) : Array<number> {
    let x: Array<number> = [];
    for (let i = 0; i < this.length; ++i) {
        let y: number = parseInt(this[i]);
        if(!includeNaNs){
            if(!isNaN(y)) x.push(y);
        }
        else {
            x[i] = y;
        }
    }
    return x;
}

/**
 * @method: Returns an array of numbers sorted by value
 */
Array.prototype.sortNumeric = function() {
    this.sort((a, b) => a - b);
}

/**
 * @method: Removes the given item from the array
 * @param item: The value of the item that should be removed
 */
Array.prototype.remove = function(item) {
    this.splice(this.indexOf(item), 1);
}

/**
 * @method: Deleting the given item from the array without changing the indexes of the other items
 * @param item: The value of the item that should be deleted
 */
Array.prototype.delete = function(item) {
    delete this[this.indexOf(item)];
}

/**
 * @method: Replacing a given item in the array
 * @param oldItem: The object that should be replaces
 * @param newItem: The object that replaces the old item
 */
Array.prototype.replace = function(oldItem, newItem) {
    this[this.indexOf(oldItem)] = newItem;
}