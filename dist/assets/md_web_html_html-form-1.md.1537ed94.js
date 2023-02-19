import{_ as s,o as l,c as a,a as n}from"./app.a99c6d03.js";const o="/imgs/web/html/form/001.png",C=JSON.parse('{"title":"HTML - 基本表单元素","description":"","frontmatter":{},"headers":[{"level":2,"title":"制作基本表单","slug":"制作基本表单","link":"#制作基本表单","children":[]},{"level":2,"title":"配置表单","slug":"配置表单","link":"#配置表单","children":[{"level":3,"title":"配置表单的 action 属性","slug":"配置表单的-action-属性","link":"#配置表单的-action-属性","children":[]},{"level":3,"title":"配置 HTTP 方法属性","slug":"配置-http-方法属性","link":"#配置-http-方法属性","children":[]},{"level":3,"title":"配置数据编码","slug":"配置数据编码","link":"#配置数据编码","children":[]},{"level":3,"title":"控制表单的自动填充","slug":"控制表单的自动填充","link":"#控制表单的自动填充","children":[]},{"level":3,"title":"指定表单反馈信息的目标显示位置","slug":"指定表单反馈信息的目标显示位置","link":"#指定表单反馈信息的目标显示位置","children":[]},{"level":3,"title":"设置表单名称","slug":"设置表单名称","link":"#设置表单名称","children":[]}]},{"level":2,"title":"在表单中添加说明标签","slug":"在表单中添加说明标签","link":"#在表单中添加说明标签","children":[]},{"level":2,"title":"自动聚焦到某个 input 元素","slug":"自动聚焦到某个-input-元素","link":"#自动聚焦到某个-input-元素","children":[]},{"level":2,"title":"禁用单个 input 元素","slug":"禁用单个-input-元素","link":"#禁用单个-input-元素","children":[]},{"level":2,"title":"对表单元素编组","slug":"对表单元素编组","link":"#对表单元素编组","children":[]},{"level":2,"title":"使用 button 元素","slug":"使用-button-元素","link":"#使用-button-元素","children":[{"level":3,"title":"用 button元素提交表单","slug":"用-button元素提交表单","link":"#用-button元素提交表单","children":[]},{"level":3,"title":"用 button 元素重置表单","slug":"用-button-元素重置表单","link":"#用-button-元素重置表单","children":[]},{"level":3,"title":"把 button 作为一般元素使用","slug":"把-button-作为一般元素使用","link":"#把-button-作为一般元素使用","children":[]}]},{"level":2,"title":"使用表单外的元素","slug":"使用表单外的元素","link":"#使用表单外的元素","children":[]}],"relativePath":"md/web/html/html-form-1.md","lastUpdated":1673146973000}'),p={name:"md/web/html/html-form-1.md"},e=n(`<h1 id="html-基本表单元素" tabindex="-1">HTML - 基本表单元素 <a class="header-anchor" href="#html-基本表单元素" aria-hidden="true">#</a></h1><h2 id="制作基本表单" tabindex="-1">制作基本表单 <a class="header-anchor" href="#制作基本表单" aria-hidden="true">#</a></h2><div class="demo"><form><input type="text"><button>提交</button></form></div><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">form</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">text</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">提交</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">form</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><ul><li><p><code>form</code></p><p>告诉浏览器处理的是表单</p></li><li><p><code>input</code></p><p>输入标签，可以配置多种输入方式</p></li><li><p><code>button</code></p><p>按钮，可以设置单击的效果</p></li></ul><h2 id="配置表单" tabindex="-1">配置表单 <a class="header-anchor" href="#配置表单" aria-hidden="true">#</a></h2><h3 id="配置表单的-action-属性" tabindex="-1">配置表单的 action 属性 <a class="header-anchor" href="#配置表单的-action-属性" aria-hidden="true">#</a></h3><p><code>action</code> 属性说明了提交表单时浏览器应该把从用户收集的数据发送到什么地方。如果不设置 <code>form</code> 元素的 <code>action</code> 属性，那么浏览器会将表单数据发到用以加载该 HTML 文档的 URL。这看似毫无意义，其实不然，不少 Web 应用系统开发框架都依赖于这个特性。如果为 <code>action</code> 属性指定的是一个相对 URL，那么该值会被嫁接在当前页的 URL 的后面（如果指定了 <code>base</code> 元素，那么按照 <code>base</code> 指定的 URL 进行拼接）。</p><h3 id="配置-http-方法属性" tabindex="-1">配置 HTTP 方法属性 <a class="header-anchor" href="#配置-http-方法属性" aria-hidden="true">#</a></h3><p><code>method</code> 属性指定了用来将表单数据发送到服务器的 HTTP 方法。允许的值有 <code>get</code> 和 <code>post</code> 这两个，它们分别对应于 HTTP 的 GET 和 POST 方法。未设置 <code>method</code> 属性时使用的默认值为 <code>get</code>。</p><p>一般而言，GET 请求应该用于获取只读信息，而 POST 请求则应该用于会改变应用程序状态的各种操作。使用恰当的请求很重要。如果拿不准该用哪个，宁可谨慎一点，就用 POST 方法好了。</p><h3 id="配置数据编码" tabindex="-1">配置数据编码 <a class="header-anchor" href="#配置数据编码" aria-hidden="true">#</a></h3><p><code>enctype</code> 属性指定了浏览器对发送给服务器的数据采用的编码方式。该属性可用的值有三个：</p><ul><li><p><strong><code>application/x-www-form-urlencoded</code></strong></p><p>这是未设置 <code>enctype</code> 属性时使用的默认编码方式，它不能用来将文件上传到服务器，每项数据的名称和值都与 URL 采用同样的编码方案。</p></li><li><p><strong><code>multipart/form-data</code></strong></p><p>该编码方式用于将文件上传到服务器</p></li><li><p><strong><code>text/plain</code></strong></p><p>该编码方式因浏览器而异，慎用</p></li></ul><h3 id="控制表单的自动填充" tabindex="-1">控制表单的自动填充 <a class="header-anchor" href="#控制表单的自动填充" aria-hidden="true">#</a></h3><p>自动填充是通过 <code>autocomplete</code> 属性来完成的，他有两种属性值：<code>on</code> 和 <code>off</code>，如果不设置这个属性，默认值为 <code>on</code>。<code>form</code> 和 <code>input</code> 都有这个属性，区别只在于作用域不同。</p><h3 id="指定表单反馈信息的目标显示位置" tabindex="-1">指定表单反馈信息的目标显示位置 <a class="header-anchor" href="#指定表单反馈信息的目标显示位置" aria-hidden="true">#</a></h3><p>默认情况下浏览器会用提交表单后服务器反馈的信息替换表单所在的原页面。这可以用 <code>form</code> 元素的 <code>target</code> 属性予以改变。该属性的工作机制与 <code>a</code> 元素的 <code>target</code> 属性一样。</p><h3 id="设置表单名称" tabindex="-1">设置表单名称 <a class="header-anchor" href="#设置表单名称" aria-hidden="true">#</a></h3><p><code>name</code> 属性可以用来为表单设置一个独一无二的标识符，以便使用 DOM ( Document Object Model，文档对象模型)时区分各个表单。<code>name</code> 属 性与全局属性 <code>id</code> 不是一回事。后者在 HTML 文档中多半用于 CSS 选择器。</p><blockquote><p>提交表单时其 <code>name</code> 属性值不会被发送给服务器，所以该属性的用处仅限于 DOM 中,不像 <code>input</code> 元素的同名属性那么重要。要是 <code>input</code> 元素不设置 <code>name</code> 属性，那么用户在其中输入的数据在提交表单时不会被发送给服务器。</p></blockquote><h2 id="在表单中添加说明标签" tabindex="-1">在表单中添加说明标签 <a class="header-anchor" href="#在表单中添加说明标签" aria-hidden="true">#</a></h2><div class="demo"><form><p><label for="name">姓名：<input id="name" type="text"></label></p><p><label for="age">年龄：<input id="age" type="text"></label></p></form></div><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">form</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;&lt;</span><span style="color:#F07178;">label</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">for</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">姓名：</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">text</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">label</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;&lt;</span><span style="color:#F07178;">label</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">for</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">age</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">年龄：</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">age</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">text</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">label</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">form</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>此例为每个 <code>input</code> 元素都配了一个 <code>label</code> 元素。注意，例中为 <code>input</code> 元素设置了 <code>id</code> 属性，并将相关 <code>label</code> 元素的 <code>for</code> 属性设置为这个 <code>id</code> 值。这样做即可将 <code>input</code> 元素和 <code>label</code> 元素关联起来。</p><blockquote><p>此例在表单中添加了一些<code>p</code>元素，以便简单地设置一下表单的布局。</p></blockquote><h2 id="自动聚焦到某个-input-元素" tabindex="-1">自动聚焦到某个 input 元素 <a class="header-anchor" href="#自动聚焦到某个-input-元素" aria-hidden="true">#</a></h2><p>设计者可以让表单显示出来的时候即聚焦于某个 <code>input</code>元 素，这样用户就能直接在其中输人数据而不必先动手选择它。<code>autofocus</code> 属性的用途 就是指定这种元素。</p><div class="demo"><form><p><label for="name">姓名：<input id="name" type="text" autofocus></label></p></form></div><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">form</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">label</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">for</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            姓名：</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">text</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">autofocus</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">label</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">form</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><blockquote><p><code>autofocus</code>属性只能用在一个<code>input</code>元素上。要是有几个元素都设置了这个属性，那么浏览器将会自动聚焦于其中的最后一个元素。</p></blockquote><h2 id="禁用单个-input-元素" tabindex="-1">禁用单个 input 元素 <a class="header-anchor" href="#禁用单个-input-元素" aria-hidden="true">#</a></h2><div class="demo"><form><p><label for="name">姓名：<input id="name" type="text" disabled></label></p><p><label for="age">年龄：<input id="age" type="text" disabled></label></p></form></div><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">form</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;&lt;</span><span style="color:#F07178;">label</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">for</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">姓名：</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">text</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">disabled</span><span style="color:#89DDFF;"> /&gt;&lt;/</span><span style="color:#F07178;">label</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;&lt;</span><span style="color:#F07178;">label</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">for</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">age</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">年龄：</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">age</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">text</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">disabled</span><span style="color:#89DDFF;"> /&gt;&lt;/</span><span style="color:#F07178;">label</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">form</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="对表单元素编组" tabindex="-1">对表单元素编组 <a class="header-anchor" href="#对表单元素编组" aria-hidden="true">#</a></h2><div class="demo"><form><fieldset><legend>学生</legend><p><label for="name1">姓名1：<input id="name1" type="text" disabled></label></p><p><label for="age1">年龄1：<input id="age1" type="text" disabled></label></p><p><br></p></fieldset><br><fieldset disabled><legend>老师</legend><p><label for="name2">姓名2：<input id="name2" type="text" disabled></label></p><p><label for="age2">年龄2：<input id="age2" type="text" disabled></label></p><p><br></p></fieldset></form></div><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">form</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">fieldset</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">legend</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">学生</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">legend</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">label</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">for</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">name1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                姓名1：</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">name1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">text</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">disabled</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">label</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    	</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">label</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">for</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">age1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                年龄1：</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">age1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">text</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">disabled</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">label</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">fieldset</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">br</span><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">fieldset</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">disabled</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">legend</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">老师</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">legend</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">label</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">for</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">name2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                姓名2：</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">name2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">text</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">disabled</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">label</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    	</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">label</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">for</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">age2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                年龄2：</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">age2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">text</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">disabled</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">label</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">fieldset</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">form</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="使用-button-元素" tabindex="-1">使用 button 元素 <a class="header-anchor" href="#使用-button-元素" aria-hidden="true">#</a></h2><p><code>button</code> 元素其实比它的外表给人的感觉更灵活。该元素有三种用法，这些不同的操作模式通过具有三种值的 <code>type</code> 属性设定。</p><ul><li><p><code>submit</code></p><p>表示按钮的用途是提交表单</p></li><li><p><code>reset</code></p><p>表示按钮的用途是重置表单</p></li><li><p><code>button</code></p><p>表示按钮没有具体语义</p></li></ul><h3 id="用-button元素提交表单" tabindex="-1">用 button元素提交表单 <a class="header-anchor" href="#用-button元素提交表单" aria-hidden="true">#</a></h3><p>如果将 <code>button</code> 元素的 <code>type</code> 属性设置为 <code>submit</code>，那么按下该按钮会提交包含它的表单，这是未设置 <code>type</code> 属性的 <code>button </code>元素的默认行为。采用这种方法使用该元素时，它还有额外的一些属性可用。</p><p><img src="`+o+'" alt=""></p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>这些属性主要是用来覆盖或补充 <code>form</code> 元素上的设置，指定表单提交的 URL、使用的 HTTP 方法、编码方式、表单反馈信息的显示地点，以及控制客户端数据检查。它们是 HTML 5 中新增的属性。</p></div><h3 id="用-button-元素重置表单" tabindex="-1">用 button 元素重置表单 <a class="header-anchor" href="#用-button-元素重置表单" aria-hidden="true">#</a></h3><p>如果将 <code>button</code> 元素的 <code>type</code> 属性设置为 <code>reset</code>，那么按下按钮会将表单中所有 <code>input</code> 元素重置为初始状态。这样使用该元素时，没有额外的属性可用。</p><h3 id="把-button-作为一般元素使用" tabindex="-1">把 button 作为一般元素使用 <a class="header-anchor" href="#把-button-作为一般元素使用" aria-hidden="true">#</a></h3><p>如果将 <code>button</code> 元素的 <code>type</code> 属性设置为 <code>button</code>，那么该 <code>button</code> 元素就仅仅是一个按钮。 它没有特别的含义，在按下时也不会做任何事情。</p><h2 id="使用表单外的元素" tabindex="-1">使用表单外的元素 <a class="header-anchor" href="#使用表单外的元素" aria-hidden="true">#</a></h2><p>在 HTML 4 中，<code>input</code>、 <code>button</code> 和其他与表单相关的元素必须放在 <code>form</code> 元素中。在 HTML 5 中，这条限制不复存在，现在可以将这类元素与文档中任何地方的表单挂钩。<code>input</code>、<code>button</code> 元素以及其他与表单相关的元素都定义了一一个 <code>form</code> 属性，该属性正是用于这个目的。要将某个这类元素与并非其祖先元素的 <code>form</code> 元素挂钩，只需将其 <code>form</code> 属性设置为相关 <code>form</code> 元素的 <code>id</code> 属性值即可。</p>',50),t=[e];function c(r,D,F,y,d,i){return l(),a("div",null,t)}const h=s(p,[["render",c]]);export{C as __pageData,h as default};