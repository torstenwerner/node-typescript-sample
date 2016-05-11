const fetch = require('node-fetch');
// const _ = require('lodash');

// not recommended for daily use
const invokeMethod = method => object => object[method]();

const abbreviate = length => string => string.substring(0, length); 
 
fetch('https://github.com/')
	.then(invokeMethod('text'))
    .then(abbreviate(1000))
    .then(console.log);

fetch('https://api.github.com/users/github')
	.then(invokeMethod('json'))
    .then(console.log);

fetch('https://api.github.com/users/torstenwerner')
	.then(invokeMethod('json'))
    .then(console.log);
