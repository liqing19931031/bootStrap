const webpack = require('webpack');
const Server = require('webpack-dev-server');
const config = require('./webpack.config');
const open = require('open');

const compiler = webpack(config);

// 初始化server
const app = new Server(compiler, config.devServer);
app.listen(config.port, 'localhost', (err) => {
  if (err) { console.log(err); } // eslint-disable-line
  console.log("listen at http://localhost:" + config.port); // eslint-disable-line
  open(`http://localhost:${config.port}/webpack-dev-server/`);
});