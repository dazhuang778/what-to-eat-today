const cloud = require('wx-server-sdk')
const seedData = require('./seed.json')

cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV })

exports.main = async () => {
  const db = cloud.database()
  const collection = db.collection('menus')

  const { total } = await collection.count()
  if (total > 0) {
    return { success: false, message: `数据已存在（${total} 条），跳过初始化` }
  }

  // CloudBase 每次 add 一条，批量并发写入（每批 20 条）
  const batchSize = 20
  let inserted = 0
  for (let i = 0; i < seedData.length; i += batchSize) {
    const batch = seedData.slice(i, i + batchSize)
    await Promise.all(batch.map(item => collection.add({ data: item })))
    inserted += batch.length
  }

  return { success: true, message: `成功导入 ${inserted} 条菜品数据` }
}
