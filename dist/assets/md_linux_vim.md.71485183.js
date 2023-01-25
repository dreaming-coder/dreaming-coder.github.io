import{_ as l,o as e,c as i,a as d}from"./app.31a1046c.js";const m=JSON.parse('{"title":"Vim","description":"","frontmatter":{},"headers":[{"level":2,"title":"Vim 模式","slug":"vim-模式","link":"#vim-模式","children":[]},{"level":2,"title":"光标移动","slug":"光标移动","link":"#光标移动","children":[]},{"level":2,"title":"状态改变","slug":"状态改变","link":"#状态改变","children":[]},{"level":2,"title":"插入","slug":"插入","link":"#插入","children":[]},{"level":2,"title":"删除","slug":"删除","link":"#删除","children":[]},{"level":2,"title":"复制与剪切","slug":"复制与剪切","link":"#复制与剪切","children":[]},{"level":2,"title":"粘贴","slug":"粘贴","link":"#粘贴","children":[]},{"level":2,"title":"查找","slug":"查找","link":"#查找","children":[]},{"level":2,"title":"替换","slug":"替换","link":"#替换","children":[]},{"level":2,"title":"多窗口","slug":"多窗口","link":"#多窗口","children":[]}],"relativePath":"md/linux/vim.md","lastUpdated":null}'),a={name:"md/linux/vim.md"},n=d('<h1 id="vim" tabindex="-1">Vim <a class="header-anchor" href="#vim" aria-hidden="true">#</a></h1><h2 id="vim-模式" tabindex="-1">Vim 模式 <a class="header-anchor" href="#vim-模式" aria-hidden="true">#</a></h2><ul><li><p><strong>正常模式</strong></p><p>以 vim 打开一个文档就直接进入一般模式了（这是默认）的模式，你可以使用 <code>↑</code>、<code>↓</code>、<code>←</code>、<code>→</code> 按键来移动光标，你可以使用【删除字符】或【删除整行】命令来处理文档内容，也可以使用【复制】和【粘贴】命令来处理你的文件数据</p></li><li><p><strong>插入模式/编辑模式</strong></p><p>按下 <code>i</code>、<code>o</code>、<code>a</code> 进入编辑模式，一般来说输入i即可</p><p>在这个模式下，程序员可以输入内容</p><p>按 <code>ESC</code> 键退出到正常模式</p></li><li><p><strong>命令行模式</strong></p><p>在这个模式当中，可以执行相关指令，完成读取、存盘、替换、离开 vim、显示行号等动作</p><p>按 <code>ESC</code> 键退出到正常模式。</p></li></ul><h2 id="光标移动" tabindex="-1">光标移动 <a class="header-anchor" href="#光标移动" aria-hidden="true">#</a></h2><ul><li>上下左右</li><li>n + 上下左右：向该方向移动 n 行或 n 个字符</li></ul><hr><ul><li><b>0</b> 或 <b>Home</b>：光标移动到行首</li><li><b>$</b> 或 <b>End</b>：光标移动到行尾</li><li><b>G</b>：光标移动到文件最后一行</li><li>n + <b>G</b>：光标移动到第 n 行</li><li><b>g</b><b>g</b>：光标移动到文件首行</li></ul><hr><ul><li><b>Ctrl</b> + <b>F</b>：向下翻页</li><li><b>Ctrl</b> + <b>B</b>：向上翻页</li></ul><h2 id="状态改变" tabindex="-1">状态改变 <a class="header-anchor" href="#状态改变" aria-hidden="true">#</a></h2><ul><li>显示行号：<code>:set number</code></li><li>隐藏行号：<code>:set nonumber</code></li></ul><hr><ul><li>撤销：<b>u</b></li><li>重做：<b>Ctrl</b> + <b>r</b></li></ul><h2 id="插入" tabindex="-1">插入 <a class="header-anchor" href="#插入" aria-hidden="true">#</a></h2><ul><li><b>i</b>：在光标前插入</li><li><b>I</b>：在当前行的第一个非空字符前插入</li><li><b>o</b>：在光标下面新建一行输入</li><li><b>O</b>：在光标上面新建一行输入</li><li><b>a</b>：在光标后插入</li><li><b>A</b>：在当前行最后插入</li></ul><hr><ul><li><code>:r filename</code> 在当前光标的下一行插入另一个文件的内容</li><li><code>:[n]r filename</code> 在第 n+1 行插入另一个文件的内容</li></ul><h2 id="删除" tabindex="-1">删除 <a class="header-anchor" href="#删除" aria-hidden="true">#</a></h2><ul><li><p>[n] + <b>x</b>：向后删除 n 个字符</p></li><li><p>[n] + <b>X</b>：向前删除 n 个字符</p></li><li><p><b>d</b><b>d</b>：删除光标所在那一行</p></li><li><p>[n] + <b>d</b><b>d</b>：从光标所在那一行起，向下删除 n 行</p></li></ul><h2 id="复制与剪切" tabindex="-1">复制与剪切 <a class="header-anchor" href="#复制与剪切" aria-hidden="true">#</a></h2><ul><li><b>y</b><b>y</b>：复制光标所在这一行</li><li>n + <b>y</b><b>y</b>：从光标所在这一行开始向下复制 n 行</li></ul><hr><ul><li>[n] + <b>x</b>：向后剪切 n 个字符</li><li>[n] + <b>X</b>：向前剪切 n 个字符</li></ul><h2 id="粘贴" tabindex="-1">粘贴 <a class="header-anchor" href="#粘贴" aria-hidden="true">#</a></h2><ul><li><b>p</b>：在光标之后粘贴</li><li><b>P</b>：在光标之前粘贴</li></ul><h2 id="查找" tabindex="-1">查找 <a class="header-anchor" href="#查找" aria-hidden="true">#</a></h2><p><b>/</b> + 字符串：查找字符串并高亮显示，<b>n</b> 表示向上查找，<b>N</b> 表示向下查找，退出高亮显示使用 <code>:nohlsearch</code></p><h2 id="替换" tabindex="-1">替换 <a class="header-anchor" href="#替换" aria-hidden="true">#</a></h2><ul><li><code>:s/old/new</code>：用 new 替换行中首次出现的 old</li><li><code>:s/old/new/g</code>：用 new 替换行中所有的 old</li><li><code>:n,m s/old/new/g</code>：用 new 替换从 n 到 m 行里所有的 old</li><li><code>:%s/old/new/g</code>：用 new 替换当前文件里所有的 old</li></ul><h2 id="多窗口" tabindex="-1">多窗口 <a class="header-anchor" href="#多窗口" aria-hidden="true">#</a></h2><ul><li><p><code>:sp filename</code>：水平分屏打开新窗口，不给定文件名就是指当前文件再打开一个</p></li><li><p><code>:vsp filename</code>：垂直打开新窗口，不给定文件名就是指当前文件再打开一个</p></li><li><p><b>Ctrl</b> + <b>w</b><b>w</b>：切换窗口之间的光标</p></li></ul>',31),r=[n];function b(c,o,h,t,s,u){return e(),i("div",null,r)}const _=l(a,[["render",b]]);export{m as __pageData,_ as default};
