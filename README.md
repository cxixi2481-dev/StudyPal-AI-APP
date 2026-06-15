# StudyPal AI App

StudyPal 是一款面向学生的 AI 学习陪伴应用原型。它把番茄钟专注、学习记录、AI 聊天陪伴和阶段复盘整合在一个移动端风格界面里，目标是让用户在自习、备考、论文写作等场景下获得更轻量、更有人情味的陪伴感。

## 项目亮点

- AI 学习搭子：通过聊天页和专注页气泡反馈，模拟陪学、鼓励、提醒和轻度复盘。
- 专注任务启动：用户可以输入本次学习目标，并进入 25 分钟专注计时。
- 沉浸式专注页：提供倒计时、暂停/继续、结束专注和实时陪伴语。
- 今日学习首页：展示今日累计专注时长、连续学习天数、上一次专注记录和快捷开机入口。
- 历史看板：展示近 7 天学习趋势、累计时长、连续学习天数和历史学习记录。
- 学习战报：结束专注后生成本次任务、专注时长、搭子锐评和明日建议。
- 个人中心：展示用户学习数据、陪伴节奏、搭子人格和基础设置入口。

## 技术栈

- React 19
- TypeScript
- TanStack Router / TanStack Start
- Vite
- Tailwind CSS
- Radix UI
- Lucide React
- Bun

## 页面结构

```text
src/routes
├── index.tsx         # 首页 / 今日学习
├── focus-setup.tsx   # 专注任务设置
├── focus.tsx         # 25 分钟专注计时
├── recap.tsx         # 专注结束复盘战报
├── chat.tsx          # AI 搭子聊天
├── history.tsx       # 学习历史看板
└── profile.tsx       # 个人中心
```

## 本地运行

确保本地已安装 Bun。如果还没有安装，可以参考 Bun 官网文档：

```bash
curl -fsSL https://bun.sh/install | bash
```

安装依赖：

```bash
bun install
```

启动开发环境：

```bash
bun run dev
```

构建生产版本：

```bash
bun run build
```

预览构建结果：

```bash
bun run preview
```

代码检查：

```bash
bun run lint
```

代码格式化：

```bash
bun run format
```

## 项目目录

```text
StudyPal
├── public/              # 静态资源
├── src/
│   ├── components/      # 通用组件
│   ├── components/ui/   # UI 基础组件
│   ├── hooks/           # 自定义 Hooks
│   ├── lib/             # 工具函数、模拟数据和配置
│   ├── routes/          # 页面路由
│   ├── router.tsx       # 路由配置
│   ├── start.ts         # TanStack Start 入口
│   └── styles.css       # 全局样式
├── package.json
├── vite.config.ts
├── tsconfig.json
└── bun.lock
```

## 当前状态

当前版本主要是前端交互原型，数据来自 `src/lib/mock.ts` 中的模拟数据。AI 回复、学习记录、战报生成等能力目前以本地 mock 形式呈现，适合用于产品原型展示、交互演示和后续功能迭代。

## 后续可迭代方向

- 接入真实 AI 对话接口，支持个性化学习陪伴和任务拆解。
- 增加用户登录、学习数据持久化和云端同步。
- 支持自定义番茄钟时长、休息提醒和学习计划。
- 增加战报图片导出与社交分享能力。
- 引入学习目标管理、待办清单和长期成长趋势分析。

## 适用场景

- 考研、考公、法考等长期备考
- 论文写作与课程作业推进
- 自习室、线上陪学、学习打卡产品原型
- AI 学习助手类产品 Demo
