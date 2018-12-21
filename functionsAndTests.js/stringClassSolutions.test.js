require("./stringClassSolutions")

describe('test for Vowels', () => {
    test("string that contain vowels", () => {
        expect('kaze-m'.hasVowels()).toBeTruthy()
    });

    test("string that contain no vowels", () => {
        expect('jdtddg'.hasVowels()).toBeFalsy()
    });

    test("string that contain only numbers", () => {
        expect('123456'.hasVowels()).toBeFalsy()
    });

});