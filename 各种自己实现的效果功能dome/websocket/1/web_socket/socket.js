var sys = require("sys"),
	ws = require("../lib/ws");

var socketPool = [];

var server = ws.createServer(function(socket) {
	
	socket.addListener("connect", function(res) {
		sys.puts("client connected from：" + socket.remoteAddress + "" + res);
		socket.write("welcome\r\n");

		socketPool.push(this);
	});

	socket.addListener("data", function(data) {
		//socket.write(data);

		for (var i = 0, len = socketPool.length; i < len; i++)
		{
			socketPool[i].write(data);
		}
	});

	socket.addListener("close", function() {
		sys.puts("client close!");

		for (var i = 0, len = socketPool.length; i < len; i++)
		{
			if (this == socketPool[i])
			{
				socketPool.splice(i, 1);
				break;
			}
		}
	});

});

server.listen(8082);