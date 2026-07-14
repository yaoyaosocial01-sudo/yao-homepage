# 搞钱姐妹 - 瑶瑶 & 金 / Wealth Build Sis - Yao & Jin

这是“搞钱姐妹 - 瑶瑶 & 金 / Wealth Build Sis - Yao & Jin”的双人内容品牌主页。

品牌定位：两个在澳洲生活的 80 后中国女性，一边学习 AI 和投资，一边认真生活。页面用于展示两位创作者的背景、内容入口、播客、数字分身导览、留言区和合作联系方式。

项目使用普通 HTML、CSS 和 JavaScript，没有复杂框架，可以直接本地打开，也适合部署到 Vercel。

## 当前版本重点

- 首页、SEO、OG 标题已改成双人品牌。
- About 区域包含瑶瑶和金两张人物卡。
- 内容区展示搞钱姐妹的视频平台入口，并新增金的小红书。
- 播客区保留《人间随便聊》平台入口。
- 数字分身当前作为搞钱姐妹内容导览员，未来可扩展为双人内容助手。
- 留言区为“给搞钱姐妹留句话 / Leave a note for Wealth Build Sis”。
- 合作区按搞钱姐妹整体呈现，并写明合作边界：不提供投资建议，不接虚假宣传或未经验证产品，金融/汇款类谨慎。

## 本地怎么打开

直接双击打开这个文件：

```text
D:\个人主页\index.html
```

也可以右键 `index.html`，选择用 Edge 或 Chrome 打开。

## 每个文件是做什么的

- `index.html`：网页主要内容，包括首页、关于我们、内容入口、播客、科研与科技背景、数字分身、留言区和联系区。
- `styles.css`：网页视觉样式，包括颜色、排版、按钮、卡片、双人头像、留言表单和手机端适配。
- `script.js`：中文 / EN 切换、主题卡片文字切换、数字分身预设问答、留言表单整理邮件。
- `assets/avatar.png`：瑶瑶头像。
- `assets/jin-avatar.png`：金头像。
- `assets/wechat-qr.png`：微信二维码。
- `assets/favicon.svg`：浏览器标签页小图标。

## 如果要上线到 Vercel

这是静态网页，通常不需要复杂设置。Vercel 导入 GitHub 仓库后：

1. Framework Preset 选择 `Other` 或保持默认。
2. Build Command 留空。
3. Output Directory 留空。
4. 点击 Deploy。

推送到 GitHub `main` 分支后，Vercel 会自动更新线上版本。

## 上线前检查

- 中文 / EN 切换正常。
- 手机端显示正常。
- `avatar.png` 和 `jin-avatar.png` 都能正常显示。
- 所有平台链接可以打开。
- 留言表单可以打开邮箱客户端。
- 联系邮箱 `yaoyaosocial01@gmail.com` 正确。
- 微信号 `y13534369137` 正确。
- 页面里没有 `C:\` 或 `D:\` 这样的本地绝对路径。
- 不要提交 `recovery-codes.txt` 等敏感文件。
