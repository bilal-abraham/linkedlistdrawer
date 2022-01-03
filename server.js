let express = require('express');

let server = express();
server.use(express.static('app'));

server.listen(8080, () => {
	console.log('Server Listening on Port 8080');
});
