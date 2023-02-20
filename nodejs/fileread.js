var fs = require('fs');
fs.readFile('nodejs/sample.txt', 'utf-8', function (err, data)
{
    console.log(data);
});