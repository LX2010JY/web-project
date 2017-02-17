// 这是一个测试vue效果的简单服务器
var express = require('express');
var app = express();
// 访问静态资源
app.use(express.static(__dirname));
app.listen(3000,function () {
    console.log('app listening on port 3000');
})
