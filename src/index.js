module.exports = function toReadable(number) {
    let units = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];

    let dozens = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    let hundreds = "hundred";

    if (typeof number !== "number" || number < 0 || number > 1000) {
        throw new Error("Enter a number between null and one thousand");
    }

    if (number < 20) {
        return units[number];
    }

    if (number < 100) {
        let dozRez = dozens[Math.floor(number / 10)];
        let uniRez = units[number % 10];
        if (number % 10 !== 0) {
            return dozRez + " " + uniRez;
        } else {
            return dozRez;
        }
    }

    if (number < 1000) {
        let hundRez = units[Math.floor(number / 100)];
        let rez2;
        if (number % 100 === 0) {
            rez2 = "";
        } else if (number % 100 < 20) {
            rez2 = " " + units[number % 100];
        } else if (number % 10 === 0 && number % 100 > 0) {
            let doz3 = Math.floor(number / 100);
            rez2 = " " + dozens[doz3];
        } else {
            rez2 =
                " " +
                dozens[Math.floor((number % 100) / 10)] +
                " " +
                units[number % 10];
        }
        return hundRez + " " + hundreds + rez2;
    }
};
