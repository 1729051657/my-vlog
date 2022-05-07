module.exports = {
  title: "万里旅游集散中心",
  description: '记录开发生活 .',
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    ['link', {rel: 'stylesheet', href: '/fontawesome/css/all.min.css'}],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    // 引入jquery
    ["script", {
      "language": "javascript",
      "type": "text/javascript",
      "src": "/js/jquery.min.js"
    }],
    ["script", {
      "language": "javascript",
      "type": "text/javascript",
      "src": "/js/MouseClickEffect.js"
    }],
    ["script", {
      "language": "javascript",
      "type": "text/javascript",
      "src": "/js/autoload.js"
    }]
  ],
  theme: 'reco',
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  themeConfig: {
    nav: [
      { text: '首页', link: '/', icon: 'reco-home' },
      { text: '时间线', link: '/timeline/', icon: 'reco-date' },
      { text: '联系我',
        icon: 'reco-message',
        items: [
          { text: 'GitHub', link: 'https://github.com/1729051657/', icon: 'reco-github' },
          { text: 'Gitee', link: 'https://gitee.com/k1729051657', icon: 'reco-mayun' },
          { text: '博客', link: 'https://blog.csdn.net/u011573619', icon: 'reco-blog' }
        ]
      }
    ],
    sidebar: {
      '/docs/theme-reco/': [
        '',
        'theme',
        'plugin',
        'api'
      ]
    },
    type: 'blog',
    // 博客设置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: '分类' // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: '标签' // 默认 “标签”
      }
    },
    friendLink: [
      {
        logo:'/logo.jpg',
        title: '小孔CSDN',
        desc: '享受代码能对生活带来的便捷。',
        email: '1729051657@qq.com',
        link: 'https://blog.csdn.net/u011573619'
      },{
        logo:'/logo.jpg',
        title: '小孔github',
        desc: '享受代码能对生活带来的便捷。',
        email: '1729051657@qq.com',
        link: 'https://github.com/1729051657'
      },{
        logo:'/logo.jpg',
        title: '小孔gitee',
        desc: '享受代码能对生活带来的便捷。',
        email: '1729051657@qq.com',
        link: 'https://gitee.com/k1729051657'
      }
    ],
    logo: '/logo.jpg',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
     sidebar: 'auto',
    // 最后更新时间
    lastUpdated: '最后更新时间',
    // 作者
    author: '史世臻',
    // 作者头像
    authorAvatar: '/logo.jpg',
    // 备案号
    record: '豫ICP备2021018110号-1',
    recordLink: 'https://beian.miit.gov.cn/',
    // 项目开始时间
    startYear: '2017',
    /**
     * 密钥 (if your blog is private)
     */

    // keyPage: {
    //   keys: ['your password'],
    //   color: '#42b983',
    //   lineColor: '#42b983'
    // },

    /**
     * valine 设置 (if you need valine comment )
     */

    valineConfig: {
      appId: '7EUuY67ai5nniEk6Hh2n3QKo-gzGzoHsz',// your appId
      appKey: 'WTgTjYdAz4dtdEnewrhYxU0K', // your appKey
    }
  },
  markdown: {
    lineNumbers: true
  }
}
