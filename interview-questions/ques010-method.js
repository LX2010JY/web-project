/**
 * Created by yuan on 2017/3/14.
 */
//私有属性
(function () {
    var a = "私有属性";
    console.log(a);
})();
try {
    console.log(a);
} catch (e){
    console.log('私有属性a Reference Error');
}

//实例属性
/*实例属性 对于每一个new 的不同 对象之间不受影响*/
var baseClass = function () {
    this.x = "实例属性";
};

//原型属性
var proto = function () {
    this.x = "实例属性";
};
proto.prototype.x = "原型属性";
var ins = new proto();
//先找实例属性
console.log(ins.x);
delete ins.x;
//实例属性没有，再找原型属性
console.log(ins.x);




//静态方法
var BaseClass = function () {};
BaseClass.func = function () { //定义静态方法
    console.log('This is a static method ');
};
BaseClass.func();
//静态方法只能由类访问，实例化之后的对象不能访问
var baseins = new BaseClass();
try {
    baseins.func();
} catch (e) {
    console.log('静态方法 实例对象不可访问')
}


//实例方法

var insfunc = function () {
    this.f1 = function () {
        console.log('这是第一种方式创建实例方法');
    }
};
insfunc.prototype.f2 = function () {
    console.log('这是第二种方式创建实例方法（不过这不是原型方法吗？）');
};
var instance = new insfunc();
instance.f3 = function () {
    console.log('这是第三种方式创建实例方法');
};
instance.f1();
instance.f2();
instance.f3();


//内部方法

var innerfunc = function () {
    var f1 = function () {
        console.log('f1');
    };
    var f2 = function () {
        console.log('f2')
    };
    //使用this代表innerfunc对象，这样才能为其创建方法
    this.f3 = function () {
        f1();
        f2();
    }
};

var inner = new innerfunc();
try {
    inner.f1();
} catch (e) {
    console.log('内部方法不可调用');
}
inner.f3();