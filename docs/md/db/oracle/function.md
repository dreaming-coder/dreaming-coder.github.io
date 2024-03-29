# 函数

:::tip

详细用法自行搜索

:::

## 数值型函数

- 返回绝对值：`abs()`
- 符号函数：`sign()`
- 向上取整：`ceil()`
- 向下取整：`floor()`
- 指数函数：`power(x, y)`
- e 的 y 次幂：`exp(y)`
- 对数函数：`log(x, y)`
- 自然对数：`ln(y)`
- 取余：`mod(x, y)`
- 四舍五入：`round()`
- 截取数值：`trunc()`
- 平方根：`sqrt()`
- 三角函数

## 字符型函数

- 字符串连接：`CONCAT()`
- 单词首字母大写：`INITCAO()`
- 字符串转换小写：`LOWER()`
- 字符串转换大写：`UPPER()`
- 返回字符串长度（全角算1个字符）：`LENGTH()`
- 返回字符串长度（全角算2个字符）：`LENGTHB()`
- 左边添加字符：`LPAD()`
- 右边添加字符：`RPAD()`
- 删除左边字符串：`LTRIM()`
- 删除右边字符串：`RTRIM()`
- 删除两边字符串：`TRIM()`

## 日期函数

- 返回系统当前日期：`sysdate`
- 返回指定月数后的日期：`add_months()`
- 返回本月最后一天的日期：`last_day()`
- 返回月数间隔：`months_between()`
- 提取日期时间中的数据：`extract()`

## 转换函数

- 数字或日期类型转换为字符串：`to_char()`
- 字符串转换为日期类型：`to_date()`
- 字符串转换为数值型：`to_number()`

## 聚合函数

- 统计平均值：`AVG()`
- 求和：`SUM()`
- 统计标准差：`STDDEV()`
- 统计方差：`VARIANCE()`
- 统计行数：`COUNT()`
- 统计最大值：`MAX()`
- 统计最小值：`MIN()`

## 其他函数

- 空值赋值：`NVL()`、`NVL2()`
- 相等返回空：`NULLIF()`
- 当前行号：`ROWNUM`
- 条件取值：`CASE...WHEN...`
