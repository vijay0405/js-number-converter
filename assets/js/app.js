$(function() {

    function checkInputType(value, type) {
        value = value.trim();
        if(value.length == 0 || value == null) {
            return false
        }
        if(type=="bin"){
            return isBinary(value);
        } else if(type=="dec"){
            valid = isDecimal(value);
        } else if(type=="hex"){
            valid = isHexadecimal(value);
        } else if(type=="b64"){
            valid = isBase64(value);
        }
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

});