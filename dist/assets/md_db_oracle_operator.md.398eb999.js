import{_ as t,o as e,c as l,a}from"./app.838d8802.js";const x=JSON.parse('{"title":"运算符","description":"","frontmatter":{},"headers":[{"level":2,"title":"算数运算","slug":"算数运算","link":"#算数运算","children":[]},{"level":2,"title":"关系运算符","slug":"关系运算符","link":"#关系运算符","children":[]},{"level":2,"title":"集合运算","slug":"集合运算","link":"#集合运算","children":[]},{"level":2,"title":"特殊字符查询","slug":"特殊字符查询","link":"#特殊字符查询","children":[]}],"relativePath":"md/db/oracle/operator.md","lastUpdated":1672461842000}'),n={name:"md/db/oracle/operator.md"},r=a(`<h1 id="运算符" tabindex="-1">运算符 <a class="header-anchor" href="#运算符" aria-hidden="true">#</a></h1><h2 id="算数运算" tabindex="-1">算数运算 <a class="header-anchor" href="#算数运算" aria-hidden="true">#</a></h2><div class="language-sql line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;">、</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">、</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">、</span><span style="color:#89DDFF;">/</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="关系运算符" tabindex="-1">关系运算符 <a class="header-anchor" href="#关系运算符" aria-hidden="true">#</a></h2><table><thead><tr><th style="text-align:center;">运算符</th><th style="text-align:center;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">=</td><td style="text-align:center;">判断两个数据是否相等</td></tr><tr><td style="text-align:center;">!=、&lt;&gt;</td><td style="text-align:center;">判断两个数据是否不相等</td></tr><tr><td style="text-align:center;">&lt;、&lt;=</td><td style="text-align:center;">判断小于（等于）</td></tr><tr><td style="text-align:center;">&gt;、&gt;=</td><td style="text-align:center;">判断大于（等于）</td></tr><tr><td style="text-align:center;">between ... and ...</td><td style="text-align:center;">在两者之间（闭区间）</td></tr><tr><td style="text-align:center;">in (值1[, 值2, ...])</td><td style="text-align:center;">如果和给定数据中的任意一个数据相等，则返回true，否则false</td></tr><tr><td style="text-align:center;">distinct</td><td style="text-align:center;">去重重复数据</td></tr></tbody></table><h2 id="集合运算" tabindex="-1">集合运算 <a class="header-anchor" href="#集合运算" aria-hidden="true">#</a></h2><table><thead><tr><th style="text-align:center;">运算符</th><th style="text-align:center;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">intersect</td><td style="text-align:center;">交集</td></tr><tr><td style="text-align:center;">union</td><td style="text-align:center;">并集，去重</td></tr><tr><td style="text-align:center;">union all</td><td style="text-align:center;">并集，不去重</td></tr><tr><td style="text-align:center;">minus</td><td style="text-align:center;">差集</td></tr></tbody></table><h2 id="特殊字符查询" tabindex="-1">特殊字符查询 <a class="header-anchor" href="#特殊字符查询" aria-hidden="true">#</a></h2><ul><li>判空</li></ul><p><code>IS NULL</code>、<code>IS NOT NULL</code></p><ul><li>模糊匹配</li></ul><p><code>LIKE &#39;A%B_C&#39;</code></p><blockquote><p><code>%</code> 表示任意多个（包括零）任意字符，<code>_</code> 表示一个任意字符</p></blockquote>`,13),d=[r];function s(i,c,o,h,p,y){return e(),l("div",null,d)}const u=t(n,[["render",s]]);export{x as __pageData,u as default};