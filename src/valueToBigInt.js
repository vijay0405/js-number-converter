module.exports = (value, currBase) => {
    if (currBase === 16) {
        value = '0x' + value;
    } else if (currBase === 2) {
        value = '0b' + value;
    }
    return BigInt(value);
}