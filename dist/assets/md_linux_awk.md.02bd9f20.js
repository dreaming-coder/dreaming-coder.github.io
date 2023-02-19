import{_ as s,o as n,c as a,a as l}from"./app.a99c6d03.js";const D=JSON.parse('{"title":"awk","description":"","frontmatter":{},"headers":[{"level":2,"title":"基本语法","slug":"基本语法","link":"#基本语法","children":[]},{"level":2,"title":"工作流程","slug":"工作流程","link":"#工作流程","children":[]},{"level":2,"title":"awk 普通参数","slug":"awk-普通参数","link":"#awk-普通参数","children":[]},{"level":2,"title":"awk 参数玩法","slug":"awk-参数玩法","link":"#awk-参数玩法","children":[{"level":3,"title":"-F 指定分隔符","slug":"f-指定分隔符","link":"#f-指定分隔符","children":[]},{"level":3,"title":"-v 指定变量和默认值","slug":"v-指定变量和默认值","link":"#v-指定变量和默认值","children":[]},{"level":3,"title":"NR 选行","slug":"nr-选行","link":"#nr-选行","children":[]},{"level":3,"title":"$NF 代表最后一个字段","slug":"nf-代表最后一个字段","link":"#nf-代表最后一个字段","children":[]},{"level":3,"title":"&& 与","slug":"与","link":"#与","children":[]},{"level":3,"title":"|| 或","slug":"或","link":"#或","children":[]},{"level":3,"title":"FS 指定分隔符","slug":"fs-指定分隔符","link":"#fs-指定分隔符","children":[]},{"level":3,"title":"OFS 一般与 FS 或者 -F 共同使用","slug":"ofs-一般与-fs-或者-f-共同使用","link":"#ofs-一般与-fs-或者-f-共同使用","children":[]},{"level":3,"title":"awk 优先级","slug":"awk-优先级","link":"#awk-优先级","children":[]}]},{"level":2,"title":"awk 模糊匹配","slug":"awk-模糊匹配","link":"#awk-模糊匹配","children":[]},{"level":2,"title":"控制流","slug":"控制流","link":"#控制流","children":[{"level":3,"title":"if 判断语句","slug":"if-判断语句","link":"#if-判断语句","children":[]},{"level":3,"title":"for 循环","slug":"for-循环","link":"#for-循环","children":[]},{"level":3,"title":"while 循环","slug":"while-循环","link":"#while-循环","children":[]},{"level":3,"title":"do while 循环","slug":"do-while-循环","link":"#do-while-循环","children":[]},{"level":3,"title":"控制语句","slug":"控制语句","link":"#控制语句","children":[]}]}],"relativePath":"md/linux/awk.md","lastUpdated":1675441740000}'),p={name:"md/linux/awk.md"},o=l(`<h1 id="awk" tabindex="-1">awk <a class="header-anchor" href="#awk" aria-hidden="true">#</a></h1><p>适合格式化文本文件，对文本文件进行更复杂的加工处理、分析</p><p>以 <code>/etc/passwd</code>文件为例：</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">root:x:0:0:root:/root:/bin/bash</span></span>
<span class="line"><span style="color:#A6ACCD;">bin:x:1:1:bin:/bin:/sbin/nologin</span></span>
<span class="line"><span style="color:#A6ACCD;">daemon:x:2:2:daemon:/sbin:/sbin/nologin</span></span>
<span class="line"><span style="color:#A6ACCD;">adm:x:3:4:adm:/var/adm:/sbin/nologin</span></span>
<span class="line"><span style="color:#A6ACCD;">lp:x:4:7:lp:/var/spool/lpd:/sbin/nologin</span></span>
<span class="line"><span style="color:#A6ACCD;">sync:x:5:0:sync:/sbin:/bin/sync</span></span>
<span class="line"><span style="color:#A6ACCD;">shutdown:x:6:0:shutdown:/sbin:/sbin/shutdown</span></span>
<span class="line"><span style="color:#A6ACCD;">halt:x:7:0:halt:/sbin:/sbin/halt</span></span>
<span class="line"><span style="color:#A6ACCD;">mail:x:8:12:mail:/var/spool/mail:/sbin/nologin</span></span>
<span class="line"><span style="color:#A6ACCD;">......</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="info custom-block"><p class="custom-block-title">INFO</p><p>每一行的含义是：<code>注册名:口令:用户标识号:组标识号:用户名:用户主目录:命令解释程序</code></p></div><h2 id="基本语法" tabindex="-1">基本语法 <a class="header-anchor" href="#基本语法" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">awk </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">选项参数</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">pattern1{action1}  pattern2{action2}...</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> filename</span></span>
<span class="line"></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li><code>pattern</code>：表示 awk 在数据中查找的内容，就是匹配模式</li><li><code>action</code>：在找到匹配内容时所执行的一系列命令</li></ul></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>行匹配语句 awk 只能用单引号，单引号内部可以使用双引号，但是顺序不能错。</p></div><h2 id="工作流程" tabindex="-1">工作流程 <a class="header-anchor" href="#工作流程" aria-hidden="true">#</a></h2><p>读入有 <code>\\n</code> 换行符分割的一条记录，然后将记录按指定的域分隔符划分域，填充域，<code>$0</code> 则表示所有域，<code>$1</code> 表示第一个域，<code>$n</code> 表示第 n 个域，<code>$NF</code> 表示文本行中的最后一个数据字段。默认域分隔符是 &quot;空白键&quot; 或 “[tab]键”。</p><h2 id="awk-普通参数" tabindex="-1">awk 普通参数 <a class="header-anchor" href="#awk-普通参数" aria-hidden="true">#</a></h2><ul><li><code>-F</code>：<strong>指定分隔符</strong></li><li><code>-v</code>：<strong>指定变量和默认值</strong></li><li><code>$NF</code>：<strong>代表最后一个字段</strong></li><li><code>NR</code>：<strong>代表第几行</strong></li><li><code>&amp;&amp;</code>：<strong>与</strong></li><li><code>||</code>：<strong>或</strong></li><li><code>FS</code>：<strong>输入分隔符，与 <code>-F</code> 分隔符一样</strong></li><li><code>OFS</code>：<strong>输出字段分隔符</strong></li><li><code>RS</code>：<strong>输入记录分隔符，默认是 <code>\\n</code>，表示每行是一条记录</strong></li><li><code>$0</code>：<strong>显示整行</strong></li><li><code>$1</code>、<code>$2</code> ...：<strong>第一个字段到第 N 个字段</strong></li></ul><h2 id="awk-参数玩法" tabindex="-1">awk 参数玩法 <a class="header-anchor" href="#awk-参数玩法" aria-hidden="true">#</a></h2><h3 id="f-指定分隔符" tabindex="-1">-F 指定分隔符 <a class="header-anchor" href="#f-指定分隔符" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># 指定分隔符“:”并截取每条记录（每行）第一个字段</span></span>
<span class="line"><span style="color:#A6ACCD;">tail -3 /etc/passwd </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> awk -F </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">{print $2}</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span></code></pre></div><p>输出：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">[root@VM-16-2-centos ~]# tail -3 /etc/passwd</span></span>
<span class="line"><span style="color:#A6ACCD;">tcpdump:x:72:72::/:/sbin/nologin</span></span>
<span class="line"><span style="color:#A6ACCD;">syslog:x:996:994::/home/syslog:/bin/false</span></span>
<span class="line"><span style="color:#A6ACCD;">lighthouse:x:1000:1000::/home/lighthouse:/bin/bash</span></span>
<span class="line"><span style="color:#A6ACCD;">[root@VM-16-2-centos ~]# tail -3 /etc/passwd | awk -F &quot;:&quot; &#39;{print $1}&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">tcpdump</span></span>
<span class="line"><span style="color:#A6ACCD;">syslog</span></span>
<span class="line"><span style="color:#A6ACCD;">lighthouse</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>注意写法细节 <code>awk -F &quot;:&quot; + 空格 + &#39;{print $6}&#39;</code> 中间没有空格报错</p></div><h3 id="v-指定变量和默认值" tabindex="-1">-v <strong>指定变量和默认值</strong> <a class="header-anchor" href="#v-指定变量和默认值" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">seq 1 10 </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> count.txt </span><span style="color:#676E95;"># 生成一个1到10的文件,我想计算出文件内的总和</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">#给sum赋值为0，让sum与文件内的第一个字段相加，最后结果通过tail打印出来</span></span>
<span class="line"><span style="color:#A6ACCD;">awk -v </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">sum=0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">{sum+=$1;print sum}</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> count.txt </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> tail -1</span></span>
<span class="line"></span></code></pre></div><p>输出：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">[root@VM-16-2-centos ~]# cat count.txt </span></span>
<span class="line"><span style="color:#A6ACCD;">1</span></span>
<span class="line"><span style="color:#A6ACCD;">2</span></span>
<span class="line"><span style="color:#A6ACCD;">3</span></span>
<span class="line"><span style="color:#A6ACCD;">4</span></span>
<span class="line"><span style="color:#A6ACCD;">5</span></span>
<span class="line"><span style="color:#A6ACCD;">6</span></span>
<span class="line"><span style="color:#A6ACCD;">7</span></span>
<span class="line"><span style="color:#A6ACCD;">8</span></span>
<span class="line"><span style="color:#A6ACCD;">9</span></span>
<span class="line"><span style="color:#A6ACCD;">10</span></span>
<span class="line"><span style="color:#A6ACCD;">[root@VM-16-2-centos ~]# awk -v &quot;sum=0&quot; &#39;{sum+=$1;print sum}&#39; count.txt | tail -1</span></span>
<span class="line"><span style="color:#A6ACCD;">55</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>可以看到，上面的语句打印优点繁琐，优化的方式是使用优先级 <code>END</code> 下面会有讲：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">awk -v </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">sum=0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">{sum+=$1}END{print sum}</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> count.txt </span></span>
<span class="line"></span></code></pre></div><h3 id="nr-选行" tabindex="-1">NR 选行 <a class="header-anchor" href="#nr-选行" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># 打印/etc/passwd下的第3行，$0代表整行</span></span>
<span class="line"><span style="color:#A6ACCD;">awk </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">NR==3{print $0}</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> /etc/passwd </span></span>
<span class="line"></span></code></pre></div><p>输出：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">[root@VM-16-2-centos ~]# awk &#39;NR==3{print $0}&#39; /etc/passwd</span></span>
<span class="line"><span style="color:#A6ACCD;">daemon:x:2:2:daemon:/sbin:/sbin/nologin</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="nf-代表最后一个字段" tabindex="-1">$NF 代表最后一个字段 <a class="header-anchor" href="#nf-代表最后一个字段" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># 截取/etc/passwd文件下面的第4行，最后一个字段</span></span>
<span class="line"><span style="color:#A6ACCD;">awk -F </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">NR==4{print $NF}</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> /etc/passwd</span></span>
<span class="line"></span></code></pre></div><p>输出：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">[root@VM-16-2-centos ~]# head -5 /etc/passwd</span></span>
<span class="line"><span style="color:#A6ACCD;">root:x:0:0:root:/root:/bin/bash</span></span>
<span class="line"><span style="color:#A6ACCD;">bin:x:1:1:bin:/bin:/sbin/nologin</span></span>
<span class="line"><span style="color:#A6ACCD;">daemon:x:2:2:daemon:/sbin:/sbin/nologin</span></span>
<span class="line"><span style="color:#A6ACCD;">adm:x:3:4:adm:/var/adm:/sbin/nologin</span></span>
<span class="line"><span style="color:#A6ACCD;">lp:x:4:7:lp:/var/spool/lpd:/sbin/nologin</span></span>
<span class="line"><span style="color:#A6ACCD;">[root@VM-16-2-centos ~]# awk -F &quot;:&quot; &#39;NR==4{print $NF}&#39; /etc/passwd</span></span>
<span class="line"><span style="color:#A6ACCD;">/sbin/nologin</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="与" tabindex="-1">&amp;&amp; 与 <a class="header-anchor" href="#与" aria-hidden="true">#</a></h3><p><strong><code>条件 1 &amp;&amp; 条件 2</code>， 都要满足才为真，真返回 1，假返回 0</strong></p><h3 id="或" tabindex="-1">|| 或 <a class="header-anchor" href="#或" aria-hidden="true">#</a></h3><p><strong><code>条件 1 || 条件 2</code>，条件满足一边为真，真返回 1，假返回 0</strong></p><h3 id="fs-指定分隔符" tabindex="-1">FS 指定分隔符 <a class="header-anchor" href="#fs-指定分隔符" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># 没有优先级写法</span></span>
<span class="line"><span style="color:#A6ACCD;">awk </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">{FS=&quot;:&quot;} NR==3{print $1, $2}</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> text.txt</span></span>
<span class="line"><span style="color:#676E95;"># 优先级写法</span></span>
<span class="line"><span style="color:#A6ACCD;">awk </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">BEGIN{FS=&quot;:&quot;} NR==3{print $1, $2}</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> text.txt</span></span>
<span class="line"></span></code></pre></div><p>输出：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">[root@VM-16-2-centos ~]# cat text.txt </span></span>
<span class="line"><span style="color:#A6ACCD;">1 2 3 4 5 6</span></span>
<span class="line"><span style="color:#A6ACCD;">a b c d e f</span></span>
<span class="line"><span style="color:#A6ACCD;">A:B:C:D:E:F</span></span>
<span class="line"><span style="color:#A6ACCD;">I love you</span></span>
<span class="line"><span style="color:#A6ACCD;">[root@VM-16-2-centos ~]# awk &#39;{FS=&quot;:&quot;} NR==3{print $1, $2}&#39; text.txt </span></span>
<span class="line"><span style="color:#A6ACCD;">A B</span></span>
<span class="line"><span style="color:#A6ACCD;">[root@VM-16-2-centos ~]# awk &#39;BEGIN{FS=&quot;:&quot;} NR==3{print $1, $2}&#39; text.txt </span></span>
<span class="line"><span style="color:#A6ACCD;">A B</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="ofs-一般与-fs-或者-f-共同使用" tabindex="-1">OFS 一般与 FS 或者 -F 共同使用 <a class="header-anchor" href="#ofs-一般与-fs-或者-f-共同使用" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">awk -F </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">NR==3{OFS=&quot;#&quot;;print $1, $2}</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> text.txt</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">awk </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">BEGIN{FS=&quot;:&quot;;OFS=&quot;#&quot;} NR==3{print $1, $2}</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> text.txt</span></span>
<span class="line"></span></code></pre></div><p>输出：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">[root@VM-16-2-centos ~]# cat text.txt </span></span>
<span class="line"><span style="color:#A6ACCD;">1 2 3 4 5 6</span></span>
<span class="line"><span style="color:#A6ACCD;">a b c d e f</span></span>
<span class="line"><span style="color:#A6ACCD;">A:B:C:D:E:F</span></span>
<span class="line"><span style="color:#A6ACCD;">I love you</span></span>
<span class="line"><span style="color:#A6ACCD;">[root@VM-16-2-centos ~]# awk -F &quot;:&quot; &#39;NR==3{OFS=&quot;#&quot;;print $1, $2}&#39; text.txt </span></span>
<span class="line"><span style="color:#A6ACCD;">A#B</span></span>
<span class="line"><span style="color:#A6ACCD;">[root@VM-16-2-centos ~]# awk &#39;BEGIN{FS=&quot;:&quot;;OFS=&quot;#&quot;} NR==3{print $1, $2}&#39; text.txt </span></span>
<span class="line"><span style="color:#A6ACCD;">A#B</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="awk-优先级" tabindex="-1">awk 优先级 <a class="header-anchor" href="#awk-优先级" aria-hidden="true">#</a></h3><ul><li>最高：BEGIN 是最高优先级，是在执行 PROGRAM 之前执行的，不需要提供数据源，因为不涉及任何数据，也不依赖 PROGRAM代 码块；</li><li>默认：PROGRAM 是对数据流干什么，是必选代码块，也是默认代码块。所以执行的时候必须要加上数据源； 默认优先级（不加优先级就是默认）</li><li>最低：END 是处理完数据流后，如果需要执行 END 代码块，就必须要 PROGAM 的支持，单个无法执行</li></ul><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p><strong>注意：如果只用最高或者最低优先级，后面跟上数据源（file）不会有效果，只有默认优先级PROGRAM才会有效果</strong></p></div><h2 id="awk-模糊匹配" tabindex="-1">awk 模糊匹配 <a class="header-anchor" href="#awk-模糊匹配" aria-hidden="true">#</a></h2><p>比如说我想看我的用户信息，我就记得用户是 <code>ro</code> 开头的，我不打开文件下，我们可以这么做</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># 注意“~”匹配查询，后面关键字要用引号引起来一定要双引号 </span></span>
<span class="line"><span style="color:#676E95;"># $1代表第一个字段，可以写成别字段比如第二字段就是$2...</span></span>
<span class="line"><span style="color:#A6ACCD;">awk -F </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">$1 ~ &quot;ro&quot;{print $0}</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> /etc/passwd  </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#676E95;"># 匹配多个写法</span></span>
<span class="line"><span style="color:#A6ACCD;">awk -F </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">$1 ~&quot;ny&quot;{print $0};$1 ~ &quot;roo&quot;{print $0}</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> /etc/passwd </span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># 模糊匹配，只要有ro就匹配上,用~表示包含</span></span>
<span class="line"><span style="color:#A6ACCD;">awk -F: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">$1~/ro/</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">  /etc/passwd   </span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># 第七列不包含nologin结尾的第一行和第七行</span></span>
<span class="line"><span style="color:#A6ACCD;">awk -F: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">$7!~/nologin$/{print $1,$7}</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> /etc/passwd</span></span>
<span class="line"></span></code></pre></div><p>输出：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">root:x:0:0:root:/root:/bin/bash</span></span>
<span class="line"><span style="color:#A6ACCD;">chrony:x:997:995::/var/lib/chrony:/sbin/nologin</span></span>
<span class="line"><span style="color:#A6ACCD;">-------------------------------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;">root:x:0:0:root:/root:/bin/bash</span></span>
<span class="line"><span style="color:#A6ACCD;">chrony:x:997:995::/var/lib/chrony:/sbin/nologin</span></span>
<span class="line"><span style="color:#A6ACCD;">-------------------------------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;">root:x:0:0:root:/root:/bin/bash</span></span>
<span class="line"><span style="color:#A6ACCD;">chrony:x:997:995::/var/lib/chrony:/sbin/nologin</span></span>
<span class="line"><span style="color:#A6ACCD;">-------------------------------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;">root /bin/bash</span></span>
<span class="line"><span style="color:#A6ACCD;">sync /bin/sync</span></span>
<span class="line"><span style="color:#A6ACCD;">shutdown /sbin/shutdown</span></span>
<span class="line"><span style="color:#A6ACCD;">halt /sbin/halt</span></span>
<span class="line"><span style="color:#A6ACCD;">syslog /bin/false</span></span>
<span class="line"><span style="color:#A6ACCD;">lighthouse /bin/bash</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="控制流" tabindex="-1">控制流 <a class="header-anchor" href="#控制流" aria-hidden="true">#</a></h2><h3 id="if-判断语句" tabindex="-1">if 判断语句 <a class="header-anchor" href="#if-判断语句" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">awk </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">{if($1&gt;5)print $1*$2;else print $1/$2}</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> test.txt</span></span>
<span class="line"></span></code></pre></div><p>输出：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">[root@VM-16-2-centos ~]# cat test.txt </span></span>
<span class="line"><span style="color:#A6ACCD;">1 10</span></span>
<span class="line"><span style="color:#A6ACCD;">2 9</span></span>
<span class="line"><span style="color:#A6ACCD;">3 8</span></span>
<span class="line"><span style="color:#A6ACCD;">4 7</span></span>
<span class="line"><span style="color:#A6ACCD;">5 6</span></span>
<span class="line"><span style="color:#A6ACCD;">6 5</span></span>
<span class="line"><span style="color:#A6ACCD;">7 4</span></span>
<span class="line"><span style="color:#A6ACCD;">8 3</span></span>
<span class="line"><span style="color:#A6ACCD;">9 2</span></span>
<span class="line"><span style="color:#A6ACCD;">10 1</span></span>
<span class="line"><span style="color:#A6ACCD;">[root@VM-16-2-centos ~]# awk &#39;{if($1&gt;5)print $1*$2;else print $1/$2}&#39; test.txt </span></span>
<span class="line"><span style="color:#A6ACCD;">0.1</span></span>
<span class="line"><span style="color:#A6ACCD;">0.222222</span></span>
<span class="line"><span style="color:#A6ACCD;">0.375</span></span>
<span class="line"><span style="color:#A6ACCD;">0.571429</span></span>
<span class="line"><span style="color:#A6ACCD;">0.833333</span></span>
<span class="line"><span style="color:#A6ACCD;">30</span></span>
<span class="line"><span style="color:#A6ACCD;">28</span></span>
<span class="line"><span style="color:#A6ACCD;">24</span></span>
<span class="line"><span style="color:#A6ACCD;">18</span></span>
<span class="line"><span style="color:#A6ACCD;">10</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="for-循环" tabindex="-1">for 循环 <a class="header-anchor" href="#for-循环" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">awk </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">NR==1{a=0;for(i=1;i&lt;11;i++){a+=i}print a}</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> count.txt</span></span>
<span class="line"></span></code></pre></div><p>输出：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">[root@VM-16-2-centos ~]# cat count.txt </span></span>
<span class="line"><span style="color:#A6ACCD;">1</span></span>
<span class="line"><span style="color:#A6ACCD;">2</span></span>
<span class="line"><span style="color:#A6ACCD;">3</span></span>
<span class="line"><span style="color:#A6ACCD;">4</span></span>
<span class="line"><span style="color:#A6ACCD;">5</span></span>
<span class="line"><span style="color:#A6ACCD;">6</span></span>
<span class="line"><span style="color:#A6ACCD;">7</span></span>
<span class="line"><span style="color:#A6ACCD;">8</span></span>
<span class="line"><span style="color:#A6ACCD;">9</span></span>
<span class="line"><span style="color:#A6ACCD;">10</span></span>
<span class="line"><span style="color:#A6ACCD;">[root@VM-16-2-centos ~]# awk &#39;NR==1{a=0;for(i=1;i&lt;11;i++){a+=i}print a}&#39; count.txt </span></span>
<span class="line"><span style="color:#A6ACCD;">55</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="while-循环" tabindex="-1">while 循环 <a class="header-anchor" href="#while-循环" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">awk </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">NR==1{a=0;while(a&lt;=5){a+=1}print a}</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> count.txt</span></span>
<span class="line"></span></code></pre></div><p>输出：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">[root@VM-16-2-centos ~]# cat count.txt </span></span>
<span class="line"><span style="color:#A6ACCD;">1</span></span>
<span class="line"><span style="color:#A6ACCD;">2</span></span>
<span class="line"><span style="color:#A6ACCD;">3</span></span>
<span class="line"><span style="color:#A6ACCD;">4</span></span>
<span class="line"><span style="color:#A6ACCD;">5</span></span>
<span class="line"><span style="color:#A6ACCD;">6</span></span>
<span class="line"><span style="color:#A6ACCD;">7</span></span>
<span class="line"><span style="color:#A6ACCD;">8</span></span>
<span class="line"><span style="color:#A6ACCD;">9</span></span>
<span class="line"><span style="color:#A6ACCD;">10</span></span>
<span class="line"><span style="color:#A6ACCD;">[root@VM-16-2-centos ~]# awk &#39;NR==1{a=0;while(a&lt;=5){a+=1}print a}&#39; count.txt</span></span>
<span class="line"><span style="color:#A6ACCD;">6</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="do-while-循环" tabindex="-1">do while 循环 <a class="header-anchor" href="#do-while-循环" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">awk </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">NR==1{a=0;do{a+=1}while(a&lt;=5);print a}</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> count.txt</span></span>
<span class="line"></span></code></pre></div><p>输出：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">[root@VM-16-2-centos ~]# awk &#39;NR==1{a=0;do{a+=1}while(a&lt;=5);print a}&#39; count.txt</span></span>
<span class="line"><span style="color:#A6ACCD;">6</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="控制语句" tabindex="-1">控制语句 <a class="header-anchor" href="#控制语句" aria-hidden="true">#</a></h3><ul><li><p><code>continue</code>：跳出“当前”循环</p></li><li><p><code>break</code>：跳出“整个”循环</p></li><li><p><code>exit</code>：退出 awk 命令</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p><strong>当 awk语句中有 “exit” 和 “END{commands} 语句块” 的时候，exit 并不是表示退出 awk 命令；而是表示直接执行 END{commands} 语句块中的内容！</strong></p></div></li><li><p><code>next</code>：跳过当前行</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p><strong>我们都知道 awk 是逐行处理文件，如果我们有一行内容不需要 awk 处理，那么我们就可以使用 “next” 来告诉 awk 哪一行内容不需要处理！</strong></p></div></li><li><p><code>nextfile</code>：跳过当前文件</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p><strong>nextfile 表示，在某条件的时候跳过，但是不再执行此文件，立马跳到下一个文件执行！但是下一个文件执行的话，使用的还是同一个条件！</strong></p></div></li></ul>`,72),e=[o];function t(c,i,r,C,d,A){return n(),a("div",null,e)}const h=s(p,[["render",t]]);export{D as __pageData,h as default};
