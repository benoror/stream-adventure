var through = require('through');
var split = require('split');

var counter = 1;

process.stdin
    .pipe(split())
    .pipe(through(function (line) {
    	if(counter%2)
        	console.log(line.toLowerCase());
		else
        	console.log(line.toUpperCase());

        counter++;
    }));

// process.stdin.pipe(split()).pipe(through(function (line) {
// 	
//  if(counter%2)
// 		this.queue(line.toString().toLowerCase());
// 	else
// 		this.queue(line.toString().toUpperCase());

// 	counter++;
// })).pipe(process.stdout);

