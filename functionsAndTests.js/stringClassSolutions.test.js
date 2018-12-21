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

describe('test for toUpper', () => {
    test('string that is completely lowercase', () => {
        expect('mercedes'.toUpper()).toBe('MERCEDES')
    });

    test('string that is completely uppercase', () => {
        expect('MANGO'.toUpper()).toBe('MANGO')
    });

    test('string that contain mixture of upper and lower', () => {
        expect('caPiTulate'.toUpper()).toBe('CAPITULATE')
    });

    test('string that contain lower at the beginning and upper at the end', () => {
        expect('casti-GATE'.toUpper()).toBe('CASTI-GATE')
    });

});

describe('test for toLower', () => {
    test('string that is completely uppercase', () => {
        expect('MERCEDES'.toLower()).toBe('mercedes')
    });

    test('string that is completely uppercase', () => {
        expect('MANGO'.toLower()).toBe('mango')
    });

    test('string that contain mixture of upper and lower', () => {
        expect('CApiTuLAtE'.toLower()).toBe('capitulate')
    });

    test('string that contain upper at the beginning and lower at the end', () => {
        expect('CASTI-gate'.toLower()).toBe('casti-gate')
    });

});

describe('test for ucFirst', () => {
    test('string that has first letter as lowercase', () => {
        expect('welcome'.ucFirst()).toBe('Welcome')
    });

    test('string that has first letter as uppercase', () => {
        expect('Welcome'.ucFirst()).not.toBe('welcome')
    });
});

describe('test for isQuestion', () => {
    test('string that ends with ?', () => {
        expect('eaten?'.isQuestion()).toBeTruthy()
    });

    test('string that ends with ?', () => {
        expect('sleeping'.isQuestion()).toBeFalsy()
    });
});

describe('test for words', () => {
    test('string that has hyphen', () => {
        expect('real-madrid is white'.words()).not.toBe(['real', 'madrid', 'is', 'white'])
    });

    test('string that has digits and letters', () => {
        expect('535363 hello'.words()).toEqual(['535363', 'hello'])
    });
});

describe('test for wordCount', () => {
    test('string that has hyphen', () => {
        expect('real-madrid is white'.wordCount()).toBe(3)
    });

    test('string that has digits and letters', () => {
        expect('535363 hello'.wordCount()).toBe(2)
    });
});

describe('test for fromCurrency', () => {
    test('string that has one comma', () => {
        expect('11,225.34'.fromCurrency()).toBe(11225.34)
    });

    test('string that has more than one comma', () => {
        expect('234,225,018.45'.fromCurrency()).toBe(234225018.45)
    });

});

describe('test for inverseCase', () => {
    test('string that has mixture of upper and lower', () => {
        expect('MaNiPuLaTe'.inverseCase()).toBe('mAnIpUlAtE')
    });

    test('string that has hyphen', () => {
        expect('java-SCRIPT'.inverseCase()).toBe('JAVA-script')
    });
});

describe('test for alternatingCase', () => {
    test('string that starts with an upper case', () => {
        expect('Onomatopoeia'.alternatingCase()).toBe('oNoMaToPoEiA')
    });

    test('string that is fully upper case', () => {
        expect('ENCAPSULATE'.alternatingCase()).toBe('eNcApSuLaTe')
    });

});

describe('test for numberWords', () => {
    test('string that contains 5 digits', () => {
        expect('79658'.numberWords()).toEqual(['seven', 'nine', 'six', 'five', 'eight'])
    });

    test('string that contains 1 digit', () => {
        expect('0'.numberWords()).toEqual(['zero'])
    });

});