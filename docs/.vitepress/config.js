// noinspection JSUnusedGlobalSymbols

export default {
    title: "ice's blog",
    description: '我与春风皆过客，你携秋水揽星河',
    lastUpdated: true,
    cleanUrls: 'without-subfolders',
    markdown: {
        // lineNumbers: true
    },
    outDir: '../dist',
    themeConfig: {
        siteTitle: "ice's blog",
        logo: '/icon.png',
        outline: [2, 3],
        outlineTitle: '目 录',
        socialLinks: [
            {icon: 'github', link: 'https://github.com/dreaming-coder'}
        ],
        docFooter: {
            prev: '上一页',
            next: '下一页'
        },
        footer: {
            copyright: 'Copyright © 2022-2023 ice'
        },
        nav: nav(),
        sidebar: sidebar()
    }
}

function nav() {
    return [
        {
            text: 'GoLang',
            link: '/md/golang/go-env'
        },
        {
            text: '前端',
            items: [
                {
                    text: 'HTML',
                    link: '/md/web/html/html-structure'
                },
                {
                    text: 'CSS',
                    link: '/md/web/css/css-foundation'
                },
                {
                    text: 'JavaScript',
                    link: '/md/web/js/js-foundation'
                },
                {
                    text: 'Vue.js',
                    link: '/md/vue/guide'
                },
            ]
        },
        {
            text: '数据库',
            items: [
                {
                    text: 'Oracle',
                    link: '/md/db/oracle/type'
                },
            ]
        },
        {
            text: 'DevOps',
            items: [
                {
                    text: 'Linux',
                    link: '/md/linux/linux-start'
                },
            ]
        },
        {
            text: '计算机基础',
            items: [
                {
                    text: '计算机网络',
                    link: '/md/foundation/network/ipv4'
                }
            ]
        }
    ];
}

function sidebar() {
    return {
        '/md/golang/': [
            {
                text: 'GoLang',
                collapsible: true,
                items: [
                    {
                        text: '开发环境安装',
                        link: '/md/golang/go-env'
                    },
                    {
                        text: '开发工具',
                        link: '/md/golang/go-ide'
                    },
                    {
                        text: 'Hello World',
                        link: '/md/golang/go-helloworld'
                    },
                    {
                        text: '基本语法',
                        link: '/md/golang/go-syntax'
                    },
                    {
                        text: '控制结构',
                        link: '/md/golang/go-control'
                    },
                    {
                        text: '函数',
                        link: '/md/golang/go-function'
                    },
                    {
                        text: '数组',
                        link: '/md/golang/go-array'
                    },
                    {
                        text: 'Slice',
                        link: '/md/golang/go-slice'
                    },
                    {
                        text: 'Map',
                        link: '/md/golang/go-map'
                    },
                    {
                        text: '代码结构化',
                        link: '/md/golang/go-structure'
                    },
                    {
                        text: '结构体',
                        link: '/md/golang/go-struct'
                    },
                    {
                        text: '方法',
                        link: '/md/golang/go-method'
                    },
                    {
                        text: '接口',
                        link: '/md/golang/go-interface'
                    },
                    {
                        text: '面向对象',
                        link: '/md/golang/go-oop'
                    },
                    {
                        text: '协程与通道',
                        link: '/md/golang/go-routine-channel'
                    },
                    {
                        text: '错误处理',
                        link: '/md/golang/go-error'
                    },
                    {
                        text: '测试',
                        link: '/md/golang/go-test'
                    },
                    {
                        text: '反射',
                        link: '/md/golang/go-reflect'
                    },
                ]
            },
            {
                text: '标准库',
                collapsible: true,
                items: [

                ]
            },
        ],
        '/md/linux/': [
            {
                text: 'Linux',
                collapsible: true,
                items: [
                    {
                        text: 'Linux 基础',
                        link: '/md/linux/linux-start'
                    },
                    {
                        text: '防火墙与端口',
                        link: '/md/linux/firewall'
                    },
                    {
                        text: 'Vim',
                        link: '/md/linux/vim'
                    },
                    {
                        text: 'Shell',
                        link: '/md/linux/shell'
                    },
                    {
                        text: 'grep',
                        link: '/md/linux/grep'
                    },
                    {
                        text: 'awk',
                        link: '/md/linux/awk'
                    },
                ]
            }
        ],
        '/md/web/html/': [
            {
                text: 'HTML',
                collapsible: true,
                items: [
                    {
                        text: '文档结构',
                        link: '/md/web/html/html-structure'
                    },
                    {
                        text: '文本标签',
                        link: '/md/web/html/html-text'
                    },
                    {
                        text: '文档分节',
                        link: '/md/web/html/html-separation'
                    },
                    {
                        text: '内容组织',
                        link: '/md/web/html/html-organization'
                    },
                    {
                        text: '表格',
                        link: '/md/web/html/html-table'
                    },
                    {
                        text: '基本表单元素',
                        link: '/md/web/html/html-form-1'
                    },
                    {
                        text: '定制input元素',
                        link: '/md/web/html/html-form-2'
                    },
                    {
                        text: '其他表单内容',
                        link: '/md/web/html/html-form-3'
                    },
                    {
                        text: '嵌入内容',
                        link: '/md/web/html/html-embed'
                    }
                ]
            }
        ],
        '/md/web/css/': [
            {
                text: 'CSS',
                collapsible: true,
                items: [
                    {
                        text: '选择器',
                        link: '/md/web/css/css-foundation'
                    },
                    {
                        text: '盒子模型',
                        link: '/md/web/css/css-box'
                    },
                    {
                        text: '文本设置',
                        link: '/md/web/css/css-text'
                    },
                    {
                        text: '过渡、动画和变换',
                        link: '/md/web/css/css-dynamic'
                    },
                    {
                        text: '其他常用特性',
                        link: '/md/web/css/css-others'
                    },
                    {
                        text: 'Flex 布局',
                        link: '/md/web/css/css-flex'
                    },
                    {
                        text: 'Grid 布局',
                        link: '/md/web/css/css-grid'
                    },
                ]
            }
        ],
        '/md/web/js/': [
            {
                text: 'JavaScript',
                collapsible: true,
                items: [
                    {
                        text: '基本概念',
                        link: '/md/web/js/js-foundation'
                    },
                    {
                        text: '数组',
                        link: '/md/web/js/js-array'
                    },
                    {
                        text: '字符串',
                        link: '/md/web/js/js-string'
                    },
                    {
                        text: '日期时间',
                        link: '/md/web/js/js-date'
                    },
                    {
                        text: '运算符扩展',
                        link: '/md/web/js/js-operator'
                    },
                    {
                        text: '变量的解构赋值',
                        link: '/md/web/js/js-destructuring'
                    },
                    {
                        text: '函数',
                        link: '/md/web/js/js-function'
                    },
                    {
                        text: '面向对象',
                        link: '/md/web/js/js-oop'
                    },
                    {
                        text: 'DOM、BOM与事件',
                        link: '/md/web/js/js-core'
                    },
                    {
                        text: '拖放',
                        link: '/md/web/js/js-drag'
                    },
                    {
                        text: 'Ajax',
                        link: '/md/web/js/js-ajax'
                    },
                    {
                        text: 'Promise',
                        link: '/md/web/js/js-promise'
                    },
                    {
                        text: 'Generator',
                        link: '/md/web/js/js-generator'
                    },
                    {
                        text: 'Async',
                        link: '/md/web/js/js-async'
                    },
                    {
                        text: 'Module',
                        link: '/md/web/js/js-module'
                    },
                ]
            },
            {
                text: 'Reference',
                collapsible: true,
                items: [
                    {
                        text: 'ECMAScript 6',
                        link: 'https://es6.ruanyifeng.com'
                    },
                    {
                        text: 'Axios',
                        link: 'https://axios-http.com/zh/docs/intro'
                    },
                ]
            }
        ],
        '/md/foundation/network/': [
            {
                text: '计算机网络',
                collapsible: true,
                items: [
                    {
                        text: 'IPv4',
                        link: '/md/foundation/network/ipv4'
                    },
                    {
                        text: 'TCP 协议',
                        link: '/md/foundation/network/tcp'
                    },
                    {
                        text: 'DNS',
                        link: '/md/foundation/network/dns'
                    },
                    {
                        text: 'HTTPS',
                        link: '/md/foundation/network/https'
                    },
                ]
            }
        ],
        '/md/vue/': [
            {
                text: '基础',
                collapsible: true,
                items: [
                    {
                        text: 'Vue 3 简介',
                        link: '/md/vue/guide'
                    },
                    {
                        text: '模板语法',
                        link: '/md/vue/template-syntax'
                    },
                    {
                        text: '计算属性',
                        link: '/md/vue/computed'
                    },
                    {
                        text: '条件渲染',
                        link: '/md/vue/conditional'
                    },
                    {
                        text: '列表渲染',
                        link: '/md/vue/list'
                    },
                    {
                        text: '事件处理',
                        link: '/md/vue/event-handling'
                    },
                    {
                        text: '表单输入绑定',
                        link: '/md/vue/forms'
                    },
                    {
                        text: '侦听器',
                        link: '/md/vue/watchers'
                    },
                    {
                        text: '模板引用',
                        link: '/md/vue/template-refs'
                    },
                    {
                        text: '生命周期',
                        link: '/md/vue/lifecycle'
                    }
                ]
            },
            {
                text: '组件',
                collapsible: true,
                items: [
                    {
                        text: '组件基础',
                        link: '/md/vue/component-basics'
                    },
                    {
                        text: '组件注册',
                        link: '/md/vue/registration'
                    },
                    {
                        text: 'Props',
                        link: '/md/vue/props'
                    },
                    {
                        text: '组件事件',
                        link: '/md/vue/events'
                    },
                    {
                        text: '透传 Attributes',
                        link: '/md/vue/attrs'
                    },
                    {
                        text: '插槽',
                        link: '/md/vue/slots'
                    }
                ]
            }
        ],
        '/md/db/oracle/': [
            {
                text: 'Oracle',
                collapsible: true,
                items: [
                    {
                        text: '基本类型',
                        link: '/md/db/oracle/type'
                    },
                    {
                        text: '运算符',
                        link: '/md/db/oracle/operator'
                    },
                    {
                        text: '函数',
                        link: '/md/db/oracle/function'
                    },
                    {
                        text: 'SQL 基础',
                        link: '/md/db/oracle/sql'
                    },
                    {
                        text: '高级部分',
                        link: '/md/db/oracle/others'
                    },
                ]
            },
            // {
            //     text: 'Oracle 进阶',
            //     collapsible: true,
            //     items: [
            //         {
            //             text: '',
            //             link: '/md/db/oracle/'
            //         },
            //     ]
            // }
        ]
    }
}