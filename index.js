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

var clients = {};

server.on('connection', function (client) {
	client.on('message', function (message) {
		message = JSON.parse(message);

		switch (message.type) {
		case 'init':
			clients[message.user_id] = client;
			client.user_id = message.user_id;
			break;

		case 'message':
			if (!clients[message.to_user_id]) return;

			clients[message.to_user_id].send(JSON.stringify({
				type: 'message',
				from_user_id: client.user_id,
				text: message.text
			}));
			break;
		}

	});
});