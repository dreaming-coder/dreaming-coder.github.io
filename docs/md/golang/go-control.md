# GoLang - 控制结构

## 条件语句

`if ` 是用于测试某个条件（布尔型或逻辑型）的语句，如果该条件成立，则会执行 `if` 后由大括号括起来的代码块，否则就忽略该代码块继续执行后续的代码。

```go
if condition {
    // do something	
}
```

如果存在第二个分支，则可以在上面代码的基础上添加 `else ` 关键字以及另一代码块，这个代码块中的代码只有在条件不满足时才会执行。`if ` 和 `else` 后的两个代码块是相互独立的分支，只可能执行其中一个。

```go
if condition {
    // do something	
} else {
    // do something	
}
```

如果存在第三个分支，则可以使用下面这种三个独立分支的形式：

```go
if condition1 {
    // do something	
} else if condition2 {
    // do something else	
} else {
    // catch-all or default
}
```

::: tip

`else-if` 分支的数量是没有限制的，但是为了代码的可读性，还是不要在 `if ` 后面加入太多的 `else-if` 结构。如果你必须使用这种形式，则把尽可能先满足的条件放在前面。

:::

::: warning

**关键字 `if` 和 `else` 之后的左大括号 `{` 必须和关键字在同一行，如果你使用了 `else-if` 结构，则前段代码块的右大括号 `}` 必须和 `else-if` 关键字在同一行。这两条规则都是被编译器强制规定的。**

:::

【示例】

1. 判断一个字符串是够为空：

   - `if str == "" {...}`
   - `if len(str) == 0 {...}`

2. 判断运行 Go 程序的操作系统类型，这可以通过常量 `runtime.GOOS` 来判断

   ```go
   if runtime.GOOS == "windows" {
       ...
   } else { // Unix-like
       ...
   }
   ```

   这段代码一般被放在 ` init()` 函数中执行。这儿还有一段示例来演示如何根据操作系统来决定输入结束的提示：

   ```go
   var prompt = "Enter a digit, e.g. 3 "+ "or %s to quit."
    
   func init() {
       if runtime.GOOS == "windows" {
           prompt = fmt.Sprintf(prompt, "Ctrl+Z, Enter")		
       } else { //Unix-like
           prompt = fmt.Sprintf(prompt, "Ctrl+D")
       }
   }
   ```

3. 函数 `Abs()` 用于返回一个整型数字的绝对值:

   ```go
   func Abs(x int) int {
       if x < 0 {
           return -x
       }
       return x	
   }
   ```

4. `isGreater` 用于比较两个整型数字的大小:

   ```go
   func isGreater(x, y int) bool {
       if x > y {
           return true	
       }
       return false
   }
   ```

在条件语句中，还可以包含初始化语句：

```go
if initialization; condition {
    // do something
}
```

例如：

```go
if val := 10; val > max {
    // do something
}
```

::: warning

- 但要注意的是，使用简短方式 `:=` 声明的变量的作用域只存在于 `if` 结构中（在 `if` 结构的大括号之间，如果使用 `if-else` 结构则在 `else` 代码块中变量也会存在）。如果变量在 `if` 结构之前就已经存在，那么在 `if` 结构中，该变量原来的值会被隐藏。最简单的解决方案就是不要在初始化语句中声明变量。

- 另外，`else-if` 语句中也可以初始化变量，只是其作用域只在当前的 `else-if` 语句到结尾的 `else` 语句之间，在此之前的`if`和 `else` 语句是无法访问的。

:::

## switch 语句

相比较 C 和 Java 等其它语言而言，Go 语言中的 `switch ` 结构使用上更加灵活。它接受任意形式的表达式：

```go
switch var1 {
    case val1:
        ...
    case val2:
        ...
    default:
        ...
}
```

::: tip

- 变量 `var1 ` 可以是任何类型，而 `val1 ` 和 `val2 ` 则可以是同类型的任意值。**类型不被局限于常量或整数，但必须是相同的类型；或者最终结果为相同类型的表达式**。

- 前花括号 `{` 必须和 `switch `关键字在同一行！
- 可以同时测试多个可能符合条件的值，使用逗号分割它们，例如：`case val1, val2, val3`

:::

每一个 `case` 分支都是唯一的，从上至下逐一测试，直到匹配为止。一旦成功地匹配到某个分支，在执行完相应代码后就会退出整个 `switch` 代码块，也就是说您不需要特别使用 `break` 语句来表示结束。因此，程序也不会自动地去执行下一个分支的代码。如果在执行完每个分支的代码后，还希望继续执行后续分支的代码，可以使用 `fallthrough` 关键字来达到目的。

```go
switch i {
    case 0: fallthrough
    case 1:
        f() // 当 i == 0 时函数也会被调用
}
```

::: warning

`fallthrough` 关键字之后，在当前该 `case ` 分支不能再出现语句了

:::

在 `case ...:` 语句之后，不需要使用花括号将多行语句括起来，但可以在分支中进行任意形式的编码。当代码块只有一行时，可以直接放置在 `case` 语句之后。

同样可以使用 `return` 语句来提前结束代码块的执行。当在 `switch ` 语句块中使用 `return` 语句，并且您的函数是有返回值的，还需要在 `switch` 之后添加相应的 `return` 语句以确保函数始终会返回。

可选的 `default` 分支可以出现在任何顺序，但最好将它放在最后。它的作用类似与 `if-else` 语句中的 `else`，表示不符合任何已给出条件时，执行相关语句。

`switch` 语句的第二种形式是不提供任何被判断的值（实际上默认为判断是否为 `true`），然后在每个 `case` 分支中进行测试不同的条件。当任一分支的测试结果为 `true` 时，该分支的代码会被执行。这看起来非常像链式的 `if-else` 语句，但是在测试条件非常多的情况下，提供了可读性更好的书写方式。

```go
switch {
    case i < 0:
        f1()
    case i == 0:
        f2()
    case i > 0:
        f3()
}
```

> 前面的 `switch ` 语句可以看做是值得判断，这里的 `switch` 是布尔条件的判断

**switch 语句的第三种形式是包含一个初始化语句**：

```go
switch initialization; expression {
    case val1:
        ...
    case val2:
        ...
    default:
        ...
}
```

> `switch ` 语句还可以被用于 `type-switch` 来判断某个 interface 变量中实际存储的变量类型，后面再说。

## for 语句

### 基于计数器的迭代

如果想要重复执行某些语句，Go 语言中只有 `for` 结构可以使用。不要小看它，这个 `for` 结构比其它语言中的更为灵活。

最简单的基于计数器的迭代，基本形式为：

```go
for  初始化语句; 条件语句; 修饰语句 {
    ...
}
```

这三部分组成的循环的头部，它们之间使用分号 `;` 相隔，但并不需要括号  `()`  将它们括起来。

还可以在循环中同时使用多个计数器：

```go
for i, j := 0, N; i < j; i, j = i+1, j-1 {
    ...
}
```

:::warning

- 同样的，左花括号 `{` 必须和 `for ` 语句在同一行，计数器的生命周期在遇到右花括号 `}` 时便终止。一般习惯使用 `i`、`j`、`z` 或 `ix` 等较短的名称命名计数器。
- 特别注意，**永远不要在循环体内修改计数器，这在任何语言中都是非常差的实践！**

:::

可以将两个 `for` 循环嵌套起来：

```go
for i:=0; i<5; i++ {
    for j:=0; j<10; j++ {
        println(j)
    }
}
```

### 基于条件判断的迭代

`for` 结构的第二种形式是没有头部的条件判断迭代（类似其它语言中的 `while `循环），基本形式为：

```go
for 条件语句 {
    ...
}
```

也可以认为这是没有初始化语句和修饰语句的 ` for` 结构，因此 `;;` 便是多余的了。

```go
package main
 
import "fmt"
 
func main() {
    var i int = 5
 
    for i >= 0 {
        i = i - 1
        fmt.Printf("The variable i is now: %d\n", i)
    }
}
 
/*
 * 输出：
 * The variable i is now: 4
 * The variable i is now: 3
 * The variable i is now: 2
 * The variable i is now: 1
 * The variable i is now: 0
 * The variable i is now: -1
 */
```

### 无限循环

条件语句是可以被省略的，如 `i:=0; ; i++` 或 `for { }` 或 `for ;; { }`：这些循环的本质就是无限循环。最后一个形式也可以被改写为 `for true { }`，但一般情况下都会直接写 `for { }`。

如果 `for` 循环的头部没有条件语句，那么就会认为条件永远为 `true`，因此循环体内必须有相关的条件判断以确保会在某个时刻退出循环。

无限循环的经典应用是服务器，用于不断等待和接受新的请求。

```go
for t, err = p.Token(); err == nil; t, err = p.Token() {
	...
}
```

## for-range 结构

`for-range` 结构是 Go 语言特有的一种迭代结构，它在许多情况下都非常有用。它可以迭代任何一个集合，包括数组（`array`）和字典（`map`），同时可以获得每次迭代所对应的索引和值。一般形式为：

```go
for ix, val := range coll { }
```

要注意的是，`val` 始终为集合中对应索引的值的副本，因此它一般只具有只读性质，对它所做的任何修改都不会影响到集合中原有的值（注：如果 `val` 为指针，则会产生指针的副本，依旧可以修改集合中的原值）。一个字符串是 Unicode 编码的字符（或称之为 rune）集合，因此您也可以用它迭代字符串：

```go
for pos, char := range str {
    ...
}
```

> 每个 `rune` 字符和索引在 `for-range` 循环中是一一对应的。它能够自动根据 UTF-8 规则识别 Unicode 编码的字符。

还有其他一些用法，等说道相应的内容再举例。

## break 和 continue

- **break**：
  一般而言，直接结束最近的一层循环。但在 `switch` 或 `select` 语句中，`break` 语句的作用结果是跳过整个代码块，执行后续的代码。
- **continue**：
  结束本次迭代，直接开始下一次迭代，但不是无条件执行下一次循环，执行之前依旧需要满足循环的判断条件。 关键字 `continue` 只能被用于 `for` 循环中。

## 标签与 goto

`for`、`switch` 或 `select` 语句都可以配合标签（`label`）形式的标识符使用，即某一行第一个以冒号（`:`）结尾的单词（gofmt 会将后续代码自动移至下一行）

```go
package main
 
import "fmt"
 
func main() {
 
LABEL1:
    for i := 0; i <= 5; i++ {
        for j := 0; j <= 5; j++ {
            if j == 4 {
                continue LABEL1
            }
            fmt.Printf("i is: %d, and j is: %d\n", i, j)
        }
    }
}
```

> 本例中，`continue` 语句指向` LABEL1`，当执行到该语句的时候，就会跳转到 `LABEL1` 标签的位置。

::: warning 

- `continue` 可以用 `break` 和 `goto` 关键字替代，但是作用可能不同

- `continue` 和` break` 是指将自身功能作用到标签同一级别的循环体（例如多层循环，你想 `break` 直接结束整体的循环，就需要标签），`goto` 是直接到那一行执行，容易造成死循环

:::