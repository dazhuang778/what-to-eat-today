# 今天吃什么？

一个帮你决定今天吃什么的微信小程序。打开即开始随机滚动菜单，点击屏幕停止，抽到哪道菜就吃哪道。

## 功能

- **随机抽签**：打开小程序自动开始滚动，点击屏幕减速停止，再次点击重新开始
- **分类主题**：停止后根据菜品分类显示对应颜色背景和 emoji 装饰（家常菜、川湘菜、面食、外卖等 7 个分类）
- **内置数据**：预置 100 道常见菜品，首次启动自动写入数据库
- **后台管理**：点击右下角「⚙ 管理菜品」进入管理页，支持菜品的增删改查、启用/禁用、分类筛选，以及一键重新初始化数据

## 技术栈

- 微信小程序（原生 WXML / WXSS / JS）
- 微信云开发 CloudBase（云数据库）

## 项目结构

```
├── miniprogram/
│   ├── app.js                      # 初始化云开发环境（不提交，见 app.example.js）
│   ├── app.example.js              # app.js 模板，填入云环境 ID 后重命名使用
│   ├── config.js                   # 管理员密码配置（不提交，见 config.example.js）
│   ├── config.example.js           # config.js 模板，填入密码后重命名使用
│   ├── app.json
│   ├── pages/
│   │   ├── index/                  # 首页（抽签动画）
│   │   └── admin/                  # 管理后台
├── cloudfunctions/
│   └── seedMenus/                  # 云函数（备用初始化方式）
├── data/
│   └── seed.json                   # 原始菜品数据
├── project.config.json             # 微信项目配置（不提交，见 project.config.example.json）
└── project.config.example.json     # project.config.json 模板，填入 AppID 后重命名使用
```

## 快速开始

### 前置条件

1. 注册微信小程序账号：[mp.weixin.qq.com](https://mp.weixin.qq.com)
2. 下载 [微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)
3. 在小程序后台开通「云开发」并创建云环境

### 配置步骤

仓库中有三个 `.example` 模板文件，复制后填入自己的配置即可。

**第一步：配置项目 AppID**

```bash
cp project.config.example.json project.config.json
```

打开 `project.config.json`，将 `YOUR_APP_ID` 替换为你的小程序 AppID：

```json
{
  "appid": "wx你的AppID"
}
```

**第二步：配置云环境 ID**

```bash
cp miniprogram/app.example.js miniprogram/app.js
```

打开 `miniprogram/app.js`，将 `YOUR_CLOUD_ENV_ID` 替换为你的云环境 ID：

```js
wx.cloud.init({
  env: '你的云环境ID',
  traceUser: true
})
```

**第三步：配置管理员密码**

```bash
cp miniprogram/config.example.js miniprogram/config.js
```

打开 `miniprogram/config.js`，将密码改为你自己的：

```js
module.exports = {
  ADMIN_PASSWORD: '你的密码'
}
```

**第四步：导入项目**

在微信开发者工具中选择「导入项目」，选择本项目根目录，填入 AppID。

**第五步：初始化数据**

首次运行时，进入管理页点击「初始化数据」按钮，自动写入 100 条菜品数据。
（或首页加载时若数据库为空会自动初始化）

## 注意事项

### 哪些文件不在仓库中

以下文件包含个人信息，已加入 `.gitignore` 不提交，请按上方步骤从 `.example` 模板创建：

| 不提交的文件 | 对应模板 | 需填入的内容 |
|-------------|---------|-------------|
| `project.config.json` | `project.config.example.json` | 小程序 AppID |
| `miniprogram/app.js` | `miniprogram/app.example.js` | 云环境 ID |
| `miniprogram/config.js` | `miniprogram/config.example.js` | 管理员密码 |

### 关于管理员密码的安全说明

管理密码存储在客户端 JS 中，微信小程序代码可被反编译查看，因此密码仅作基础防护。如有更高安全需求，建议改用云函数 + 后端鉴权方案。

### CloudBase 安全规则（推荐）

建议在云开发控制台为 `menus` 集合设置数据库安全规则，防止未授权写入：

```json
{
  "read": true,
  "write": "auth.openid != null"
}
```

## License

MIT
