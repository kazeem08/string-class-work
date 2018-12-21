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


module.exports = String;