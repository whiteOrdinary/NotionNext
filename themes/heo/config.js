const CONFIG = {
  HEO_HOME_BANNER_ENABLE: true,

  HEO_SITE_CREATE_TIME: '2024-04-01', // 建站日期，用于计算网站运行的第几天

  // 首页顶部通知条滚动内容，如不需要可以留空 []
  HEO_NOTICE_BAR: [
    { title: 'Welcome to Japan', url: 'https://japan-guides.com/' },
    { title: 'Japanese Railway Travel Routes Hidden in Youth 18 Posters', url: 'https://japan-guides.com/article/traffic-4' },
    { title: 'One of the world"s only two pilgrimage routes', url: 'https://japan-guides.com/article/culture-15' }
  ],

  // 英雄区左右侧组件颠倒位置
  HEO_HERO_REVERSE: false,
  // 博客主体区左右侧组件颠倒位置
  HEO_HERO_BODY_REVERSE: false,

  // 英雄区(首页顶部大卡)
  HEO_HERO_TITLE_1: 'Share',
  HEO_HERO_TITLE_2: 'Happy',
  HEO_HERO_TITLE_3: 'japan-guides.COM',
  HEO_HERO_TITLE_4: 'Japan World',
  HEO_HERO_TITLE_5: 'Enjoy japan life',
  HEO_HERO_TITLE_LINK: 'https://japan-guides.com',

  // 英雄区显示三个置顶分类
  HEO_HERO_CATEGORY_1: { title: 'Must-see', url: '/tag/mustsee' },
  HEO_HERO_CATEGORY_2: { title: 'Hot article', url: '/tag/hotarticle' },
  HEO_HERO_CATEGORY_3: { title: 'Practical Tutorials', url: '/tag/tutorials' },

  // 英雄区右侧推荐文章标签, 例如 [推荐] , 最多六篇文章; 若留空白''，则推荐最近更新文章
  HEO_HERO_RECOMMEND_POST_TAG: 'Recommend',
  HEO_HERO_RECOMMEND_POST_SORT_BY_UPDATE_TIME: false, // 推荐文章排序，为`true`时将强制按最后修改时间倒序
  //   HERO_RECOMMEND_COVER: 'https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_1280.jpg', // 英雄区右侧图片

  // 右侧个人资料卡牌欢迎语，点击可自动切换
  HEO_INFOCARD_GREETINGS: [
    'Welcome to japan',
    '🔍 search',
    '🤝 share',
    '🏃 step',
    '🏠 hotel',
    '🤖️ game',
    '🧱 team'
  ],
  HEO_INFO_CARD_URL: 'https://japan-guides.com/', // 个人资料底部按钮链接

  // 用户技能图标
  HEO_GROUP_ICONS: [
    {
      title_1: 'japan33',
      img_1: '/images/heo/33.png',
      color_1: '#989bf8',
      title_2: 'japan44',
      img_2: '/images/heo/44.png',
      color_2: '#ffffff'
    },
    {
      title_1: 'Kamakura',
      img_1: '/images/heo/22.png',
      color_1: '#57b6e6',
      title_2: 'japan55',
      img_2: '/images/heo/55.png',
      color_2: '#4082c3'
    },
    {
      title_1: 'japan66',
      img_1: '/images/heo/66.png',
      color_1: '#ffffff',
      title_2: 'japan77',
      img_2: '/images/heo/77.png',
      color_2: '#ffffff'
    },
    {
      title_1: 'japan88',
      img_1: '/images/heo/88.png',
      color_1: '#eb6840',
      title_2: 'japan99',
      img_2: '/images/heo/99.png',
      color_2: '#8f55ba'
    },
    {
      title_1: '100',
      img_1: '/images/heo/100.png',
      color_1: '#f29e39',
      title_2: 'A1',
      img_2: '/images/heo/A1.png',
      color_2: '#2c51db'
    },
    {
      title_1: 'Japanese ramen',
      img_1: '/images/heo/11.png',
      color_1: '#f7cb4f',
      title_2: 'A2',
      img_2: '/images/heo/A2.png',
      color_2: '#e9572b'
    }
  ],

  HEO_SOCIAL_CARD: false, // 是否显示右侧，点击加入社群按钮
  HEO_SOCIAL_CARD_TITLE_1: '交流频道',
  HEO_SOCIAL_CARD_TITLE_2: '加入我们的社群讨论分享',
  HEO_SOCIAL_CARD_TITLE_3: '点击加入社群',
  HEO_SOCIAL_CARD_URL: 'https://japan-guides.com/',

  // *****  以下配置无效，只是预留开发 ****
  // 菜单配置
  HEO_MENU_INDEX: true, // 显示首页
  HEO_MENU_CATEGORY: true, // 显示分类
  HEO_MENU_TAG: true, // 显示标签
  HEO_MENU_ARCHIVE: true, // 显示归档
  HEO_MENU_SEARCH: true, // 显示搜索

  HEO_POST_LIST_COVER: true, // 列表显示文章封面
  HEO_POST_LIST_COVER_HOVER_ENLARGE: false, // 列表鼠标悬停放大

  HEO_POST_LIST_COVER_DEFAULT: true, // 封面为空时用站点背景做默认封面
  HEO_POST_LIST_SUMMARY: true, // 文章摘要
  HEO_POST_LIST_PREVIEW: false, // 读取文章预览
  HEO_POST_LIST_IMG_CROSSOVER: true, // 博客列表图片左右交错

  HEO_ARTICLE_ADJACENT: true, // 显示上一篇下一篇文章推荐
  HEO_ARTICLE_COPYRIGHT: true, // 显示文章版权声明
  HEO_ARTICLE_RECOMMEND: true, // 文章关联推荐

  HEO_WIDGET_LATEST_POSTS: true, // 显示最新文章卡
  HEO_WIDGET_ANALYTICS: false, // 显示统计卡
  HEO_WIDGET_TO_TOP: true,
  HEO_WIDGET_TO_COMMENT: true, // 跳到评论区
  HEO_WIDGET_DARK_MODE: true, // 夜间模式
  HEO_WIDGET_TOC: true // 移动端悬浮目录
}
export default CONFIG
