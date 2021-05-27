$(function () {

    var value = "1110001000001110100101101001111110101010101010101111111100111100101011100110001111100000001111100000011111001110011011000101010110101110010011001001110001111101010000111011001111111011010010111001001100110001010101010000011110101110000011011000101011011110100100111011010001100010101011000100001011111111001010000100110001000011101101001111001000010110101100011110000111010111101110010100111000111100011001110001111011101100010010101101101001111101010110101001011000010001111001001001111010110101110111010011000010010100111101010010001101000000111001101101110101111010111110000011001010111010010100010101000010000111111100001001110010000010110110000011001100010111010111101110001101111011001011000110110010111001101100001010100111110100110111110100110100011110001110000111111000100101000110101111001101011111011100000010011000011000110010111110000101010001100001001101011111011100110111010100111101010110110010000011010000100110001000011111011110010000001011100010101000111010000001011111101111100001010100100010101100111011";
    var type = "bin"
    var newType = "dec"

    value = removeSpacesAndChars(value);

    if (isInputTypeValid(value, type)) {
        console.log("valid input")
        var currBase = getBase(type);
        var bigInt = valueToBigInt(value, currBase);
        var newBase = getBase(newType);
        var newValue = valueFromBigIntTo(bigInt, newBase)
        console.log(newValue)
    } else {
        console.log("invalid input");
    }

    function removeSpacesAndChars(value) {
        return value.replace(/ |\t|\n|:|-/gi, ""); //replace empty, tab spaces, newline chars, :, - with ""
    }

    function isInputTypeValid(value, type) {
        value = value.trim();
        if (value.length == 0 || value == null) {
            return false
        }
        if (type == "bin") {
            return isBinary(value);
        } else if (type == "dec") {
            return isDecimal(value);
        } else if (type == "hex") {
            return isHexadecimal(value);
        }
    }

    function getBase(type) {
        var base = "";
        if (type == "bin") {
            base = 2;
        } else if (type == "dec") {
            base = 10;
        } else if (type == "hex") {
            base = 16;
        }
        return base;
    }

    function isBinary(value) {
        return (/^[01]+$/).test(value);
    }

    function isDecimal(value) {
        return (/^[0123456789]+$/).test(value);
    }

    function isHexadecimal(value) {
        return (/^[0-9a-fA-F]+$/).test(value);
    }

    function isBase64(value) {
        return (/^[0-9a-zA-Z=_]+$/).test(value);
    }

    function valueToBigInt(value, currBase) {
        console.log(currBase)
        if(currBase === 16) {
            value = '0x' + value;
        } else if(currBase === 2) {
            value = '0b' + value;
        }
        return BigInt(value);
    }

    function valueFromBigIntTo(value, newBase) {
        console.log(newBase)
        return value.toString(newBase);
    }

});