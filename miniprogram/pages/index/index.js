const BASE_INTERVAL = 80
const DECELERATE_STEPS = [120, 180, 260, 360, 480, 620]

const THEMES = {
  '家常菜':   { color: '#c0550a', emojis: ['🥚', '🫑', '🥩', '🧅'] },
  '川湘菜':   { color: '#a93226', emojis: ['🌶️', '🥩', '🔥', '🌿'] },
  '面食/米粉': { color: '#b7770d', emojis: ['🍜', '🥢', '🫙', '🌾'] },
  '外卖快餐': { color: '#6c3483', emojis: ['🍱', '🍗', '🥡', '🍚'] },
  '汤类':    { color: '#1a5276', emojis: ['🍲', '🫕', '💧', '🥣'] },
  '火锅烧烤': { color: '#922b21', emojis: ['🔥', '🍢', '♨️', '🥩'] },
  '粤菜':    { color: '#1e6b40', emojis: ['🦐', '🐟', '🥢', '🍤'] }
}

const SEED_DATA = [
  { name: '番茄炒蛋', category: '家常菜', enabled: true },
  { name: '红烧肉', category: '家常菜', enabled: true },
  { name: '土豆丝', category: '家常菜', enabled: true },
  { name: '糖醋排骨', category: '家常菜', enabled: true },
  { name: '清炒小白菜', category: '家常菜', enabled: true },
  { name: '鱼香肉丝', category: '家常菜', enabled: true },
  { name: '京酱肉丝', category: '家常菜', enabled: true },
  { name: '可乐鸡翅', category: '家常菜', enabled: true },
  { name: '葱爆羊肉', category: '家常菜', enabled: true },
  { name: '白灼虾', category: '家常菜', enabled: true },
  { name: '清蒸排骨', category: '家常菜', enabled: true },
  { name: '蒜蓉空心菜', category: '家常菜', enabled: true },
  { name: '香煎豆腐', category: '家常菜', enabled: true },
  { name: '土豆烧牛肉', category: '家常菜', enabled: true },
  { name: '红烧鲫鱼', category: '家常菜', enabled: true },
  { name: '蚝油生菜', category: '家常菜', enabled: true },
  { name: '木耳炒肉', category: '家常菜', enabled: true },
  { name: '黄瓜炒肉', category: '家常菜', enabled: true },
  { name: '韭菜炒鸡蛋', category: '家常菜', enabled: true },
  { name: '蒸蛋羹', category: '家常菜', enabled: true },
  { name: '凉拌黄瓜', category: '家常菜', enabled: true },
  { name: '炒豆芽', category: '家常菜', enabled: true },
  { name: '回锅肉', category: '家常菜', enabled: true },
  { name: '酱牛肉', category: '家常菜', enabled: true },
  { name: '清蒸鸡', category: '家常菜', enabled: true },
  { name: '麻婆豆腐', category: '川湘菜', enabled: true },
  { name: '宫保鸡丁', category: '川湘菜', enabled: true },
  { name: '剁椒鱼头', category: '川湘菜', enabled: true },
  { name: '水煮肉片', category: '川湘菜', enabled: true },
  { name: '夫妻肺片', category: '川湘菜', enabled: true },
  { name: '辣子鸡', category: '川湘菜', enabled: true },
  { name: '口水鸡', category: '川湘菜', enabled: true },
  { name: '酸菜鱼', category: '川湘菜', enabled: true },
  { name: '毛血旺', category: '川湘菜', enabled: true },
  { name: '干锅花椰菜', category: '川湘菜', enabled: true },
  { name: '辣炒蛤蜊', category: '川湘菜', enabled: true },
  { name: '湖南小炒肉', category: '川湘菜', enabled: true },
  { name: '钵钵鸡', category: '川湘菜', enabled: true },
  { name: '麻辣牛肉', category: '川湘菜', enabled: true },
  { name: '泡椒凤爪', category: '川湘菜', enabled: true },
  { name: '双椒炒牛肉', category: '川湘菜', enabled: true },
  { name: '香辣蟹', category: '川湘菜', enabled: true },
  { name: '红油抄手', category: '川湘菜', enabled: true },
  { name: '擂辣椒皮蛋', category: '川湘菜', enabled: true },
  { name: '麻辣香锅', category: '川湘菜', enabled: true },
  { name: '炸酱面', category: '面食/米粉', enabled: true },
  { name: '牛肉拉面', category: '面食/米粉', enabled: true },
  { name: '螺蛳粉', category: '面食/米粉', enabled: true },
  { name: '重庆小面', category: '面食/米粉', enabled: true },
  { name: '西红柿鸡蛋面', category: '面食/米粉', enabled: true },
  { name: '担担面', category: '面食/米粉', enabled: true },
  { name: '热干面', category: '面食/米粉', enabled: true },
  { name: '过桥米线', category: '面食/米粉', enabled: true },
  { name: '砂锅米线', category: '面食/米粉', enabled: true },
  { name: '干拌米粉', category: '面食/米粉', enabled: true },
  { name: '阳春面', category: '面食/米粉', enabled: true },
  { name: '葱油拌面', category: '面食/米粉', enabled: true },
  { name: '猪油拌面', category: '面食/米粉', enabled: true },
  { name: '红烧牛肉面', category: '面食/米粉', enabled: true },
  { name: '雪菜肉末面', category: '面食/米粉', enabled: true },
  { name: '黄焖鸡米饭', category: '外卖快餐', enabled: true },
  { name: '沙县拌面', category: '外卖快餐', enabled: true },
  { name: '煲仔饭', category: '外卖快餐', enabled: true },
  { name: '盖浇饭', category: '外卖快餐', enabled: true },
  { name: '卤肉饭', category: '外卖快餐', enabled: true },
  { name: '叉烧饭', category: '外卖快餐', enabled: true },
  { name: '猪脚饭', category: '外卖快餐', enabled: true },
  { name: '扬州炒饭', category: '外卖快餐', enabled: true },
  { name: '菠萝炒饭', category: '外卖快餐', enabled: true },
  { name: '酸菜鱼米饭', category: '外卖快餐', enabled: true },
  { name: '麻辣烫', category: '外卖快餐', enabled: true },
  { name: '肉夹馍', category: '外卖快餐', enabled: true },
  { name: '烤鸭饭', category: '外卖快餐', enabled: true },
  { name: '沙拉鸡胸饭', category: '外卖快餐', enabled: true },
  { name: '番茄牛腩饭', category: '外卖快餐', enabled: true },
  { name: '冬瓜排骨汤', category: '汤类', enabled: true },
  { name: '番茄蛋花汤', category: '汤类', enabled: true },
  { name: '酸辣汤', category: '汤类', enabled: true },
  { name: '玉米猪骨汤', category: '汤类', enabled: true },
  { name: '莲藕排骨汤', category: '汤类', enabled: true },
  { name: '紫菜蛋花汤', category: '汤类', enabled: true },
  { name: '老鸭汤', category: '汤类', enabled: true },
  { name: '西湖牛肉羹', category: '汤类', enabled: true },
  { name: '花生猪脚汤', category: '汤类', enabled: true },
  { name: '南瓜浓汤', category: '汤类', enabled: true },
  { name: '重庆火锅', category: '火锅烧烤', enabled: true },
  { name: '铜锅涮肉', category: '火锅烧烤', enabled: true },
  { name: '羊蝎子火锅', category: '火锅烧烤', enabled: true },
  { name: '串串香', category: '火锅烧烤', enabled: true },
  { name: '烧烤拼盘', category: '火锅烧烤', enabled: true },
  { name: '炭烤羊肉串', category: '火锅烧烤', enabled: true },
  { name: '烤鱼', category: '火锅烧烤', enabled: true },
  { name: '铁板烧', category: '火锅烧烤', enabled: true },
  { name: '韩式烤肉', category: '火锅烧烤', enabled: true },
  { name: '猪肚鸡火锅', category: '火锅烧烤', enabled: true },
  { name: '白切鸡', category: '粤菜', enabled: true },
  { name: '清蒸鱼', category: '粤菜', enabled: true },
  { name: '虾饺', category: '粤菜', enabled: true },
  { name: '叉烧包', category: '粤菜', enabled: true },
  { name: '广式煲仔饭', category: '粤菜', enabled: true }
]

Page({
  data: {
    currentMenu: '加载中...',
    currentCategory: '',
    state: 'idle',
    isEmpty: false,
    bgColor: '#1a1a2e',
    bgOpacity: 0,
    emojis: [],
    emojiOpacity: 0
  },

  _timer: null,
  _allMenus: [],
  _shuffled: [],
  _idx: 0,

  onLoad() {
    this._loadMenus()
  },

  onUnload() {
    clearTimeout(this._timer)
  },

  _loadMenus() {
    this.setData({ currentMenu: '加载中...' })
    const db = wx.cloud.database()
    const col = db.collection('menus')

    col.count().then(({ total }) => {
      if (total === 0) {
        this._seedData(db)
        return
      }
      // 每页最多 20 条，并发取所有页
      const PAGE = 20
      const pages = Math.ceil(total / PAGE)
      const requests = []
      for (let i = 0; i < pages; i++) {
        requests.push(col.skip(i * PAGE).limit(PAGE).get().then(r => r.data))
      }
      Promise.all(requests).then(results => {
        const all = [].concat(...results).filter(item => item.enabled)
        if (!all.length) {
          this.setData({ isEmpty: true, currentMenu: '' })
          return
        }
        this._allMenus = all
        this._startAnimation()
      })
    }).catch(err => {
      console.error('数据库访问失败', err)
      this.setData({ isEmpty: true, currentMenu: '' })
    })
  },

  _seedData(db) {
    this.setData({ currentMenu: '初始化中...' })
    const col = db.collection('menus')
    // 每批 5 条并发写入，逐批执行
    const batchSize = 5
    const batches = []
    for (let i = 0; i < SEED_DATA.length; i += batchSize) {
      batches.push(SEED_DATA.slice(i, i + batchSize))
    }
    batches.reduce((chain, batch) => {
      return chain.then(() =>
        Promise.all(batch.map(item => col.add({ data: item })))
      )
    }, Promise.resolve()).then(() => {
      this._loadMenus()
    }).catch(err => {
      console.error('初始化数据失败', err)
      this.setData({ isEmpty: true, currentMenu: '' })
    })
  },

  _shuffle(arr) {
    const a = [...arr]
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]]
    }
    return a
  },

  goAdmin() {
    wx.navigateTo({ url: '/pages/admin/admin' })
  },

  _startAnimation() {
    clearTimeout(this._timer)
    this._shuffled = this._shuffle(this._allMenus)
    this._idx = 0
    this.setData({ state: 'running', bgOpacity: 0, emojiOpacity: 0 })
    this._loop()
  },

  _loop() {
    this._timer = setTimeout(() => {
      this._showNext()
      this._loop()
    }, BASE_INTERVAL)
  },

  _showNext() {
    const menu = this._shuffled[this._idx % this._shuffled.length]
    this.setData({ currentMenu: menu.name, currentCategory: menu.category })
    this._idx++
  },

  _applyTheme() {
    const theme = THEMES[this.data.currentCategory]
    if (!theme) return
    this.setData({ bgColor: theme.color, bgOpacity: 0.55, emojis: theme.emojis, emojiOpacity: 1 })
  },

  _decelerate(step) {
    if (step >= DECELERATE_STEPS.length) {
      this.setData({ state: 'stopped' })
      this._applyTheme()
      return
    }
    this._timer = setTimeout(() => {
      this._showNext()
      this._decelerate(step + 1)
    }, DECELERATE_STEPS[step])
  },

  handleTap() {
    const { state } = this.data
    if (state === 'running') {
      clearTimeout(this._timer)
      this.setData({ state: 'stopping' })
      this._decelerate(0)
    } else if (state === 'stopped') {
      this._startAnimation()
    }
  }
})
