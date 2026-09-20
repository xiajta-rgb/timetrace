# 时痕 TimeTrace

> 让成年人第一次看见自己正在怎么活，而不是只在使用时间。

[![Repo](https://img.shields.io/badge/repo-timetrace-7c5cff?style=flat-square)](https://github.com/xiajta-rgb/timetrace)
[![License](https://img.shields.io/badge/license-MIT-22c55e?style=flat-square)](LICENSE)
[![Stack](https://img.shields.io/badge/stack-vanilla%20JS%20%E2%80%A2%20HTML%20%E2%80%A2%20CSS-ff7849?style=flat-square)](#-技术栈)
[![Local](https://img.shields.io/badge/data-local--first%20%E2%9C%93-0ea5e9?style=flat-square)](#-本地优先)

时痕 TimeTrace 是一套**为成年人设计的时间体验记录工具**。基于 D-S-T 时间体验指标体系（9 维 × 56 因子），用 AI 自动从日记中抽取结构化信号，构建个人画像，识别"时间被压缩"还是"时间在创造"。

🌐 **在线访问**：<https://xiajta-rgb.github.io/timetrace/>（如已开启 Pages）

---

## ✨ 核心能力

| 模块 | 能力 |
|------|------|
| 📊 **D-S-T 指标体系** | 发生 / 结构 / 留痕 三层，9 个一级维度，56 个二级因子 |
| 🤖 **AI 自动抽取** | 写日记自动识别关键词，按因子归类，实时高亮 |
| 📈 **5 个观察指标** | 时间压缩度 / 体验密度 / 结果化程度 / 生命参与度 / 时间留痕度 |
| 🎯 **画像自动识别** | 任务化 / 探索型 / 稳定陪伴 三种典型模式 |
| 📐 **周 × 日热力图** | 时间模式 + 周期性检测 |
| 🔗 **跨维度相关性** | 哪些维度总是一起高/低 |
| 🧪 **Domain 单元测试** | 12 个核心算法测试一键运行 |
| 📦 **完整数据架构** | 五层解耦 · 事件总线 · 仓储可替换 |
| 💾 **本地优先** | 所有数据存储在 localStorage · 可加密导出 |

---

## 🏗 架构：解耦五层

```
┌─────────────────────────────────────────────────────┐
│  UI (5 Views)  ─  index / rules / db / ai / ie      │
└──────────────────────────▲──────────────────────────┘
                           │ subscribe(render)
┌──────────────────────────┴──────────────────────────┐
│  State  ─  EventBus + Store (单一数据源)             │
└──────────────────────────▲──────────────────────────┘
                           │ emit(event, payload)
┌──────────────────────────┴──────────────────────────┐
│  Service  ─  Rule / Entry / Scenario / Extract /     │
│              Profile / ImportExport / Observation    │
└──────────────────────────▲──────────────────────────┘
                           │ call(repo)
┌──────────────────────────┴──────────────────────────┐
│  Repository  ─  IRepository (interface)              │
│                  ├ LocalStorageRepo                  │
│                  ├ InMemoryRepo                      │
│                  └ SafeRepo                          │
└──────────────────────────▲──────────────────────────┘
                           │ inject(domain)
┌──────────────────────────┴──────────────────────────┐
│  Domain  ─  pure functions (可单测)                  │
│              factor / indicator / profile            │
└─────────────────────────────────────────────────────┘
```

DI 容器统一挂在 `window.TT`，5 层之间只通过接口调用，互不感知实现。

---

## 📁 文件结构

```
timetrace/
├── index.html        # 品牌着陆页（对外）
├── app.html          # 完整工作台（对内使用）
│                     #   · 规则管理 / 数据库 / AI 抽取 / 工作台 / 导入导出
│                     #   · 因子编辑器 / 实时高亮 / 热力图 / 相关性矩阵
│                     #   · 异常检测 / TOP10 / 暗色主题 / 命令面板
├── docs/
│   └── factors.html  # 因子指标体系白皮书（56 因子 × 6 维）
├── .gitignore
└── README.md
```

---

## 🚀 快速开始

每个 HTML 文件都可以独立运行：

```bash
# 方式 1：直接双击打开
open index.html
open app.html
open docs/factors.html

# 方式 2：本地服务器（推荐）
python -m http.server 8765
# 然后访问 http://localhost:8765/
```

---

## 🎮 快捷键

- `⌘ / Ctrl + K` — 打开命令面板
- `↑ ↓` — 选择命令
- `↵ Enter` — 执行
- `ESC` — 关闭弹窗
- `T` — 切换暗色主题（顶栏按钮）

---

## 📐 D-S-T 因子体系

| 层 | 维度 | 子维度 | 含义 |
|----|------|--------|------|
| **D** Duration 发生 | D1 / D2 / D3 | 频次 / 强度 / 投入时长 | 这件事发生了吗 |
| **S** State 结构 | S1 / S2 / S3 | 目标性 / 节奏感 / 专注度 | 它是以什么状态发生 |
| **T** Trace 留痕 | T1 / T2 / T3 | 可记录性 / 可分享性 / 再生力 | 它留下了什么 |

5 个可计算的观察指标：

| 指标 | 公式 | 含义 |
|------|------|------|
| 时间压缩度 | `D2×0.4 + (10-D3)×0.3 + (10-T1)×0.3` | 时间被挤压的程度 |
| 体验密度 | `D3×0.5 + T1×0.5` | 单位时间里的体验含量 |
| 结果化程度 | `S1×0.5 + S2×0.5` | 事务被收敛成产出的能力 |
| 生命参与度 | `S3×0.35 + T1×0.3 + T2×0.35` | 真正参与而不是应付 |
| 时间留痕度 | `T1×0.3 + T2×0.35 + T3×0.35` | 时间是否留下可回看的痕迹 |

完整 56 个因子每个包含 6 维：定义 / 情绪切点 / 典型表达 / 关键词云 / 反面信号 / 引导话术，详见 [`docs/factors.html`](docs/factors.html)。

---

## 🧪 开发理念

- **零依赖**：单文件 HTML，无任何外部库（前端三件套 425 + 425 = 850 行左右 + Domain 业务逻辑）
- **离线可用**：所有逻辑在浏览器中运行，断网照样工作
- **数据本地**：默认存储在 localStorage，不上云，可一行替换为 IndexedDB
- **可测试**：Domain 层是纯函数，可在 Node 直接单测（命令面板一键运行 12 个测试）
- **可扩展**：五层架构 + Repository 抽象，未来接 LLM / 后端 API 不影响 UI
- **可演进**：Schema 版本号 + MIGRATIONS 字典，未来升级数据不丢

---

## 📦 数据导出格式

支持 CSV / JSON / YAML 三种格式，可选密码加密（XOR + Base64）。导出文件结构：

```json
{
  "schemaVersion": "1.0",
  "exportedAt": "2026-09-20T10:54:49Z",
  "type": "timetrace-export",
  "rules": { "factors": [...] },
  "entries": [ ... ],
  "scenarios": [ ... ]
}
```

导入时自动检测格式并迁移到当前 schema。

---

## 🔮 后续规划

- [ ] 接入 LLM 抽取（当前为本地关键词匹配）
- [ ] 跨设备同步（CRDT / Yjs）
- [ ] 周报 / 月报自动生成
- [ ] 因子贡献度可解释（SHAP-like）
- [ ] PWA 离线安装

---

## 📝 License

MIT
