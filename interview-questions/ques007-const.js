/**
 * Created by yuan on 2017/3/3.
 */

//const定义的基础数据类型不能修改，但是对于对象这种复合数据类型可以修改对象的属性和行为，但是不能修改为另一个对象
const foo = {};
foo.name = 'haha';
foo.age = 17;
foo.setName = function () {
    console.log(this.name);
};
foo.setName();

{
    const PI = 3.14;
    console.log(PI);
}
console.log(PI); //const 和let一样，不影响外部作用域，const定义变量不能修改