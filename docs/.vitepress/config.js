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
            text: '前端',
            items: [
                {
                    text: 'HTML',
                    link: '/md/web/html/html-structure'
                },
                {
                    text: 'CSS',
                    link: '/'
                },
                {
                    text: 'JavaScript',
                    link: '/'
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
            text: '工具|部署',
            items: [
                {text: 'Git', link: '/'},
                {text: 'Linux', link: '/'},
                {text: 'Item C', link: '/'}
            ]
        }
    ];
}

function sidebar() {
    return {
        '/md/web/html/':[
            {
                text: 'HTML',
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
                text: 'Oracle 基础',
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