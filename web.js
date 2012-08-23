var express = require('express');
var app = express.createServer(express.logger());

app.use(express.static(__dirname + '/public'));

var statusMap = {
	100: 'neutral-feel-like-a-sir.png',
	200: 'happy-epic-win.png',
	302: 'misc-true-story.png',
	401: 'fuck-yeah-gtfo.png',
	403: 'angry-no.png',
	404: 'fuck-that-bitch-scared-yao.png',
	405: 'misc-got-a-badass-over-here.png',
	406: 'cereal-guy-cereal-guy-spitting.png',
	408: 'worried-me-culpa.png',
	409: 'determined-serious-chiseled-not-okay.png',
	500: 'annoyed-im-watching-u.png',
	503: 'annoyed-facepalm-picard.png'
};

app.get("/:statusCode", function(request, response) {
	var statusCode = request.params.statusCode;
	var statusImage = statusMap[statusCode] ? statusMap[statusCode] : statusMap[404];

	response.contentType(statusImage);
	response.sendfile(__dirname + '/public/' + statusImage);
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
	console.log("HTTP Rage: Listening on " + port);
});
