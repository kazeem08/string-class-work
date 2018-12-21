String.prototype.hasVowels = function () {
    return /[aeiou]/i.test(this) ? true : false;
}

String.prototype.toUpper = function () {
    let regex = /[a-z]/;
    let charValue2 = 0;
    let output = '';
    for (let element of this) {
        let charValue = element.charCodeAt(0);
        if (regex.test(element)) {
            charValue2 = charValue - 32;
            output += String.fromCharCode(charValue2);
        }
        else {
            output += element;
        }
    }
    return output;
}

String.prototype.toLower = function () {
    let regex = /[A-Z]/;
    let charValue2 = 0;
    let output = '';
    for (let element of this) {
        let charValue = element.charCodeAt(0);
        if (regex.test(element)) {
            charValue2 = charValue + 32;
            output += String.fromCharCode(charValue2);
        }
        else {
            output += element;
        }
    }

    return output;
}

String.prototype.ucFirst = function () {
    let output = '';
    for (let i = 0; i < this.length; i++) {
        (i === 0) ? output += this[i].toUpper() : output += this[i];
    }
    return output;
}

String.prototype.isQuestion = function () {
    let regex = /[?]$/;
    return (regex.test(this)) ? true : false;
}

String.prototype.words = function () {
    let regex = /\w+-*\w*/g;
    let output = this.match(regex);
    return output;
}

String.prototype.wordCount = function () {
    let regex = /\w+-*\w*/g;
    let output = this.match(regex);
    return output.length;
}

String.prototype.fromCurrency = function () {
    return Number(this.replace(/,/g, ''));
}

String.prototype.inverseCase = function () {
    let character;
    let result = '';
    for (let i = 0; i < this.length; i++) {
        character = this.charAt(i);
        if (character === character.toUpperCase()) {
            result += character.toLowerCase();

        } else {

            result += character.toUpperCase();
        }
    }
    return result;
}

module.exports = String;