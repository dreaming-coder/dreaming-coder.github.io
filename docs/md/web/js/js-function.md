# JavaScript - 函数

## 基础

### 函数的声明与调用

```js
// 函数声明
function 函数名(参数列表){
    函数体
}
var 函数名 = function(参数列表){
    函数体
}

// 函数调用
函数名(参数列表);
```

### 函数形参和实参的匹配

- 形参和实参数量一致 

  ```js
  function getSum(num1, num2){
      return num1 + num2;
  }
  getSum(1, 2);  // 3
  ```

- 实参个数多于形参个数 

  ```js
  function getSum(num1, num2){
      return num1 + num2;
  }
  getSum(1, 2, 3);  // 3
  ```

  > 此时超出部分被无视掉 

- 形参个数多于实参个数 

  ```js
  function getSum(num1, num2){
      return num1 + num2;
  }
  getSum(1);  // NaN
  ```

### arguments 的使用

当我们不确定有多少参数与参数传递的时候，可以用 `arguments` 来获取。 在 JavaScript 中，`arguments` 实际上它是当前函数的一个内置对象。所有函数都内置了一个 `arguments` 对象，`arguments` 对象中存储了传递的所有实参。 

`arguments` 展示形式是一个伪数组，因此可以进行遍历。伪数组具有以下特点：

- 具有 `length` 属性
- 按索引方式存储数据，允许方括号访问
- 不具有数组的 `push`，`pop` 方法

### 函数参数的默认值

```js
function log(x, y = 'World') {
  console.log(x, y);
}

log('Hello') // Hello World
log('Hello', 'China') // Hello China
log('Hello', '') // Hello
```

:::warning

参数默认值不是传值的，而是每次都重新计算默认值表达式的值。也就是说，参数默认值是惰性求值的。 

:::

### 与解构赋值默认值结合使用

```js
function foo({x, y = 5}) {
  console.log(x, y);
}

foo({}) // undefined 5
foo({x: 1}) // 1 5
foo({x: 1, y: 2}) // 1 2
foo() // TypeError: Cannot read property 'x' of undefined
```

上面代码只使用了对象的解构赋值默认值，没有使用函数参数的默认值。只有当函数`foo()`的参数是一个对象时，变量`x`和`y`才会通过解构赋值生成。如果函数`foo()`调用时没提供参数，变量`x`和`y`就不会生成，从而报错。通过提供函数参数的默认值，就可以避免这种情况。

```js
function foo({x, y = 5} = {}) {
  console.log(x, y);
}

foo() // undefined 5
```

### rest 参数

ES6 引入 rest 参数（形式为`...变量名`），用于获取函数的多余参数，这样就不需要使用`arguments`对象了。rest 参数搭配的变量是一个数组，该变量将多余的参数放入数组中。 

```js
function add(...values) {
  let sum = 0;

  for (var val of values) {
    sum += val;
  }

  return sum;
}

add(2, 5, 3) // 10
```

`arguments` 对象不是数组，而是一个类似数组的对象。所以为了使用数组的方法，必须使用 `Array.from` 先将其转为数组。rest 参数就不存在这个问题，它就是一个真正的数组，数组特有的方法都可以使用。 

:::warning

rest 参数之后不能再有其他参数（即只能是最后一个参数），否则会报错。 

:::

## 箭头函数

ES6 允许使用“箭头”（`=>`）定义函数。

```javascript
var f = v => v;

// 等同于
var f = function (v) {
  return v;
};
```

如果箭头函数不需要参数或需要多个参数，就使用一个圆括号代表参数部分。

```javascript
var f = () => 5;
// 等同于
var f = function () { return 5 };


var sum = (num1, num2) => num1 + num2;
// 等同于
var sum = function(num1, num2) {
  return num1 + num2;
};
```

如果箭头函数的代码块部分多于一条语句，就要使用大括号将它们括起来，并且使用 `return` 语句返回。

```javascript
var sum = (num1, num2) => { return num1 + num2; }
```

由于大括号被解释为代码块，所以如果箭头函数直接返回一个对象，必须在对象外面加上括号，否则会报错。

```javascript
// 报错
let getTempItem = id => { id: id, name: "Temp" };

// 不报错
let getTempItem = id => ({ id: id, name: "Temp" });
```
箭头函数可以与变量解构结合使用。

```javascript
const full = ({ first, last }) => first + ' ' + last;

// 等同于
function full(person) {
  return person.first + ' ' + person.last;
}
```

箭头函数使得表达更加简洁。

```javascript
const isEven = n => n % 2 === 0; // 如果箭头函数只有一行语句，且不需要返回值，可以不用写大括号
const square = n => n * n;
```
:::tip

- 箭头函数没有自己的 `this` 对象
- 不可以当作构造函数，也就是说，不可以对箭头函数使用 `new` 命令，否则会抛出一个错误。
- 不可以使用 `arguments` 对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。
- 不可以使用 `yield` 命令，因此箭头函数不能用作 Generator 函数。

:::

> 上面四点中，最重要的是第一点。对于普通函数来说，内部的 `this` 指向函数运行时所在的对象，但是这一点对箭头函数不成立。它没有自己的 `this` 对象，内部的 `this` 就是定义时上层作用域中的 `this`。也就是说，箭头函数内部的 `this` 指向是固定的，相比之下，普通函数的 `this` 指向是可变的。

> 箭头函数实际上可以让 `this` 指向固定化，绑定 `this` 使得它不再可变，这种特性很有利于封装回调函数。

除了 `this`，以下三个变量在箭头函数之中也是不存在的，指向外层函数的对应变量：`arguments`、`super`、`new.target`。

