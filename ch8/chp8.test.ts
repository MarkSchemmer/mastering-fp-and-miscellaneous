import { getDirectory, getDirCount, filesCountResult, capHeadLine } from "./chp8";

const pathToTest: string = `D:\\My_Files\\courses\\mastering-fp`;

describe("testing readDirSync: ", () => {
    it("dummy test", () => {
        expect(true).toBe(true);
        expect(getDirCount(pathToTest, ".ts")).toBe(filesCountResult(pathToTest));
    });

    it("testing 8.1: ", () => {
        const sentence = "i LIKE A sentence hErE";
        const expected = "I Like A Sentence Here";

        expect(capHeadLine(sentence)).toBe(expected);
    });
});