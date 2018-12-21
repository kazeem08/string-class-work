String.prototype.hasVowels = function () {
    return /[aeiou]/i.test(this) ? true : false;
}

module.exports = String;