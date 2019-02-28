require('dotenv').config();
const next = require('next');
const express = require('express');
const session = require('express-session');
const proxy = require('http-proxy-middleware');
const compression = require('compression');

const routes = require('./routes');

const checkDev = process.env.NODE_ENV !== 'production';

const PORT = process.env.PORT || 3000;
const app = next({ dev: checkDev });
const handler = routes.getRequestHandler(app);

// With express
const backEnd = process.env.NODE_API || 'http://78.46.48.116:899';

const setCustomHeaderFunc = function(req, res, next) {
  res.set('SpecialCustomHeader', 'super-awesome-value');
  next();
};

const apiProxy = proxy(backEnd, {
  proxyReqPathResolver: req => req.originalUrl
});

const options = {
  target: backEnd, // target host
  onProxyRes: (proxyRes, req, res) => {
    Object.keys(proxyRes.headers).forEach(key => {
      res.append(key, proxyRes.headers[key]);
    });
  },
  onProxyReq: (proxyReq, req) => {
    Object.keys(req.headers).forEach(key => {
      proxyReq.setHeader(key, req.headers[key]);
    });
  }
};

app.prepare().then(res => {
  const server = express();
  // You can tell express to serve all files from the static file from route
  // (just make sure that there's no name conflicts as the file would override your react routes)
  server.use(compression({ threshold: 0 }));
  server.use('*', setCustomHeaderFunc);
  server.use(express.static('/static'));

  // server.use('/index', proxy(options));
  // server.use('/media', proxy(options));
  // server.use('/api', proxy(options));

  // server.use(apiMedia);
  // Or if you want to just serve robots.txt and nothing else from root
  // server.use('/robots.txt', express.static('/static/robots.txt'));
  server.use(handler).listen(PORT);
});
