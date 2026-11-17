# 数独成长学院（Sudoku Academy）

独立数独成长训练网页，面向7—28岁学习者。当前版本提供9×9数独练习、唯一解题目生成、提示、计时和本地完成次数记录。

## 在线发布（首次需要启用一次）

1. 打开仓库 **Settings → Pages**：https://github.com/rambitnakav-blip/sudoku-academy/settings/pages
2. 在 **Build and deployment → Source** 中选择 **GitHub Actions**。
3. 保存后，后续每次推送到 `main` 都会自动部署。
4. 在线地址：https://rambitnakav-blip.github.io/sudoku-academy/

仓库已包含自动部署工作流：`.github/workflows/pages.yml`。当前 GitHub App 连接可以提交代码，但没有 Pages 管理权限，因此不能代替仓库所有者完成首次 Pages 开通。

## 文件

- `index.html`：游戏页面与数独逻辑
- `manifest.webmanifest`：网页应用配置
- `sw.js`：离线缓存
- `icon.svg`：应用图标
- `.github/workflows/pages.yml`：GitHub Pages 自动部署

## 当前版本边界

V0.1 是可玩的原型。22个年龄等级目前主要呈现学习主题和逐级提高的题目线索数量；高阶逻辑技巧的教学、按技巧生成题目、严格的难度认证、错题复习和跨设备同步尚未完成。年龄是成长路线，不是能力判断。

## 隐私

完成次数保存在当前浏览器的 localStorage，不上传玩家个人资料或游戏记录。
