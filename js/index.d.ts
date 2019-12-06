interface Array<T> {
    selectRandom(n?: number): Array<T>;
    selectOneItem(): T;
    deepcopy(): Array<T>;
    toStringArray(): Array<string>;
    toFloatArray(): Array<number>;
}
declare let x: string[];
