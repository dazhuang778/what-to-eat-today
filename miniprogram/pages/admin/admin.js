const { ADMIN_PASSWORD } = require('../../config')

const CATEGORIES = ['家常菜', '川湘菜', '面食/米粉', '外卖快餐', '汤类', '火锅烧烤', '粤菜']
const PAGE_SIZE = 20

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
    locked: true,
    pwdInput: '',
    pwdError: '',
    menus: [],
    categories: CATEGORIES,
    filterCategory: '',
    filterIndex: 0,
    loading: false,
    seeding: false,
    showForm: false,
    formTitle: '新增菜品',
    form: { name: '', category: '家常菜', enabled: true },
    categoryIndex: 0,
    editingId: '',
    formError: ''
  },

  onLoad() { this._loadMenus() },
  onShow() { if (!this.data.locked) this._loadMenus() },

  onPwdInput(e) {
    this.setData({ pwdInput: e.detail.value, pwdError: '' })
  },

  submitPassword() {
    if (this.data.pwdInput === ADMIN_PASSWORD) {
      this.setData({ locked: false, pwdInput: '', pwdError: '' })
      this._loadMenus()
    } else {
      this.setData({ pwdError: '密码错误，请重试' })
    }
  },

  cancelPassword() {
    wx.navigateBack()
  },

  _loadMenus() {
    this.setData({ loading: true })
    const db = wx.cloud.database()
    const col = db.collection('menus')
    col.count().then(({ total }) => {
      if (total === 0) {
        this.setData({ menus: [], loading: false })
        return
      }
      const pages = Math.ceil(total / PAGE_SIZE)
      const reqs = []
      for (let i = 0; i < pages; i++) {
        reqs.push(col.skip(i * PAGE_SIZE).limit(PAGE_SIZE).get().then(r => r.data))
      }
      Promise.all(reqs).then(results => {
        let all = [].concat(...results)
        if (this.data.filterCategory) {
          all = all.filter(m => m.category === this.data.filterCategory)
        }
        all.sort((a, b) => a.name.localeCompare(b.name, 'zh'))
        this.setData({ menus: all, loading: false })
      })
    }).catch(() => this.setData({ loading: false }))
  },

  onFilterChange(e) {
    const idx = parseInt(e.detail.value)
    const cat = idx === 0 ? '' : CATEGORIES[idx - 1]
    this.setData({ filterCategory: cat, filterIndex: idx }, () => this._loadMenus())
  },

  toggleEnabled(e) {
    const { id, enabled } = e.currentTarget.dataset
    wx.cloud.database().collection('menus').doc(id)
      .update({ data: { enabled: !enabled } })
      .then(() => {
        const menus = this.data.menus.map(m =>
          m._id === id ? { ...m, enabled: !enabled } : m
        )
        this.setData({ menus })
      })
      .catch(() => wx.showToast({ title: '操作失败', icon: 'error' }))
  },

  openAdd() {
    this.setData({
      showForm: true, formTitle: '新增菜品',
      form: { name: '', category: '家常菜', enabled: true },
      categoryIndex: 0, editingId: '', formError: ''
    })
  },

  openEdit(e) {
    const item = e.currentTarget.dataset.item
    const categoryIndex = CATEGORIES.indexOf(item.category)
    this.setData({
      showForm: true, formTitle: '编辑菜品',
      form: { name: item.name, category: item.category, enabled: item.enabled },
      categoryIndex: categoryIndex >= 0 ? categoryIndex : 0,
      editingId: item._id, formError: ''
    })
  },

  onNameInput(e) {
    this.setData({ 'form.name': e.detail.value, formError: '' })
  },

  onCategoryChange(e) {
    const idx = parseInt(e.detail.value)
    this.setData({ categoryIndex: idx, 'form.category': CATEGORIES[idx] })
  },

  toggleFormEnabled() {
    this.setData({ 'form.enabled': !this.data.form.enabled })
  },

  closeForm() { this.setData({ showForm: false }) },

  saveForm() {
    const { name, category, enabled } = this.data.form
    if (!name.trim()) {
      this.setData({ formError: '菜品名称不能为空' })
      return
    }
    const data = { name: name.trim(), category, enabled }
    const db = wx.cloud.database()
    const op = this.data.editingId
      ? db.collection('menus').doc(this.data.editingId).update({ data })
      : db.collection('menus').add({ data })
    op.then(() => {
      this.setData({ showForm: false })
      this._loadMenus()
      wx.showToast({ title: this.data.editingId ? '已更新' : '已添加', icon: 'success' })
    }).catch(() => wx.showToast({ title: '保存失败', icon: 'error' }))
  },

  deleteItem(e) {
    const { id, name } = e.currentTarget.dataset
    wx.showModal({
      title: '确认删除', content: `确定删除「${name}」吗？`,
      confirmColor: '#e74c3c',
      success: ({ confirm }) => {
        if (!confirm) return
        wx.cloud.database().collection('menus').doc(id).remove()
          .then(() => { this._loadMenus(); wx.showToast({ title: '已删除', icon: 'success' }) })
          .catch(() => wx.showToast({ title: '删除失败', icon: 'error' }))
      }
    })
  },

  noop() {},

  seedData() {
    wx.showModal({
      title: '初始化数据',
      content: '将导入100条初始菜品，若已有数据将跳过，确认继续？',
      success: ({ confirm }) => {
        if (!confirm) return
        this.setData({ seeding: true })
        const col = wx.cloud.database().collection('menus')
        col.count().then(({ total }) => {
          if (total > 0) {
            wx.showToast({ title: `已有${total}条，跳过`, icon: 'none', duration: 2000 })
            this.setData({ seeding: false })
            this._loadMenus()
            return
          }
          const batchSize = 5
          const batches = []
          for (let i = 0; i < SEED_DATA.length; i += batchSize) {
            batches.push(SEED_DATA.slice(i, i + batchSize))
          }
          batches.reduce((chain, batch) =>
            chain.then(() => Promise.all(batch.map(item => col.add({ data: item }))))
          , Promise.resolve()).then(() => {
            this.setData({ seeding: false })
            this._loadMenus()
            wx.showToast({ title: '导入成功100条', icon: 'success' })
          }).catch(() => {
            this.setData({ seeding: false })
            wx.showToast({ title: '导入失败', icon: 'error' })
          })
        })
      }
    })
  }
})
