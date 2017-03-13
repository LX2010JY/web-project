/**
 * Created by yuan on 2017/3/3.
 */
function* fibs() {
    let a = 0;
    let b = 1;
    while(true) {
        yield a;
        [a,b] = [b,a+b];
    }
}
let [first,second,third,forth,fifth,sixth] = fibs();
console.log([first,second,third,forth,fifth,sixth]);