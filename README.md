# npm-exercise-3

This program only accepts a SINGLE argument that is an infix expression into a postfix expression


Using an NPM module, [expression-parser](https://www.npmjs.com/package/@estilles/expression-parser) and a node package [process.agrv](https://nodejs.org/docs/latest/api/process.html#processargv)

> expression-parser is used to convert an argument from infix to postfix expression
> <br/>process.agrv is used to accept arguments from the command-line


To run the program, kindly use `node index.js "<arg>"`

* The program checks frist if the argument given is a single argument.
* If the argument is non-singular, the program will display a message `This program only accepts a SINGLE arguement`.
<br/>e.g.
> `node index.js 1+2-c 2+2`
> <br/>`This program only accepts a SINGLE arguement`

* If the argument is singular, the progam will display the postfix expression `The postfix expression is: <postfix expression>`.
<br/>e.g.
> `node index.js 1+2-c`
> <br/>`The postfix expression is: 1 2 + c -`