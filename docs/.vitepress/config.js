// noinspection JSUnusedGlobalSymbols

export default {
    title: "ice's blog",
    description: '我与春风皆过客，你携秋水揽星河',
    lastUpdated: true,
    cleanUrls: 'without-subfolders',
    markdown: {
        lineNumbers: true
    },
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
            message: '<a href="http://beian.miit.gov.cn" target="_blank">苏ICP备2022010836号-1</a><br/><div>\n' +
                '      <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=32011202000718" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;">\n' +
                '         <img src="/beian.png" style="float:left;" alt="备案"/>\n' +
                '         <p style="float:left;height:20px;line-height:20px;margin: 0 0 0 5px; color:#939393;">苏公网安备 32011202000718号</p>\n' +
                '      </a>\n' +
                '   </div>',
            copyright: 'Copyright © 2022-present ice'
        },
        nav: nav(),
        sidebar: sidebar()
    }
}

function nav() {
    return [
        {
            text: 'Vue.js',
            link: '/md/vue/guide'
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
            text: 'Linux',
            items: [
                {text: 'Item A', link: '/'},
                {text: 'Item B', link: '/'},
                {text: 'Item C', link: '/'}
            ]
        }
    ];
}

function sidebar() {
    return {
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
                        text: 'Oracle 基本类型',
                        link: '/md/db/oracle/type'
                    },
                    {
                        text: 'Oracle 运算符',
                        link: '/md/db/oracle/operator'
                    },
                ]
            }
        ]
    }
}