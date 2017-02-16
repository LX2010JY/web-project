#warning
>1. vue 数据绑定采用 Mustache 语法 {{ message }}
>2. 一个元素的内容是通过{{ msg }}格式插入的话，那么一旦msg更改，元素的内容也会跟着一起改变，如果不需要改，那么在元素中添加 v-once 属性
>3. {{ }}中的内容会解析为纯文本，如果需要添加的内容是html ， 需要使用 ```<div v-html="rawHtml"></div>``` 而不是{{}}直接赋值
>4. Mustache {{ }}不能用在元素的属性里面 ，元素属性赋值使用 v-bind 方式，比如赋值 id ： v-bind:id="message"
