export {};
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
}
