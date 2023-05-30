
export function doubleInteger(i) {
    // i will be an integer. Double it and return it.
    return i * 2;
}

export const romanToNumeral = (romanNumeral) => {

    let map = {
        "I": 1,
        "IV": 4,
        "V": 5,
        "IX": 9,
        "X": 10,
        "XL": 40,
        "L" : 50,
        "XC": 90,
        "C": 100,
        "CD": 400,
        "D": 500,
        "CM": 900,
        "M": 1000 
    };
    let sum = 0;
    let r = romanNumeral.split("");
    while (r.length > 0) {
        let [f, s, ...res] = r;
        
        if (f && s && f+s in map) {
            sum = sum + map[f+s];
            r = res;
        } else {
            sum = sum + map[f];
            r = s === undefined ? [] : [s, ...res]; 
        }
    }

    return sum;
}

