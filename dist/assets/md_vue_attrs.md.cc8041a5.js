import{_ as s,o as t,c as a,a as l}from"./app.a99c6d03.js";const u=JSON.parse('{"title":"透传 Attributes","description":"","frontmatter":{"outline":2},"headers":[{"level":2,"title":"Attributes 继承","slug":"attributes-继承","link":"#attributes-继承","children":[{"level":3,"title":"对 class 和 style 的合并","slug":"对-class-和-style-的合并","link":"#对-class-和-style-的合并","children":[]},{"level":3,"title":"v-on 监听器继承","slug":"v-on-监听器继承","link":"#v-on-监听器继承","children":[]},{"level":3,"title":"深层组件继承","slug":"深层组件继承","link":"#深层组件继承","children":[]}]}],"relativePath":"md/vue/attrs.md","lastUpdated":1672651853000}'),e={name:"md/vue/attrs.md"},o=l(`<h1 id="透传-attributes" tabindex="-1">透传 Attributes <a class="header-anchor" href="#透传-attributes" aria-hidden="true">#</a></h1><h2 id="attributes-继承" tabindex="-1">Attributes 继承 <a class="header-anchor" href="#attributes-继承" aria-hidden="true">#</a></h2><p>“透传 attribute”指的是传递给一个组件，却没有被该组件声明为 props 或 emits 的 attribute 或者 <code>v-on</code> 事件监听器。最常见的例子就是 <code>class</code>、<code>style</code> 和 <code>id</code>。</p><p>当一个组件以单个元素为根作渲染时，透传的 attribute 会自动被添加到根元素上。举例来说，假如我们有一个 <code>&lt;MyButton&gt;</code> 组件，它的模板长这样：</p><div class="language-template"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">&lt;!-- &lt;MyButton&gt; 的模板 --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">click me</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>一个父组件使用了这个组件，并且传入了 <code>class</code>：</p><div class="language-template"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">MyButton</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">large</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"></span></code></pre></div><p>最后渲染出的 DOM 结果是：</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">large</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">click me</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>这里，<code>&lt;MyButton&gt;</code> 并没有将 <code>class</code> 声明为一个它所接受的 prop，所以 <code>class</code> 被视作透传 attribute，自动透传到了 <code>&lt;MyButton&gt;</code> 的根元素上。</p><h3 id="对-class-和-style-的合并" tabindex="-1">对 <code>class</code> 和 <code>style</code> 的合并 <a class="header-anchor" href="#对-class-和-style-的合并" aria-hidden="true">#</a></h3><p>如果一个子组件的根元素已经有了 <code>class</code> 或 <code>style</code> attribute，它会和从父组件上继承的值合并。如果我们将之前的 <code>&lt;MyButton&gt;</code> 组件的模板改成这样：</p><div class="language-template"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">&lt;!-- &lt;MyButton&gt; 的模板 --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">btn</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">click me</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>则最后渲染出的 DOM 结果会变成：</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">btn large</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">click me</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h3 id="v-on-监听器继承" tabindex="-1"><code>v-on</code> 监听器继承 <a class="header-anchor" href="#v-on-监听器继承" aria-hidden="true">#</a></h3><p>同样的规则也适用于 <code>v-on</code> 事件监听器：</p><div class="language-template"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">MyButton</span><span style="color:#89DDFF;"> @</span><span style="color:#C792EA;">click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">onClick</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"></span></code></pre></div><p><code>click</code> 监听器会被添加到 <code>&lt;MyButton&gt;</code> 的根元素，即那个原生的 <code>&lt;button&gt;</code> 元素之上。当原生的 <code>&lt;button&gt;</code> 被点击，会触发父组件的 <code>onClick</code> 方法。同样的，如果原生 <code>button</code> 元素自身也通过 <code>v-on</code> 绑定了一个事件监听器，则这个监听器和从父组件继承的监听器都会被触发。</p><h3 id="深层组件继承" tabindex="-1">深层组件继承 <a class="header-anchor" href="#深层组件继承" aria-hidden="true">#</a></h3><p>有些情况下一个组件会在根节点上渲染另一个组件。例如，我们重构一下 <code>&lt;MyButton&gt;</code>，让它在根节点上渲染 <code>&lt;BaseButton&gt;</code>：</p><div class="language-template"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">&lt;!-- &lt;MyButton/&gt; 的模板，只是渲染另一个组件 --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">BaseButton</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"></span></code></pre></div><p>此时 <code>&lt;MyButton&gt;</code> 接收的透传 attribute 会直接继续传给 <code>&lt;BaseButton&gt;</code>。</p><p>请注意：</p><ol><li>透传的 attribute 不会包含 <code>&lt;MyButton&gt;</code> 上声明过的 props 或是针对 <code>emits</code> 声明事件的 <code>v-on</code> 侦听函数，换句话说，声明过的 props 和侦听函数被 <code>&lt;MyButton&gt;</code>“消费”了。</li><li>透传的 attribute 若符合声明，也可以作为 props 传入 <code>&lt;BaseButton&gt;</code>。</li></ol>`,25),n=[o];function p(c,r,d,i,y,F){return t(),a("div",null,n)}const g=s(e,[["render",p]]);export{u as __pageData,g as default};