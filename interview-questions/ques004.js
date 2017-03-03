/**
 * Created by yuan on 2017/3/3.
 */
var tmp = new Date();
function f() {
    console.log(tmp);
    if(true) {
        var tmp = "Hello World";
    }
}

//输出undefined 在f函数作用域中，含有tmp，所以不用在全局作用域去找，但是 这个tmp还没有赋值
f();
console.log(tmp);