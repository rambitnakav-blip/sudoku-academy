# 数独成长学院（Sudoku Academy）

面向7—28岁学习者的独立数独学习网页。按年龄映射22个学习等级，循序经历4×4、6×6、9×9棋盘。

## 当前功能

- 22级课程路线：每级有学习目标、概念讲解、解题方法、挑战任务和提示。
- 4×4（2×2宫）、6×6（2×3宫）、9×9（3×3宫）三种棋盘。
- 随机生成完整终盘，并通过回溯计数验证题目唯一解。
- 逻辑分析器：裸单数、隐性单数、裸数对、隐性数对、锁定候选数、裸三数组、X-Wing、Swordfish、XY-Wing、简单着色。
- 分步提示：给出逻辑技巧、格子位置和成立原因，不自动替玩家填答案。
- 候选数显示、错误检查、计时、答案查看、键盘操作。
- 本机保存累计通关、本级完成次数和最佳时间；无需注册，不上传游戏记录。
- Service Worker 缓存核心文件，支持首次联网加载后的离线使用。
- GitHub Actions 自动检查 JavaScript 语法和数独引擎基础测试。

## 项目文件

- `index.html`：游戏和交互界面
- `curriculum.js`：22级课程纲要
- `solver.js`：唯一解验证、候选数和逻辑技巧分析
- `tests/smoke.js`：4×4、6×6、9×9基础测试
- `manifest.webmanifest`、`sw.js`、`icon.svg`：网页应用和离线支持
- `.github/workflows/pages.yml`：自动验证与Pages部署

## 重要说明

22级是课程学习路线，不是按年龄推断智力或能力。实际题目会显示逻辑分析器识别到的技巧；目前引擎已实现上述列出的技巧，复杂链式推理、更多鱼形技巧和严格的高阶题目分级仍属于后续引擎扩展范围。题目唯一解由回溯计数保证，但唯一解不等于一定能仅用已实现的逻辑技巧解出。

## 首次启用在线网站

仓库代码和自动部署工作流已准备好。首次发布需要仓库所有者在 GitHub 设置中完成一次授权：

1. 打开 [Settings → Pages](https://github.com/rambitnakav-blip/sudoku-academy/settings/pages)。
2. 在 **Build and deployment → Source** 选择 **GitHub Actions**。
3. 保存后，后续推送到 `main` 会自动执行验证和部署。

当前 GitHub App 连接可以提交仓库代码，但 GitHub Pages 首次开通接口返回权限不足，因此无法替仓库所有者完成这一步。

## 在线地址

https://rambitnakav-blip.github.io/sudoku-academy/
