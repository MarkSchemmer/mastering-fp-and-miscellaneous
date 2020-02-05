    type CanBeStringOrNumber = string | number;

    interface ReadableNumbers {
        readableNumbers: number[];
        newTotalTime: number;
    }

    const now = "now";
    const second: number = 1;
    const minute: number = 60;
    const hour: number = 3600;
    const day: number = 86400;
    const year: number = 31536000;

    const decrements = [ year, day, hour, minute, second ];

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
        const newObj: ReadableNumbers = { readableNumbers: [...readableNumbers, howManyInto], 
                                          newTotalTime: newTotal 
        };
        return newObj;
    };

    const createFormatDuration = (seconds: number): string => {

        const startObj: ReadableNumbers = {
            readableNumbers: [],
            newTotalTime: seconds
        };

        const { readableNumbers } = decrements.reduce(generateReadableNumbers, startObj);

        const [ year, day, hour, minute, second ] = readableNumbers;

        const times = { year, day, hour, minute, second };

        const result = Object.keys(times).reduce((acc, cur, idx) => {
            const tKey = cur;
            const tValue = times[tKey];

            if (tValue === 0) {
                return acc;
            }

            return [...acc, tKey + " " + tValue + (tValue > 1 ? "s" : "")];

        }, []);

        const finalResult = result.length === 1 
        ? result[0] 
        : result.reduce((acc, cur, idx) => {
            return idx === result.length - 1 ? acc + " and " + cur : acc + cur + ", ";
        }, "");

        return finalResult;
    };

    const formatDuration = (seconds: number): string => seconds === 0 ? now : createFormatDuration(seconds);