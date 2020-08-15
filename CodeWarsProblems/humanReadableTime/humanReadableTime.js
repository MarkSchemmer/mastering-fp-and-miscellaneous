const now = "now";
const second = 1;
const minute = 60;
const hour = 3600;
const day = 86400;
const year = 31536000;

const genStartObj = (seconds) =>({
    readableNumbers: [],
    newTotalTime: seconds
});

const decrements = [ year, day, hour, minute, second ];
const timeNames =  [ "year", "day", "hour", "minute", "second" ];

const getHowManyTimeIncrement = (TotalMiliseconds, decrement) => {
    const howManyInto = Math.floor(TotalMiliseconds / decrement);
    const newTotal = TotalMiliseconds - (howManyInto) * decrement;
    return { howManyInto, newTotal };
};

const generateReadableNumbers = (readableNumbersObj, timeDecrement) => {
    const { readableNumbers, newTotalTime } = readableNumbersObj;
    const { howManyInto, newTotal } = getHowManyTimeIncrement(newTotalTime, timeDecrement);
    return { 
        readableNumbers: [...readableNumbers, howManyInto], 
        newTotalTime: newTotal 
    };
};

const genNumbAndTimePart = (acc, val, key) => tValue === 0 ? acc : [...acc,  val + " " + key + (val > 1 ? "s" : "")]; 

const genReadableNumbsAndTimes = (readableNumbs, tmNames = timeNames) => 
                                readableNumbs.reduce((acc, cur, idx) => genNumbAndTimePart(acc, cur, tmNames[idx]), []);

const genResult = res => res.length === 1 ? res[0] 
                                          : res.reduce( 
                                                    (acc, cur, idx) =>  idx === res.length - 1 
                                                                ? acc + "and " + cur 
                                                                : acc + cur + (idx + 1 !== res.length - 1 ? ", ": " "), "");

const createFormatDuration = (seconds) => genResult(
        genReadableNumbsAndTimes(
            decrements
            .reduce(generateReadableNumbers, genStartObj(seconds))
            .readableNumbers
        )
    );

const formatDuration = (seconds) => seconds === 0 ? now : createFormatDuration(seconds);
