# JavaScript - 字符串

## 模板字符串

模板字符串（template string）是增强版的字符串，用反引号（`）标识。它可以当作普通字符串使用，也可以用来定义多行字符串，或者在字符串中嵌入变量。 

```js
// 普通字符串
`In JavaScript '\n' is a line-feed.`

// 多行字符串
`In JavaScript this is
 not legal.`

console.log(`string text line 1
string text line 2`);

// 字符串中嵌入变量
let name = "Bob", time = "today";
`Hello ${name}, how are you ${time}?`
```

## 常用函数

|         方法          | 描述                                                         |
| :-------------------: | ------------------------------------------------------------ |
|      `charAt()`       | 返回指定索引位置的字符                                       |
|      `concat()`       | 连接两个或多个字符串，返回连接后的字符串                     |
|      `indexOf()`      | 返回字符串中检索指定字符第一次出现的位置                     |
|    `lastIndexOf()`    | 返回字符串中检索指定字符最后一次出现的位置                   |
|   `localeCompare()`   | 用本地特定的顺序来比较两个字符串                             |
|       `match()`       | 找到一个或多个正则表达式的匹配                               |
|      `replace()`      | 替换与正则表达式匹配的子串                                   |
|      `search()`       | 检索与正则表达式相匹配的值                                   |
|       `slice()`       | 提取字符串的片断，并在新的字符串中返回被提取的部分           |
|       `split()`       | 把字符串分割为子字符串数组                                   |
|      `substr()`       | 从起始索引号提取字符串中指定数目的字符                       |
|     `substring()`     | 提取字符串中两个指定的索引号之间的字符                       |
| `toLocaleLowerCase()` | 根据主机的语言环境把字符串转换为小写，只有几种语言（如土耳其语）具有地方特有的大小写映射 |
| `toLocaleUpperCase()` | 根据主机的语言环境把字符串转换为大写，只有几种语言（如土耳其语）具有地方特有的大小写映射 |
|    `toLowerCase()`    | 把字符串转换为小写                                           |
|     `toString()`      | 返回字符串对象值                                             |
|    `toUpperCase()`    | 把字符串转换为大写                                           |
|       `trim()`        | 移除字符串首尾空白                                           |
|      `valueOf()`      | 返回某个字符串对象的原始值                                   |

## ES 6 之后新增方法

### includes(), startsWith(), endsWith()

传统上，JavaScript 只有`indexOf`方法，可以用来确定一个字符串是否包含在另一个字符串中。ES6 又提供了三种新方法。

- **includes()**：返回布尔值，表示是否找到了参数字符串。
- **startsWith()**：返回布尔值，表示参数字符串是否在原字符串的头部。
- **endsWith()**：返回布尔值，表示参数字符串是否在原字符串的尾部。

```js
let s = 'Hello world!';

s.startsWith('Hello') // true
s.endsWith('!') // true
s.includes('o') // true
```

这三个方法都支持第二个参数，表示开始搜索的位置。

```js
let s = 'Hello world!';

s.startsWith('world', 6) // true
s.endsWith('Hello', 5) // true
s.includes('Hello', 6) // false
```

上面代码表示，使用第二个参数 `n` 时，`endsWith` 的行为与其他两个方法有所不同。它针对前 `n` 个字符，而其他两个方法针对从第 `n` 个位置直到字符串结束。

### repeat()

`repeat`方法返回一个新字符串，表示将原字符串重复`n`次。

```js
'x'.repeat(3) // "xxx"
'hello'.repeat(2) // "hellohello"
'na'.repeat(0) // ""
```

参数如果是小数，会被取整。

```js
'na'.repeat(2.9) // "nana"
```

如果`repeat`的参数是负数或者`Infinity`，会报错。

```js
'na'.repeat(Infinity)
// RangeError
'na'.repeat(-1)
// RangeError
```

### padStart()，padEnd()

ES2017 引入了字符串补全长度的功能。如果某个字符串不够指定长度，会在头部或尾部补全。`padStart()` 用于头部补全，`padEnd()` 用于尾部补全。

```js
'x'.padStart(5, 'ab') // 'ababx'
'x'.padStart(4, 'ab') // 'abax'

'x'.padEnd(5, 'ab') // 'xabab'
'x'.padEnd(4, 'ab') // 'xaba'
```

上面代码中，`padStart()` 和 `padEnd()` 一共接受两个参数，第一个参数是字符串补全生效的最大长度，第二个参数是用来补全的字符串。

如果原字符串的长度，等于或大于最大长度，则字符串补全不生效，返回原字符串。

```js
'xxx'.padStart(2, 'ab') // 'xxx'
'xxx'.padEnd(2, 'ab') // 'xxx'
```

如果用来补全的字符串与原字符串，两者的长度之和超过了最大长度，则会截去超出位数的补全字符串。

```js
'abc'.padStart(10, '0123456789')
// '0123456abc'
```

如果省略第二个参数，默认使用空格补全长度。

```js
'x'.padStart(4) // '   x'
'x'.padEnd(4) // 'x   '
```

### trimStart()，trimEnd()

它们的行为与`trim()`一致，`trimStart()`消除字符串头部的空格，`trimEnd()`消除尾部的空格。它们返回的都是新字符串，不会修改原始字符串。

```js
const s = '  abc  ';

s.trim() // "abc"
s.trimStart() // "abc  "
s.trimEnd() // "  abc"
```

### replaceAll()

ES2021 引入了 `replaceAll()` 方法，可以一次性替换所有匹配。

```js
'aabbcc'.replaceAll('b', '_')
// 'aa__cc'
```

它的用法与 `replace()` 相同，返回一个新字符串，不会改变原字符串。

```js
String.prototype.replaceAll(searchValue, replacement)
```

上面代码中，`searchValue` 是搜索模式，可以是一个字符串，也可以是一个全局的正则表达式（带有 `g` 修饰符）。

如果 `searchValue` 是一个不带有 `g` 修饰符的正则表达式，`replaceAll()` 会报错。这一点跟 `replace()` 不同。

`replaceAll()` 的第二个参数 `replacement` 是一个字符串，表示替换的文本，其中可以使用一些特殊字符串。

- **$&**：匹配的字符串。
- **$`** ：匹配结果前面的文本。
- **$'**：匹配结果后面的文本。
- **$n**：匹配成功的第 `n` 组内容，`n` 是从 1 开始的自然数。这个参数生效的前提是，第一个参数必须是正则表达式。
- **$$**：指代美元符号 `$`。