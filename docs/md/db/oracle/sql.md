# SQL 基础

## DDL 语句

### 创建表

```sql
create [or replace] table 表名(
     列名 列的类型 [列的约束],
     列名 列的类型 [列的约束]  
);

create table 表名 as 查询语句;
```

### 删除表

```sql
drop table 表名;
truncate table 表名;
```

### 修改表

#### 添加一列

```sql
alter table 表名 add 列名 列的类型;
```

#### 修改列名

```sql
alter table 表名 rename column 旧列名 to 新列名;
```

#### 修改类型

```sql
alter table 表名 modify 列名 列的类型;
```

#### 删除一列

```sql
alter table 表名 drop column 列名;
```

#### 修改表名

```sql
rename 旧表名 to 新表名;
```

### 表约束

#### 语法

```sql
CREATE TABLE 表名(
    列名 列的类型 primary key, --主键约束
    列名 列的类型 not null, --非空约束
    列名 列的类型 unique, --唯一约束
    列名 列的类型 check(列名 in (检查列表)), --检查约束
    constraint 约束名 foreign key(字段名) references 主表(被引用列) --外键约束
) ;
```

#### 演示

```sql
--商品分类表
create table category(
    cid number primary key,
    cname varchar2(20) 
);

--商品详情表
create table product(
    pid number primary key,--主键约束
    pname varchar2(50) not null,--非空约束
    pimg varchar2(50) unique,--唯一约束
    pflag varchar2(10) check(pflag in ('上架','下架')),--检查约束
    cid number,
    constraint FK_CATEGORY_ID foreign key(cid) references category(cid)--外键约束
);
```

#### 约束修改

- 主键约束

  ```sql
  添加
  alter table product add constraint PK_PRODUCT_PID primary key(pid);
  
  删除
  alter table product drop constraint PK_PRODUCT_PID;
  或者
  alter table product drop primary key;
  ```

- 非空约束

  ```sql
  添加
  alter table product modify pname not null;
  
  删除
  alter table product modify pname null;
  ```

- 唯一约束

  ```sql
  添加
  alter table product add constraint UK_PRODUCT_PIMG unique(pimg);
  
  删除
  alter table product drop constraint UK_PRODUCT_PIMG;
  或者
  alter table product drop unique(pimg);
  ```

- 检查约束

  ```sql
  添加
  alter table product add constraint CK_PRODUCT_PFLAG check(pflag in ('上架','下架'));
  
  删除
  alter table product drop constraint CK_PRODUCT_PFLAG;
  ```

- 外键约束

  ```sql
  添加
  alter table product add constraint FK_PRODUCT_ID foreign key(cid) references category(cid);
  
  删除
  alter table product drop constraint FK_PRODUCT_ID;
  ```

## DML 语句

### 插入语句

```sql
格式：insert into 表名(列名1,列名2,...) values(值1,值2,...);
演示：insert into category(cid,cname) values(1,'电视');
注意：commit;
```

### 修改语句

```sql
格式：update 表名 set 列名1=值1,列名2=值2,... where 查询条件;
演示：update category set cname='汽车' where cid = 1;
注意：commit;
```

### 删除语句

```sql
格式：delete from 表名 where 查询条件;
演示：delete from category where cid = 1;
注意：commit;
```

## DQL 语句

### 完整语法

```sql
select [TOP|DISTINCT] [选择列表]|[*]
from 数据源
[where 查询条件]
[group by 分组条件]
[having 过滤条件]
[order by 排序条件 asc|desc nulls first|last];
```

执行顺序：

```sql
（5）select [（5-3）TOP|（5-2）DISTINCT] （5-1）[选择列表]|[*]
（1）from 数据源
（2）[where 查询条件]
（3）[group by 分组条件]
（4）[having 过滤条件]
（6）[order by asc|desc nulls first|last];
```

### 简单查询

```sql
--查询所有员工的信息
select * from emp;
```

### 别名查询

```sql
--查询所有员工的姓名
select e.ename from emp e;
```

### 去重查询

```sql
--查询所有部门的编号
select distinct e.deptno from emp e;
```

### 条件查询

1. 条件运算符：>、>=、<、<=、=、<=>、!=、<>
2. 逻辑运算符：and、or、not
3. 模糊运算符：
   - like：%任意多个字符、_任意单个字符、如果有特殊字符，需要使用escape转义
   - between and
   - not between and
   - in
   - is null
   - is not null

### 分组查询

```sql
--统计每个部门有多少个人
select deptno as "部门",count(*) as "人数" from emp group by deptno;
```

::: warning

 此处查询的列只能是group by 子句中出现的列或是聚合函数的值！

:::

### 分组过滤

```sql
--统计部门人数>5人的部门的编号
select deptno as "部门", count(*) as "人数"
from emp
group by deptno
having count(*) > 5;
```

### 排序查询

```sql
--按照员工主管编号由高到低进行排序，NULL值放到最后边
select * from emp order by mgr desc nulls last;
```

### 分页查询

```sql
--查询前10条员工的信息
--注意：Oracle中不支持limit，需要在原始表加上一列：行号，然后使用子查询来实现分页
select * 
from (select rownum hanghao,e.* from emp e) t
where t.hanghao >=1 and t.hanghao <= 10;
```

### 多表查询

- **内连接**

  - 隐式内连接：select * from emp e1, dept d1 where e1.deptno = d1.deptno;

  - 显示内连接：select * from emp e1 inner join dept d1 on e1.deptno = d1.deptno;

- **外连接**
  - 左外连接
    - 隐式左外连接：select * from emp e1,dept d1 where e1.deptno = d1.deptno(+);
    - 显示左外连接：select * from emp e1 left outer join dept d1 on e1.deptno = d1.deptno;
  - 右外连接
    - 隐式右外连接：select * from emp e1,dept d1 where e1.deptno(+) = d1.deptno;
    - 显示右外连接：select * from emp e1 right outer join dept d1 on e1.deptno = d1.deptno;
  - 全外连接：select * from emp e1 full outer join dept d1 on e1.deptno = d1.deptno;

- 交叉连接
  - 隐式交叉连接：select * from emp, dept;
  - 显示交叉连接：select * from emp e1 cross join dept d1;

### 联合查询

- 并集运算：将两个查询结果进行合并

  ```sql
  /*
  	union 		: 它会去除重复的，并且排序
  	union all 	: 不会去除重复的，不会排序
  */
  
  --工资大于1500或者20号部门下的员工
  select * from emp where sal > 1500
  union
  select * from emp where deptno = 20;
  
  --工资大于1500或者20号部门下的员工
  select * from emp where sal > 1500
  union all
  select * from emp where deptno = 20;
  ```

- 交集运算：找两个查询结果的交集

  ```sql
  --工资大于1500并且20号部门下的员工
  select * from emp where sal > 1500
  intersect
  select * from emp where deptno = 20;
  ```

- 差集运算：找两个查询结果的差集

  ```sql
  --1981年入职员工(不包括总裁和经理)
  select * from emp where to_char(hiredate,'yyyy') = '1981'
  minus
  select * from emp where job = 'PRESIDENT' or job = 'MANAGER';
  ```

::: warning

1. 列的类型要一致
2. 列的顺序要一致
3. 列的数量要一致，如果不够，可以使用null填充

:::

### 子查询

```sql
--查询所有经理的信息
select * from emp where empno in (select mgr from emp where mgr is not null);

--查询不是经理的信息
select * from emp where empno not in (select mgr from emp where mgr is not null);

--查询出比10号部门任意一个员工薪资高的员工信息
select * from emp where sal > any (select sal from emp where deptno = 10);

--查询出比10号部门任意一个员工薪资高的员工信息
select * from emp where sal > some (select sal from emp where deptno = 10);

--查询出比20号部门所有员工薪资高的员工信息
select * from emp where sal > all (select sal from emp where deptno = 20);

--查询有员工的部门的信息
select * from dept d1 where exists (select * from emp e1 where e1.deptno = d1.deptno);
```

## DCL 语句

### 创建表空间

```sql
create tablespace 表空间的名称
datafile '文件的路径'
size 初始化大小
autoextend on
next 每次扩展的大小;
```

示例：

```sql
create tablespace mytest
datafile 'd:/mytest.dbf'
size 100m
autoextend on
next 10m;
```

### 删除表空间

```sql
drop tablespace 表空间的名称;
```

示例：

```sql
drop tablespace mytest;
```

### 创建用户

```sql
create user 用户名
identified by 密码
default tablespace 表空间的名称;
```

### 授权用户

```sql
grant 系统权限列表 to 用户名;
或者
grant 实体权限列表 on 表名称 to 用户名;
```

系统权限分类：（系统权限只能由DBA用户授出）

- DBA：拥有全部特权，是系统最高权限，只有DBA才可以创建数据库结构。
- RESOURCE：拥有Resource权限的用户只可以创建实体，不可以创建数据库结构。
- CONNECT：拥有Connect权限的用户只可以登录Oracle，不可以创建实体，不可以创建数据库结构。

实体权限分类：select、update、insert、alter、index、delete、all

示例：

```sql
grant CONNECT to zhangsan;
或者
grant CONNECT,RESOURCE to zhangsan;
或者
grant CONNECT,RESOURCE,DBA to zhangsan;
或者
grant DBA to zhangsan;
或者
grant all on emp to zhangsan;
```

### 取消授权

```sql
revoke 系统权限列表 from 用户名;
或者
revoke 实体权限列表 on 表名称 from 用户名;
```

> 系统权限只能由DBA**用户回收**

示例：

```sql
revoke CONNECT from zhangsan;
或者
revoke CONNECT,RESOURCE from zhangsan;
或者
revoke CONNECT,RESOURCE,DBA from zhangsan;
或者
revoke DBA from zhangsan;
或者
revoke all on emp from zhangsan;
```

### 修改密码

```sql
alter user 用户名 identified by "密码";
```

## TCL 语句

```sql
1、开启事务
Oracle 11g中事务是隐式自动开始的，它不需要用户显示的执行开始事务语句

2、编写一组逻辑sql语句
注意：sql语句支持的是insert、update、delete

【设置回滚点】
savepoint 回滚点名;

3、结束事务
提交：commit;
回滚：rollback;
回滚到指定的地方： rollback to 回滚点名;
```

### 事务的特性

|       事务特性        |                             描述                             |
| :-------------------: | :----------------------------------------------------------: |
|  原子性（Atomicity）  |   事务是不可分割的最小操作单元，要么全部成功，要么全部失败   |
| 一致性（Consistency） |          事务完成时，必须使所有的数据都保持一致状态          |
|  隔离性（Isolation）  | 数据库系统提供的隔离机制，保证事务在不受外部并发操作影响的独立环境下运行 |
| 持久性（Durability）  |    事务一旦提交或回滚，它对数据库中的数据的改变就是永久的    |

### 并发事务问题

- 脏读：一个事务读到另外一个事务还没有提交的数据。

- 不可重复读：一个事务先后读取同一条记录，但两次读取的数据不同，称之为不可重复读。

- 幻读：一个事务按照条件查询数据时，没有对应的数据行，但是在插入数据时，又发现这行数据已经存在，好像出现了”幻影”。

### 悲观锁与乐观锁

- 悲观锁：认为两个事务更新操作一定会发生丢失更新
  - 通过在语句后边添加for update来实现行级上锁，所以又称为“行级锁”，例如：`select * from t_account t wheret.id='1' for update;`
- 乐观锁：认为事务不一定会产生丢失更新，让事务进行并发修改，不对事务进行锁定
  - 由程序员自己解决，可以通过给数据表添加自增的version字段或时间戳timestamp，进行数据修改时，数据库会检测version字段或者时间戳是否与原来的一致，若不一致，抛出异常或者重新查询

