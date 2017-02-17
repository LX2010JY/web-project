 //中文各种编码错误....我还是用python爬虫吧 
var http = require('http');
var url = require('url');
var cheerio = require('cheerio');
var options = url.parse('http://www.00ksw.net/html/15/15344/');
console.log(options);
var html = '';

http.get(options,function(res){
    res.on('data', function (data) {
        html += data;
    });
    res.on('end', function () {
        console.log(html.length);
        var $ = cheerio.load(html);
        var content = $('#list').find('dd');
        content.each(function(item,index){
            console.log($(this).text());
        })
    });

}).on('error',function(){
    console.log('获取失败');
})
