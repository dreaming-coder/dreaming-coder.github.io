# GoLang - Slice

**切片（`slice`）** 是对底层数组一个连续片段的引用，所以**切片是一个引用类型**。切片提供对该数组中编号的元素序列的访问。未初始化切片的值为 `nil`。

与数组一样，切片是可索引的并且具有长度。切片 `s` 的长度可以通过内置函数 `len() ` 获取；与数组不同，切片的长度可能在执行期间发生变化。元素可以通过整数索引 `0` 到 `len(s)-1` 来寻址。我们可以把切片看成是一个长度可变的数组。

切片提供了计算容量的函数 `cap()` ，可以测量切片最大长度。切片的长度永远不会超过它的容量，所以对于切片 `s` 来说，这个不等式永远成立：`0 <= len(s) <= cap(s)`。

:::tip

多个切片如果表示同一个数组的片段，它们可以共享数据；因此一个切片和相关数组的其他切片是共享存储的，相反，不同的数组总是代表不同的存储。数组实际上是切片的构建块。

:::

切片可以延伸超过切片的末端，容量是切片长度与切片之外的数组长度的总和。

> 使用内置函数 `make()` 可以给切片初始化，该函数指定切片类型和指定长度和可选容量的参数。

:::warning

绝对不要用指针指向 `slice`。切片本身已经是一个引用类型，所以它本身就是一个指针!!

:::

下图显示了表示一年中每个月份名字的字符串数组，还有重叠引用了该数组的两个 slice。数组这样定义：

```go
months := [...]string{1: "January", /* ... */, 12: "December"}
```

因此一月份是 `months[1]`，十二月份是 `months[12]`。通常，数组的第一个元素从索引 `0` 开始，但是月份一般是从 `1` 开始的，因此我们声明数组时直接跳过第 0 个元素，第 0 个元素会被自动初始化为空字符串。

让我们分别定义表示第二季度和北方夏天月份的 slice，它们有重叠部分：

![](/imgs/golang/slice/slice-001.png)

```go
Q2 := months[4:7]
summer := months[6:9]
fmt.Println(Q2)     // ["April" "May" "June"]
fmt.Println(summer) // ["June" "July" "August"]
```

两个 slice 都包含了六月份，下面的代码是一个包含相同月份的测试（性能较低）：

```go
for _, s := range summer {
    for _, q := range Q2 {
        if s == q {
            fmt.Printf("%s appears in both\n", s)
        }
    }
}
```

如果切片操作超出 `cap(s)` 的上限将导致一个 `panic` 异常，但是超出 `len(s)` 则是意味着扩展了 `slice`，因为新 `slice` 的长度会变大：

```go
fmt.Println(summer[:20]) // panic: out of range

endlessSummer := summer[:5] // extend a slice (within capacity)
fmt.Println(endlessSummer)  // "[June July August September October]"
```

另外，字符串的切片操作和 `[]byte` 字节类型切片的切片操作是类似的。都写作 `x[m:n]`，并且都是返回一个原始字节序列的子序列，底层都是共享之前的底层数组，因此这种操作都是常量时间复杂度。`x[m:n]` 切片操作对于字符串则生成一个新字符串，如果 `x` 是 `[]byte` 的话则生成一个新的 `[]byte`。

## make 创建切片

当相关数组还没有定义时，我们可以使用 `make()` 函数来创建一个切片 同时创建好相关数组

```go
slice1 := make([]type, len)
slice1 := make([]type, len, cap)
```

如果从数组或者切片中生成一个新的切片，我们可以使用下面的表达式：

```go
ary[low : high : max]
```

> `max-low` 的结果表示容量，`high-low` 的结果表示长度。

## 切片重组

通过改变切片长度得到新切片的过程称之为切片重组 (`reslicing`)

```go
slice1 := make([]type, start_length, capacity)
```

**当我们在一个切片基础上重新划分一个切片时，新的切片会继续引用原有切片的数组**。如果你忘了这个行为的话，在你的应用分配大量临时的切片用于创建新的切片来引用原有数据的一小部分时，会导致难以预期的内存使用。

简单说，有一个切片长度和容量都是10000，你现在却只需要使用其中的三个元素，如下所示：

```go
package main
 
import "fmt"
 
func get() []byte {  
    raw := make([]byte, 10000)
    fmt.Println(len(raw), cap(raw), &raw[0]) // 输出: 10000 10000 数组首字节地址
    return raw[:3]  // 10000个字节实际只需要引用3个，其他空间浪费
}
 
func main() {  
    data := get()
    fmt.Println(len(data), cap(data), &data[0]) // 输出: 3 10000 数组首字节地址
}
```

上面的代码原因很简单，对切片进行切片，由于切片是引用类型，所以如果你原切片占用空间很多，而现在只需要一点点的数据，那么最好不要用切片，而应该用 `copy` 函数，将少部分的数据复制出来，这样就可以释放原切片空间。

```go
func get() []byte {
    raw := make([]byte, 10000)
    fmt.Println(len(raw), cap(raw), &raw[0]) // 输出: 10000 10000 数组首字节地址
    res := make([]byte, 3)
    copy(res, raw[:3]) // 利用 copy 函数复制，raw 可被GC释放
    return res
}
```

## append 函数

内置的 `append` 函数用于向 `slice` 追加元素：

```go
func append(s S, x ...T) S  // T是S元素类型
```

`append()` 函数将 `0` 个或多个具有相同类型 `S` 的元素追加到切片 `s` 后面并且返回新的切片；追加的元素必须和原切片的元素同类型。如果 `s` 的容量不足以存储新增元素，`append()` 会**分配新的切片来保证已有切片元素和新增元素的存储**。

因此，**`append()` 函数返回的切片可能已经指向一个不同的相关数组了**。`append()` 函数总是返回成功，除非系统内存耗尽了。

```go
s0 := []int{0, 0}
s1 := append(s0, 2)  // append 单个元素， [0, 0, 2]
s2 := append(s1, 3, 5, 7)  // append 多个元素， [0, 0, 2, 3, 5, 7]
s3 := append(s2, s0...)  // append 一个切片， [0, 0, 2, 3, 5, 7, 0, 0]
s4 := append(s3[3:6], s3[2:]...)  // append 切片片段， [3, 5, 7, 2, 3, 5, 7, 0, 0]
```

`append()` 函数操作如果导致分配新的切片来保证已有切片元素和新增元素的存储，也就是返回的切片可能已经指向一个不同的相关数组了，那么新的切片已经和原来切片没有任何关系，即使修改了数据也不会同步。

:::tip

**`append()` 函数操作后，有没有生成新的切片需要看原有切片的容量是否足够**。

:::

有一个奇特之处，对一个切片 `s = []int{1,2,3,4,5}`：

```go
package main
 
import "fmt"
 
func main() {
    s := []int{1, 2, 3, 4, 5}
    p := s[1:]
    q := s[:4]
    fmt.Println(len(p), cap(p)) // 4  4
    fmt.Println(len(q), cap(q)) // 4  5
}
```

