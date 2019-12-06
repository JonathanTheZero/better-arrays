interface Array<T> {
    selectRandom(n?: number): Array<T>;
    selectOneItem(): T;
    deepcopy(): Array<T>;
    toStringArray(): Array<string>;
    toFloatArray(includeNans?: boolean): Array<number>;
    toIntArray(includeNans?: boolean): Array<number>;
}
