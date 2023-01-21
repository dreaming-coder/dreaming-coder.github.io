# JavaScript - 数组

ECMAScript 数组的**每一项可以保存任何类型的数据**。也就是说，可以用数组的第一个位置来保存字符串，用第二位置来保存数值，用第三个位置来保存对象，以此类推。而且，ECMAScript **数组的大小是可以动态调整的**，即可以随着数据的添加自动增长以容纳新增数据。

创建数组的基本方式有两种。第一种是使用 `Array` 构造函数，如下面的代码所示。

```javascript
var colors = new Array();
```

如果预先知道数组要保存的项目数量，也可以给构造函数传递该数量，而该数量会自动变成 `length` 属性的值。例如，下面的代码将创建 `length` 值为 `20` 的数组。

```javascript
var colors = new Array(20);
```

也可以向 `Array` 构造函数传递数组中应该包含的项。以下代码创建了一个包含 `3` 个字符串值的数组：

```javascript
var colors = new Array("red", "blue", "green");
```

创建数组的第二种基本方式是使用数组字面量表示法。数组字面量由一对包含数组项的方括号表示，多个数组项之间以逗号隔开，如下所示：

```javascript
var colors = ["red", "blue", "green"]; // 创建一个包含3个字符串的数组
var names = []; // 创建一个空数组
var values = [1,2,]; // 不要这样！这样会创建一个包含2或3项的数组
var options = [,,,,,]; // 不要这样！这样会创建一个包含5或6项的数组
```

:::tip

与对象一样，在使用数组字面量表示法时，也不会调用 `Array` 构造函数。

:::

数组的项数保存在其 `length` 属性中，这个属性始终会返回 `0` 或更大的值，数组的 `length` 属性很有特点——它不是只读的。因此，通过设置这个属性，可以从数组的末尾移除项或向数组中添加新项。

```javascript
var colors = ["red", "blue", "green"]; // 创建一个包含3个字符串的数组
colors.length = 2;
alert(colors[2]); //undefined
```

利用 `length` 属性也可以方便地在数组末尾添加新项，如下所示：

```javascript
var colors = ["red", "blue", "green"]; // 创建一个包含3个字符串的数组
colors[colors.length] = "black"; //（在位置3）添加一种颜色
colors[colors.length] = "brown"; //（在位置4）再添加一种颜色
```

当把一个值放在超出当前数组大小的位置上时，数组就会重新计算其长度值，即长度值等于最后一项的索引加 `1`，如下面的例子所示：

```javascript
var colors = ["red", "blue", "green"]; // 创建一个包含3 个字符串的数组
colors[99] = "black"; // （在位置99）添加一种颜色
alert(colors.length); // 100
```

在这个例子中，我们向 `colors` 数组的位置 `99` 插入了一个值，结果数组新长度（`length`）就是 `100`（99 + 1）。而位置 `3` 到位置 `98` 实际上都是不存在的，所以访问它们都将返回 `undefined`。

## 检测数组

```javascript
var ary = [];
var isArray = ary instanceof Array;    // instanceof 运算符

var isArray = Array.isArray(ary);       // Array 的静态方法
```

## 转换方法

```javascript
var ary = [1, 2, 3];
var ary1 = ary.toString();  // 1,2,3
var ary2 = ary.join();  // 1,2,3
var ary3 = ary.join('-');  // 1-2-3
var ary3 = ary.join('&');  // 1&2&3
```

## 栈方法

```javascript
var ary = [1, 2, 3];
var len = ary.push(4, 5, 6);   // 入栈，[1, 2, 3, 4, 5, 6]，返回的结果是数组新的长度
var deleted = ary.pop();       // 出栈，删除数组最后一个元素，并将其返回
```

## 队列方法

```javascript
var colors = new Array();                 // 创建一个数组
var count = colors.push("red", "green");  // 入队，推入两项
alert(count);                             // 2
count = colors.push("black");             // 入队，推入另一项
alert(count);                             // 3

var item = colors.shift();                // 出队，取得第一项
alert(item);                              // "red"
alert(colors.length);                     // 2
```

ECMAScript 还为数组提供了一个 `unshift()` 方法。顾名思义，`unshift()` 与 `shift()` 的用途相反：它能在数组前端添加任意个项并返回新数组的长度。因此，同时使用 `unshift()` 和 `pop()` 方法，可以从相反的方向来模拟队列，即在数组的前端添加项，从数组末端移除项，如下面的例子所示。

```javascript
var colors = new Array();                   // 创建一个数组
var count = colors.unshift("red", "green"); // 入队，推入两项
alert(count);                               // 2
count = colors.unshift("black");            // 入队，推入另一项
alert(count);                               // 3
var item = colors.pop();                    // 出队，取得最后一项
alert(item);                                // "green"
alert(colors.length);                       // 2
```

## 排序方法

```javascript
var ary = [1, 2, 3, 4, 5, 6];
ary.reverse(); // 翻转数组，原位操作
ary.sort();    // 排序，原位操作，但是是字符串的排序方式，如：[14 , 3, 7, 1] 排序后为 [1, 14, 3, 7]
ary.sort(function(a, b){ // 升序排序
    // 返回值 > 0， b 会排列到 a 之前，返回值 < 0，a 会排列在 b 之前，返回值 = 0，相对位置不变
    return a - b;  
});
```

## 操作方法

### concat()

ECMAScript 为操作已经包含在数组中的项提供了很多方法。其中，`concat()` 方法可以基于当前数组中的所有项创建一个新数组。具体来说，**这个方法会先创建当前数组一个副本，然后将接收到的参数添加到这个副本的末尾，最后返回新构建的数组**。在没有给 `concat()` 方法传递参数的情况下，它只是复制当前数组并返回副本。如果传递给 `concat()` 方法的是一或多个数组，则该方法会将这些数组中的每一项都添加到结果数组中。如果传递的值不是数组，这些值就会被简单地添加到结果数组的末尾。

```javascript
var colors = ["red", "green", "blue"];
var colors2 = colors.concat("yellow", ["black", "brown"]);
alert(colors);  // red,green,blue
alert(colors2); // red,green,blue,yellow,black,brown
```

### slice()

它能够基于当前数组中的一或多个项创建一个新数组。`slice()` 方法可以接受一或两个参数，即要返回项的起始和结束位置。在只有一个参数的情况下，`slice()` 方法返回从该参数指定位置开始到当前数组末尾的所有项。如果有两个参数，该方法返回起始和结束位置之间的项——但不包括结束位置的项。

```javascript
var colors = ["red", "green", "blue", "yellow", "purple"];
var colors2 = colors.slice(1);
var colors3 = colors.slice(1,4);
alert(colors2); // green,blue,yellow,purple
alert(colors3); // green,blue,yellow
```

:::tip

- `slice()`方法不会影响原始数组，类似于 Python 中的切片
- 遵循**左闭右开**的原则
- 如果 `slice()` 方法的参数中有一个负数，则用数组长度加上该数来确定相应的位置。例如，在一个包含 `5` 项的数组上调用 `slice(-2,-1)` 与调用 `slice(3,4)` 得到的结果相同。如果结束位置小于起始位置，则返回空数组。

:::

### splice()

`splice()` 的主要用途是向数组的中部插入项，但使用这种方法的方式则有如下 3 种：

- **删除**

  可以删除任意数量的项，只需指定 2 个参数：要删除的第一项的位置和要删除的项数。

  例如，`splice(0,2)` 会删除数组中的前两项。

- **插入**

  可以向指定位置插入任意数量的项，只需提供 3 个参数：起始位置、`0`（要删除的项数）和要插入的项。如果要插入多个项，可以再传入第四、第五，以至任意多个项。

  例如，`splice(2,0,"red","green")` 会从当前数组的位置 `2` 开始插入字符串 `"red"` 和 `"green"`。

- **替换**

  可以向指定位置插入任意数量的项，且同时删除任意数量的项，只需指定 3 个参数：起始位置、要删除的项数和要插入的任意数量的项。**插入的项数不必与删除的项数相等**。

  例如，`splice (2,1,"red","green")` 会删除当前数组位置 `2` 的项，然后再从位置 `2` 开始插入字符串 `"red"` 和 `"green"`。

:::tip

**`splice()` 方法始终都会返回一个数组，该数组中包含从原始数组中删除的项（如果没有删除任何项，则返回一个空数组）**。

:::

```javascript
var colors = ["red", "green", "blue"];
var removed = colors.splice(0,1); // 删除第一项
alert(colors); // green,blue
alert(removed); // red，返回的数组中只包含一项

removed = colors.splice(1, 0, "yellow", "orange"); // 从位置1开始插入两项
alert(colors); // green,yellow,orange,blue
alert(removed); // 返回的是一个空数组

removed = colors.splice(1, 1, "red", "purple"); // 插入两项，删除一项
alert(colors); // green,red,purple,orange,blue
alert(removed); // yellow，返回的数组中只包含一项
```

## 位置方法

```javascript
var ary = ['red', 'blue', 'green', 'blue', 'yellow'];
var index = ary.indexOf('blue');      // 1
var index = ary.indexOf('black');     // -1
var index = ary.lastIndexOf('blue');  // 3
var index = ary.lastIndexOf('black'); // -1
```

## 迭代方法

ECMAScript 5 为数组定义了 5 个迭代方法。每个方法都接收两个参数：要**在每一项上运行的函数**和**（可选的）运行该函数的作用域对象**——影响 `this` 的值。传入这些方法中的函数会接收三个参数：**数组项的值**、**该项在数组中的位置**和**数组对象本身**。根据使用的方法不同，这个函数执行后的返回值可能会也可能不会影响方法的返回值。

- `every()`：对数组中的每一项运行给定函数，如果该函数对每一项都返回 `true`，则返回 `true`。

```javascript
var ary = [1, 2, 3, 4, 5, 6, 7, 8];
var flag1 = ary.every(function (item, index, array) {
    return item > 0;
});
var flag2= ary.every(function (item, index, array) {
    return item % 2 === 0;
});

alert(flag1);  // true
alert(flag2);  // false
```

- `filter()`：对数组中的每一项运行给定函数，返回该函数会返回 `true` 的项组成的数组。

```javascript
var ary = [1, 2, 3, 4, 5, 6, 7, 8];
var filterResult = ary.filter(function (item, index, array) {
    return item % 2 === 0;
});

alert(filterResult); // [ 2, 4, 6, 8 ]
```

- `forEach()`：对数组中的每一项运行给定函数。这个方法没有返回值。

```javascript
var ary = [1, 2, 3, 4, 5, 6, 7, 8];
var result = [];
ary.forEach(function (item, index, array) {
    result[result.length] = item * item;
});

alert(result); // [1,4,9,16,25,36,49,64]
```

- `map()`：对数组中的每一项运行给定函数，返回每次函数调用的结果组成的数组。

```javascript
var ary = [1, 2, 3, 4, 5, 6, 7, 8];
var result = ary.map(function (item, index, array) {
    return  item * 2 + 1;
});

alert(result); // [3,5,7,9,11,13,15,17]
```

- `some()`：对数组中的每一项运行给定函数，如果该函数对任一项返回 `true`，则返回 `true`。

```javascript
var ary = [-1, 1, 2, 3, 4, 5, 6, 7, 8];
var flag = ary.some(function (item, index, array) {
    return item < 0;
});

alert(flag); // true
```

:::warning

**以上方法都不会修改原数组，不是原位操作！**

:::

## 归并方法

ECMAScript 5 还新增了两个归并数组的方法：`reduce()` 和 `reduceRight()`。这两个方法都会迭代数组的所有项，然后构建一个最终返回的值。其中，`reduce()` 方法从数组的第一项开始，逐个遍历到最后。而 `reduceRight()` 则从数组的最后一项开始，向前遍历到第一项。

这两个方法都接收两个参数：一个**在每一项上调用的函数**和**（可选的）作为归并基础的初始值**。传给 `reduce()` 和 `reduceRight()` 的函数接收 4 个参数：**前一个值**、**当前值**、**项的索引**和**数组对象**。这个函数返回的任何值都会作为第一个参数自动传给下一项。第一次迭代发生在数组的第二项上，因此第一个参数是数组的第一项，第二个参数就是数组的第二项。

#### reduce()

```javascript
var ary = [1, 2, 3, 4, 5];
var result1 = ary.reduce(function (pre, cur, index, array) {
    return pre + cur;
});
var result2 = ary.reduce(function (pre, cur, index, array) {
    return pre + cur;
}, 10);
alert(result1);  // 15
alert(result2);  // 25
```

#### reduceRight()

```javascript
var ary = [1, 2, 3, 4, 5];
var result1 = ary.reduceRight(function (pre, cur, index, array) {
    return pre + cur;
});
var result2 = ary.reduceRight(function (pre, cur, index, array) {
    return pre + cur;
}, 10);

console.log(result1);  // 15
console.log(result2);  // 25
```
