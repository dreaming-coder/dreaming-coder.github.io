# GoLang - 接口

## 接口是什么

Go 语言不是一种 “传统” 的面向对象编程语言：它里面没有类和继承的概念。

但是 Go 语言里有非常灵活的 **接口** 概念，通过它可以实现很多面向对象的特性。接口提供了一种方式来 **说明** 对象的行为：如果谁能搞定这件事，它就可以用在这儿。

Go 语言接口定义了一组方法集合，但是这些方法集合仅仅只是被定义，它们没有在接口中实现。接口 (`interface`) 类型是 Go 语言的一种数据类型。而因为所有的类型包括自定义类型都实现了空接口 `interface{}`，所以**空接口 `interface{}` 可以被当做任意类型的数值**。

Go 语言中的所有类型包括自定义类型都实现了 `interface{}` 接口，这意味着所有的类型如 `string`、 `int`、 `int64` 甚至是自定义的`结构体类型`都拥有 `interface{}` 空接口，这一点 `interface{}` 和 Java 中的 Object 类比较相似。

> **接口类型的未初始化变量的值为 `nil`**。

```go
var i interface{} = 99 // i可以是任何类型
i = 44.09
i = "All"  // i 可接受任意类型的赋值
```

**接口是一组抽象方法的集合，它必须由其他非接口类型实现，不能自我实现**。Go 语言通过它可以实现很多面向对象的特性。

通过如下格式定义接口：

```go
type Namer interface {
    Method1(param_list) return_type
    Method2(param_list) return_type
    ...
}
```

上面的 `Namer` 是一个 接口类型按照惯例，单方法接口由方法名称加上 `-er` 后缀或类似修改来命名，以构造**代理名词**：`Reader`，`Writer`，`Formatter`，`CloseNotifier` 等。还有一些不常用的方式（当后缀 `er` 不合适时），比如 `Recoverable`，此时接口名以 `able` 结尾，或者以 `I` 开头等。

Go 语言中的接口都很简短，通常它们会**包含 0 个、最多 3 个方法**。如标准库 `io` 包中定义了下面 2 个接口：

```go
type Reader interface {
    Read(p []byte) (n int, err error)
}
type Writer interface {
    Write(p []byte) (n int, err error)
}
```

**在Go语言中，如果接口的所有方法在某个类型方法集中被实现，则认为该类型实现了这个接口。**

**类型不用显式声明实现了接口，只需要实现接口所有方法，这样的隐式实现解藕了实现接口的包和定义接口的包。**

::: warning

**同一个接口可被多个类型可以实现，一个类型也可以实现多个接口。实现了某个接口的类型，还可以有其它的方法**。有时我们甚至都不知道某个类型定义的方法集巧合地实现了某个接口。这种灵活性使我们不用像 Java 语言那样需要显式 `implement`，一旦类型不需要实现某个接口，我们甚至可以不改动任何代码。

:::

**类型需要实现接口方法集中的所有方法，一定是接口方法集中所有方法**。类型实现了这个接口，那么接口类型的变量也就可以存放该类型的值。

如下代码所示，结构体 `A` 和类型 `I` 都实现了接口 `B` 的方法 `f()`，所有这两种类型也具有了接口 `B` 的一切特性，可以将该类型的值存储在接口 `B` 类型的变量中：

```go
package main
 
import (
    "fmt"
)
 
type A struct {
    Books int
}
 
type B interface {
    f()
}
 
func (a A) f() {
    fmt.Println("A.f() ", a.Books)
}
 
type I int
 
func (i I) f() {
    fmt.Println("I.f() ", i)
}
 
func main() {
    var a A = A{Books: 9}
    a.f()
 
    var b B = A{Books: 99} // 接口类型可接受结构体A的值，因为结构体A实现了接口
    b.f()
 
    var i I = 199 // I是int类型引申出来的新类型
    i.f()
 
    var b2 B = I(299) // 接口类型可接受新类型I的值，因为新类型I实现了接口
                      // 这里I(299)表示强制类型转换
    b2.f()
}
```

输出结果：

```
A.f()  9
A.f()  99
I.f()  199
I.f()  299
```

::: tip

如果接口在类型之后才定义，或者二者处于不同的包中。但只要类型实现了接口中的所有方法，这个类型就实现了此接口。

注意：**接口中的方法必须要全部实现，才能实现接口**

:::

## 接口嵌套

一个接口可以包含一个或多个其他的接口，但是在接口内不能嵌入结构体，也不能嵌入接口自身，否则编译会出错。

下面这两种嵌入接口自身的方式都不能编译通过:

```go
// 编译错误：invalid recursive type Bad
type Bad interface {
    Bad
}
 
// 编译错误：invalid recursive type Bad2
type Bad1 interface {
    Bad2
}
type Bad2 interface {
    Bad1
}
```

比如下面的接口 ` File`  包含了 `ReadWrite` 和 `Lock` 的所有方法，它还额外有一个 ` Close()` 方法。接口的嵌入方式和结构体的嵌入方式语法上差不多，直接写接口名即可。

```go
type ReadWrite interface {
    Read(b Buffer) bool
    Write(b Buffer) bool
}
 
type Lock interface {
    Lock()
    Unlock()
}
 
type File interface {
    ReadWrite
    Lock
    Close()
}
```

:::warning

**结构体内可以内嵌接口或接口的指针，这实际上和 `int` 一样是指示该字段的类型，字段可以有名称可以匿名。**

:::

## 类型断言

前面我们可以把实现了某个接口的类型值保存在接口变量中，但反过来某个接口变量属于哪个类型呢？如何检测接口变量的类型呢？这就是类型断言（Type Assertion）的作用。

接口类型` I` 的变量 `varI` 中可以包含任何实现了这个接口的类型的值，如果多个类型都实现了这个接口，所以有时我们需要用一种动态方式来检测它的真实类型，即在运行时确定变量的实际类型。

通常我们可以使用类型断言（`value, ok := element.(T)`）来测试在某个时刻接口变量 `varI` 是否包含类型 `T` 的值：

```go
value, ok := varI.(T)       // 类型断言，T要换成具体的类型
```

::: danger

**`varI` 必须是一个接口变量**，否则编译器会报错：invalid type assertion: varI.(T) (non-interface type (type of varI) on left) 。

:::

类型断言可能是无效的，虽然编译器会尽力检查转换是否有效，但是它不可能预见所有的可能性。如果转换在程序运行时失败会导致错误发生。更安全的方式是使用以下形式来进行类型断言：

```go
var varI I
varI = T("Tstring")
if v, ok := varI.(T); ok { // 类型断言
    fmt.Println("varI类型断言结果为：", v) // varI已经转为T类型
    varI.f()
}
```

如果断言成功，`v` 是 `varI` 转换到类型 `T `的值，`ok` 会是 `true`；否则 `v` 是类型 `T` 的零值，`ok` 是 `false`，也没有运行时错误发生。**应该总是使用上面的方式来进行类型断言**。

## 类型判断

接口变量的类型可以使用一种特殊形式的 `switch` 做类型断言：

```go
// Type-switch做类型判断
var value interface{}
 
switch str := value.(type) {  // 这里就是type关键字
case string:
    fmt.Println("value类型断言结果为string:", str)
 
case Stringer:
	fmt.Println("value类型断言结果为Stringer:", str)
 
default:
	fmt.Println("value类型不在上述类型之中")
}
```

可以用 **Type-switch** 进行运行时类型分析，但是在 **Type-switch** 时不允许有 `fallthrough` 。**Type-switch** 让我们在处理未知类型的数据时，比如解析 **JSON** 等编码的数据，会非常方便。

## 接口与动态类型

在经典的面向对象语言（像 C++，Java 和 C#）中，往往将数据和方法被封装为类的概念：类中包含它们两者，并且不能剥离。

Go 语言中没有类，数据（结构体或更一般的类型）和方法是一种松耦合的正交关系。Go 语言中的接口必须提供一个指定方法集的实现，但是更加灵活通用：任何提供了接口方法实现代码的类型都隐式地实现了该接口，而不用显式地声明。该特性允许我们在不改变已有的代码的情况下定义和使用新接口。

**接收一个（或多个）接口类型作为参数的函数，其实参可以是任何实现了该接口的类型。 实现了某个接口的类型可以被传给任何以此接口为参数的函数 。**

Go 语言动态类型的实现通常需要编译器静态检查的支持：当变量被赋值给一个接口类型的变量时，编译器会检查其是否实现了该接口的所有方法。我们也可以通过类型断言来检查接口变量是否实现了相应类型。

因此 Go 语言提供了动态语言的优点，却没有其他动态语言在运行时可能发生错误的缺点。Go 语言的接口提高了代码的分离度，改善了代码的复用性，使得代码开发过程中的设计模式更容易实现。

## 接口的提取

接口的提取，是非常有用的设计模式，良好的提取可以减少需要的类型和方法数量。而且在 Go 语言中不需要像传统的基于类的面向对象语言那样维护整个的类层次结构。

假设有一些拥有共同行为的对象，并且开发者想要抽象出这些行为，这时就可以创建一个接口来使用。在 Go 语言中这样操作甚至不会影响到前面开发的代码，所以我们不用提前设计出所有的接口，接口的设计可以不断演进，并且不用废弃之前的决定。而且类型要实现某个接口，类型本身不用改变，只需要在这个类型上实现新的接口方法集。

## 接口的继承

当一个类型包含（内嵌）另一个类型（实现了一个或多个接口）的指针时，这个类型就可以使用（另一个类型）所有的接口方法。

类型可以通过继承多个接口来提供像 多重继承 一样的特性：

```go
type ReaderWriter struct {
    *io.Reader
    *io.Writer
}
```

上面概述的原理被应用于整个 Go 包，多态用得越多，代码就相对越少。这被认为是 Go 编程中的重要的最佳实践。

例如：

```go
package main

import "fmt"

// 父接口
type Humen interface {
	SayHello()
}

// 子接口
type Person interface {
	Humen // 继承父接口
	sing(string)
}

// 学生类
type Student struct {
	name string
	age  int
}

// 学生类的方法 (让学生类符合父接口的规则)
func (stu *Student) SayHello() {
	fmt.Printf("我是学生，名字是%s，我%d岁了\n", stu.name, stu.age)
}

// 学生类的方法 (让学生类符合子接口的规则)
func (stu *Student) sing(str string) {
	fmt.Printf("唱歌：%s\n", str)
}

func main() {
	// 声明接口类型的变量
	var h Humen    // 父接口
	var per Person // 子接口

	// 学生对象
	stu := Student{"张三", 20}
	stu.SayHello()  // 我是学生，名字是张三，我20岁了
	stu.sing("嘎嘎嘎") // 我是学生，名字是张三，我20岁了

	per = &stu         // 子接口
	per.SayHello()     // 我是学生，名字是张三，我20岁了
	per.sing("啦啦啦。。。") // 我是学生，名字是张三，我20岁了

	h = per      // 父接口
	h.SayHello() // 我是学生，名字是张三，我20岁了
	//h.sing("嘎嘎嘎") // 编译错误
}
```

## 接口的值方法集与指针方法集的使用

结构体中，作用于变量上的方法实际上是不区分变量到底是指针还是值的 (由于语法糖)。当碰到接口类型值时，这会变得有点复杂，原因是接口变量中存储的具体值是不可寻址的，幸运的是，如果使用不当编译器会给出错误。考虑下面的程序：

```go
package main
 
import (
    "fmt"
)
 
type List []int
 
func (l List) Len() int {
    return len(l)
}
 
func (l *List) Append(val int) {
    *l = append(*l, val)
}
 
type Appender interface {
    Append(int)
}
 
func CountInto(a Appender, start, end int) {
    for i := start; i <= end; i++ {
        a.Append(i)
    }
}
 
type Lener interface {
    Len() int
}
 
func LongEnough(l Lener) bool {
    return l.Len()*10 > 42
}
 
func main() {
    // A bare value
    var lst List
    // compiler error:
    // cannot use lst (type List) as type Appender in argument to CountInto:
    //       List does not implement Appender (Append method has pointer receiver)
    // CountInto(lst, 1, 10)
    if LongEnough(lst) { // VALID:Identical receiver type
        fmt.Printf("- lst is long enough\n")
    }
 
    // A pointer value
    plst := new(List)
    CountInto(plst, 1, 10) //VALID:Identical receiver type
    if LongEnough(plst) {
        // VALID: a *List can be dereferenced for the receiver
        fmt.Printf("- plst is long enough\n")
    }
}
```

**在 `lst` 上调用 `CountInto` 时会导致一个编译器错误，因为 `CountInto` 需要一个 `Appender`，而它的方法 `Append` 只定义在指针上。 在 `lst` 上调用 `LongEnough` 是可以的，因为 `Len` 定义在值上。**

**在 `plst` 上调用 `CountInto` 是可以的，因为 `CountInto` 需要一个 `Appender`，并且它的方法 `Append` 定义在指针上。 在 `plst` 上调用 `LongEnough` 也是可以的，因为指针会被自动解引用。**

::: tip

- 用**指针类型**的实参调用形参为**值类型**的方法（会进行“自动解引用”）
- 用**值类型**的实参调用形参为**指针类型**的方法（会进行“自动取引用”）

:::

**要结合结构体的方法提升规则，结构体的方法提升规则，使用时给人感觉是无差别的，那是因为有语法糖 `x.f()` 自动解析成`(&x).f()`，再者里要判断有没有实现接口的方法时，这个不起作用。**

## 空接口

**空接口或者最小接口** 不包含任何方法，它对实现不做任何要求：

```go
type Any interface {}
```

任何其他类型都实现了空接口（它不仅仅像 Java / C# 中 Object 引用类型），`any` 或 `Any` 是空接口一个很好的别名或缩写。

空接口类似 Java / C# 中所有类的基类： Object 类，二者的目标也很相近。

可以给一个空接口类型的变量 `var val interface {}` 赋任何类型的值。

下面示例说明了空接口在 `type-switch` 中联合 `lambda` 函数的用法：

```go
package main
 
import "fmt"
 
type specialString string
 
var whatIsThis specialString = "hello"
 
func TypeSwitch() {
	testFunc := func(any interface{}) {
		switch v := any.(type) {
		case bool:
			fmt.Printf("any %v is a bool type", v)
		case int:
			fmt.Printf("any %v is an int type", v)
		case float32:
			fmt.Printf("any %v is a float32 type", v)
		case string:
			fmt.Printf("any %v is a string type", v)
		case specialString:
			fmt.Printf("any %v is a special String!", v)
		default:
			fmt.Println("unknown type!")
		}
	}
	testFunc(whatIsThis)
}
 
func main() {
	TypeSwitch()
}
```

输出结果：

```
any hello is a special String!
```

### 构建通用类型或包含不同类型变量的数组

如何实现针对多个类型的排序？现在我们知道该怎么做了，就是通过使用空接口。让我们给空接口定一个别名类型 `Element`：`type Element interface{}`

然后定义一个容器类型的结构体 `Vector`，它包含一个 `Element` 类型元素的切片：

```go
type Vector struct {
	a []Element
}
```

`Vector` 里能放任何类型的变量，因为任何类型都实现了空接口，实际上 `Vector` 里放的每个元素可以是不同类型的变量。我们为它定义一个 `Get()` 方法用于返回第 `i` 个元素：

```go
func (p *Vector) Get(i int) Element {
	return p.a[i]
}
```

再定一个 `Set()` 方法用于设置第 `i` 个元素的值：

```go
func (p *Vector) Set(i int, e Element) {
	p.a[i] = e
}
```

`Vector` 中存储的所有元素都是 `Element` 类型，要得到它们的原始类型（unboxing：拆箱）需要用到类型断言。

### 复制数据切片至空接口切片

假设你有一个 `myType` 类型的数据切片，你想将切片中的数据复制到一个空接口切片中，类似：

```go
var dataSlice []myType = FuncReturnSlice()
var interfaceSlice []interface{} = dataSlice
```

可惜不能这么做，编译时会出错：`cannot use dataSlice (type []myType) as type []interface { } in assignment`。

原因是它们俩在内存中的布局是不一样的

必须使用 `for-range` 语句来一个一个显式地复制：

```go
var dataSlice []myType = FuncReturnSlice()
var interfaceSlice []interface{} = make([]interface{}, len(dataSlice))
for i, d := range dataSlice {
    interfaceSlice[i] = d
}
```

### 通用类型的节点数据结构

我们遇到过诸如列表和树这样的数据结构，在它们的定义中使用了一种叫节点的递归结构体类型，节点包含一个某种类型的数据字段。现在可以使用空接口作为数据字段的类型，这样我们就能写出通用的代码。下面是实现一个二叉树的部分代码：通用定义、用于创建空节点的 `NewNode` 方法，及设置数据的 `SetData` 方法。

```go
package main
 
import "fmt"
 
type Node struct {
	le   *Node
	data interface{}
	ri   *Node
}
 
func NewNode(left, right *Node) *Node {
	return &Node{left, nil, right}
}
 
func (n *Node) SetData(data interface{}) {
	n.data = data
}
 
func main() {
	root := NewNode(nil, nil)
	root.SetData("root node")
	// make child (leaf) nodes:
	a := NewNode(nil, nil)
	a.SetData("left node")
	b := NewNode(nil, nil)
	b.SetData("right node")
	root.le = a
	root.ri = b
	fmt.Printf("%v\n", root) // Output: &{0x125275f0 root node 0x125275e0}
}
```

### 接口到接口

一个接口的值可以赋值给另一个接口变量，只要底层类型实现了必要的方法。这个转换是在运行时进行检查的，转换失败会导致一个运行时错误：这是 `Go` 语言动态的一面，可以拿它和 `Ruby` 和 `Python` 这些动态语言相比较。

假定：

```go
var ai AbsInterface // declares method Abs()
type SqrInterface interface {
    Sqr() float
}
var si SqrInterface
pp := new(Point) // say *Point implements Abs, Sqr
var empty interface{}
```

那么下面的语句和类型断言是合法的：

```go
empty = pp                // everything satisfies empty
ai = empty.(AbsInterface) // underlying value pp implements Abs()
// (runtime failure otherwise)
si = ai.(SqrInterface) // *Point has Sqr() even though AbsInterface doesn’t
empty = si             // *Point implements empty set
// Note: statically checkable so type assertion not necessary.
```

下面是函数调用的一个例子：

```go
type myPrintInterface interface {
	print()
}
 
func f3(x myInterface) {
	x.(myPrintInterface).print() // type assertion to myPrintInterface
}
```

`x` 转换为 `myPrintInterface` 类型是完全动态的：只要 `x` 的底层类型（动态类型）定义了 `print` 方法这个调用就可以正常运行

:::tip

若 `x` 的底层类型未定义 `print` 方法，此处类型断言会导致 `panic`，最佳实践应该为 

`if mpi, ok := x.(myPrintInterface); ok { mpi.print() }`

:::