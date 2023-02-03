# awk

适合格式化文本文件，对文本文件进行更复杂的加工处理、分析

以 `/etc/passwd`文件为例：

```text
root:x:0:0:root:/root:/bin/bash
bin:x:1:1:bin:/bin:/sbin/nologin
daemon:x:2:2:daemon:/sbin:/sbin/nologin
adm:x:3:4:adm:/var/adm:/sbin/nologin
lp:x:4:7:lp:/var/spool/lpd:/sbin/nologin
sync:x:5:0:sync:/sbin:/bin/sync
shutdown:x:6:0:shutdown:/sbin:/sbin/shutdown
halt:x:7:0:halt:/sbin:/sbin/halt
mail:x:8:12:mail:/var/spool/mail:/sbin/nologin
......
```

::: info

每一行的含义是：`注册名:口令:用户标识号:组标识号:用户名:用户主目录:命令解释程序`

:::

## 基本语法

```bash
awk [选项参数] 'pattern1{action1}  pattern2{action2}...' filename
```

::: tip

- `pattern`：表示 awk 在数据中查找的内容，就是匹配模式
- `action`：在找到匹配内容时所执行的一系列命令

:::

::: warning

行匹配语句 awk 只能用单引号，单引号内部可以使用双引号，但是顺序不能错。

:::

## 工作流程

读入有 `\n` 换行符分割的一条记录，然后将记录按指定的域分隔符划分域，填充域，`$0` 则表示所有域，`$1` 表示第一个域，`$n` 表示第 n 个域，`$NF` 表示文本行中的最后一个数据字段。默认域分隔符是 "空白键" 或 “[tab]键”。

## awk 普通参数

- `-F`：**指定分隔符**
- `-v`：**指定变量和默认值**
- `$NF`：**代表最后一个字段**
- `NR`：**代表第几行**
- `&&`：**与**
- `||`：**或**
- `FS`：**输入分隔符，与 `-F` 分隔符一样**
- `OFS`：**输出字段分隔符**
- `RS`：**输入记录分隔符，默认是 `\n`，表示每行是一条记录**
- `$0`：**显示整行**
- `$1`、`$2` ...：**第一个字段到第 N 个字段**

## awk 参数玩法

### -F 指定分隔符

```bash
# 指定分隔符“:”并截取每条记录（每行）第一个字段
tail -3 /etc/passwd | awk -F ":" '{print $2}' 
```

输出：

```
[root@VM-16-2-centos ~]# tail -3 /etc/passwd
tcpdump:x:72:72::/:/sbin/nologin
syslog:x:996:994::/home/syslog:/bin/false
lighthouse:x:1000:1000::/home/lighthouse:/bin/bash
[root@VM-16-2-centos ~]# tail -3 /etc/passwd | awk -F ":" '{print $1}'
tcpdump
syslog
lighthouse
```

::: danger

注意写法细节 `awk -F ":" + 空格 + '{print $6}'` 中间没有空格报错

:::

### -v **指定变量和默认值**

```bash
seq 1 10 > count.txt # 生成一个1到10的文件,我想计算出文件内的总和

#给sum赋值为0，让sum与文件内的第一个字段相加，最后结果通过tail打印出来
awk -v "sum=0" '{sum+=$1;print sum}' count.txt | tail -1
```

输出：

```
[root@VM-16-2-centos ~]# cat count.txt 
1
2
3
4
5
6
7
8
9
10
[root@VM-16-2-centos ~]# awk -v "sum=0" '{sum+=$1;print sum}' count.txt | tail -1
55
```

可以看到，上面的语句打印优点繁琐，优化的方式是使用优先级 `END` 下面会有讲：

```bash
awk -v "sum=0" '{sum+=$1}END{print sum}' count.txt 
```

### NR 选行

```bash
# 打印/etc/passwd下的第3行，$0代表整行
awk 'NR==3{print $0}' /etc/passwd 
```

输出：

```
[root@VM-16-2-centos ~]# awk 'NR==3{print $0}' /etc/passwd
daemon:x:2:2:daemon:/sbin:/sbin/nologin
```

### $NF 代表最后一个字段

```bash
# 截取/etc/passwd文件下面的第4行，最后一个字段
awk -F ":" 'NR==4{print $NF}' /etc/passwd
```

输出：

```
[root@VM-16-2-centos ~]# head -5 /etc/passwd
root:x:0:0:root:/root:/bin/bash
bin:x:1:1:bin:/bin:/sbin/nologin
daemon:x:2:2:daemon:/sbin:/sbin/nologin
adm:x:3:4:adm:/var/adm:/sbin/nologin
lp:x:4:7:lp:/var/spool/lpd:/sbin/nologin
[root@VM-16-2-centos ~]# awk -F ":" 'NR==4{print $NF}' /etc/passwd
/sbin/nologin
```

### && 与

**`条件 1 && 条件 2`， 都要满足才为真，真返回 1，假返回 0**

### || 或

**`条件 1 || 条件 2`，条件满足一边为真，真返回 1，假返回 0**

### FS 指定分隔符

```bash
# 没有优先级写法
awk '{FS=":"} NR==3{print $1, $2}' text.txt
# 优先级写法
awk 'BEGIN{FS=":"} NR==3{print $1, $2}' text.txt
```

输出：

```
[root@VM-16-2-centos ~]# cat text.txt 
1 2 3 4 5 6
a b c d e f
A:B:C:D:E:F
I love you
[root@VM-16-2-centos ~]# awk '{FS=":"} NR==3{print $1, $2}' text.txt 
A B
[root@VM-16-2-centos ~]# awk 'BEGIN{FS=":"} NR==3{print $1, $2}' text.txt 
A B
```

### OFS 一般与 FS 或者 -F 共同使用

```bash
awk -F ":" 'NR==3{OFS="#";print $1, $2}' text.txt
 
awk 'BEGIN{FS=":";OFS="#"} NR==3{print $1, $2}' text.txt
```

输出：

```
[root@VM-16-2-centos ~]# cat text.txt 
1 2 3 4 5 6
a b c d e f
A:B:C:D:E:F
I love you
[root@VM-16-2-centos ~]# awk -F ":" 'NR==3{OFS="#";print $1, $2}' text.txt 
A#B
[root@VM-16-2-centos ~]# awk 'BEGIN{FS=":";OFS="#"} NR==3{print $1, $2}' text.txt 
A#B
```

### awk 优先级

- 最高：BEGIN 是最高优先级，是在执行 PROGRAM 之前执行的，不需要提供数据源，因为不涉及任何数据，也不依赖 PROGRAM代 码块；
-  默认：PROGRAM 是对数据流干什么，是必选代码块，也是默认代码块。所以执行的时候必须要加上数据源； 默认优先级（不加优先级就是默认）
- 最低：END 是处理完数据流后，如果需要执行 END 代码块，就必须要 PROGAM 的支持，单个无法执行

::: warning

**注意：如果只用最高或者最低优先级，后面跟上数据源（file）不会有效果，只有默认优先级PROGRAM才会有效果**

:::

## awk 模糊匹配

比如说我想看我的用户信息，我就记得用户是 `ro` 开头的，我不打开文件下，我们可以这么做

```bash
# 注意“~”匹配查询，后面关键字要用引号引起来一定要双引号 
# $1代表第一个字段，可以写成别字段比如第二字段就是$2...
awk -F ":" '$1 ~ "ro"{print $0}' /etc/passwd  
 
# 匹配多个写法
awk -F ":" '$1 ~"ny"{print $0};$1 ~ "roo"{print $0}' /etc/passwd 

# 模糊匹配，只要有ro就匹配上,用~表示包含
awk -F: '$1~/ro/'  /etc/passwd   

# 第七列不包含nologin结尾的第一行和第七行
awk -F: '$7!~/nologin$/{print $1,$7}' /etc/passwd
```

输出：

```
root:x:0:0:root:/root:/bin/bash
chrony:x:997:995::/var/lib/chrony:/sbin/nologin
-------------------------------------------------
root:x:0:0:root:/root:/bin/bash
chrony:x:997:995::/var/lib/chrony:/sbin/nologin
-------------------------------------------------
root:x:0:0:root:/root:/bin/bash
chrony:x:997:995::/var/lib/chrony:/sbin/nologin
-------------------------------------------------
root /bin/bash
sync /bin/sync
shutdown /sbin/shutdown
halt /sbin/halt
syslog /bin/false
lighthouse /bin/bash
```

## 控制流

### if 判断语句

```bash
awk '{if($1>5)print $1*$2;else print $1/$2}' test.txt
```

输出：

```
[root@VM-16-2-centos ~]# cat test.txt 
1 10
2 9
3 8
4 7
5 6
6 5
7 4
8 3
9 2
10 1
[root@VM-16-2-centos ~]# awk '{if($1>5)print $1*$2;else print $1/$2}' test.txt 
0.1
0.222222
0.375
0.571429
0.833333
30
28
24
18
10
```

### for 循环

```bash
awk 'NR==1{a=0;for(i=1;i<11;i++){a+=i}print a}' count.txt
```

输出：

```
[root@VM-16-2-centos ~]# cat count.txt 
1
2
3
4
5
6
7
8
9
10
[root@VM-16-2-centos ~]# awk 'NR==1{a=0;for(i=1;i<11;i++){a+=i}print a}' count.txt 
55
```

### while 循环

```bash
awk 'NR==1{a=0;while(a<=5){a+=1}print a}' count.txt
```

输出：

```
[root@VM-16-2-centos ~]# cat count.txt 
1
2
3
4
5
6
7
8
9
10
[root@VM-16-2-centos ~]# awk 'NR==1{a=0;while(a<=5){a+=1}print a}' count.txt
6
```

### do while 循环

```bash
awk 'NR==1{a=0;do{a+=1}while(a<=5);print a}' count.txt
```

输出：

```
[root@VM-16-2-centos ~]# awk 'NR==1{a=0;do{a+=1}while(a<=5);print a}' count.txt
6
```

### 控制语句

- `continue`：跳出“当前”循环

- `break`：跳出“整个”循环

- `exit`：退出 awk 命令

  ::: warning

  **当 awk语句中有 “exit” 和 “END{commands} 语句块” 的时候，exit 并不是表示退出 awk 命令；而是表示直接执行  END{commands} 语句块中的内容！**

  :::

- `next`：跳过当前行

  ::: warning

  **我们都知道 awk 是逐行处理文件，如果我们有一行内容不需要 awk 处理，那么我们就可以使用 “next” 来告诉 awk 哪一行内容不需要处理！**

  :::

- `nextfile`：跳过当前文件

  ::: warning

  **nextfile 表示，在某条件的时候跳过，但是不再执行此文件，立马跳到下一个文件执行！但是下一个文件执行的话，使用的还是同一个条件！**

  :::