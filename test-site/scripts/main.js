// let myHeading = document.querySelector('h1');
// myHeading.textContent = "Hello world!";

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/firefox-icon.png') {
        myImage.setAttribute('src', 'images/firefox2.jpg')
    } else {
        myImage.setAttribute('src', 'images/firefox-icon.png')
    }
}

myButton.onclick = function() {
    setUserName();
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = 'Mozilla Cool, ' + storedName;
}

function setUserName() {
    let myName = prompt('请输入你的名字。');
    if (!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);    
        myHeading.textContent = 'Mozilla Cool! ' + myName;
        // myHeading.innerHTML = 'Mozilla Cool, ' + myName;
    }
}


// 条件判断
// let iceCream = 'chocolate';
// if (iceCream === 'chocolate') {
//   alert('我最喜欢巧克力冰激淋了。');    
// } else {
//   alert('但是巧克力才是我的最爱呀……');    
// }

// 定义函数
function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}

// 点击事件
// document.querySelector('html').onclick = function() {
//     alert('别戳我，我怕疼。');
// }


/**
 * 
== equality 等同，=== identity 恒等。

==， 两边值类型不同的时候，要先进行类型转换，再比较。
===，不做类型转换，类型不同的一定不等。

下面分别说明：
先说 ===，这个比较简单。下面的规则用来判断两个值是否===相等：
1、如果类型不同，就[不相等]
2、如果两个都是数值，并且是同一个值，那么[相等]；(！例外)的是，如果其中至少一个是NaN，那么[不相等]。（判断一个值是否是NaN，只能用isNaN()来判断）
3、如果两个都是字符串，每个位置的字符都一样，那么[相等]；否则[不相等]。
4、如果两个值都是true，或者都是false，那么[相等]。
5、如果两个值都引用同一个对象或函数，那么[相等]；否则[不相等]。
6、如果两个值都是null，或者都是undefined，那么[相等]。

再说 ==，根据以下规则：
1、如果两个值类型相同，进行 === 比较。
2、如果两个值类型不同，他们可能相等。根据下面规则进行类型转换再比较：
a、如果一个是null、一个是undefined，那么[相等]。
b、如果一个是字符串，一个是数值，把字符串转换成数值再进行比较。
c、如果任一值是 true，把它转换成 1 再比较；如果任一值是 false，把它转换成 0 再比较。
d、如果一个是对象，另一个是数值或字符串，把对象转换成基础类型的值再比较。
对象转换成基础类型，利用它的toString或者valueOf方法。 
js核心内置类，会尝试valueOf先于toString；
例外的是Date，Date利用的是toString转换。
非js核心的对象，令说（比较麻 烦，我也不大懂）
e、任何其他组合，都[不相等]。

举例：
"1" == true
类型不等，true会先转换成数值 1，现在变成 "1" == 1，再把"1"转换成 1，比较 1 == 1， 相等。

= 赋值运算符
== 等于
=== 严格等于
例：
var a = 3;
var b = "3";

a==b 返回 true
a===b 返回 false

因为a,b的类型不一样
===用来进行严格的比较判断
 * 
 */