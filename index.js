const { parse, toString } = require('@estilles/expression-parser');
const { argv } = require('node:process');

if (argv.length !== 3) {
    console.log(`This program only accepts a SINGLE arguement`);
} else {
   console.log(`The postfix expression is: ${toString(parse(argv[2]))}`);
}
