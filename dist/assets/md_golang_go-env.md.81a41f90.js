import{_ as e,o as a,c as t,a as n}from"./app.107630f2.js";const o="/imgs/golang/env/env-001.png",s="/imgs/golang/env/env-002.png",p="/imgs/golang/env/env-003.png",r="/imgs/golang/env/env-004.png",i="/imgs/golang/env/env-005.png",l="/imgs/golang/env/env-006.png",T=JSON.parse('{"title":"GoLang - 环境安装","description":"","frontmatter":{},"headers":[{"level":2,"title":"下载安装包","slug":"下载安装包","link":"#下载安装包","children":[]},{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":2,"title":"配置环境变量","slug":"配置环境变量","link":"#配置环境变量","children":[]}],"relativePath":"md/golang/go-env.md","lastUpdated":1674696835000}'),c={name:"md/golang/go-env.md"},g=n('<h1 id="golang-环境安装" tabindex="-1">GoLang - 环境安装 <a class="header-anchor" href="#golang-环境安装" aria-hidden="true">#</a></h1><p><strong>所有路径避免出现中文，有可能有莫名其妙的坑！</strong></p><h2 id="下载安装包" tabindex="-1">下载安装包 <a class="header-anchor" href="#下载安装包" aria-hidden="true">#</a></h2><p>下载地址：<a href="https://go.dev/dl/" target="_blank" rel="noreferrer">https://go.dev/dl/</a></p><p><img src="'+o+'" alt=""></p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-hidden="true">#</a></h2><p>双击安装程序，一路 【next】即可</p><p>安装完成后，打开 CMD 窗口，执行 <code>go version</code>，出现下图所示结果说明安装成功</p><p><img src="'+s+'" alt=""></p><h2 id="配置环境变量" tabindex="-1">配置环境变量 <a class="header-anchor" href="#配置环境变量" aria-hidden="true">#</a></h2><p>Go 需要一 个安装目录，还需要一个工作目录。即 GOROOT、和 GOPATH。</p><p><img src="'+p+'" alt=""></p><blockquote><p>这里就是之前安装 Go 的目录。</p></blockquote><p><img src="'+r+'" alt=""></p><blockquote><p>GOPATH 相当于 Java 开发中创建的 workspace，未来写的代码和下载的包都在其中。</p></blockquote><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>由于是二进制安装，会自动在系统变量创建好一个 GOPATH，需要自己修改或删除重新创建，避免代码被保存在不想放的位置。</p></div><p>在 GOPATH 目录下，我们还需要新建几个文件夹：</p><p><img src="'+i+'" alt=""></p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>特别地，如果不是使用二进制文件安装，则需要自行配置 Go 的 bin 文件夹的地址到 path 环境变量中。</p></div><p>最后，我们可以在 CMD 窗口中输入 <code>go env</code> 查看环境变量：</p><p><img src="'+l+'" alt=""></p>',21),d=[g];function _(h,m,v,u,k,b){return a(),t("div",null,d)}const G=e(c,[["render",_]]);export{T as __pageData,G as default};
