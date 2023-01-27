# GoLang - 函数

函数可以让我们将一个语句序列打包为一个单元，然后可以从程序中其它地方多次调用。函数的机制可以让我们将一个大的工作分解为小的任务，这样的小任务可以让不同程序员在不同时间、不同地方独立完成。一个函数同时对用户隐藏了其实现细节。由于这些因素，对于任何编程语言来说，函数都是一个至关重要的部分。

## 函数声明

函数声明包括函数名、形式参数列表、返回值列表（可省略）以及函数体。

```go
func 函数名(参数列表) (返回值列表) {
    // 函数体
    return
}
```

:::tip

- Go 的函数没有默认参数值
- 除了 `main()`、`init()` 函数外，其它所有类型的函数都可以有参数与返回值。

:::

一个简单的例子：

```go
package main
 
func main() {
    println("In main before calling greeting")
    greeting()
    println("In main after calling greeting")
}
 
func greeting() {
    println("In greeting: Hi!!!!!")
}
```

代码输出：

```
In main before calling greeting
In greeting: Hi!!!!!
In main after calling greeting
```

:::danger 警告

在 Go 里面**函数重载是不被允许的**。这将导致一个编译错误：`funcName redeclared in this book, previous declaration at lineno`

Go 语言不支持这项特性的主要原因是函数重载需要进行多余的类型匹配影响性能；没有重载意味着只是一个简单的函数调度。所以你需要给不同的函数使用不同的名字，我们通常会根据函数的特征对函数进行命名

:::

**函数也可以作为函数类型被使用**。函数类型也就是函数签名，**函数类型表示具有相同参数和结果类型的所有函数的集合**。函数类型的未初始化变量的值为 `nil`。就像下面：

```go
type funcType func(int, int) int
```

> 上面通过 `type` 关键字，定义了一个新类型，函数类型 `funcType `。

函数也可以在表达式中赋值给变量，这样作为表达式中右值出现，我们称之为函数值字面量（function literal），函数值字面量是一种表达式，它的值被称为匿名函数，就像下面一样：

```go
f := func() int { return 7 }
```

下面代码对以上 2 种情况都做了定义和调用：

```go
package main
 
import (
    "fmt"
    "time"
)
 
type funcType func(time.Time)  // 定义函数类型funcType
 
func main() {
    // 方式一：直接赋值给变量
    f := func(t time.Time) time.Time { return t }  
    fmt.Println(f(time.Now()))
 
    // 方式二：定义函数类型funcType变量timer
    var timer funcType = CurrentTime  
    timer(time.Now())
 
    // 先把CurrentTime函数转为funcType类型，然后传入参数调用
    funcType(CurrentTime)(time.Now())  
    // 这种处理方式在Go 中比较常见
}
 
func CurrentTime(start time.Time) {
    fmt.Println(start)
}
```

如果一组形参或返回值有相同的类型，我们不必为每个形参都写出参数类型。下面 2 个声明是等价的：

```go
func f(i, j, k int, s, t string)                 { /* ... */ }
func f(i int, j int, k int,  s string, t string) { /* ... */ }
```

下面，我们给出 4 种方法声明拥有 2 个 `int` 型参数和 1 个 `int` 型返回值的函数：

```go
func add(x int, y int) int   {return x + y}
func sub(x, y int) (z int)   { z = x - y; return}
func first(x int, _ int) int { return x }
func zero(int, int) int      { return 0 }

fmt.Printf("%T\n", add)   // "func(int, int) int"
fmt.Printf("%T\n", sub)   // "func(int, int) int"
fmt.Printf("%T\n", first) // "func(int, int) int"
fmt.Printf("%T\n", zero)  // "func(int, int) int"
```

## 函数参数与返回值

函数能够接收参数供自己使用，也可以返回零个或多个值（我们通常把返回多个值称为返回一组值）。相比与 C、C++、Java 和 C#，多值返回是 Go 的一大特性，为我们判断一个函数是否正常执行提供了方便。

我们通过 `return` 关键字返回一组值。事实上，任何一个有返回值（单个或多个）的函数都必须以 `return ` 或 `panic` 结尾。

> 函数定义时，它的形参一般是有名字的，不过我们也可以定义没有形参名的函数，只有相应的形参类型，就像这样：`func f(int, int, float64)`。

### 按值传递和按引用传递

Go 默认使用按值传递来传递参数，也就是传递参数的副本。函数接收参数副本之后，在使用变量的过程中可能对副本的值进行更改，但不会影响到原来的变量，比如 `Function(arg1)`。

如果你希望函数可以直接修改参数的值，而不是对参数的副本进行操作，你需要将参数的地址（变量名前面添加 `&` 符号，比如 ` &variable`）传递给函数，这就是按引用传递，比如 `Function(&arg1)`，此时传递给函数的是一个指针。如果传递给函数的是一个指针，指针的值（一个地址）会被复制，但指针的值所指向的地址上的值不会被复制；我们可以通过这个指针的值来修改这个值所指向的地址上的值。（**指针也是变量类型，有自己的地址和值，通常指针的值指向一个变量的地址。所以，按引用传递也是按值传递。**）

几乎在任何情况下，传递指针（一个 32 位或者 64 位的值）的消耗都比传递副本来得少。

:::tip

在函数调用时，像**切片**（slice）、**字典**（map）、**接口**（interface）、**通道**（channel）这样的引用类型都是**默认使用引用传递**（即使没有显式的指出指针）。

:::

### 命名返回值

如下的几个函数带有一个 `int` 参数，返回两个 `int` 值；其中一个函数的返回值在函数调用时就已经被赋予了一个初始零值。

```go
package main
 
import "fmt"
 
var num int = 10
var numx2, numx3 int
 
func main() {
    numx2, numx3 = getX2AndX3(num)
    PrintValues()
    numx2, numx3 = getX2AndX3_2(num)
    PrintValues()
}
 
func PrintValues() {
    fmt.Printf("num = %d, 2x num = %d, 3x num = %d\n", num, numx2, numx3)
}
 
func getX2AndX3(input int) (int, int) {
    return 2 * input, 3 * input
}
 
func getX2AndX3_2(input int) (x2 int, x3 int) {
    x2 = 2 * input
    x3 = 3 * input
    // return x2, x3， 这两种返回对于命名返回值等价
    return
}
```

输出结果：

```
num = 10, 2x num = 20, 3x num = 30    
num = 10, 2x num = 20, 3x num = 30
```

`getX2AndX3` 与 `getX2AndX3_2` 两个函数演示了如何使用非命名返回值与命名返回值的特性。当需要返回多个非命名返回值时，定义函数时需要在参数列表后使用 `()` 把它们括起来，比如 `getX2AndX3(input int) (int, int)`。

命名返回值作为**结果形参**（result parameters）被**初始化为相应类型的零值**，当需要返回的时候，我们只需要一条简单的不带参数的 `return` 语句。

需要注意的是，即使只有一个命名返回值，也需要使用 `()` 括起来，如：

```go
func getX2AndX3_3(input int) (x2 int){
    x2 = 2 * input
    return
}
```

:::tip

即使函数使用了命名返回值，你依旧可以无视它而返回明确的值。：

```go
func getX2AndX3_2(input int) (x2 int, x3 int) {
    x2 = 2 * input
    x3 = 3 * input
    return 1,2
}
```

:::

### 可变参数

如果函数的最后一个参数是采用 `...type` 的形式，那么这个函数就可以处理一个变长的参数，这个长度可以为 0，这样的函数称为变参函数。

```go
func myFunc(a, b, arg ...int) {}
```

例如：

```go
func Greeting(prefix string, who ...string)
Greeting("hello:", "Joe", "Anna", "Eileen")
```

在 `Greeting` 函数中，变量 `who` 的值为 `[]string{"Joe", "Anna", "Eileen"}`。

> 如果参数被存储在一个 `slice` 类型的变量 `l` 中，则可以通过 `l...` 的形式来传递参数，调用变参函数。

```go
package main
 
import "fmt"
 
func main() {
    x := min(1, 3, 2, 0)
    fmt.Printf("The minimum is: %d\n", x)
    
    l := []int{7,9,3,5,1}
    x = min(l...)
    fmt.Printf("The minimum in the slice is: %d", x)
}
 
func min(s ...int) int {
    if len(s)==0 {
        return 0
    }
    min := s[0]
    for _, v := range s {
        if v < min {
            min = v
        }
    }
    return min
}
```

## defer 和追踪

关键字 `defer` 允许我们推迟到函数返回之前（或任意位置执行 `return` 语句之后）一刻才执行某个语句或函数（为什么要在返回之后才执行这些语句？因为 `return` 语句同样可以包含一些操作，而不是单纯地返回某个值）。

> 关键字 `defer` 的用法类似于面向对象编程语言 Java 和 C# 的 `finally` 语句块，它一般用于释放某些已分配的资源。

示例：

```go
package main

func main() {
	println(function1())
}

func function1() string {
	println("first operate...")
	defer function2()
	println("second operate...")
	return function3()
}

func function2() {
	println("defer operate...")
}
func function3() string {
	println("return operate")
	return "return result..."
}
```

输出：

```
first operate...
second operate...
return operate   
defer operate... 
return result... 
```

使用 `defer` 的语句同样可以接受参数：

```go
func a() {
    i := 0
    defer fmt.Println(i)
    i++
    return
}
```

输出：

```
0
```

> 这里可以看出来，`defer` 语句虽然推迟执行，但是执行命令是已经确认的，不会由于后面 `i` 增加了就改变打印出来的 `i` 的值

当有多个`defer`行为被注册时，它们会以**逆序执行**（类似栈，即**后进先出**）：

```go
func f() {
    for i := 0; i < 5; i++ {
        defer fmt.Printf("%d ", i)
    }
}
```

输出：

```
4 3 2 1 0
```

关键字 `defer` 允许我们进行一些函数执行完成后的收尾工作，例如：

1. 关闭流文件

   ```go
   // open a file  
   defer file.Close()
   ```

2. 解锁一个加锁的资源

   ```go
   mu.Lock()  
   defer mu.Unlock()
   ```

3. 打印最终报告

   ```go
   printHeader()  
   defer printFooter()
   ```

4. 关闭数据库链接

   ```go
   // open a database connection  
   defer disconnectFromDB()
   ```

## 函数回调

Go 语言中函数可以作为其它函数的参数进行传递，然后在其它函数内调用执行，一般称之为回调。

```go
package main
 
import (
    "fmt"
)
 
func main() {
    callback(1, Add)
}
 
func Add(a, b int) {
    fmt.Printf("%d 与 %d 相加的和是: %d\n", a, b, a+b)
}
 
func callback(y int, f func(int, int)) {
    f(y, 2) // 回调函数f
}
```

输出：

```
1 与 2 相加的和是: 3
```

## 匿名函数

函数值字面量是一种表达式，它的值被称为匿名函数。从形式上看当我们不给函数起名字的时候，可以使用匿名函数，例如：

```go
func(x, y int) int { return x + y }
```

这样的函数不能够独立存在，但可以被赋值于某个变量，即保存函数的地址到变量中：

```go
fplus := func(x, y int) int { return x + y }
```

然后通过变量名对函数进行调用：

```go
fplus(3, 4)
```

当然，也可以直接对匿名函数进行调用，注意匿名函数的最后面加上了括号并填入了参数值，如果没有参数，也需要加上空括号，代表直接调用：

```go
func(x, y int) int { return x + y } (3, 4)
```

## 闭包

闭包可被允许调用定义在其环境下的变量，可以访问它们所在的外部函数中声明的所有局部变量、参数和声明的其他内部函数。**闭包继承了函数所声明时的作用域，作用域内的变量都被共享到闭包的环境中，因此这些变量可以在闭包中被操作，直到被销毁**。也可以理解为内层函数引用了外层函数中的变量或称为引用了自由变量。

实质上看，闭包是由函数及其相关引用环境组合而成的实体(即：**闭包=函数+引用环境**)。闭包在运行时可以有多个实例，不同的引用环境和相同的函数组合可以产生不同的实例。由闭包的实质含义，我们可以推论：**闭包获取捕获变量相当于引用传递，而非值传递**；对于闭包函数捕获的常量和变量，无论闭包何时何处被调用，闭包都可以使用这些常量和变量，而不用关心它们表面上的作用域。

换句话说闭包函数可以访问不是它自己内部的变量（这个变量在其它作用域内声明），且这个变量是未赋值的，它在闭包里面赋值。

【**应用闭包：将函数作为返回值**】

```go
package main
 
import "fmt"
 
func main() {
    var f = Adder()
    fmt.Println(f(1))
    fmt.Println(f(20))
    fmt.Println(f(300))
}
 
func Adder() func(int) int {
    var x int
    return func(delta int) int {
        x += delta
        return x
    }
}
```

输出：

```
1
21
321
```

三次调用函数 `f` 的过程中函数 `Adder()` 中变量 `delta` 的值分别为：1、20 和 300。

我们可以看到，在多次调用中，变量 `x` 的值是被保留的，即 `0 + 1 = 1`，然后 `1 + 20 = 21`，最后 `21 + 300 = 321`：**闭包函数保存并积累其中的变量的值，不管外部函数退出与否，它都能够继续操作外部函数中的局部变量**。