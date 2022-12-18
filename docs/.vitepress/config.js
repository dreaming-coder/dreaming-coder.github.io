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
            { icon: 'github', link: 'https://github.com/dreaming-coder' }
        ],
        docFooter: {
            prev: '上一页',
            next: '下一页'
        },
        footer: {
            message: '<a href="http://beian.miit.gov.cn" target="_blank">苏ICP备2022010836号-1</a><br/><div>\n' +
                '      <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=32011202000718" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;">\n' +
                '         <img src="/beian.png" style="float:left;"/>\n' +
                '         <p style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;">苏公网安备 32011202000718号</p>\n' +
                '      </a>\n' +
                '   </div>',
            copyright: 'Copyright © 2022-present ice'
        },
        nav: [
            {text: 'bugStack', link: '/'},
            {
                text: 'Linux',
                items: [
                    {text: 'Item A', link: '/'},
                    {text: 'Item B', link: '/'},
                    {text: 'Item C', link: '/'}
                ]
            },
        ],
        sidebar: [
            {
                text: 'Section Title A',
                collapsible: true,
                items: [
                    {text: 'Item A', link: '/item-a'},
                    {text: 'Item B', link: '/item-b'},
                ]
            },
            {
                text: 'Section Title B',
                collapsible: true,
                collapsed: true,
                items: [
                    {text: 'Item C', link: '/item-c'},
                    {text: 'Item D', link: '/item-d'},
                ]
            }
        ]
    }
}
