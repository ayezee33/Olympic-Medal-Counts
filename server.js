var port = process.env.PORT || 9001;

var express = require('express');
var app = express();
var httpProxy = require('http-proxy');
var proxy = httpProxy.createProxyServer({
  target: 'http://www.medalbot.com',
  changeOrigin: true
});

function apiProxy(host) {
  return function(req, res, next) {
    if(req.url.match(new RegExp('^\/api\/'))) {
      proxy.proxyRequest(req, res);
    } else {
      next();
    }
  }
}

app.use(express.static('public'));
app.use(apiProxy('http://www.medalbot.com'));

app.get('*', function (req, res) {
  apiProxy.web(req, res);
});

app.listen(port, function () {
  console.log('app is listening on port: ' + port);
});

