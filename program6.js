var concat = require('concat-stream');

process.stdin.pipe(concat(function (body) {
	console.log(body.toString().split("").reverse().join(""));
}))



// process.stdin
//     .pipe(split())
//     .pipe(through(function (line) {
//     	if(counter%2)
//         	console.log(line.toLowerCase());
// 		else
//         	console.log(line.toUpperCase());

//         counter++;
//     }));