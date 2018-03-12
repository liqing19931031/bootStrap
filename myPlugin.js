function MyPlugin(options) {
this.options = options;
}

MyPlugin.prototype.apply = function(compiler) {
    var paths = this.options.paths;
    compiler.plugin('compilation', function(compilation, options) {
        compilation.plugin('html-webpack-plugin-before-html-processing', function(htmlPluginData, callback) { // 在html-webpack-plugin 插件的回调函数中执行 插入脚本流
            for (var i = paths.length - 1; i >= 0; i--) {
                htmlPluginData.assets.js.unshift(paths[i]);
            }
            callback(null, htmlPluginData);
        });
    });
};

module.exports = MyPlugin;
