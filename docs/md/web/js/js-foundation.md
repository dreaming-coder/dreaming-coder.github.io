# JavaScript - 基本概念
## 基本概念

### 书写位置

- **行内式**

```html
<input type="button" value="提交" onclick="alert('Hello World')">
```

- **内嵌式**

```html
<script>
alert("hello world!");
</script>
```

- **外部式**

```html
<script src="my.js"></script>  <!-- 引入外部 js 文件 -->
```

### 语法基础

#### 标识符

所谓标识符，就是指变量、函数、属性的名字，或者函数的参数。标识符可以是按照下列格式规则组合起来的一或多个字符：

- 第一个字符必须是一个字母、下划线（_）或一个美元符号（$）；
- 其他字符可以是字母、下划线、美元符号或数字。

:::warning

- 标识符区分大小写
- 不能使用关键字、保留字作为标识符
- 一般采用小驼峰命名方式

:::

#### 注释

- 单行注释

```javascript
// 单行注释
```

- 多行注释

```javascript
/*
 * 多行注释
 */
```

#### 严格模式

在顶部添加代码 `"use strict";` 用于告诉支持的 JavaScript 引擎切换到严格模式。在函数内部的上方包含这条编译指示，也可以指定函数在严格模式下执行：

```javascript
function doSomething(){
    "use strict";
    // 函数体
}
```

严格模式用于消除 JavaScript 语法的一些不合理、不严谨之处，减少一些怪异行为：

- 消除代码运行的一些不安全之处，保证代码运行的安全
- 提高编译器效率，增加运行速度
- 为未来新版本的 JavaScript 做好铺垫

严格模式下，JavaScript 的执行结果会有很大不同，一些在"正常模式"下可以运行的语句，在"严格模式"下将不能运行。

### 变量

ECMAScript 的变量是松散类型的，所谓松散类型就是可以用来保存任何类型的数据。换句话说，每个变量仅仅是一个用于保存值的占位符而已。

```javascript
var message;  // 定义一个变量 message
```

这行代码定义了一个名为 `message` 的变量，该变量可以用来保存任何值（像这样未经过初始化的变量，会保存一个特殊的值——`undefined`）。

有一点必须注意，即用 `var` 操作符定义的变量将成为定义该变量的作用域中的局部变量。也就是说，如果在函数中使用 `var` 定义一个变量，那么这个变量在函数退出后就会被销毁，例如：

```javascript
function test(){
	var message = "hi"; // 局部变量
}
test();
alert(message); // 错误！
```

这里，变量 `message` 是在函数中使用 `var` 定义的。当函数被调用时，就会创建该变量并为其赋值。而在此之后，这个变量又会立即被销毁，因此例子中的下一行代码就会导致错误。不过，可以像下面这样省略 `var ` 操作符，从而创建一个全局变量：

```javascript
function test(){
	message = "hi"; // 全局变量
}
test();
alert(message); // "hi"
```

这个例子省略了 `var` 操作符，因而 `message ` 就成了全局变量。这样，只要调用过一次 `test()` 函数，这个变量就有了定义，就可以在函数外部的任何地方被访问到。

可以使用一条语句定义多个变量，只要像下面这样把每个变量（初始化或不初始化均可）用逗号分隔开即可：

```javascript
var message = "hi",
	found = false,
	age = 29;
```

### 数据类型

ECMAScript 中有 5 种简单数据类型（也称为基本数据类型）：`Undefined`、`Null`、`Boolean`、`Number` 和 `String`。还有一种复杂数据类型——`Object`，`Object` 本质上是由一组无序的名值对组成的。ECMAScript 不支持任何创建自定义类型的机制，而所有值最终都将是上述 6 种数据类型之一。

#### typeof 操作符

鉴于 ECMAScript 是松散类型的，因此需要有一种手段来检测给定变量的数据类型——`typeof `就是负责提供这方面信息的操作符。对一个值使用 `typeof ` 操作符可能返回下列某个字符串：

- `"undefined"`——如果这个值未定义；
- `"boolean"`——如果这个值是布尔值；
- `"string"`——如果这个值是字符串；
- `"number"`——如果这个值是数值；
- `"object"`——如果这个值是对象或 `null`；
- `"function"`——如果这个值是函数。

```javascript
var message = "some string";
alert(typeof message);    // "string"
alert(typeof (message));  // "string"
alert(typeof 95);         // "number"
```

#### Undefined 类型

`Undefined` 类型只有一个值，即特殊的 `undefined`。在使用 `var` 声明变量但未对其加以初始化时，这个变量的值就是 `undefined`，例如：

```javascript
var message;
alert(message == undefined); //true
```

#### Null 类型

`Null` 类型是第二个只有一个值的数据类型，这个特殊的值是 `null`。从逻辑角度来看，`null ` 值表示一个空对象指针，而这也正是使用 `typeof ` 操作符检测 `null ` 值时会返回 `"object"` 的原因，如下面的例子所示：

```javascript
var car = null;
alert(typeof car);  // "object"
```

实际上，`undefined` 值是派生自 `null` 值的，因此 ECMA-262 规定对它们的相等性测试要返回 `true`：

```javascript
alert(null == undefined); //true
```

#### Boolean 类型

`Boolean` 类型是 ECMAScript 中使用得最多的一种类型，该类型只有两个字面值：`true` 和 `false`。这两个值与数字值不是一回事，因此 `true` 不一定等于 `1`，而 `false` 也不一定等于 `0`。

需要注意的是，`Boolean` 类型的字面值 `true` 和 `false` 是区分大小写的。也就是说，True 和 False（以及其他的混合大小写形式）都不是 `Boolean` 值，只是标识符。

要将一个值转换为其对应的 `Boolean` 值，可以调用转型函数 `Boolean()`，如下例所示：

```javascript
var message = "Hello world!";
var messageAsBoolean = Boolean(message);
```

可以对任何数据类型的值调用 `Boolean()` 函数，而且总会返回一个 `Boolean` 值。至于返回的这个值是 `true ` 还是 `false`，取决于要转换值的数据类型及其实际值。下表给出了各种数据类型及其对应的转换规则。

| 数据类型  |        转换为true的值        | 转换为false的值 |
| :-------: | :--------------------------: | :-------------: |
|  Boolean  |             true             |      false      |
|  String   |        任何非空字符串        | " " (空字符串)  |
|  Number   | 任何非零数字值（包括无穷大） |     0和NaN      |
|  Object   |           任何对象           |      null       |
| Undefined |              —               |    undefined    |

#### Number 类型

最基本的数值字面量格式是十进制整数，十进制整数可以像下面这样直接在代码中输入：

```javascript
var intNum = 55; // 整数
```

除了以十进制表示外，整数还可以通过八进制（以 8 为基数）或十六进制（以 16 为基数）的字面值来表示。八进制字面值的第一位必须是零（`0`），然后是八进制数字序列（0～7）。如果字面值中的数值超出了范围，那么前导零将被忽略，后面的数值将被当作十进制数值解析。

```javascript
var octalNum1 = 070;  // 八进制的56
var octalNum2 = 079;  // 无效的八进制数值——解析为79
var octalNum3 = 08;  // 无效的八进制数值——解析为8
```

:::danger

八进制字面量在严格模式下是无效的，会导致支持的 JavaScript 引擎抛出错误。

:::

十六进制字面值的前两位必须是 `0x`，后跟任何十六进制数字（0～9 及 A～F）。其中，字母 A～F 可以大写，也可以小写。

:::tip

在进行算术计算时，所有以八进制和十六进制表示的数值最终都将被转换成十进制数值。

:::

对于浮点类型，数值特别大或特别小的情况下可以使用科学计数法表示，使用`E` 或 `e` 来表示科学计数。

由于内存的限制，ECMAScript 并不能保存世界上所有的数值。ECMAScript 能够表示的最小数值保存在 `Number.MIN_VALUE` 中；能够表示的最大数值保存在 `Number.MAX_VALUE` 中。如果某次计算的结果得到了一个超出 JavaScript 数值范围的值，那么这个数值将被自动转换成特殊的 `Infinity` 值。具体来说，如果这个数值是负数，则会被转换成 `-Infinity`（负无穷），如果这个数值是正数，则会被转换成 `Infinity`（正无穷）。


> - 如果某次计算返回了正或负的 `Infinity` 值，那么该值将无法继续参与下一次的计算，因为 `Infinity ` 不是能够参与计算的数值。
> - 要想确定一个数值是不是有穷的，可以使用 `isFinite()` 函数，这个函数在参数位于最小与最大数值之间时会返回 `true`。


与数字类型相对的，是非数字类型，JavaScript 对此单独用 `NaN` 来表示，这个数值用于表示一个本来要返回数值的操作数未返回数值的情况（这样就不会抛出错误了）。NaN 本身有两个非同寻常的特点：

- 任何涉及 `NaN` 的操作（例如 `NaN/10`）都会返回 `NaN`，这个特点在多步计算中有可能导致问题
- `NaN` 与任何值都不相等，包括 `NaN` 本身

针对 `NaN` 的这两个特点，ECMAScript 定义了 `isNaN()` 函数。这个函数接受一个参数，该参数可以是任何类型，而函数会帮我们确定这个参数是否“不是数值”。

:::tip

`isNaN()` 在接收到一个值之后，会尝试将这个值转换为数值，`isNaN()` 判断的是转换后的值是不是数字。

:::

#### String 类型

`String` 类型用于表示由零或多个 16 位 Unicode 字符组成的字符序列，即字符串。字符串可以由双引号（`"`）或单引号（`'`）表示，因此下面两种字符串的写法都是有效的：

```javascript
var firstName = "Nicholas";
var lastName = 'Zakas';
```

ECMAScript 中的字符串是不可变的，也就是说，字符串一旦创建，它们的值就不能改变。要改变某个变量保存的字符串，首先要销毁原来的字符串，然后再用另一个包含新值的字符串填充该变量，例如：

```javascript
var lang = "Java";
lang = lang + "Script";
```

以上示例中的变量 `lang` 开始时包含字符串 `"Java"`。而第二行代码把 `lang` 的值重新定义为 `"Java"` 与 `"Script"` 的组合，即 `"JavaScript"`。实现这个操作的过程如下：首先创建一个能容纳 10 个字符的新字符串，然后在这个字符串中填充 `"Java"` 和 `"Script"`，最后一步是销毁原来的字符串 `"Java"` 和字符串 `"Script"`，因为这两个字符串已经没用了。这个过程是在后台发生的，而这也是在某些旧版本的浏览器中拼接字符串时速度很慢的原因所在。

#### Object 类型

ECMAScript 中的对象其实就是一组数据和功能的集合。对象可以通过执行 `new` 操作符后跟要创建的对象类型的名称来创建。而创建 `Object` 类型的实例并为其添加属性和（或）方法，就可以创建自定义对象。

`Object` 的每个实例都具有下列属性和方法：

- `constructor`：保存着用于创建当前对象的函数。
- `hasOwnProperty(propertyName)`：用于检查给定的属性在当前对象实例中（而不是在实例的原型中）是否存在。其中，作为参数的属性名（`propertyName`）必须以字符串形式指定。
- `isPrototypeOf(object)`：用于检查当前对象是否是传入对象的原型。
- `propertyIsEnumerable(propertyName)`：用于检查给定的属性是否能够使用 `for-in` 语句来枚举。与`hasOwnProperty()` 方法一样，作为参数的属性名必须以字符串形式指定。
- `toLocaleString()`：返回对象的字符串表示，该字符串与执行环境的地区对应。
- `toString()`：返回对象的字符串表示。
- `valueOf()`：返回对象的字符串、数值或布尔值表示。通常与 `toString()` 方法的返回值相同。

### 操作符

#####  一元操作符

- 正负号：`+`、`-`
- 自增自减：`++`、`--`，注意前置后置的区别

##### 位操作符

- 按位非：`~`
- 按位与：`&`
- 按位或：`|`
- 按位异或：`^`
- 左移：`<<`，以 0 填充
- 右移：`>>`，符号位填充
- 无符号右移：`>>>`

##### 布尔操作符

- 逻辑非：`!`
- 逻辑与：`&&`
- 逻辑或：`||`

##### 算数运算符

+ 加法：`+`
+ 减法：`-`
+ 乘法：`*`
+ 除法：`/`
+ 取模：`%`

##### 关系操作符

- 小于：`<`、`<=`
- 大于：`>`、`>=`
- **相等**：`==`、`!=`
- **全等**：`===`、`!==`

##### 条件操作符

`variable = boolean_expression ? true_value : false_value;`

##### 赋值操作符

`=`、`+=`、`-=`、`*=`、`/=`、`%=`、`<<=`、`>>=`、`>>>=`

##### 逗号操作符

逗号操作符多用于声明多个变量；但除此之外，逗号操作符还可以用于赋值。在用于赋值时，逗号操作符总会返回表达式中的最后一项。

### 程序控制语句

#### 分支结构

##### if 语句

```javascript
if (条件表达式) {
    // 执行语句1
} else if (){
    // 执行语句2 
} else {
    // 执行语句3
}
```

##### switch 语句

```javascript
switch(表达式){
    case value1:
        执行语句1;
        break;
    case value2:
        执行语句2;
        break;
    ...
    default:
    	执行最后的语句;
}
```

:::warning

**case 匹配值是是全等**。

:::

#### 循环结构

##### do-while 语句

```javascript
do {
    // 循环体
} while (条件表达式)
```

##### while 语句

```javascript
while (条件表达式) {
    // 循环体
}
```

##### for 语句

```javascript
for (初始化变量; 条件表达式; 操作表达式) {
    // 循环体
}
for (let i = 1; i < 100; i++) {
    // 循环体
}
```

##### for-in 语句

```javascript
for (property in expression) {
	// 使用 property
}
```

##### label 语句

使用label 语句可以在代码中添加标签，以便将来使用。以下是label 语句的语法：

```javascript
label: statement
```

下面是一个示例：

```javascript
start: for (var i=0; i < count; i++) {
	alert(i);
}
```

这个例子中定义的 `start ` 标签可以在将来由 `break ` 或 `continue ` 语句引用。加标签的语句一般都要与 `for  ` 语句等循环语句配合使用。

##### break 和 continue 语句

- `continue`：跳过最近一层的本次循环
- `break`：跳出当前最近一层循环，如果要跳出多层循环，要配合 label 语句使用

##### with 语句

`with` 语句的作用是将代码的作用域设置到一个特定的对象中。`with` 语句的语法如下：

```javascript
with (expression){
    statement;
}
```

定义 `with` 语句的目的主要是为了简化多次编写同一个对象的工作，如下面的例子所示：

```javascript
var qs = location.search.substring(1);
var hostName = location.hostname;
var url = location.href;
```

上面几行代码都包含 `location` 对象。如果使用 `with` 语句，可以把上面的代码改写成如下所示：

```javascript
with(location){
    var qs = search.substring(1);
    var hostName = hostname;
    var url = href;
}
```

在这个重写后的例子中，使用 `with` 语句关联了 `location` 对象。这意味着在 `with` 语句的代码块内部，每个变量首先被认为是一个局部变量，而如果在局部环境中找不到该变量的定义，就会查询 `location` 对象中是否有同名的属性。如果发现了同名属性，则以 `location ` 对象属性的值作为变量的值。

:::danger

严格模式下不允许使用with 语句，否则将视为语法错误。

:::

### 函数

#### 函数的声明与调用

```javascript
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

#### 函数形参和实参的匹配

- 形参和实参数量一致

  ```javascript
  function getSum(num1, num2){
      return num1 + num2;
  }
  getSum(1, 2);  // 3
  ```

- 实参个数多于形参个数

  ```javascript
  function getSum(num1, num2){
      return num1 + num2;
  }
  getSum(1, 2, 3);  // 3
  ```

  此时超出部分被无视掉

- 形参个数多于实参个数

  ```javascript
  function getSum(num1, num2){
      return num1 + num2;
  }
  getSum(1);  // NaN
  ```

#### return 返回值

- `return` 后面的语句不会被执行
- `return` 只能返回一个值，如果返回了多个值，以最后一个值为准
- 如果函数没有 `return`，则返回 `undefined`

#### arguments 的使用

当我们不确定有多少参数与参数传递的时候，可以用 `arguments` 来获取。在 JavaScript 中，`arguments` 实际上它是当前函数的一个内置对象。所有函数都内置了一个 `arguments` 对象，`arguments` 对象中存储了传递的所有实参。

`arguments` 展示形式是一个伪数组，因此可以进行遍历。伪数组具有以下特点：

- 具有 `length` 属性
- 按索引方式存储数据，允许方括号访问
- 不具有数组的 `push`，`pop` 方法

## 变量、作用域和内存问题

### 基本类型和引用类型的值

ECMAScript 变量可能包含两种不同数据类型的值：基本类型值和引用类型值。**基本类型**值指的是简单的数据段，而**引用类型**值指那些可能由多个值构成的对象。

引用类型的值是保存在内存中的对象。与其他语言不同，JavaScript 不允许直接访问内存中的位置，也就是说不能直接操作对象的内存空间。在操作对象时，实际上是在操作对象的引用而不是实际的对象。

##### 动态的属性

定义基本类型值和引用类型值的方式是类似的：创建一个变量并为该变量赋值。但是，当这个值保存到变量中以后，对不同类型值可以执行的操作则大相径庭。**对于引用类型的值，我们可以为其添加属性和方法，也可以改变和删除其属性和方法**。

##### 复制变量值

如果从一个变量向另一个变量复制基本类型的值，会在变量对象上创建一个新值，然后把该值复制到为新变量分配的位置上。

当从一个变量向另一个变量复制引用类型的值时，同样也会将存储在变量对象中的值复制一份放到为新变量分配的空间中。不同的是，这个值的副本实际上是一个指针，而这个指针指向存储在堆中的一个对象。复制操作结束后，两个变量实际上将引用同一个对象。因此，改变其中一个变量，就会影响另一个变量。

```javascript
var obj1 = new Object();
var obj2 = obj1;
obj1.name = "Nicholas";
alert(obj2.name); // "Nicholas"
```

![](/imgs/web/js/js-foundation-1.webp)

##### 传递参数

ECMAScript 中所有函数的参数都是按值传递的。也就是说，把函数外部的值复制给函数内部的参数，就和把值从一个变量复制到另一个变量一样。**基本类型值的传递如同基本类型变量的复制一样，而引用类型值的传递，则如同引用类型变量的复制一样**。有不少开发人员在这一点上可能会感到困惑，因为访问变量有按值和按引用两种方式，而参数只能按值传递。

### 执行环境及作用域

执行环境（execution context，为简单起见，有时也称为“**环境**”）是 JavaScript 中最为重要的一个概念。执行环境定义了变量或函数有权访问的其他数据，决定了它们各自的行为。每个执行环境都有一个与之关联的**变量对象**（variable object），环境中定义的所有变量和函数都保存在这个对象中。虽然我们编写的代码无法访问这个对象，但解析器在处理数据时会在后台使用它。

全局执行环境是最外围的一个执行环境。根据 ECMAScript 实现所在的宿主环境不同，表示执行环境的对象也不一样。在 Web 浏览器中，全局执行环境被认为是 window 对象，因此所有全局变量和函数都是作为 window 对象的属性和方法创建的。某个执行环境中的所有代码执行完毕后，该环境被销毁，保存在其中的所有变量和函数定义也随之销毁（全局执行环境直到应用程序退出——例如关闭网页或浏览器——时才会被销毁）。

:::warning

**每个函数都有自己的执行环境。当执行流进入一个函数时，函数的环境就会被推入一个环境栈中。而在函数执行之后，栈将其环境弹出，把控制权返回给之前的执行环境**。

:::

当代码在一个环境中执行时，会创建变量对象的一个**作用域链**（scope chain）。作用域链的用途，是保证对执行环境有权访问的所有变量和函数的有序访问。作用域链的前端，始终都是当前执行的代码所在环境的变量对象。

:::tip

**标识符解析是沿着作用域链一级一级地搜索标识符的过程。搜索过程始终从作用域链的前端开始，然后逐级地向后回溯，直至找到标识符为止（如果找不到标识符，通常会导致错误发生）**。

:::

### 预解析

JavaScript 引擎运行代码分为两步： 预解析和代码执行

1. 预解析

   JavaScript 引擎会把 JavaScript 里所有的 变量和函数定义提升到当前作用域的最前面

2. 代码执行

   按照代码书写的顺序从上往下执行

预解析分为**变量预解析**（**变量提升**）和**函数预解析**（**函数提升**）

- **变量提升**就是把所有的变量声明提升到**当前作用域**最前，**不提升赋值操作**
- **函数提升**就是把所有的函数声明提升到**当前用域**最前面，**不调用函数**

【例】

```javascript
var num = 10;
function fn(){
    console.log(num);
    var num = 20;
    console.log(num);
}
fn();
```

相当于以下代码：

```javascript
var num;
function fn(){
    var num;
    console.log(num);     // undefined
    num = 20;
    console.log(num);     // 20
}
num = 10;
fn();
```

### 垃圾收集

#### 标记清除

JavaScript 中最常用的垃圾收集方式是**标记清除**（mark-and-sweep）。当变量进入环境（例如，在函数中声明一个变量）时，就将这个变量标记为“进入环境”。从逻辑上讲，永远不能释放进入环境的变量所占用的内存，因为只要执行流进入相应的环境，就可能会用到它们。而当变量离开环境时，则将其标记为“离开环境”。

可以使用任何方式来标记变量。比如，可以通过翻转某个特殊的位来记录一个变量何时进入环境，或者使用一个“进入环境的”变量列表及一个“离开环境的”变量列表来跟踪哪个变量发生了变化。说到底，如何标记变量其实并不重要，关键在于采取什么策略。

垃圾收集器在运行的时候会给存储在内存中的所有变量都加上标记（当然，可以使用任何标记方式）。然后，它会去掉环境中的变量以及被环境中的变量引用的变量的标记。而在此之后再被加上标记的变量将被视为准备删除的变量，原因是环境中的变量已经无法访问到这些变量了。最后，垃圾收集器完成内存清除工作，销毁那些带标记的值并回收它们所占用的内存空间。

#### 引用计数

另一种不太常见的垃圾收集策略叫做**引用计数**（reference counting）。引用计数的含义是跟踪记录每个值被引用的次数。当声明了一个变量并将一个引用类型值赋给该变量时，则这个值的引用次数就是 1。如果同一个值又被赋给另一个变量，则该值的引用次数加 1。相反，如果包含对这个值引用的变量又取得了另外一个值，则这个值的引用次数减 1。当这个值的引用次数变成 0 时，则说明没有办法再访问这个值了，因而就可以将其占用的内存空间回收回来。这样，当垃圾收集器下次再运行时，它就会释放那些引用次数为零的值所占用的内存。

:::warning

无法解决循环引用问题。

:::
