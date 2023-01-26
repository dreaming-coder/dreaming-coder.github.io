# GoLang 之 Hello World

```go
package main

import "fmt" // 导入一个系统包fmt用来输出

func main(){
	fmt.Println("Hello World!") 
}
```

执行 `go run hello.go`，可以得到输出结果：

![](/imgs/golang/hello/hello-001.png)

::: warning

一个项目必须有一个 main package，编译器回去找它下面的 main 方法作为程序入口，找不到则程序无法运行！

:::

::: info

早期 GoLang 的项目必须建立在 GOPATH 下，后来官方退出了 Go Module 工具，使得没有必要在 GOPATH 中创建项目了，并且还能够很好的管理项目依赖的第三方包信息。

前期学习语法时不必在意这些。

:::