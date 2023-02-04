import{_ as s,o as n,c as a,a as l}from"./app.f804f2e6.js";const D=JSON.parse('{"title":"grep","description":"","frontmatter":{},"headers":[{"level":2,"title":"基本介绍","slug":"基本介绍","link":"#基本介绍","children":[]},{"level":2,"title":"正则表达式示例","slug":"正则表达式示例","link":"#正则表达式示例","children":[]},{"level":2,"title":"扩展正则表达式示例","slug":"扩展正则表达式示例","link":"#扩展正则表达式示例","children":[]}],"relativePath":"md/linux/grep.md","lastUpdated":null}'),p={name:"md/linux/grep.md"},o=l(`<h1 id="grep" tabindex="-1">grep <a class="header-anchor" href="#grep" aria-hidden="true">#</a></h1><h2 id="基本介绍" tabindex="-1">基本介绍 <a class="header-anchor" href="#基本介绍" aria-hidden="true">#</a></h2><p>全拼：Global search REgular expression and Print out the line.</p><p>作用：<strong>文本搜索工具，根据用户指定的“模式（过滤条件)”对目标文本逐行进行匹配检查，打印匹配到的行</strong></p><p><strong>模式：由正则表达式的元字符及文本字符所编写出的过滤条件</strong></p><p>语法：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">grep  </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">options</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">pattern</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">      file</span></span>
<span class="line"><span style="color:#A6ACCD;">命令     参数      匹配模式       文件数据</span></span>
<span class="line"></span></code></pre></div><p>参数选项：</p><ul><li><code>-V</code>：排除匹配结果</li><li><code>-n</code>：显示匹配行与行号</li><li><code>-i</code>：不区分大小写</li><li><code>-c</code>：只统计匹配的行数</li><li><code>-E</code>：使用 egrep 命令</li><li><code>--color=auto</code>：为 grep 过滤的结果添加颜色</li><li><code>-w</code>：只匹配过滤的单词</li><li><code>-o</code>：只输出匹配的内容</li></ul><h2 id="正则表达式示例" tabindex="-1">正则表达式示例 <a class="header-anchor" href="#正则表达式示例" aria-hidden="true">#</a></h2><p>测试文件内容：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@VM-16-2-centos </span><span style="color:#89DDFF;">~]</span><span style="color:#676E95;"># cat -n test.txt </span></span>
<span class="line"><span style="color:#A6ACCD;">     1  I am a teacher</span></span>
<span class="line"><span style="color:#A6ACCD;">     2  I am a student</span></span>
<span class="line"><span style="color:#A6ACCD;">     3  I like Linux</span></span>
<span class="line"><span style="color:#A6ACCD;">     4  I like Java</span></span>
<span class="line"><span style="color:#A6ACCD;">     5  Hello World</span></span>
<span class="line"><span style="color:#A6ACCD;">     6  世界，你好！</span></span>
<span class="line"><span style="color:#A6ACCD;">     7</span></span>
<span class="line"><span style="color:#A6ACCD;">     8  7417417474741</span></span>
<span class="line"><span style="color:#A6ACCD;">     9  138138</span></span>
<span class="line"><span style="color:#A6ACCD;">    10  orange</span></span>
<span class="line"><span style="color:#A6ACCD;">    11  apple.</span></span>
<span class="line"><span style="color:#A6ACCD;">    12  banana.</span></span>
<span class="line"><span style="color:#A6ACCD;">    13</span></span>
<span class="line"><span style="color:#A6ACCD;">    14  </span><span style="color:#676E95;">#comment</span></span>
<span class="line"><span style="color:#A6ACCD;">    15  </span><span style="color:#676E95;">#crash</span></span>
<span class="line"><span style="color:#A6ACCD;">    16</span></span>
<span class="line"></span></code></pre></div><ul><li><strong>输出以 <code>I</code> 开头的行（不区分大小写）</strong></li></ul><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@VM-16-2-centos </span><span style="color:#89DDFF;">~]</span><span style="color:#676E95;"># grep -i -n &quot;^i&quot; test.txt </span></span>
<span class="line"><span style="color:#A6ACCD;">1:I am a teacher</span></span>
<span class="line"><span style="color:#A6ACCD;">2:I am a student</span></span>
<span class="line"><span style="color:#A6ACCD;">3:I like Linux</span></span>
<span class="line"><span style="color:#A6ACCD;">4:I like Java</span></span>
<span class="line"></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>这里的 <code>-i</code> 代表不区分大小写， <code>-n</code> 代表显示匹配行和行号</p></div><ul><li><strong>输出以 <code>.</code> 结尾的行</strong></li></ul><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@VM-16-2-centos </span><span style="color:#89DDFF;">~]</span><span style="color:#676E95;"># grep -n &quot;\\.$&quot; test.txt </span></span>
<span class="line"><span style="color:#A6ACCD;">11:apple.</span></span>
<span class="line"><span style="color:#A6ACCD;">12:banana.</span></span>
<span class="line"></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><strong>因为 <code>.</code> 在这里有着特殊含义, 所以要用 <code>\\</code> 转义一下, 如果不加转义字符的话，<code>grep</code> 就会把它当做正则表达式来处理(<code>.</code> 代表的含义是匹配任意一个字符)</strong></p></div><ul><li><p><strong><code>$</code> 符号</strong></p><ul><li><p><strong>注意在 Linux 平台下, 所有文件的行尾都有一个 <code>$</code> 符</strong></p></li><li><p><strong>可以利用 <code>cat -A</code> 查看文件</strong></p></li></ul></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">[root@VM-16-2-centos ~]# cat -A test.txt </span></span>
<span class="line"><span style="color:#A6ACCD;">I am a teacher$</span></span>
<span class="line"><span style="color:#A6ACCD;">I am a student$</span></span>
<span class="line"><span style="color:#A6ACCD;">I like Linux$</span></span>
<span class="line"><span style="color:#A6ACCD;">I like Java$</span></span>
<span class="line"><span style="color:#A6ACCD;">Hello World$</span></span>
<span class="line"><span style="color:#A6ACCD;">M-dM-8M-^VM-gM-^UM-^LM-oM-&lt;M-^LM-dM-=M- M-eM-%M-=M-oM-&lt;M-^A$</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span></span>
<span class="line"><span style="color:#A6ACCD;">7417417474741$</span></span>
<span class="line"><span style="color:#A6ACCD;">138138$</span></span>
<span class="line"><span style="color:#A6ACCD;">orange$</span></span>
<span class="line"><span style="color:#A6ACCD;">apple.$</span></span>
<span class="line"><span style="color:#A6ACCD;">banana.$</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span></span>
<span class="line"><span style="color:#A6ACCD;">#comment$</span></span>
<span class="line"><span style="color:#A6ACCD;">#crash$</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li><strong><code>^$</code> (代表空行的意思)组合符</strong></li></ul><p>找出文件的空行, 以及行号</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@VM-16-2-centos </span><span style="color:#89DDFF;">~]</span><span style="color:#676E95;"># grep -n &quot;^$&quot; test.txt </span></span>
<span class="line"><span style="color:#A6ACCD;">7:</span></span>
<span class="line"><span style="color:#A6ACCD;">13:</span></span>
<span class="line"><span style="color:#A6ACCD;">16:</span></span>
<span class="line"></span></code></pre></div><ul><li><strong><code>.</code> 符号</strong>：<strong>表示任意一个字符，有且只有一个，不包含空行</strong></li></ul><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@VM-16-2-centos </span><span style="color:#89DDFF;">~]</span><span style="color:#676E95;"># grep -n &quot;.&quot; test.txt </span></span>
<span class="line"><span style="color:#A6ACCD;">1:I am a teacher</span></span>
<span class="line"><span style="color:#A6ACCD;">2:I am a student</span></span>
<span class="line"><span style="color:#A6ACCD;">3:I like Linux</span></span>
<span class="line"><span style="color:#A6ACCD;">4:I like Java</span></span>
<span class="line"><span style="color:#A6ACCD;">5:Hello World</span></span>
<span class="line"><span style="color:#A6ACCD;">6:世界，你好！</span></span>
<span class="line"><span style="color:#A6ACCD;">8:7417417474741</span></span>
<span class="line"><span style="color:#A6ACCD;">9:138138</span></span>
<span class="line"><span style="color:#A6ACCD;">10:orange</span></span>
<span class="line"><span style="color:#A6ACCD;">11:apple.</span></span>
<span class="line"><span style="color:#A6ACCD;">12:banana.</span></span>
<span class="line"><span style="color:#A6ACCD;">14:</span><span style="color:#676E95;">#comment</span></span>
<span class="line"><span style="color:#A6ACCD;">15:</span><span style="color:#676E95;">#crash</span></span>
<span class="line"></span></code></pre></div><ul><li><strong><code>*</code> 符号：表示找出前一个字符 0 次或一次以上</strong></li></ul><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@VM-16-2-centos </span><span style="color:#89DDFF;">~]</span><span style="color:#676E95;"># grep -n &quot;i*&quot; test.txt </span></span>
<span class="line"><span style="color:#A6ACCD;">1:I am a teacher</span></span>
<span class="line"><span style="color:#A6ACCD;">2:I am a student</span></span>
<span class="line"><span style="color:#A6ACCD;">3:I like Linux</span></span>
<span class="line"><span style="color:#A6ACCD;">4:I like Java</span></span>
<span class="line"><span style="color:#A6ACCD;">5:Hello World</span></span>
<span class="line"><span style="color:#A6ACCD;">6:世界，你好！</span></span>
<span class="line"><span style="color:#A6ACCD;">7:</span></span>
<span class="line"><span style="color:#A6ACCD;">8:7417417474741</span></span>
<span class="line"><span style="color:#A6ACCD;">9:138138</span></span>
<span class="line"><span style="color:#A6ACCD;">10:orange</span></span>
<span class="line"><span style="color:#A6ACCD;">11:apple.</span></span>
<span class="line"><span style="color:#A6ACCD;">12:banana.</span></span>
<span class="line"><span style="color:#A6ACCD;">13:</span></span>
<span class="line"><span style="color:#A6ACCD;">14:</span><span style="color:#676E95;">#comment</span></span>
<span class="line"><span style="color:#A6ACCD;">15:</span><span style="color:#676E95;">#crash</span></span>
<span class="line"><span style="color:#A6ACCD;">16:</span></span>
<span class="line"></span></code></pre></div><ul><li><strong><code>.*</code> 组合符</strong>：<strong>&quot;.*&quot;表示所有内容，包括空行</strong></li></ul><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@VM-16-2-centos </span><span style="color:#89DDFF;">~]</span><span style="color:#676E95;"># grep -n &quot;.*&quot; test.txt </span></span>
<span class="line"><span style="color:#A6ACCD;">1:I am a teacher</span></span>
<span class="line"><span style="color:#A6ACCD;">2:I am a student</span></span>
<span class="line"><span style="color:#A6ACCD;">3:I like Linux</span></span>
<span class="line"><span style="color:#A6ACCD;">4:I like Java</span></span>
<span class="line"><span style="color:#A6ACCD;">5:Hello World</span></span>
<span class="line"><span style="color:#A6ACCD;">6:世界，你好！</span></span>
<span class="line"><span style="color:#A6ACCD;">7:</span></span>
<span class="line"><span style="color:#A6ACCD;">8:7417417474741</span></span>
<span class="line"><span style="color:#A6ACCD;">9:138138</span></span>
<span class="line"><span style="color:#A6ACCD;">10:orange</span></span>
<span class="line"><span style="color:#A6ACCD;">11:apple.</span></span>
<span class="line"><span style="color:#A6ACCD;">12:banana.</span></span>
<span class="line"><span style="color:#A6ACCD;">13:</span></span>
<span class="line"><span style="color:#A6ACCD;">14:</span><span style="color:#676E95;">#comment</span></span>
<span class="line"><span style="color:#A6ACCD;">15:</span><span style="color:#676E95;">#crash</span></span>
<span class="line"><span style="color:#A6ACCD;">16:</span></span>
<span class="line"></span></code></pre></div><ul><li><strong><code>^</code> 符号：表示第一个字符之前的位置</strong></li></ul><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@VM-16-2-centos </span><span style="color:#89DDFF;">~]</span><span style="color:#676E95;"># grep -n &quot;^I&quot; test.txt </span></span>
<span class="line"><span style="color:#A6ACCD;">1:I am a teacher</span></span>
<span class="line"><span style="color:#A6ACCD;">2:I am a student</span></span>
<span class="line"><span style="color:#A6ACCD;">3:I like Linux</span></span>
<span class="line"><span style="color:#A6ACCD;">4:I like Java</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@VM-16-2-centos </span><span style="color:#89DDFF;">~]</span><span style="color:#676E95;"># grep -n &quot;^a&quot; test.txt </span></span>
<span class="line"><span style="color:#A6ACCD;">11:apple.</span></span>
<span class="line"></span></code></pre></div><ul><li><strong><code>[abc]</code> 中括号：表示匹配中括号内任意一个字符</strong></li></ul><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@VM-16-2-centos </span><span style="color:#89DDFF;">~]</span><span style="color:#676E95;"># grep -n &quot;[lo]&quot; test.txt </span></span>
<span class="line"><span style="color:#A6ACCD;">3:I like Linux</span></span>
<span class="line"><span style="color:#A6ACCD;">4:I like Java</span></span>
<span class="line"><span style="color:#A6ACCD;">5:Hello World</span></span>
<span class="line"><span style="color:#A6ACCD;">10:orange</span></span>
<span class="line"><span style="color:#A6ACCD;">11:apple.</span></span>
<span class="line"><span style="color:#A6ACCD;">14:</span><span style="color:#676E95;">#comment</span></span>
<span class="line"></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><strong>如果出现 <code>[^abc]</code> 这种样式的 pattern，则表示匹配的是中括号内字符以外的字符</strong></p></div><ul><li><strong>参数 <code>-o</code></strong>：<strong>可以只显示被匹配到的关键字，而不是将整行的内容都输出</strong></li></ul><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@VM-16-2-centos </span><span style="color:#89DDFF;">~]</span><span style="color:#676E95;"># grep -n -o &quot;[lo]&quot; test.txt </span></span>
<span class="line"><span style="color:#A6ACCD;">3:l</span></span>
<span class="line"><span style="color:#A6ACCD;">4:l</span></span>
<span class="line"><span style="color:#A6ACCD;">5:l</span></span>
<span class="line"><span style="color:#A6ACCD;">5:l</span></span>
<span class="line"><span style="color:#A6ACCD;">5:o</span></span>
<span class="line"><span style="color:#A6ACCD;">5:o</span></span>
<span class="line"><span style="color:#A6ACCD;">5:l</span></span>
<span class="line"><span style="color:#A6ACCD;">10:o</span></span>
<span class="line"><span style="color:#A6ACCD;">11:l</span></span>
<span class="line"><span style="color:#A6ACCD;">14:o</span></span>
<span class="line"></span></code></pre></div><ul><li><strong>参数 <code>-c</code>：统计匹配的行数</strong></li></ul><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@VM-16-2-centos </span><span style="color:#89DDFF;">~]</span><span style="color:#676E95;"># grep -n -c &quot;[lo]&quot; test.txt </span></span>
<span class="line"><span style="color:#A6ACCD;">6</span></span>
<span class="line"></span></code></pre></div><h2 id="扩展正则表达式示例" tabindex="-1">扩展正则表达式示例 <a class="header-anchor" href="#扩展正则表达式示例" aria-hidden="true">#</a></h2><ul><li><strong><code>+</code>：表示匹配前一个字符 1 次或多次,必须使用 <code>grep-E</code> 扩展正则</strong></li></ul><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@VM-16-2-centos </span><span style="color:#89DDFF;">~]</span><span style="color:#676E95;"># grep -E -n &quot;l+&quot; test.txt </span></span>
<span class="line"><span style="color:#A6ACCD;">3:I like Linux</span></span>
<span class="line"><span style="color:#A6ACCD;">4:I like Java</span></span>
<span class="line"><span style="color:#A6ACCD;">5:Hello World</span></span>
<span class="line"><span style="color:#A6ACCD;">11:apple.</span></span>
<span class="line"></span></code></pre></div><ul><li><strong><code>?</code>：类似 <code>+</code>，但是只匹配 0 次或 1 次</strong></li></ul><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@VM-16-2-centos </span><span style="color:#89DDFF;">~]</span><span style="color:#676E95;"># grep -E -n &quot;ll?&quot; test.txt </span></span>
<span class="line"><span style="color:#A6ACCD;">3:I like Linux</span></span>
<span class="line"><span style="color:#A6ACCD;">4:I like Java</span></span>
<span class="line"><span style="color:#A6ACCD;">5:Hello World</span></span>
<span class="line"><span style="color:#A6ACCD;">11:apple.</span></span>
<span class="line"></span></code></pre></div><ul><li><strong><code>|</code>：表示或者</strong></li></ul><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@VM-16-2-centos </span><span style="color:#89DDFF;">~]</span><span style="color:#676E95;"># grep -E -n &quot;st|an&quot; test.txt </span></span>
<span class="line"><span style="color:#A6ACCD;">2:I am a student</span></span>
<span class="line"><span style="color:#A6ACCD;">10:orange</span></span>
<span class="line"><span style="color:#A6ACCD;">12:banana.</span></span>
<span class="line"></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p><strong><code>|</code> 分隔的是两侧所有的，并不是 <code>t</code> 和 <code>a</code> 二选一！</strong></p></div><ul><li><strong><code>()</code>：看作一个整体</strong></li></ul><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@VM-16-2-centos </span><span style="color:#89DDFF;">~]</span><span style="color:#676E95;"># grep -E -n &quot;a(n|v)a&quot; test.txt </span></span>
<span class="line"><span style="color:#A6ACCD;">4:I like Java</span></span>
<span class="line"><span style="color:#A6ACCD;">12:banana.</span></span>
<span class="line"></span></code></pre></div><ul><li><strong><code>{m, n}</code>：匹配次数， <code>m</code> 次到 <code>n</code> 次，闭区间</strong></li><li><strong><code>{m,}</code>：至少出现 <code>m</code> 次</strong></li><li><strong><code>{,n}</code>：至多出现 <code>n</code> 次</strong></li></ul>`,49),e=[o];function c(t,r,i,C,A,y){return n(),a("div",null,e)}const u=s(p,[["render",c]]);export{D as __pageData,u as default};
