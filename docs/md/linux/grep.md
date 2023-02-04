# grep

## 基本介绍

全拼：Global search REgular expression and Print out the line.

作用：**文本搜索工具，根据用户指定的“模式（过滤条件)”对目标文本逐行进行匹配检查，打印匹配到的行**

**模式：由正则表达式的元字符及文本字符所编写出的过滤条件**

语法：

```bash
grep  [options]  [pattern]      file
命令     参数      匹配模式       文件数据
```

参数选项：

- `-V`：排除匹配结果
- `-n`：显示匹配行与行号
- `-i`：不区分大小写
- `-c`：只统计匹配的行数
- `-E`：使用 egrep 命令
- `--color=auto`：为 grep 过滤的结果添加颜色
- `-w`：只匹配过滤的单词
- `-o`：只输出匹配的内容

## 正则表达式示例

测试文件内容：

```bash
[root@VM-16-2-centos ~]# cat -n test.txt 
     1  I am a teacher
     2  I am a student
     3  I like Linux
     4  I like Java
     5  Hello World
     6  世界，你好！
     7
     8  7417417474741
     9  138138
    10  orange
    11  apple.
    12  banana.
    13
    14  #comment
    15  #crash
    16
```

- **输出以 `I` 开头的行（不区分大小写）**

```bash
[root@VM-16-2-centos ~]# grep -i -n "^i" test.txt 
1:I am a teacher
2:I am a student
3:I like Linux
4:I like Java
```

::: tip

这里的 `-i` 代表不区分大小写， `-n` 代表显示匹配行和行号

:::

- **输出以 `.` 结尾的行**

```bash
[root@VM-16-2-centos ~]# grep -n "\.$" test.txt 
11:apple.
12:banana.
```

::: tip

**因为 `.` 在这里有着特殊含义, 所以要用 `\` 转义一下, 如果不加转义字符的话，`grep` 就会把它当做正则表达式来处理(`.` 代表的含义是匹配任意一个字符)**

:::

- **`$` 符号**

  - **注意在 Linux 平台下, 所有文件的行尾都有一个 `$` 符**

  - **可以利用 `cat -A` 查看文件**

```
[root@VM-16-2-centos ~]# cat -A test.txt 
I am a teacher$
I am a student$
I like Linux$
I like Java$
Hello World$
M-dM-8M-^VM-gM-^UM-^LM-oM-<M-^LM-dM-=M- M-eM-%M-=M-oM-<M-^A$
$
7417417474741$
138138$
orange$
apple.$
banana.$
$
#comment$
#crash$
$
```

- **`^$` (代表空行的意思)组合符**

找出文件的空行, 以及行号

```bash
[root@VM-16-2-centos ~]# grep -n "^$" test.txt 
7:
13:
16:
```

- **`.` 符号**：**表示任意一个字符，有且只有一个，不包含空行**

```bash
[root@VM-16-2-centos ~]# grep -n "." test.txt 
1:I am a teacher
2:I am a student
3:I like Linux
4:I like Java
5:Hello World
6:世界，你好！
8:7417417474741
9:138138
10:orange
11:apple.
12:banana.
14:#comment
15:#crash
```

- **`*` 符号：表示找出前一个字符 0 次或一次以上**

```bash
[root@VM-16-2-centos ~]# grep -n "i*" test.txt 
1:I am a teacher
2:I am a student
3:I like Linux
4:I like Java
5:Hello World
6:世界，你好！
7:
8:7417417474741
9:138138
10:orange
11:apple.
12:banana.
13:
14:#comment
15:#crash
16:
```

- **`.*` 组合符**：**".*"表示所有内容，包括空行**

```bash
[root@VM-16-2-centos ~]# grep -n ".*" test.txt 
1:I am a teacher
2:I am a student
3:I like Linux
4:I like Java
5:Hello World
6:世界，你好！
7:
8:7417417474741
9:138138
10:orange
11:apple.
12:banana.
13:
14:#comment
15:#crash
16:
```

- **`^` 符号：表示第一个字符之前的位置**

```bash
[root@VM-16-2-centos ~]# grep -n "^I" test.txt 
1:I am a teacher
2:I am a student
3:I like Linux
4:I like Java
[root@VM-16-2-centos ~]# grep -n "^a" test.txt 
11:apple.
```

- **`[abc]` 中括号：表示匹配中括号内任意一个字符**

```bash
[root@VM-16-2-centos ~]# grep -n "[lo]" test.txt 
3:I like Linux
4:I like Java
5:Hello World
10:orange
11:apple.
14:#comment
```

::: tip

**如果出现 `[^abc]` 这种样式的 pattern，则表示匹配的是中括号内字符以外的字符**

:::

- **参数 `-o`**：**可以只显示被匹配到的关键字，而不是将整行的内容都输出**

```bash
[root@VM-16-2-centos ~]# grep -n -o "[lo]" test.txt 
3:l
4:l
5:l
5:l
5:o
5:o
5:l
10:o
11:l
14:o
```

- **参数 `-c`：统计匹配的行数**

```bash
[root@VM-16-2-centos ~]# grep -n -c "[lo]" test.txt 
6
```

## 扩展正则表达式示例

- **`+`：表示匹配前一个字符 1 次或多次,必须使用 `grep-E` 扩展正则**

```bash
[root@VM-16-2-centos ~]# grep -E -n "l+" test.txt 
3:I like Linux
4:I like Java
5:Hello World
11:apple.
```

- **`?`：类似 `+`，但是只匹配 0 次或 1 次**

```bash
[root@VM-16-2-centos ~]# grep -E -n "ll?" test.txt 
3:I like Linux
4:I like Java
5:Hello World
11:apple.
```

- **`|`：表示或者**

```bash
[root@VM-16-2-centos ~]# grep -E -n "st|an" test.txt 
2:I am a student
10:orange
12:banana.
```

::: warning

**`|` 分隔的是两侧所有的，并不是 `t` 和 `a` 二选一！**

:::

- **`()`：看作一个整体**

```bash
[root@VM-16-2-centos ~]# grep -E -n "a(n|v)a" test.txt 
4:I like Java
12:banana.
```

- **`{m, n}`：匹配次数， `m` 次到 `n` 次，闭区间**
- **`{m,}`：至少出现 `m` 次**
- **`{,n}`：至多出现 `n` 次**