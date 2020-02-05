
export type CanBeStringOrNumber = string | number;

export interface ReadableNumbers {
    readableNumbers: CanBeStringOrNumber[];
    newTotalTime: number;
}

const millisendonds: number = 1;
const minute: number = 60;
const hour: number = 3600;
const day: number = 216000;
const year: number = 78840000;

const decrements = [ hour, minute, millisendonds ];

const convertNumbToReadableFormat = (numb: number): string => numb < 10 ? "0"+ numb : numb.toString();

const getHowManyTimeIncrement = (TotalMiliseconds: number, decrement: number) => {
    const howManyInto = Math.floor(TotalMiliseconds / decrement);
    const newTotal = TotalMiliseconds - (howManyInto) * decrement;
    const payLoad = {
        howManyInto,
        newTotal
    }; 

    return payLoad;
};

const generateReadableNumbers = (readableNumbersObj: ReadableNumbers, timeDecrement: number): ReadableNumbers => {
    const { readableNumbers, newTotalTime } = readableNumbersObj;
    const { howManyInto, newTotal } = getHowManyTimeIncrement(newTotalTime, timeDecrement);
    const newObj: ReadableNumbers = { readableNumbers: [...readableNumbers, convertNumbToReadableFormat(howManyInto)], 
                                      newTotalTime: newTotal 
    };
    return newObj;
};

const createReadableNumbers = (totalTime: number) => () => {

    const startObj: ReadableNumbers = {
        readableNumbers: [],
        newTotalTime: totalTime
    };

    const { readableNumbers } = decrements.reduce(generateReadableNumbers, startObj);
    const [hour, minute, millisendonds ] = readableNumbers;
    
    return `${hour}:${minute}:${millisendonds}`;
}

const humanReadable = (seconds: number): string => createReadableNumbers(seconds)();
