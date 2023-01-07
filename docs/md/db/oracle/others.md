# 高级部分

## 序列

序列是 Oracle 数据库中特有的，使用序列可以生成类似于 auto_increment 这种 ID 自动增长 1,2,3,4,5… 的效果，可以用它来生成主键

```sql
create sequence 序列名称
start with 从几开始
increment by 每次增长多少
[maxvalue 最大值] | nomaxvalue
[minvalue 最小值] | nominvalue
cycle | nocycle --是否自动循环
[cache 缓存数量] | nocache;
```

**使用：**

```sql
使用方式：先 '.nextval' 后 '.currval' -- 反之会报错

select seq_name.nextval from dual;
select seq_name.currval from dual;
```

**示例：创建 “学生信息表”，并实现主键 “学号” 自增**

```sql
-- 1.创建 '学生信息表'
create table scott.stu_info (
  sno   number(10) constraint pk_stu_info_sno primary key,
  sname varchar2(30)
);

-- 2.创建序列（上述已创建 seq_name）

-- 3.实现序列自增
insert into scott.stu_info(sno, sname) values(scott.seq_name.nextval, '小游子');
insert into scott.stu_info(sno, sname) values(scott.seq_name.nextval, '瑶瑶');
insert into scott.stu_info(sno, sname) values(scott.seq_name.nextval, '优优');

select scott.seq_name.currval 当前序列值 from dual; 
select * from scott.stu_info;
```

## 索引

索引相当于是一本书的目录，能够提高我们的查询效率

### 创建索引

```sql
create [UNIQUE]|[BITMAP] index 索引名 on 表名(列名1,列名2,...);
```

### 修改索引

```sql
--重命名索引
alter index 索引名称 rename to 新的名称;

--合并索引
alter index 索引名称 coalesce;

--重建索引
alter index 索引名称 rebuild;

--修改某列
先删除，在创建
```

### 删除索引

```sql
drop index 索引名称;
```

## 视图

视图是对查询结果的一个封装，视图里面所有的数据，都是来自于它查询的那张表，视图本身不存储任何数据，但是可以修改原数据，但是不建议这样使用。

### 创建视图

```sql
create view 视图名称
as 查询语句
[with read only];
```

### 修改视图

```sql
create or replace view 视图名称
as 查询语句
[with read only];
```

### 删除视图

```sql
drop view 视图名称;
```

## 同义词

同义词就是别名的意思和视图的功能类似，就是一种映射关系

### 创建同义词

```sql
create [public] synonym 同义词名称 for 对象的名称;
```

### 修改同义词

```sql
create or replace [public] synonym 同义词名称 for 对象的名称;
```

### 删除同义词

```sql
drop [public] synonym 同义词名称;
```

## 触发器

当用户执行了 insert | update | delete 这些操作之后，可以触发一系列其它的动作、业务逻辑，使用触发器可以协助应用在数据库端确保数据的完整性、日志记录 、数据校验等操作。使用别名 OLD 和 NEW 来引用触发器中发生变化的记录内容，这与其他的数据库是相似的。现在Oracle触发器不仅支持行级触发，还支持语句级触发。

### 分类

|   触发器类型    |                    NEW 和 OLD的使用                     |
| :-------------: | :-----------------------------------------------------: |
| INSERT 型触发器 |             NEW 表示将要或者已经新增的数据              |
| UPDATE 型触发器 | OLD 表示修改之前的数据 , NEW 表示将要或已经修改后的数据 |
| DELETE 型触发器 |             OLD 表示将要或者已经删除的数据              |

### 创建触发器

```sql
create trigger 触发器名称
before|after
insert|update|delete 
on 表名称
[for each row]--行级触发器
declare
 --声明部分
begin
 --业务逻辑 
end;
```

### 修改触发器

```sql
create [or replace] trigger 触发器名称
before|after
insert|update|delete 
on 表名称
[for each row]--行级触发器
declare
 --声明部分
begin
 --业务逻辑 
end;
```

### 删除触发器

```sql
drop trigger 触发器名称;
```

