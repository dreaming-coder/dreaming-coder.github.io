# JavaScript - 日期时间

ECMAScript 中的 `Date` 类型是在早期 Java 中的 `java.util.Date` 类基础上构建的。为此，`Date` 类型使用自 UTC（Coordinated Universal Time，国际协调时间）1970 年 1 月 1 日午夜（零时）开始经过的毫秒数来保存日期。在使用这种数据存储格式的条件下，`Date` 类型保存的日期能够精确到 1970 年 1 月 1 日之前或之后的 285 616 年。

要创建一个日期对象，使用 `new` 操作符和 `Date` 构造函数即可：

```javascript
var date = new Date(); // 当前时间
var date = new Date(2019, 10, 1);                 // 2019-11-01 00:00:00
var date = new Date('2019-10-01 08:08:08');       // 2019-10-01 08:08:08
var date = +new Date();                           // 返回时间戳
var date = Date.now();                            // 返回时间戳
```

## 日期/时间组件方法

|    方法名     |             说明              |        代码        |
| :-----------: | :---------------------------: | :----------------: |
| getFullYear() |           获取当年            | dObj.getFullYear() |
|  getMonth()   |       获取当月（0-11）        |  dObj.getMonth()   |
|   getDate()   |         获取当天日期          |   dObj.getDate()   |
|   getDay()    | 获取星期几（周日0, 到周六 6） |   dObj.getDay()    |
|  getHours()   |         获取当前小时          |  dObj.getHours()   |
| getMinutes()  |         获取当前分钟          | dObj.getMinutes()  |
| getSeconds()  |         获取当前秒钟          | dObj.getSeconds()  |

## 倒计时

<count-down></count-down>

:::details 参考代码

::: code-group

```html
<div class="count-container">
    <b>倒计时</b>
    <div class="ice-box">
        <div class="item hour"><p class="num">00</p></div>
        <p class="sign">:</p>
        <div class="item minute"><p class="num">00</p></div>
        <p class="sign">:</p>
        <div class="item second"><p class="num">00</p></div>
    </div>
</div>
```

```css
.count-container {
  width: 400px;
  height: 200px;
  text-align: center;
}

.ice-box {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px auto;
  width: 220px;
  height: 60px;
}

.item {
  display: inline-block;
  height: 60px;
  width: 60px;
  background-color: rgb(29, 133, 224);
}

.sign {
  margin: auto;
  font-size: 2.5rem;
  color: rgb(29, 133, 224);
}

.num {
  margin: 12px auto;
  font-family: "Times New Roman", Times, serif;
  font-weight: 800;
  font-size: 2rem;
  color: aliceblue;
}
```

```js
let hourNode = document.querySelector(".hour");
let minuteNode = document.querySelector(".minute");
let secondNode = document.querySelector(".second");

const target = +new Date() + 24 * 60 * 60 * 1000;

function countDown() {
    let nowTime = +new Date();

    let times = (target - nowTime) / 1000;
    if (times <= 0) {
        clearInterval(timer);
        return;
    }
    let h = parseInt((times / 60 / 60) % 24); //时
    h = h < 10 ? "0" + h : h;
    let m = parseInt((times / 60) % 60); //分
    m = m < 10 ? "0" + m : m;
    let s = parseInt(times % 60); //秒
    s = s < 10 ? "0" + s : s;
    hourNode.firstChild.innerText = h;
    minuteNode.firstChild.innerText = m;
    secondNode.firstChild.innerText = s;
}

const timer = setInterval(() => {
    countDown()
}, 1000);
```

:::
