# 运JavaScript - 算符扩展

## 指数运算符

ES2016 新增了一个指数运算符（`**`）。

```js
2 ** 2 // 4
2 ** 3 // 8
```

这个运算符的一个特点是右结合，而不是常见的左结合。多个指数运算符连用时，是从最右边开始计算的。

```js
// 相当于 2 ** (3 ** 2)
2 ** 3 ** 2
// 512
```

指数运算符可以与等号结合，形成一个新的赋值运算符（`**=`）。

```js
let a = 1.5;
a **= 2;
// 等同于 a = a * a;

let b = 4;
b **= 3;
// 等同于 b = b * b * b;
```

## 链判断运算符

编程实务中，如果读取对象内部的某个属性，往往需要判断一下，属性的上层对象是否存在。比如，读取`message.body.user.firstName`这个属性，安全的写法是写成下面这样。

```js
// 错误的写法
const  firstName = message.body.user.firstName || 'default';

// 正确的写法
const firstName = (message
  && message.body
  && message.body.user
  && message.body.user.firstName) || 'default';
```

上面例子中，`firstName`属性在对象的第四层，所以需要判断四次，每一层是否有值。 

这样的层层判断非常麻烦，因此 ES2020 引入了“链判断运算符”（optional chaining operator）`?.`，简化上面的写法。 

```js
const firstName = message?.body?.user?.firstName || 'default';
const fooValue = myForm.querySelector('input[name=foo]')?.value
```

上面代码使用了 `?.` 运算符，直接在链式调用的时候判断，左侧的对象是否为 `null` 或 `undefined`。**如果是的，就不再往下运算，而是返回 `undefined`。** 

下面是判断对象方法是否存在，如果存在就立即执行的例子。

```js
iterator.return?.()
```

上面代码中，`iterator.return` 如果有定义，就会调用该方法，否则 `iterator.return` 直接返回 `undefined`，不再执行 `?.` 后面的部分。

链判断运算符 `?.` 有三种写法。

- `obj?.prop` //  obj 是否存在
- `obj?.[expr]` // 同上
- `func?.(...args)` // 函数或对象方法是否存在

下面是 `?.` 运算符常见形式，以及不使用该运算符时的等价形式。

```js
a?.b
// 等同于
a == null ? undefined : a.b

a?.[x]
// 等同于
a == null ? undefined : a[x]

a?.b()
// 等同于
a == null ? undefined : a.b()

a?.()
// 等同于
a == null ? undefined : a()
```

## Null 判断运算符

读取对象属性的时候，如果某个属性的值是 `null` 或 `undefined`，有时候需要为它们指定默认值。常见做法是通过 `||` 运算符指定默认值。

```js
const headerText = response.settings.headerText || 'Hello, world!';
const animationDuration = response.settings.animationDuration || 300;
const showSplashScreen = response.settings.showSplashScreen || true;
```

上面的三行代码都通过 `||` 运算符指定默认值，但是这样写是错的。开发者的原意是，只要属性的值为 `null` 或 `undefined`，默认值就会生效，但是属性的值如果为空字符串或 `false` 或 `0`，默认值也会生效。 

为了避免这种情况，ES2020 引入了一个新的 Null 判断运算符 `??`。它的行为类似 `||`，但是只有运算符左侧的值为 `null` 或 `undefined` 时，才会返回右侧的值。 

```js
const headerText = response.settings.headerText ?? 'Hello, world!';
const animationDuration = response.settings.animationDuration ?? 300;
const showSplashScreen = response.settings.showSplashScreen ?? true;
```

上面代码中，默认值只有在左侧属性值为`null`或`undefined`时，才会生效。

这个运算符的一个目的，就是跟链判断运算符`?.`配合使用，为`null`或`undefined`的值设置默认值。

```js
const animationDuration = response.settings?.animationDuration ?? 300;
```