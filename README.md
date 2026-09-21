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
| 🧠 **上下文感知** | 自动识别否定词（"不焦虑"）、强度修饰符（"非常焦虑"）与反向 intent |
| 📈 **5 个观察指标** | 时间压缩度 / 体验密度 / 结果化程度 / 生命参与度 / 时间留痕度 |
| 🎯 **Top 因子贡献者** | 每个观察指标卡片显示 Top 贡献因子（带百分比）+ ⓘ 情绪切点 |
| 📊 **趋势对比** | 工作台自动对比当前周期 vs 上一周期，6 个最大变化维度高亮 |
| 🎯 **画像自动识别** | 任务化 / 探索型 / 稳定陪伴 三种典型模式 |
| 📅 **时间日历（v1.2）** | GitHub 风格 53 周 × 7 天热力图 + Streak 连续天数卡片 |
| 🔍 **全文搜索（v1.2）** | ⌘/Ctrl + / 快捷键 · 命中片段高亮 · 点击跳转数据库 |
| 📐 **周 × 日热力图** | 时间模式 + 周期性检测 |
| 🔗 **跨维度相关性** | 哪些维度总是一起高/低 |
| 🧪 **Domain 单元测试** | 35 个核心算法测试一键运行（含否定/修饰/聚合/Streak/贡献者/搜索） |
| 📦 **完整数据架构** | 五层解耦 · 事件总线 · 仓储可替换 |
| 💾 **本地优先** | 所有数据存储在 localStorage · 可加密导出 |
| ⓘ **每因子可悬停** | 在工作台 / 因子编辑器 / AI 信号列表悬停 ⓘ 看情绪切点 + 关键词云 |

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

## 🧠 Schema v1.1 · 上下文感知

v1.1 在 v1.0 关键词匹配基础上，引入了三层上下文识别：

| 上下文 | 例子 | 效果 |
|--------|------|------|
| **否定词识别** | "今天**不焦虑**" → 命中 `S1-AN` 但标记 `negated=true` | 不再扣分 |
| **强度修饰** | "**非常**焦虑" / "**有点**焦虑" | confidence 1.4 / 0.7 |
| **反向 intent** | S1-AN/S2-KP 等负向 intent 的因子，被否定 = 好事 | 不再扣分（扣分比 = 否定贡献 / 总贡献） |

```js
// extractSignals 输出示例
{
  key:'S1', cat:'S', src:'焦虑', factorId:'S1-AN',
  confidence: 1.4,           // 来自"非常"修饰
  negated: false,
  negatedWord: null,
  modifierWord: '非常',
  intent: 'negative',
  weight: 1.26              // confidence × 因子权重
}

// "不再焦虑" → 同样的因子，但:
{
  negated: true,
  negatedWord: '不再',
  intent: 'negative',       // 反向 intent 被否定 → 好事
  // scoreFromSignals 中: factorScore['S1-AN'] = 0
}
```

**默认否定词表**（共 13 条，按长度倒序匹配）：不再 / 不是 / 不太 / 从不 / 从未 / 绝不 / 几乎不 / 永不 / 没 / 未 / 无 / 不 / 别

**默认强度修饰符**（共 9 条）：极其 1.5 / 非常 1.4 / 特别 1.3 / 很 1.2 / 比较 1.1 / 稍微 0.8 / 有点 0.7 / 几乎 0.5 / 几乎不 0.3

因子还可独立配置 `negations` 和 `intent` 字段覆盖默认值。所有旧版（v1.0）数据导入时自动迁移到 v1.1，无需手动操作。

---

## 📦 数据导出格式

支持 CSV / JSON / YAML 三种格式，可选密码加密（XOR + Base64）。导出文件结构：

```json
{
  "_schemaVersion": "1.1",
  "_exportedAt": "2026-09-21T01:02:28Z",
  "type": "timetrace-export",
  "rules": [
    {
      "key": "D1", "cat": "D", "weight": 1.0,
      "factors": [
        { "id": "D1-W", "name": "工作", "desc": "...", "signals": [...],
          "weight": 1.0, "enabled": true, "negations": [], "modifiers": [], "intent": "neutral" }
      ]
    }
  ],
  "entries": [ ... ],
  "scenarios": [ ... ]
}
```

`SCHEMA_VERSION` 字典 + `MIGRATIONS['1.0->1.1']` 自动迁移字典让未来升级更平滑。导入时自动检测格式并补齐缺失字段。

---

## 🧪 开发理念

- **零依赖**：单文件 HTML，无任何外部库（前端三件套 425 + 425 = 850 行左右 + Domain 业务逻辑）
- **离线可用**：所有逻辑在浏览器中运行，断网照样工作
- **数据本地**：默认存储在 localStorage，不上云，可一行替换为 IndexedDB
- **可测试**：Domain 层是纯函数，可在 Node 直接单测（命令面板一键运行 35 个测试）
- **可扩展**：五层架构 + Repository 抽象，未来接 LLM / 后端 API 不影响 UI
- **可演进**：Schema 版本号 + MIGRATIONS 字典，未来升级数据不丢
- **可观测**：trimmedMean（10% 截尾均值）抗离群值 + 同比 trend 字段
- **可激励**：Streak 连续记录 + 🔥 emoji 升级 + 累计天数展示

## 🎬 端到端场景（`tasks/scenario-week-of-life.js`）

完整的真实任务线：模拟「林墨」一周 7 天日记 → 抽取 → 评分 → 聚合 → 画像 → 加密导出 → 迁移 → 自定义因子，全程 10 步。

```bash
node tasks/scenario-week-of-life.js
```

输出包含：
- 7 天日记原文 + 抽取命中数（每条 3-9 hits，含否定/修饰）
- 9 维评分（每条 0-10）
- 趋势对比：vs 上一周期 ↑↓ 标识（例：D3 新事件 +2.3，T1 体验留痕 +1.8）
- 5 个观察指标（带条形图）
- 画像分类 + 异常检测 + 周内分布
- 因子热度 TOP5 + 强相关维度对
- 加密导出 round-trip + 错误密码拒绝
- v1.0 → v1.1 自动迁移
- 用户自定义因子 + 非法 intent 校验降级

---

## 🔮 后续规划

- [ ] 接入 LLM 抽取（当前为本地关键词匹配）
- [ ] 跨设备同步（CRDT / Yjs）
- [ ] 周报 / 月报自动生成
- [ ] 因子贡献度可解释（SHAP-like）
- [ ] PWA 离线安装
- [ ] 用户自定义否定词 / 修饰符 / intent
- [ ] KB 编辑器 UI（让用户在浏览器里编辑 signals/factors/negations）
- [ ] entry_segments 时间段切片 UI
- [ ] audit_log 可视化界面

---

## 🗄️ 数据架构（v1.3 解耦）

### 知识库（KB · 11 张静态参考表）

数据文件在 `data/kb/`：

| 表 | 文件 | 记录数 | 主键 |
|----|------|--------|------|
| dimensions | dimensions.json | 9 | code |
| factors | factors.json | 56 | id |
| signals | signals.json | 314 | id |
| factor_signals | factor-signals.json | 299 | (factorId, signalId) |
| negations | negations.json | 14 | id |
| modifiers | modifiers.json | 9 | id |
| intents | intents.json | 3 | code |
| observations | observations.json | 5 | key |
| profile_types | profile-types.json | 3 | code |
| scenarios | scenarios.json | 5 | code |
| moods | moods.json | 8 | code |
| factor_relations | factor-relations.json | 21 | (sourceFactorId, targetFactorId, type) |

### 用户数据（10 张动态表）

定义在 `data/schema/users.json`：

| 表 | 用途 |
|----|------|
| entries | 日记主表（score/factorScores 缓存）|
| entry_signals | 抽取明细（独立存储便于聚合）|
| entry_segments | 一条日记多段（timeOfDay）|
| entry_moods | 一条日记多情绪（带 intensity）|
| entry_tags | 自定义标签 |
| scenarios_custom | 用户自定义场景 |
| observation_snapshots | 每日观察快照（趋势计算）|
| audit_log | 审计日志（before/after 快照）|
| user_preferences | 偏好设置 |
| schema_version | 数据 schema 版本追踪 |

### 工具脚本

```bash
# 验证 KB 和用户数据 schema 完整性（30 项校验）
node data/validate.js

# 从 data/kb/*.json 生成 data/kb-inline.js（运行时 KB）
node data/build-inline.js

# 演示运行时从 KB 加载 + 抽取
node data/kb-loader.js

# 测试 KB-driven 抽取
node data/test-kb-runtime.js

# 跑所有 in-app Domain 单元测试（含 KB 集成测试）
node data/test-unit.js
```

### 解耦原则

1. **KB 与用户数据严格分离**（`data/kb/` vs `data/schema/`）
2. **每张表独立 JSON + `_meta`** 描述 primaryKey/foreignKeys/version
3. **修改 KB 不影响已存在的 user data**（向后兼容）
4. **Domain / App 层只通过 ID 外键引用**，从不硬编码"工作"等字符串
5. **运行时加载** `data/kb-inline.js`（自动生成）→ `window.TT_KB_INDEX`

---

## 📝 License

MIT
