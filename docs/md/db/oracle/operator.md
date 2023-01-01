# 运算符

[[toc]]

## 1. 算数运算

```sql
+、-、*、/
```

## 2. 关系运算符

|        运算符        |                           描述                            |
| :------------------: | :-------------------------------------------------------: |
|          =           |                   判断两个数据是否相等                    |
|        !=、<>        |                  判断两个数据是否不相等                   |
|        <、<=         |                     判断小于（等于）                      |
|        >、>=         |                     判断大于（等于）                      |
| between ... and ...  |                   在两者之间（闭区间）                    |
| in (值1[, 值2, ...]) | 如果和给定数据中的任意一个数据相等，则返回true，否则false |
|       distinct       |                       去重重复数据                        |

## 3. 集合运算

|  运算符   |     描述     |
| :-------: | :----------: |
| intersect |     交集     |
|   union   |  并集，去重  |
| union all | 并集，不去重 |
|   minus   |     差集     |

## 4. 特殊字符查询

- 判空

`IS NULL`、`IS NOT NULL`

- 模糊匹配

`LIKE 'A%B_C'`

> `%` 表示任意多个（包括零）任意字符，`_` 表示一个任意字符