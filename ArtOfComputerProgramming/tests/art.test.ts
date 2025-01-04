import { ArtOfComputerProgramming } from "../problems";

describe("Chapter 1 problems and codes", () => {
    let highestCommonDivsor;
    beforeAll(() => {
        highestCommonDivsor = new ArtOfComputerProgramming().highestCommonDivsor;
    });

    it("Highest common divisor", () => {
        expect(highestCommonDivsor(544, 144)).toBe(16);
    });
});