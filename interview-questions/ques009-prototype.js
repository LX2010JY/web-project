/**
 * Created by yuan on 2017/3/13.
 */

function baseClass  () {
    this.showMsg = function () {
        console.log('BaseClass::showMsg');
    }
}

function extendClass() {
    this.showMsg = function () {
        console.log("extendClass:showMsg");
    }
}
//将baseClass的一个实例克隆给 extendClass 原型
extendClass.prototype = new baseClass();

var instance = new extendClass();
// 对象函数运行时，先去本体中找，如果没有，再去原型找，所以这里执行的是 extendClass的showMsg。
instance.showMsg(); //extendClass:showMsg

//如果要执行baseClass 的showMsg

var baseinstance = new baseClass();
//将instance当做baseinstance来调用，调用它的方法showMsg
baseinstance.showMsg.call(instance);