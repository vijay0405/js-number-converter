# @vijay0405/js-number-converter

[![npm (scoped)](https://img.shields.io/npm/v/@vijay0405/js-number-converter.svg)](https://www.npmjs.com/package/@vijay0405/js-number-converter)


Convert binary, decimal, big integer numbers, hexadecimal

## Install


```bash
npm i @vijay0405/js-number-converter
```

## Usage 

```js
const convert = require("@vijay0405/js-number-converter");

/*
Available types
Binary - "bin", 
Decimal - "dec", 
Hexadecimal - "hex" 
*/

//convert(inputValue, inputType, outputType)

convert("158742613876433232361948262226774047556604", "dec", "hex");
//=> "1d280ab59fb67182d695118616eb3a383fc"


```
### [Demo](http://www.vijay0405.in/js-number-converter/)


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


## License
[MIT](https://choosealicense.com/licenses/mit/)
