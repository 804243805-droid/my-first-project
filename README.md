# MyFirstProject · 我的第一个网页作品

一个简洁、现代的个人作品展示页，使用原生 **HTML + CSS + JavaScript** 编写，无需任何构建工具或依赖，双击即可在浏览器中运行。

适合作为前端入门练手项目，也适合当作后续作品集网站的起点。

## 预览

直接用浏览器打开 `index.html` 即可：

```
1html/index.html
```

如果想通过本地服务器预览（更接近真实部署环境）：

```bash
# 任选一种，需在项目根目录执行
python -m http.server 8000
# 或
npx serve .
```

然后访问 http://localhost:8000

## 项目结构

```
.
├── index.html    # 页面结构：导航、主视觉、关于、特点、联系
├── styles.css    # 视觉样式：深色主题、渐变、卡片、响应式布局
├── script.js     # 交互逻辑：按钮悬停动效、导航平滑滚动
├── .gitignore    # Git 忽略规则
└── README.md     # 项目说明
```

## 技术要点

| 技术 | 用途 |
| --- | --- |
| HTML5 语义化标签 | `header` / `main` / `section` / `article` / `footer` |
| CSS 自定义属性 | 通过 `:root` 变量统一管理配色与阴影 |
| CSS Grid & Flexbox | 主视觉、卡片网格、导航栏布局 |
| 媒体查询 | 适配桌面端、平板与手机屏幕 |
| 原生 JavaScript | `DOMContentLoaded` 后绑定事件，无第三方库 |
| Google Fonts | 引入 Inter 字体 |

## 页面板块

- **导航栏** — 品牌标识、锚点链接、行动按钮
- **主视觉（Hero）** — 标题、副标题、双按钮、数据统计、浏览器窗口模拟卡片
- **关于项目** — 三张信息卡片：项目目标、适合人群、可扩展性
- **项目亮点** — 响应式布局 / 现代视觉设计 / 交互效果
- **联系我** — 邮件行动召唤
- **页脚** — 版权信息

## 本地开发

项目没有依赖，也没有构建步骤。修改 `styles.css` 或 `script.js` 后刷新浏览器即可看到效果。

## 后续可以做什么

- [ ] 把「关于」和「联系」替换成真实的个人介绍与联系方式
- [ ] 新增作品列表板块，展示你的其他项目
- [ ] 增加深色 / 浅色主题切换
- [ ] 接入表单服务，让留言板真正可用
- [ ] 部署到 GitHub Pages，获得公开访问地址

## 部署到 GitHub Pages

仓库推送后，在 GitHub 仓库页面进入 **Settings → Pages**，把 Source 设为 `Deploy from a branch`，分支选择 `main`、目录选择 `/ (root)`，保存后即可通过以下地址访问：

```
https://<你的用户名>.github.io/<仓库名>/
```

## 许可证

本项目暂未指定开源许可证。如需允许他人自由使用，建议补充一份 [MIT License](https://choosealicense.com/licenses/mit/)。
