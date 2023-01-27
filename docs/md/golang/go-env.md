# GoLang - 环境安装

**所有路径避免出现中文，有可能有莫名其妙的坑！**

## 下载安装包

下载地址：[https://go.dev/dl/](https://go.dev/dl/)

![](/imgs/golang/env/env-001.png)

## 安装

双击安装程序，一路 【next】即可

安装完成后，打开 CMD 窗口，执行 `go version`，出现下图所示结果说明安装成功

![](/imgs/golang/env/env-002.png)

## 配置环境变量

Go 需要一 个安装目录，还需要一个工作目录。即 GOROOT、和 GOPATH。

![](/imgs/golang/env/env-003.png)

> 这里就是之前安装 Go 的目录。

![](/imgs/golang/env/env-004.png)

> GOPATH 相当于 Java 开发中创建的 workspace，未来写的代码和下载的包都在其中。

::: warning

由于是二进制安装，会自动在系统变量创建好一个 GOPATH，需要自己修改或删除重新创建，避免代码被保存在不想放的位置。

:::

在 GOPATH 目录下，我们还需要新建几个文件夹：

![](/imgs/golang/env/env-005.png)

::: tip

特别地，如果不是使用二进制文件安装，则需要自行配置 Go 的 bin 文件夹的地址到 path 环境变量中。

:::

最后，我们可以在 CMD 窗口中输入 `go env` 查看环境变量：

![](/imgs/golang/env/env-006.png)
