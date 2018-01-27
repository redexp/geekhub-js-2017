var ws = require('ws');
var server = new ws.Server({port: 5000});

// var https = require('https');
// var fs = require('fs');
// var server = new ws.Server({
// 	server: https.createServer({
// 		key:  fs.readFileSync('file.key', 'utf8'),
// 		cert: fs.readFileSync('file.crt', 'utf8'),
// 		ca:   fs.readFileSync('file-CHAIN.crt', 'utf8')
// 	}).listen(5000)
// });

server.on('connection', function (client) {
	client.on('message', function (message) {
		message = JSON.parse(message);

		setTimeout(function () {
			client.send(JSON.stringify({
				id: message.id,
				data: {
					test: Math.random()
				}
			}));
		}, 2000);
	});
});