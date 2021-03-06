
/*
    - Create a deep freeze
        for obj and for array... 
    - Create a deepClone and not using the simply JSON.parse(JSON.stringify(obj))...
    - Create a function for getting they so it's getAttr  = (path: Array, obj: object) => returns prop or undefined 
    - Create a function for setting an property over the a path  so it's setByPath = (path, item, obj) => returns true if possible other wise false 
    - Create a update object will update an object and then return a new frozen object
*/

export const deepFreeze = obj => {
    if (typeof obj === "object" && !Object.isFrozen(obj)) {
        const frozenObject = Object.freeze(obj);
        Object.getOwnPropertyNames(frozenObject).forEach(prop => {
            deepFreeze(frozenObject[prop]);
        });
    }

    return obj;
};

export const deepClone = obj => {
    let aux = obj;
    if (obj && typeof obj === "object") {
        aux = { ...obj };
        Object.getOwnPropertyNames(aux).forEach(prop => {
            aux[prop] = deepClone(aux[prop]);
        });
    } 

    return aux;
};

export const getAttr = (path, obj) => {
    return path.length === 1 && path[0] in obj 
           ? deepClone(obj[path[0]]) : path[0] in obj 
           ?  getAttr(path.slice(1), obj[path[0]]) : undefined;
};

export const setPropByPath = (path, item, obj) => {
    const findAttrAndSetVal = (p, i, o) => {
        return p.length === 1 && path[0] in o
               ? (o[path[0]] = i, true) 
               : path[0] in o
               ? findAttrAndSetVal(p.slice(1), i, o[path[0]])
               : false; 
    };

    return findAttrAndSetVal(path, item, obj);
};

export const updateObject = (path, obj, value) => {
    const clone = deepClone(obj);
    const val = setPropByPath(path, clone, value);
    return deepFreeze(clone);
};
