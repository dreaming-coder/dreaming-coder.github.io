# GoLang - 方法

## 方法的定义

在 Go 语言中，结构体就像是类的一种简化形式，那么面向对象程序员可能会问：类的方法在哪里呢？在 Go 语言中有一个概念，它和方法有着同样的名字，并且大体上意思相近。

Go 语言中方法和函数在形式上很像，它是作用在`接收器`（receiver）上的一个函数，`接收器`是某种类型的变量。因此方法是一种特殊类型的函数，**方法只是比函数多了一个`接收器`**（receiver），当然**在接口中定义的函数我们也称为方法**（因为最终还是要通过**绑定到类型**来实现）。

正是因为有了`接收器`，方法才可以作用于`接收器`的类型（变量）上。

`接收者`类型可以是（几乎）任何类型，不仅仅是`结构体类型`：任何类型都可以有方法，甚至可以是`函数类型`，可以是 `int`、`bool`、`string `或`数组的别名类型`。但是`接收者`不能是一个`接口`类型，因为`接口`是一个抽象定义，但是方法却是具体实现；如果这样做会引发一个编译错误：`invalid receiver type…`。

定义方法的一般格式如下：

```go
func (recv receiver_type) methodName(parameter_list) (return_value_list) { 
    ... 
}
```

在方法名之前，`func `关键字之后的括号中指定接收器 `receiver`。

```go
type A struct {
    Face int
}
 
func (a A) f() {
    fmt.Println("hi ", a.Face)
}
```

上面代码中，我们定义了结构体 `A` ，注意 `f()` 就是  `A` 的方法，`(a A)` 表示接收器。`a ` 是 `A` 的实例，`f()` 是它的方法名，方法调用遵循传统的 `object.name` 即选择器符号：`a.f()`。

## 接收器(receiver)

- **接收器类型除了不能是指针类型或接口类型外，可以是其他任何类型，不仅仅是结构体类型，也可以是函数类型，还可以是 `int`、`bool`、`string` 等等基础的自定义类型**。

  ```go
  package main
   
  import (
      "fmt"
  )
   
  type Human struct {
      name string    // 姓名
      Gender string  // 性别
      Age int        // 年龄
      string         // 匿名字段
  }
   
  func (h Human) print() { // 值方法
      fmt.Println("Human:", h)
  }
   
  type MyInt int
   
  func (m MyInt) print() { // 值方法
      fmt.Println("MyInt:", m)
  }
   
  func main() {
      //使用new方式
      hu := new(Human)
      hu.name = "Titan"
      hu.Gender = "男"
      hu.Age = 14
      hu.string = "Student"
      hu.print()
   
      // 指针变量
      mi := new(MyInt)
      mi.print()
   
      // 使用结构体字面量赋值
      hum := Human{"Hawking", "男", 14, "Monitor"}
      hum.print()
   
      // 值变量
      myi := MyInt(99)
      myi.print()
  }
  ```

  程序输出：

  ```
  Human: {Titan 男 14 Student}
  MyInt: 0
  Human: {Hawking 男 14 Monitor}
  MyInt: 99
  ```

- **接收器不能是一个接口类型，因为接口是一个抽象定义，但是方法却是具体实现；如果这样做会引发一个编译错误：`invalid receiver type…`。**

  ```go
  package main
   
  import (
      "fmt"
  )
   
  type printer interface {
      print()
  }
  
  //  invalid receiver type printer (printer is an interface type)
  func (p printer) print() { 
      fmt.Println("printer:", p)
  }
  func main() {}
  ```

- **接收器不能是一个指针类型，但是它可以是任何其他允许类型的指针。**

  ```go
  package main
   
  import (
      "fmt"
  )
   
  type MyInt int
   
  type Q *MyInt
   
  func (q Q) print() { // invalid receiver type Q (Q is a pointer type)
      fmt.Println("Q:", q)
  }
   
  func main() {}
  ```

  :::tip

  从这可以看出来，你如果 `Q` 是指针类型，接收器再  `q Q`  是会报错的，如果 `Q`不是指针类型，接收器再 `q *Q` 是没问题的

  :::

  :::tip

  - 如果有类型 `T`，方法的接收器为 `(t T)` 时我们称为值接收器，该方法称为`值方法`；方法的接收器为 `(t *T)` 时我们称为指针接收器，该方法称为`指针方法`。

  - 类型 ` T`（或 `*T`）上的所有方法的集合叫做类型 `T`（或 `*T`）的方法集。

  :::

  ```go
  package main
   
  import (
  	"fmt"
  )
   
  type MyInt struct{
  	n int
  }
   
  func (mi *MyInt) print() { // 指针接收器，指针方法
  	fmt.Println("MyInt:", *mi)
  }
  func (mi MyInt) echo() { // 值接收器，值方法
  	fmt.Println("MyInt:", mi)
  }
  func main() {
  	i := new(MyInt)
  	i.print() // MyInt: {0}
  	i.echo()  // MyInt: {0}
   
  	var j MyInt = MyInt{6}
  	j.print()  // MyInt: {6}
  	j.echo()  // MyInt: {6}
  }
  ```

  > 从这段代码可以看出，`i` 是指针类型，但是可以调用 `MyInt` 的值方法集合指针方法集，同样，`j` 是值类型，也是两种方法集都能调用。

  :::tip

  关于接收器的命名，社区约定的接收器命名是类型的一个或两个字母的缩写(像 c 或者 cl 对于 Client)。不要使用泛指的名字像是 me，this 或者 self，也不要使用过度描述的名字，简短即可。

  :::

## 方法表达式与方法值

在 Go 语言中，**对于类型 `T`，如果在 `*T` 上存在方法 `Meth()`，并且 `t` 是这个类型的变量，那么 `t.Meth()` 会被自动转换为 `(&t).Meth()`，这其实是一种语法糖。**

这里我们了解下 Go 语言的选择器（`selector`），如：**`x.f`**

上面代码表示如果 `x` 不是包名，则表示是 `x`（或 `*x`）的 `f`（字段或方法）。标识符 `f`（字段或方法）称为选择器(`selector`)，选择器不能是**空白标识符**。选择器表达式的类型是 `f` 的类型。

选择器 `f` 可以表示类型 `T` 的字段或方法，或者指嵌入字段 `T` 的字段或方法 `f`。遍历到 `f` 的嵌入字段的层数被称为其在 `T` 中的深度。在 `T` 中声明的字段或方法 `f` 的深度为零。在 `T` 中的嵌入字段 `A` 中声明的字段或方法 `f` 的深度是 `A` 中的f的深度加 `1`。

在 Go 语言中，我们认为方法的显式接收器(explicit receiver) `x` 是方法 `x.m()` 的等效函数 `X.m()` 的第一个参数，所以 `x.m()` 和 `X.m(x)` 是等价的，下面我们看看具体例子：

```go
package main

import (
	"fmt"
)

type T struct{}

func (tv T) Mv(a int) int {
	fmt.Printf("Mv的值是: %d\n", a)
	return a
}

func main() {
	t := T{}
	t.Mv(3)
	T.Mv(t, 5)
}
```

输出结果：

```
Mv的值是: 3
Mv的值是: 5
```

`t.Mv(1)` 和 `T.Mv(t, 1)` 效果是一致的，这里显式接收器 `t` 可以当做为等效函数 `T.Mv()` 的第一个参数。而在 Go 语言中，我们可以利用选择器，将方法值(Method Value)取到，并可以将其赋值给其它变量。使用 `t.Mv`，就可以得到 `Mv` 方法的方法值，而且这个方法值绑定到了显式接收器（实参）`t`。

```go
f0 := t.Mv // 通过选择器将方法值t.Mv赋值给一个变量 f0
```

除了使用选择器取到方法值外，还可以使用方法表达式(Method Expression) 取到函数值(Function Value)。方法表达式(Method Expression)产生的是一个函数值(Function Value)而不是方法值(Method Value)。

```go
f1 := T.Mv // 利用方法表达式(Method Expression) T.Mv 取到函数值
f1(t, 5)
f2 := (T).Mv // 利用方法表达式(Method Expression) T.Mv 取到函数值
f2(t, 6)
```

这个函数值的第一个参数必须是一个接收器：

```go
f1(t, 5)
f2(t, 6)
```

在 Go 语言中不允许方法重载，因为方法是函数，所以对于一个类型只能有唯一一个特定名称的方法。但是如果基于接收器类型，我们可以通过一种变通的方法，达到这个目的：具有同样名字的方法可以在 2 个或多个不同的接收器类型上存在，比如在同一个包里这么做是允许的：

```go
type MyInt1 int
type MyInt2 int
 
func (a *MyInt1) Add(b int) int { return 0 }
func (a *MyInt2) Add(b int) int { return 0 }
```

## 函数和方法的区别

方法相对于函数多了接收器，这是他们之间最大的区别。

函数是直接调用，而方法是作用在接收器上，方法需要类型的实例来调用。方法接收器必须有一个显式的名字，这个名字必须在方法中被使用。

**在接收器是指针时，方法可以改变接收器的值（或状态），这点函数也可以做到（当参数作为指针传递，即通过引用调用时，函数也可以改变参数的状态）。**

在 Go 语言中，（接收器）类型关联的方法不写在类型结构里面；耦合更加宽松；类型和方法之间的关联由接收器来建立。

方法没有和定义的数据类型（结构体）混在一起，方法和数据是正交，而且数据和行为（方法）是相对独立的。

## 匿名类型的方法提升

下面的代码可以看出来，什么时候可以省略匿名嵌入成员

```go
type People struct {
    Age    int
    gender string
    Name   string
}
 
type OtherPeople struct {
    People
}
 
func (p People) PeInfo() {
    fmt.Println("People ", p.Name, ": ", p.Age, "岁, 性别:", p.gender)
}
 
func main() {
    p := People{Age: 18, gender: "男", Name: "芜情"}
    op := OtherPeople{People:p}
    p.PeInfo()  // People  芜情 :  18 岁, 性别: 男
    op.PeInfo()  // People  芜情 :  18 岁, 性别: 男
	
    OtherPeople.PeInfo(op)  // People  芜情 :  18 岁, 性别: 男
    People.PeInfo(p)  // People  芜情 :  18 岁, 性别: 男
}
```

给定一个结构体类型 `S` 和一个命名为 `T` 的类型，方法提升像下面规定的这样被包含在结构体方法集中：

- **如果 `S` 包含一个匿名字段 `T`，`S` 和 `*S` 的方法集都包含接收器为 `T` 的方法提升**

  这条规则说的是当我们嵌入一个类型，嵌入类型的接收器为值类型的方法将被提升，可以被外部类型的值和指针调用。

- **如果 `S` 包含一个匿名字段 `T`， `*S` 类型的方法集包含接收器为 `*T` 的方法提升**

  这条规则说的是当我们嵌入一个类型，可以被外部类型的指针调用的方法集只有嵌入类型的接收器为指针类型的方法集，也就是说，当外部类型使用指针调用内部类型的方法时，只有接收器为指针类型的内部类型方法集将被提升。

- **如果 `S` 包含一个匿名字段 `*T`，`S` 和 `*S` 的方法集都包含接收器为 `T` 或者 `*T` 的方法提升**

  这条规则说的是当我们嵌入一个类型的指针，嵌入类型的接收器为值类型或指针类型的方法将被提升，可以被外部类型的值或者指针调用。

:::tip

这就是语言规范里方法提升中仅有的三条规则，根据这个推导出一条规则：

- **如果 `S` 包含一个匿名字段 `T`，`S` 的方法集不包含接收器为 `*T` 的方法提升。**

:::

:::warning

注意：以上规则由于 `t.Meth()` 会被自动转换为 `(&t).Meth()` 这个语法糖，导致我们很容易误解上面的规则不起作用，而实际上规则是有效的。

:::

```go
package main

import (
	"fmt"
	"reflect"
)

type People struct {
	Age    int
	gender string
	Name   string
}
type OtherPeople struct {
	People
}
type NewPeople People

func (p *People) PeName(pname string) {
	fmt.Println("old name:", p.Name)
	p.Name = pname
	fmt.Println("new name:", p.Name)
}

func (p People) PeInfo() {
	fmt.Println("People ", p.Name, ": ", p.Age, "岁, 性别:", p.gender)
}

func (p *NewPeople) PeName(pname string) {
	fmt.Println("pold name:", p.Name)
	p.Name = pname
	fmt.Println("pnew name:", p.Name)
}

func (p NewPeople) PeInfo() {
	fmt.Println("NewPeople ", p.Name, ": ", p.Age, "岁, 性别:", p.gender)
}

func methodSet(a interface{}) {
	t := reflect.TypeOf(a)
	for i, n := 0, t.NumMethod(); i < n; i++ {
		m := t.Method(i)
		fmt.Println(m.Name, m.Type)
	}
}
func main() {
	p := OtherPeople{People{26, "Male", "张三"}}
	p.PeInfo()
	p.PeName("Joke")
	methodSet(p)  // T方法提升
	methodSet(&p) // *T和T方法提升
	pp := NewPeople{42, "Male", "李四"}
	pp.PeInfo()
	pp.PeName("Haw")
	methodSet(&pp)
}
```

程序输出：

```
People  张三 :  26 岁, 性别: Male
old name: 张三
new name: Joke                        
PeInfo func(main.OtherPeople)         
PeInfo func(*main.OtherPeople)        
PeName func(*main.OtherPeople, string)
NewPeople  李四 :  42 岁, 性别: Male  
pold name: 李四                       
pnew name: Haw                        
PeInfo func(*main.NewPeople)          
PeName func(*main.NewPeople, string) 
```

我们可以从上面输出看到，`*OtherPeople` 下有两个方法，而 `OtherPeople` 只有一个方法。

但是在Go中存在一个语法糖，比如上面代码：

```go
p.PeInfo()
p.PeName("Joke")
methodSet(p) // T方法提升
```

虽然 `p` 只有一个方法：`PeInfo func(main.OtherPeople)`，但我们依然可以调用 `p.PeName(“Joke”)`。

这里 Go 自动转为 `(&p).PeName(“Joke”)`，其调用后结果让我们以为 `p` 有两个方法，其实这里 `p` 只有一个方法。

## 类型的 String() 方法和格式化描述符

当定义了一个有很多方法的类型时，十之八九你会使用 `String()` 方法来定制类型的字符串形式的输出，换句话说：一种可阅读性和打印性的输出。如果类型定义了 `String()` 方法，它会被用在 `fmt.Printf()` 中生成默认的输出：等同于使用格式化描述符 `%v` 产生的输出。还有`fmt.Print()` 和 `fmt.Println()` 也会自动使用 `String()` 方法。

:::danger

不要在 `String()` 方法里面调用涉及 `String()` 方法的方法，它会导致意料之外的错误，比如下面的例子，它导致了一个无限递归调用（`TT.String()` 调用 `fmt.Sprintf`，而 `fmt.Sprintf` 又会反过来调用 `TT.String()`...），很快就会导致内存溢出：

```go
type TT float64
 
func (t TT) String() string {
    return fmt.Sprintf("%v", t)
}
t.String()
```

:::