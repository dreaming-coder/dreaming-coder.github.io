# GoLang - 结构体

结构体是一种聚合的数据类型，是由零个或多个任意类型的值聚合成的实体。每个值称为结构体的成员。用结构体的经典案例是处理公司的员工信息，每个员工信息包含一个唯一的员工编号、员工的名字、家庭住址、出生日期、工作岗位、薪资、上级领导等等。所有的这些信息都需要绑定到一个实体中，可以作为一个整体单元被复制，作为函数的参数或返回值，或者是被存储到数组中，等等。

下面两个语句声明了一个叫 `Employee` 的命名的结构体类型，并且声明了一个 `Employee` 类型的变量 `dilbert`：

```go
type Employee struct {
    ID        int
    Name      string
    Address   string
    DoB       time.Time
    Position  string
    Salary    int
    ManagerID int
}

var dilbert Employee
```

`dilbert` 结构体变量的成员可以通过**点**操作符访问，比如 `dilbert.Name` 和 `dilbert.DoB`。因为 `dilbert` 是一个变量，它所有的成员也同样是变量，我们可以直接对每个成员赋值：

```go
dilbert.Salary -= 5000 // demoted, for writing too few lines of code
```

或者是对成员取地址，然后通过指针访问：

```go
position := &dilbert.Position
*position = "Senior " + *position // promoted, for outsourcing to Elbonia
```

点操作符也可以和指向结构体的指针一起工作：

```go
var employeeOfTheMonth *Employee = &dilbert
employeeOfTheMonth.Position += " (proactive team player)"
```

相当于下面语句

```go
(*employeeOfTheMonth).Position += " (proactive team player)"
```

下面的 `EmployeeByID` 函数将根据给定的员工 `ID` 返回对应的员工信息结构体的指针。我们可以使用点操作符来访问它里面的成员：

```go
func EmployeeByID(id int) *Employee { /* ... */ }

fmt.Println(EmployeeByID(dilbert.ManagerID).Position) // "Pointy-haired boss"

id := dilbert.ID
EmployeeByID(id).Salary = 0 // fired for... no real reason
```

后面的语句通过 `EmployeeByID` 返回的结构体指针更新了 `Employee` 结构体的成员。如果将 `EmployeeByID` 函数的返回值从 `*Employee` 指针类型改为 `Employee` 值类型，那么更新语句将不能编译通过。

> 因为在赋值语句的左边并不确定是一个变量（调用函数返回的是值，并不是一个可取地址的变量）。

## 结构体类型

结构体是由一系列称为字段（fields）的命名元素组成，每个元素都有一个名称和一个类型。 字段名称可以显式指定或隐式指定，没有显式字段名称的字段称为匿名（内嵌）字段。**在结构体中，非空字段名称必须是唯一的**。

结构体定义的一般方式如下：

```go
type identifier struct {
    field1 type1
    field2 type2
    ...
}
```

结构体里的字段一般都有名字，像 `field1`、`field2 ` 等，如果字段在代码中从来也不会被用到，那么可以命名它为 `_`。

空结构体如下所示：

```go
struct {}
```

具有 6 个字段的结构体：

```go
struct {
    x, y int
    u float32
    _ float32  // 填充
    A *[]int
    F func()
}
```

**对于匿名字段，必须将匿名字段指定为类型名称 `T` 或指向非接口类型名称 `*T` 的指针，并且 `T` 本身可能不是指针类型**。

```go
type innerS struct {
    in1 int
    in2 int
}
 
type outerS struct {
    b int
    c float32
    int  // anonymous field
    innerS //anonymous field
}
```

调用方式：

```go
outer := new(outerS)
outer.b = 6
outer.c = 7.5
outer.int = 60
outer.in1 = 5  // outer.innerS.in1这样用也行，效果一样
outer.in2 = 10
```

使用 `new` 函数给一个新的结构体变量分配内存，它返回指向已分配内存的指针：

```go
type S struct { a int; b float64 }
new(S)
```

> `new(S)` 为 `S` 类型的变量分配内存，并初始化 `a = 0，b = 0.0`，返回包含该位置地址的 `*S` 指针类型的值。

:::tip

- 我们一般的惯用方法是：`t := new(T)`，变量 `t` 是一个指向 `T` 的指针，此时结构体字段的值是它们所属类型的零值。

- 也可以这样写：`var t T` ，也会给 `t` 分配内存，并零值化内存，但是这个时候 `t` 是类型 `T`。

- 在这两种方式中，`t` 通常被称做类型 `T` 的一个实例（instance）或对象（object）。

:::

使用点号符 `.` 可以获取结构体字段的值 `structname.fieldname`。**无论变量是一个结构体类型还是一个结构体类型指针，都使用同样的表示法来引用结构体的字段**。例如：

```go
package main
 
import "fmt"
 
func main() {
	type myStruct struct{ i int }
	var v myStruct                  // v是结构体类型变量
	var p *myStruct = new(myStruct) // p是指向一个结构体类型变量的指针
	v.i = 1
	p.i = 2
	fmt.Println(v) // {1}
	fmt.Println(p) // &{2}
}
```

结构体变量有下面几种初始化方式，前面一种按照字段顺序，后面两种则对应字段名来初始化赋值：

```go
type Interval struct {
    start  int
    end   int
}
 
intr := Interval{0, 3}            // (A)
intr := Interval{end:5, start:1}  // (B)
intr := Interval{end:5}           // (C)
```

> 在（A）中，值必须以字段在结构体定义时的顺序给出，（B）显示了另一种方式，字段名加一个冒号放在值的前面，这种情况下值的顺序不必一致，并且某些字段还可以被忽略掉，就像（C）中那样。

::: tip

**结构体类型和字段的命名遵循可见性规则，一个导出的结构体类型中有些字段是导出的，也即首字母大写字段会导出；另一些不可见，也即首字母小写为未导出，对外不可见**。

:::

## 结构体特性

### 内存布局

Go 语言中，结构体和它所包含的数据在内存中是以连续块的形式存在的，即使结构体中嵌套有其他的结构体，这在性能上带来了很大的优势。

### 递归结构体

递归结构体类型可以通过引用自身指针来定义。这在定义链表或二叉树的节点时特别有用，此时节点包含指向临近节点的链接。例如：

```go
type Element struct {
    next, prev *Element
    Value interface{} // 这里表示任意类型的值
}
```

### 可见性

通过参考应用可见性规则，如果结构体名不能导出，可使用 `new` 函数使用工厂方法的方法达到同样的目的。例如：

```go
type bitmap struct {
    Size int
    data []byte
}
 
func NewBitmap(size int) *bitmap {
    div, mod := size/8, size%8
    if mod > 0 {
        div++
    }
    return &bitmap{size, make([]byte, div)}
}
```

在包外，只有通过 `NewBitmap` 函数才可以初始 `bitmap` 结构体。同理，在 `bitmap` 结构体中，由于其字段 `data` 是小写字母开头即并未导出，`bitmap` 结构体的变量不能直接通过选择器读取 `data` 字段的数据。

### 带标签的结构体

结构体中的字段除了有名字和类型外，还可以有一个可选的标签（tag）。它是一个附属于字段的字符串，可以是文档或其他的重要标记。标签的内容不可以在一般的编程中使用，只有  `reflect  `包能获取它。

`reflect` 包可以在运行时反射得到`类型`、`属性`和`方法`。如变量是结构体类型，可以通过 `Field()`  方法来索引结构体的字段，然后就可以得到 `Tag` 属性。例如：

```go
package main
 
import (
    "fmt"
    "reflect"
)
 
type Student struct {
    name string "学生名字"     // 结构体标签
    Age int "学生年龄"         // 结构体标签
    Room int `json:"Roomid"`  // 结构体标签
}
 
func main() {
    st := Student{"Titan", 14, 102}
    fmt.Println(reflect.TypeOf(st).Field(0).Tag)
    fmt.Println(reflect.TypeOf(st).Field(1).Tag)
    fmt.Println(reflect.TypeOf(st).Field(2).Tag)
}
```

输出：

```
学生名字
学生年龄
json:"Roomid"
```

### 匿名成员

Go 语言结构体中可以包含一个或多个匿名（内嵌）字段，即这些字段没有显式的名字，只有字段的类型是必须的，此时类型就是字段的名字（这一特征决定了在一个结构体中，每种数据类型只能有一个匿名字段）。

> **匿名（内嵌）字段本身也可以是一个结构体类型，即结构体可以包含内嵌结构体**。

```go
type Human struct {
    name string
}
 
type Student struct { // 含内嵌结构体Human
    Human // 匿名（内嵌）字段
    int   // 匿名（内嵌）字段
}
```

::: tip

- Go 语言结构体中这种含匿名（内嵌）字段和内嵌结构体的结构，可近似地理解为面向对象语言中的继承概念。

- Go 语言中的继承是通过内嵌或者说组合来实现的，所以可以说，在 Go 语言中，相比较于继承，组合更受青睐。

:::

### 嵌入与聚合

**结构体中包含匿名（内嵌）字段叫嵌入或者内嵌；而如果结构体中字段包含了类型名，还有字段名，则是聚合**。聚合的在 Java 和 C++ 都是常见的方式，而内嵌则是 Go 的特有方式。

```go
type Human struct {
    name string
}
 
type Person1 struct {           // 内嵌
    Human
}
 
type Person2 struct {           // 内嵌， 这种内嵌与上面内嵌有差异
    *Human
}
 
type Person3 struct{             // 聚合
    human Human
}
```

差异在于内嵌的属性能否直接使用：

> 其实就是指针写基本要求，没有给初值怎么好使用呢？

```go
package main

import "fmt"

type Base struct {
	basename string
}
type Derive1 struct {
	Base
}
type Derive2 struct {
	*Base
}

func main() {
	d1 := Derive1{Base{"derive1"}}
	//d2 := Derive2{Base{"derive2"}} // 编译错误
	d2 := Derive2{new(Base)}

	fmt.Println(d1) // {{derive1}}
	fmt.Println(d2) // {0xc000088230}

	d1.basename = "modified derive1"
	d2.basename = "modified derive2"

	fmt.Println(d1)          // {{modified derive1}}
	fmt.Println(d2)          // {0xc000088230}
	fmt.Println(d2.basename) // modified derive1

	dp1 := new(Derive1)
	dp2 := new(Derive2)

	fmt.Println(dp1) // &{{}}
	fmt.Println(dp2) // &{{}}

	dp1.basename = "derive1 pointer"
	//dp2.basename = "derive2 pointer" // 编译错误，未初始化 *Base
	dp2.Base = new(Base)
	dp2.basename = "derive2 pointer"

	fmt.Println(dp1)          // &{{derive1 pointer}}
	fmt.Println(dp2)          // &{0xc0000502d0}
	fmt.Println(dp2.basename) // derive2 pointer
}
```

## 工厂方法创建结构体实例

Go 语言不支持面向对象编程语言中那样的构造子方法，但是可以很容易的在 Go 中实现 “构造子工厂”方法。为了方便通常会为类型定义一个工厂，按惯例，工厂的名字以 `new` 或 `New` 开头。假设定义了如下的 `File` 结构体类型：

```go
type File struct {
    fd int  // 文件描述符
    name string  // 文件名
}
```

下面是这个结构体类型对应的工厂方法，它返回一个指向结构体实例的指针：

```go
func NewFile(fd int, name string) *File {
    if fd < 0 {
        return nil
    }
    return &File{fd, name}
}
```

然后这样调用它：

```go
f := NewFile(10, "./test.txt")
```

在 Go 语言中常常像上面这样在工厂方法里使用初始化来简便的实现构造函数。

如果 `File` 是一个结构体类型，那么表达式 `new(File)` 和 `&File{}` 是等价的

**如何强制使用工厂方法:**

```go
type matrix struct {
    ...
}
 
func NewMatrix(params) *matrix {
    m := new(matrix) // 初始化 m
    return m
}
```

在其他包里使用工厂方法：

```go
package main
import "matrix"
//...
wrong := new(matrix.matrix)     // 编译失败（matrix 是私有的）
right := matrix.NewMatrix(...)  // 实例化 matrix 的唯一方式
```

> 这里利用了可见性规则

:::tip

**这里再强调一句，`make()` 用于引用变量分配空间，`new()` 适用于值对象创建并初始化；结构体是值对象！**

:::

