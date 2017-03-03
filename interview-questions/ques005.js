/**
 * Created by yuan on 2017/3/3.
 */
function f1() {
    let n = 5;
    if(true) {
        //let 定义的变量不影响外部代码块
        let n = 10;
    }
    console.log(n);  //n=5
}
f1();


{{{{{{{
    {let insane = "Hello World"}
    console.log(insane);
}}}}}}}