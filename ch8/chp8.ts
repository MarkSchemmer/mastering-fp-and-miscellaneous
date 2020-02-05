import * as fs from "fs";
import { partialApplication, curry } from "../chp7/chp7";

/*
    chapter 8 notes

    - create a pipe 
    - create a tap function to debug your code as is... using pipes... 

    - create the code example of reading files and then piping them together... 

    I'm going to create a file that reads all the files in this folder and then 
    gives me the count of all .ts files in this folder... 

*/

export const getDirectory = (path: string) => {
    const files = fs.readdirSync(path);
    return files;
};

export const getTypeOfFile = (files: string[], ext: string) => {
    return files.filter(file => file.indexOf(ext) > -1);
};

export const getCount = (files: string[]) => {
    return files.length;
};

// version with function composotion...

/*
    The issue with function with compositon is that 
    it starts to get confusing and complicated the functions 
    that are needed, I used a trival example 
    but you probally get my point... 
*/
export const filesCountResult = (path: string) =>  getCount(getTypeOfFile(getDirectory(path), ".ts"));



const pipe = (...fns) => fns.reduce((result, fn) => (...args) => fn(result(...args))); // pipe operators... 


export const getDirCount = (path: string, ext: string) => {
    // need to partila application getTypeOfFile to set params here
    const partialTypeOfFile = partialApplication(getTypeOfFile, undefined, ext);
    return pipe(
       getDirectory,
       partialTypeOfFile,
       getCount
    )(path)
};

/*
    The idea of debugging in pipes... you wrap a higer order function that logs everything 
    like we did in earlier chapters to discover things that went wrong... 

    this is a good strategy for how tell what values are what...

    so add a tap side effect... 

*/
// executes the function and then returns the original un altered value 
// for debugging value...
const tap = curry( (fn, x) => (fn(x), x) );

// 8.1: Headline capitalization, capitalizing first word of every sentence
// need to solve this problem using pipling

const splitSentence = sentence => sentence.split(" ");

const makeFirstWordUpperCase = set => 
        set.map(
            word => word
                    .toLowerCase()
                    .split("")
                    .map((c, i) => i === 0 ? c.toUpperCase() : c)
        );

const makeSetAString = arr => arr.map(set => set.join("")).join(" ");

export const capHeadLine = sentence => pipe(
    splitSentence,
    makeFirstWordUpperCase,
    makeSetAString
)(sentence);
