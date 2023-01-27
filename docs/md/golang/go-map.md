# GoLang - 字典 Map

`map` 是一种元素对的无序集合，一组称为元素 `value`，另一组为唯一键索引 `key`。 未初始化 `map` 的值为 `nil`。`map ` 是引用类型，可以使用如下声明：

```go
var map1 map[keytype]valuetype
var map1 map[string]int
```

> `[keytype]` 和 `valuetype` 之间允许有空格，但是 gofmt 移除了空格。

在声明的时候不需要知道 `map` 的长度，`map` 是可以动态增长的。

key 可以是任意可以用 `==` 或者 `!=` 操作符比较的类型，比如 `string`、`int`、`float`。所以数组、切片和结构体不能作为 key (含有数组切片的结构体不能作为 key，只包含内建类型的 `struct` 是可以作为 key 的），但是指针和接口类型可以。如果要用结构体作为 key 可以提供 `Key()` 和 `Hash()` 方法，这样可以通过结构体的域计算出唯一的数字或者字符串的 key。

value 可以是任意类型的；通过使用空接口类型，我们可以存储任意值，但是使用这种类型作为值时需要先做一次类型断言。

map 传递给函数的代价很小：在 32 位机器上占 4 个字节，64 位机器上占 8 个字节，无论实际上存储了多少数据。通过 key 在 map 中寻找值是很快的，比线性查找快得多，但是仍然比从数组和切片的索引中直接读取要慢 100 倍；所以如果你很在乎性能的话还是建议用切片来解决问题。

如果 `key1` 是 `map1` 的 key，那么 `map1[key1]` 就是对应 `key1` 的值，就如同数组索引符号一样（数组可以视为一种简单形式的  `map`，key 是从 0 开始的整数）。

令 `v := map1[key1]` 可以将 `key1` 对应的值赋值给 `v`；如果 `map` 中没有` key1` 存在，那么 `v` 将被赋值为 `map1` 的值类型的空值。

> 常用的 `len(map1)` 方法可以获得 `map` 中的 `pair` 数目，这个数目是可以伸缩的，因为 map-pairs 在运行时可以动态添加和删除。

`map` 是 **引用类型** 的： 内存可以用 `make` 方法来分配。

```go
var map1 = make(map[keytype]valuetype, cap)
```

或者简写为：

```go
map1 := make(map[keytype]valuetype,cap)
```

:::danger

**不要使用 `new`，永远用 `make` 来构造 `map`!**

:::

如果你错误的使用 `new()` 分配了一个引用对象，你会获得一个**空引用的指针**，相当于**声明了一个未初始化的变量并且取了它的地址**：

```go
mapCreated := new(map[string]float32)
```

接下来当我们调用：`mapCreated["key1"] = 4.5` 的时候，编译器会报错：

```
invalid operation: mapCreated["key1"] (index of type *map[string]float32).
```

下面是 `map` 的一些应用：

```go
val, ok = map1[key1] // 第一个是key1的值，如果key1存在则ok == true，否则ok为false
 
delete(map1, key1) // 从map1中删除key1，如果 key1 不存在，该操作不会产生错误。
 
for key, value := range map1 {
    // 遍历所有键值对
}
 
for _, value := range map1 {
    //只关心value
}
 
for key := range map1 {
    // 值关心key
}
```

:::warning

`map` 不是按照 key 的顺序排列的，也不是按照 value 的序排列的。

:::

`map` 默认是无序的，如果你想为 `map` 排序，需要将 key（或者 value）拷贝到一个切片，再对切片排序（使用 `sort` 包），然后可以使用切片的 `for-range` 方法打印出所有的 key 和 value。

还有一种情况，那就是互换 key 和 value，这里对调是指调换 key 和 value。如果 map 的值类型可以作为 key 且所有的 value 是唯一的，那么通过下面的方法可以简单的做到键值对调。

```go
package main
import "fmt"
 
var (
    barVal = map[string]int{"alpha": 34, "bravo": 56, "charlie": 23,
                            "delta": 87, "echo": 56, "foxtrot": 12,
                            "golf": 34, "hotel": 16, "indio": 87,
                            "juliet": 65, "kili": 43, "lima": 98}
)
 
func main() {
    invMap := make(map[int]string, len(barVal))
    for k, v := range barVal {
        invMap[v] = k
    }
    fmt.Println("inverted:")
    for k, v := range invMap {
        fmt.Printf("Key: %v, Value: %v / ", k, v)
    }
}
```