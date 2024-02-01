
/*
        8 kyu Multiplication table for number

        Link: https://www.codewars.com/kata/5a2fd38b55519ed98f0000ce/train/javascript

        Description: 

            Your goal is to return multiplication table for number that is always an integer from 1 to 10.

            For example, a multiplication table (string) for number == 5 looks like below:

            1 * 5 = 5
            2 * 5 = 10
            3 * 5 = 15
            4 * 5 = 20
            5 * 5 = 25
            6 * 5 = 30
            7 * 5 = 35
            8 * 5 = 40
            9 * 5 = 45
            10 * 5 = 50

            P. S. You can use \n in string to jump to the next line.
*/

const multiTable = n => {
    return ([ ...Array(10)].map((n, i) => i + 1).reduce((acc, cur) => acc + `${cur} * ${n} = ${cur * n}\n`, "")).trim("\n");  
};
export const res = multiTable(5);

let storageOfPalindromes = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33, 44, 55, 66, 77, 88, 99, 101, 
  ];
  
  const isPalindromHelper = str => {
    if (str.length === 1) return true;
    let half = Math.floor(str.length / 2);
    let firstHalf = str.split("").slice(0, half).join("");
    return str.endsWith(firstHalf);
  }
  
  const countPalindromes = (a, b) => {
      //code here
      let palimdroneCount = 0;
      a = Math.ceil(a);
      b = Math.floor(b);
      
    let i = a;
  
      while(i <= b) {
          console.log(i);
          if (i in storageOfPalindromes) {
            palimdroneCount = palimdroneCount + 1;
          }
          else  {
              let res = i < 101 ? (i in storageOfPalindromes) : isPalindromHelper(i.toString());
            
              if (res) {
                  storageOfPalindromes.push(i);
                  palimdroneCount = palimdroneCount + 1;
              }
          }
        
        if (i < 101) {
          i+=1;
        }
        else {
          i+=10;
        }
        
      } 
  
      return palimdroneCount;
    }

/*
    Pig latin is created by taking all the consonants before the first vowel
    of a word and moving them to the back of the word followed by the letters "ay".

    "hello" => "ellohay"
    "creating" => "eatingcray"

    If the first letter of the word is a vowel, the string is left the same and the letters "way" are appended to the end.

    "algorithm" => "algorithmway"
    This problem is different from other variations in that it expects casing to remain the same so:

    "Hello World" => "Ellohay Orldway"
    as well as punctuation.

    "Pizza? Yes please!" => "Izzapay? Esyay easeplay!"
    Your job is to take a string and translate it to Pig Latin. 
    The string will never be undefined but may contain both numbers 
    and letters. A word will never be a combination of numbers and letters. 
    Also, there will never be punctuation at the beginning of a word 
    and the only capital letter in a word will be the first letter meaning there are zero all capitalized words.
*/
// Advanced Pig Latin
// https://www.codewars.com/kata/533c46b140aafec05b000d31
export const translate = (() => {
    let vowels = "aeiou";
    let alpahbet = "abcdefghijklmnopqrstuvwxyz";

    let isVowel = c => vowels.includes(c.toLowerCase());

    let isCap = c => c === c.toUpperCase() && alpahbet.includes(c.toLowerCase());

    let pigify = (str, newStr, cap) => {
        let [f, ...rest] = str.split("");
        return isVowel(f.toLowerCase()) ? ((cap ? f.toUpperCase() : f.toLowerCase()) + 
                                ((rest.join("")) + newStr + "ay").toLowerCase() ) 
        : pigify(rest.join(""), newStr + f, cap);
    }

    let removeNoneAlphaCharactersFromEnd = (strAr, noneAlphaAr, idx) => {
        let lastChar = strAr[idx];
        let newStrAr = strAr.slice(0, idx);
        return alpahbet.includes(lastChar.toLowerCase()) || idx <= 0 ? [strAr.join(""), noneAlphaAr] 
                : removeNoneAlphaCharactersFromEnd(newStrAr, [lastChar, ...noneAlphaAr], idx - 1);
    }

    return s => {
        console.log(s);
        return s.split(" ").map(w => { 
            
            let cap = isCap(w[0]); 
            let [newW, NoneAlphaChars] = removeNoneAlphaCharactersFromEnd(w.split(""), [], w.length - 1);
            if (isVowel(w[0])) return newW + "way" + NoneAlphaChars.join("");
            return pigify(newW, "", cap) + NoneAlphaChars.join(""); 
        })
        .join(" ");
    }
})();

// Single Word Pig Latin.
// https://www.codewars.com/kata/558878ab7591c911a4000007
export const pigLatin = (() => {
    let alpahbet = "abcdefghijklmnopqrstuvwxyz";
    let vowels = "aeiou";

    let hasNoneAlphaCharacter = (str) => {
        return !(str.split("").every(s => alpahbet.includes(s)));
    }

    let isVowel = (str) => {
        return vowels.includes(str);
    }

    let hasNoVowels = (str) => {
        return str.split("").some(s => vowels.includes(s)) === false;
    }

    let sol = (s, newStr) => {
        let [nextChar, ...rest] = s.split("");
        return isVowel(nextChar) ? nextChar + (rest.join("")) + newStr + "ay" : 
                                 sol(rest.join(""), newStr + nextChar);
    }

    return s => {
        s = s.toLowerCase();
        let [f, ...rest] = s.split("");
        return hasNoneAlphaCharacter(s) ? null 
        : isVowel(f) ? s + "way" 
        : hasNoVowels(s) ? s + "ay" 
        : sol(s, "");
    }
})();

// Simple pig latin solution. 
// https://www.codewars.com/kata/520b9d2ad5c005041100000f
const pigIt = s => {
    let alpahbet = "abcdefghijklmnopqrstuvwxyz";
    let pigify = str => {
        if (str.length === 1) { return alpahbet.includes(str.toLowerCase()) ? str+"ay" : str }
        let a = str.split("");
        let [f, ...rest] = a;
        return rest.join("") + f + "ay";
    }

    return s.split(" ").map(pigify).join(" ");
};

// Breaking Camel Case for Javascript, https://www.codewars.com/kata/5208f99aee097e6552000148
// This solution passes all tests. 
export const breakCamelCase = s => {
    // camelCase -> "camel Caser"... Basically we break on the UpperCase.... 
    let breakCase = (oldStringArray, newString) => {
        let [f, ...rest] = oldStringArray;
        if (!f && rest.length === 0) return newString;
        return (f && f === f.toUpperCase()) ? breakCase(rest, newString + " " + f) : 
               breakCase(rest, newString + f);
    };

    return breakCamelCase(s.split(""), "");
};

