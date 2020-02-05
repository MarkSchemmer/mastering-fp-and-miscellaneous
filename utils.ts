
export const not = (value: boolean): boolean => {
    return !value;
};


export const once = (fn: () => any): () => void  => {
    let done: boolean = false;
    return (...args): void => {
        if (not(done)) {
            fn(...args);
            done = true;
        }
    };
};

export const isNullOrUndefined = (value: unknown): boolean => {
    return value === null || value === undefined; 
}

export const isValue = (value: unknown): boolean => not(isNullOrUndefined(value));

export const isNonEmptySet = (value: unknown[]): boolean =>  isValue(value) && value.length > 0;

export const _not = fn => (...args) => !fn(...args);
