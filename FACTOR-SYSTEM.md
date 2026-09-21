
# 时痕 TimeTrace · 因子体系完整参考（v1.3）

> 本文档由 `node data/build-doc.js` 自动从 `data/kb/*.json` 生成。
> 所有数据是单一事实来源，文档结构与 code 完全一致。

| 表 | 记录 |
|---|---:|
| dimensions | 9 |
| factors | 56 |
| signals | 314 |
| factor-signals | 299 |
| negations | 14 |
| modifiers | 9 |
| intents | 3 |
| observations | 5 |
| profile-types | 3 |
| scenarios | 5 |
| moods | 8 |
| factor-relations | 21 |

**构建时间：** 2026-09-21T07:14:19.532Z


# 1. 9 个维度（dimensions）

| code | layer | name | weight | threshold | question |
|------|-------|------|-------:|----------:|----------|
| `D1` | D · Duration 发生 | **时间投入** | 1 | 0.6 | 我的时间去了哪里？ |
| `D2` | D · Duration 发生 | **时间重复** | 0.8 | 0.5 | 多少日子是相似的？ |
| `D3` | D · Duration 发生 | **新事件** | 1 | 0.3 | 出现了多少区分度事件？ |
| `S1` | S · State 结构 | **未来导向** | 0.9 | 0.4 | 我的意识有多少在围绕未来？ |
| `S2` | S · State 结构 | **结果导向** | 0.85 | 0.4 | 我是否只在结果里找意义？ |
| `S3` | S · State 结构 | **主体参与** | 1 | 0.4 | 是我在生活，还是事情带着我走？ |
| `T1` | T · Trace 留痕 | **体验痕迹** | 0.95 | 0.3 | 是否形成可回忆的具体节点？ |
| `T2` | T · Trace 留痕 | **认知变化** | 1 | 0.25 | 我有没有变得不一样？ |
| `T3` | T · Trace 留痕 | **关系连接** | 0.9 | 0.3 | 人与人之间是否留下了痕迹？ |

**描述全文：**
- `D1` **时间投入**：流向 9 大类生活场景
- `D2` **时间重复**：相似日占比、重复活动
- `D3` **新事件**：新地点、新人物、新体验
- `S1` **未来导向**：计划、目标、预期、担忧
- `S2` **结果导向**：做完了吗？达成了吗？
- `S3` **主体参与**：主动选择 / 探索 / 创造
- `T1` **体验痕迹**：具体、独特的记忆节点
- `T2` **认知变化**：新发现、新理解、旧观点被推翻
- `T3` **关系连接**：新认识、深度交流、关系变化


# 2. 56 个因子（factors）

每个因子含：id / name / emotion 情绪切点 / description / weight / intent / enabled / signals。

### D1 · Duration 发生 · 时间投入（8 个因子）

#### `D1-W` · 工作

- **情绪切点**：身份表达
- **描述**：职业投入的总量与质量。不是问"你勤不勤奋"，而是问"这段时间里你把自己交给了什么"。
- **权重**：1
- **意图**：`neutral`（中性：仅反映存在）
- **启用**：✓
- **关联信号**（14 个）：
  - `sig_work` "工作" (w=1)
  - `sig_meeting` "开会" (w=1) [loose]
  - `sig_meeting_loose` "会议" (w=1)
  - `sig_meeting_past` "开了会" (w=0.9) [loose]
  - `sig_overtime` "加班" (w=1) [loose]
  - `sig_overtime_past` "加了班" (w=0.9) [loose]
  - `sig_project` "项目" (w=0.8)
  - `sig_report` "汇报" (w=0.8)
  - `sig_sync` "同步" (w=0.7)
  - `sig_okr` "OKR" (w=0.8) _(跨维度)_
  - `sig_daily` "日报" (w=0.7)
  - `sig_weekly` "周会" (w=0.7)
  - `sig_regular` "例会" (w=0.7)
  - `sig_deadline` "deadline" (w=0.8) _(跨维度)_

#### `D1-L` · 学习

- **情绪切点**：自我增值
- **描述**：主动增长的时间投入。衡量一个人是否在为自己投资未来——不是为了产出，而是为了让自己不同。
- **权重**：0.7
- **意图**：`positive`（正向：越高越好）
- **启用**：✓
- **关联信号**（14 个）：
  - `sig_study` "学习" (w=1) [loose]
  - `sig_study_past` "学了" (w=1)
  - `sig_study_to` "学到" (w=1)
  - `sig_read` "阅读" (w=0.9) [loose]
  - `sig_read_past` "读过" (w=0.9)
  - `sig_read_book` "看了书" (w=1)
  - `sig_read_part` "看了点" (w=1)
  - `sig_book` "读书" (w=0.9)
  - `sig_class` "上课" (w=1)
  - `sig_course` "课程" (w=0.7)
  - `sig_train` "培训" (w=0.8)
  - `sig_practice` "练习" (w=0.8)
  - `sig_vocab` "背单词" (w=1)
  - `sig_paper` "论文" (w=0.9)

#### `D1-F` · 家庭

- **情绪切点**：情感归位
- **描述**：与家人共度的时间。不是共处一室，而是真正的在场。
- **权重**：0.9
- **意图**：`positive`（正向：越高越好）
- **启用**：✓
- **关联信号**（11 个）：
  - `sig_family` "家庭" (w=1)
  - `sig_child` "孩子" (w=1)
  - `sig_companion` "陪伴" (w=1)
  - `sig_companion_past` "陪了" (w=1)
  - `sig_companion_child` "陪孩子" (w=1)
  - `sig_family_member` "家人" (w=1)
  - `sig_parents` "父母" (w=1)
  - `sig_spouse` "配偶" (w=1)
  - `sig_housework` "家务" (w=0.8)
  - `sig_cook` "做饭" (w=0.8)
  - `sig_pickup` "接送" (w=0.8)

#### `D1-S` · 社交

- **情绪切点**：归属感
- **描述**：主动维护的关系性时间投入。
- **权重**：0.7
- **意图**：`neutral`（中性：仅反映存在）
- **启用**：✓
- **关联信号**（10 个）：
  - `sig_social` "社交" (w=1)
  - `sig_friend` "朋友" (w=1)
  - `sig_meet_friend` "见了" (w=1)
  - `sig_meet_past` "见朋友" (w=1)
  - `sig_eat_together` "去吃饭" (w=1)
  - `sig_party` "聚会" (w=0.9)
  - `sig_dinner` "饭局" (w=0.7)
  - `sig_banquet` "应酬" (w=0.6)
  - `sig_team_building` "团建" (w=0.7)
  - `sig_date` "约会" (w=0.9)

#### `D1-A` · 独处

- **情绪切点**：自我对话
- **描述**：一个人安静地与自己相处的时间。
- **权重**：0.8
- **意图**：`positive`（正向：越高越好）
- **启用**：✓
- **关联信号**（7 个）：
  - `sig_alone` "独处" (w=1)
  - `sig_daze` "发呆" (w=0.8)
  - `sig_alone_self` "一个人" (w=0.9)
  - `sig_alone_solo` "独自" (w=0.9)
  - `sig_sit_quiet` "静坐" (w=1)
  - `sig_meditate` "冥想" (w=1)
  - `sig_walk` "散步" (w=0.8)

#### `D1-Z` · 睡眠

- **情绪切点**：身体修复
- **描述**：睡觉与休息的质量。
- **权重**：0.6
- **意图**：`positive`（正向：越高越好）
- **启用**：✓
- **关联信号**（7 个）：
  - `sig_sleep` "睡眠" (w=1)
  - `sig_sleep_past` "睡了" (w=1)
  - `sig_sleep_act` "睡觉" (w=1)
  - `sig_nap` "午睡" (w=1)
  - `sig_rest` "休息" (w=0.8)
  - `sig_lie_in` "赖床" (w=0.7)
  - `sig_insomnia` "失眠" (w=1)

#### `D1-T` · 通勤

- **情绪切点**：机械重复
- **描述**：上下班路上的时间。
- **权重**：0.5
- **意图**：`neutral`（中性：仅反映存在）
- **启用**：✓
- **关联信号**（6 个）：
  - `sig_commute` "通勤" (w=1)
  - `sig_on_road` "路上" (w=0.7)
  - `sig_subway` "地铁" (w=0.8)
  - `sig_bus` "公交" (w=0.8)
  - `sig_drive` "开车" (w=0.9)
  - `sig_taxi` "打车" (w=0.9)

#### `D1-X` · 闲暇/娱乐

- **情绪切点**：自我充电
- **描述**：非功利性的玩耍、看剧、游戏、爱好等为自己充电的时间。
- **权重**：0.6
- **意图**：`positive`（正向：越高越好）
- **启用**：✓
- **关联信号**（19 个）：
  - `sig_drama` "看剧" (w=1)
  - `sig_drama_past` "看了剧" (w=1)
  - `sig_binge` "追剧" (w=1)
  - `sig_movie` "电影" (w=0.8)
  - `sig_variety` "综艺" (w=0.7)
  - `sig_game` "打游戏" (w=1)
  - `sig_game_noun` "游戏" (w=0.9)
  - `sig_game_past` "玩了游戏" (w=1)
  - `sig_play` "玩" (w=0.5)
  - `sig_music_listen` "听歌" (w=0.9)
  - `sig_music` "音乐" (w=0.7)
  - `sig_music_play` "听音乐" (w=0.9)
  - `sig_tiktok` "刷抖音" (w=0.8)
  - `sig_weibo` "刷微博" (w=0.8)
  - `sig_fitness` "健身" (w=1)
  - `sig_sport` "运动" (w=1)
  - `sig_run` "跑步" (w=1)
  - `sig_hike` "爬山" (w=1)
  - `sig_draw` "画画" (w=1)

### D2 · Duration 发生 · 时间重复（5 个因子）

#### `D2-SIM` · 相似日占比

- **情绪切点**：无差别感
- **描述**：重复度高的日子占总天数比例。
- **权重**：0.8
- **意图**：`neutral`（中性：仅反映存在）
- **启用**：✓
- **关联信号**（1 个）：
  - `sig_repeat` "重复" (w=1)

#### `D2-ACT` · 重复活动

- **情绪切点**：麻木
- **描述**：反复做同一件事。
- **权重**：0.7
- **意图**：`neutral`（中性：仅反映存在）
- **启用**：✓
- **关联信号**（0 个）：
  - _（无）_

#### `D2-RT` · 重复路径

- **情绪切点**：惯性
- **描述**：每天走同样的路、去同样的地方。
- **权重**：0.6
- **意图**：`neutral`（中性：仅反映存在）
- **启用**：✓
- **关联信号**（4 个）：
  - `sig_old_place` "老地方" (w=1)
  - `sig_old_road` "老路" (w=1)
  - `sig_old_shop` "老店" (w=1)
  - `sig_same_place` "同一家" (w=1)

#### `D2-RP` · 重复社交

- **情绪切点**：舒适圈
- **描述**：反复见同一批人。
- **权重**：0.6
- **意图**：`neutral`（中性：仅反映存在）
- **启用**：✓
- **关联信号**（2 个）：
  - `sig_old_friend` "老朋友" (w=1)
  - `sig_old_colleague` "老同事" (w=1)

#### `D2-RC` · 重复内容消费

- **情绪切点**：信息茧房
- **描述**：刷同质化内容（被否定时是好事）。
- **权重**：0.9
- **意图**：`negative`（反向：否定时反而加分）
- **启用**：✓
- **关联信号**（4 个）：
  - `sig_scroll` "刷" (w=1) _(negation→0)_
  - `sig_short_video` "短视频" (w=1)
  - `sig_phone` "刷手机" (w=1)
  - `sig_moments` "看朋友圈" (w=0.7)

### D3 · Duration 发生 · 新事件（8 个因子）

#### `D3-NP` · 新地点

- **情绪切点**：探索欲
- **描述**：第一次去到的地方。
- **权重**：0.9
- **意图**：`positive`（正向：越高越好）
- **启用**：✓
- **关联信号**（5 个）：
  - `sig_new_place_first` "第一次去" (w=1)
  - `sig_never_been` "没去过" (w=1)
  - `sig_new_open` "新开的" (w=1)
  - `sig_new_spot` "新地方" (w=1)
  - `sig_first_visit` "第一次到" (w=1)

#### `D3-NB` · 新人物

- **情绪切点**：新鲜感
- **描述**：新认识的人（注意：与 T3-NK 区分——这里强调"出现"，T3 强调"建立联系"）。
- **权重**：0.9
- **意图**：`positive`（正向：越高越好）
- **启用**：✓
- **关联信号**（2 个）：
  - `sig_encounter` "偶遇" (w=1)
  - `sig_new_person` "新来的" (w=1)

#### `D3-NE` · 新体验

- **情绪切点**：冒险
- **描述**：第一次尝试的事物。
- **权重**：1
- **意图**：`positive`（正向：越高越好）
- **启用**：✓
- **关联信号**（4 个）：
  - `sig_first_time` "第一次" (w=1)
  - `sig_first_try` "第一次尝试" (w=1)
  - `sig_first_eat` "第一次吃" (w=1)
  - `sig_first_time_alt` "头一回" (w=1) _(T1-FR 也用)_

#### `D3-NA` · 新行动

- **情绪切点**：突破
- **描述**：主动做了以前没做过的事（强调动作本身的新颖，不一定是体验）。
- **权重**：0.8
- **意图**：`positive`（正向：越高越好）
- **启用**：✓
- **关联信号**（4 个）：
  - `sig_unprecedented` "破天荒" (w=1)
  - `sig_first_do` "第一次做" (w=1)
  - `sig_first_walk` "第一次走" (w=1)
  - `sig_first_meet` "第一次约" (w=1)

#### `D3-UE` · 意外事件

- **情绪切点**：刺激
- **描述**：计划外的突发状况。
- **权重**：1
- **意图**：`positive`（正向：越高越好）
- **启用**：✓
- **关联信号**（5 个）：
  - `sig_accident` "意外" (w=1)
  - `sig_sudden` "突然" (w=1)
  - `sig_surprise` "惊喜" (w=1)
  - `sig_surprised` "惊" (w=0.7)
  - `sig_sudden_event` "突发" (w=1)

#### `D3-ML` · 完成重要节点

- **情绪切点**：成就感
- **描述**：关键里程碑达成。
- **权重**：0.9
- **意图**：`positive`（正向：越高越好）
- **启用**：✓
- **关联信号**（5 个）：
  - `sig_graduate` "毕业" (w=1)
  - `sig_join` "入职" (w=1)
  - `sig_launch` "上线" (w=1)
  - `sig_release` "发布" (w=1)
  - `sig_achieve` "达成" (w=1)

#### `D3-CG` · 认知变化

- **情绪切点**：啊哈时刻
- **描述**：产生了新的理解（与 T2-UN 区分——这里强调"瞬间的洞察"，T2 强调"沉淀后的理解"）。
- **权重**：1
- **意图**：`positive`（正向：越高越好）
- **启用**：✓
- **关联信号**（4 个）：
  - `sig_realize` "突然明白" (w=1)
  - `sig_think_through` "想通" (w=1)
  - `sig_realize2` "意识到" (w=1)
  - `sig_epiphany` "顿悟" (w=1)

#### `D3-EM` · 强烈情绪事件

- **情绪切点**：情绪过载
- **描述**：情绪大起大落的标志性事件（与 T1-EM 区分——D3 是"事件"，T1 是"被记住的细节"）。
- **权重**：0.8
- **意图**：`positive`（正向：越高越好）
- **启用**：✓
- **关联信号**（6 个）：
  - `sig_collapse` "崩溃" (w=1)
  - `sig_fury` "暴怒" (w=1)
  - `sig_ecstasy` "狂喜" (w=1)
  - `sig_sob` "嚎啕大哭" (w=1)
  - `sig_furious` "气炸" (w=1)
  - `sig_heartbreak` "心碎" (w=1)

### S1 · State 结构 · 未来导向（6 个因子）

#### `S1-PL` · 计划

- **情绪切点**：主动权
- **描述**：为未来做安排。
- **权重**：0.7
- **意图**：`positive`（正向：越高越好）
- **启用**：✓
- **关联信号**（4 个）：
  - `sig_plan` "计划" (w=1)
  - `sig_plan_to` "打算" (w=1)
  - `sig_arrange` "安排" (w=1)
  - `sig_reserve` "预定" (w=1)

#### `S1-GO` · 目标

- **情绪切点**：方向感
- **描述**：设定或追求目标。
- **权重**：0.8
- **意图**：`positive`（正向：越高越好）
- **启用**：✓
- **关联信号**（5 个）：
  - `sig_goal` "目标" (w=1)
  - `sig_aim` "目的" (w=0.7)
  - `sig_vision` "愿景" (w=1)
  - `sig_aspiration` "想成为" (w=1)
  - `sig_want` "要做到" (w=0.8)

#### `S1-EX` · 预期

- **情绪切点**：希望感
- **描述**：对未来的想象。
- **权重**：0.6
- **意图**：`neutral`（中性：仅反映存在）
- **启用**：✓
- **关联信号**（5 个）：
  - `sig_expect` "期待" (w=1)
  - `sig_hope` "希望" (w=1)
  - `sig_imagine` "预想" (w=0.7)
  - `sig_prediction` "预期" (w=1)
  - `sig_assume` "设想" (w=0.7)

#### `S1-WO` · 担忧

- **情绪切点**：隐性不安
- **描述**：对未来不确定性的焦虑（被否定时是好事——"不再担心"）。
- **权重**：0.8
- **意图**：`negative`（反向：否定时反而加分）
- **启用**：✓
- **关联信号**（4 个）：
  - `sig_worry` "担心" (w=1) _(negation→0)_
  - `sig_concern` "担忧" (w=1)
  - `sig_anxiety` "忧虑" (w=1)
  - `sig_uneasy` "放心不下" (w=1)

#### `S1-AN` · 焦虑

- **情绪切点**：压力感
- **描述**：紧张与压力（被否定时是好事——"不焦虑了"）。
- **权重**：0.9
- **意图**：`negative`（反向：否定时反而加分）
- **启用**：✓
- **关联信号**（5 个）：
  - `sig_anxious` "焦虑" (w=1) _(negation→0)_
  - `sig_tense` "紧张" (w=1)
  - `sig_pressure` "压力" (w=1)
  - `sig_anxiety_feel` "焦虑感" (w=1)
  - `sig_breathless` "喘不过气" (w=1)

#### `S1-FP` · 为未来准备

- **情绪切点**：远见
- **描述**：为将来做储备。
- **权重**：0.7
- **意图**：`positive`（正向：越高越好）
- **启用**：✓
- **关联信号**（7 个）：
  - `sig_long_term` "长期" (w=1)
  - `sig_next_year` "明年" (w=1)
  - `sig_five_years` "未来五年" (w=1)
  - `sig_ten_years` "十年计划" (w=1)
  - `sig_save_money` "存钱" (w=1)
  - `sig_savings` "储蓄" (w=1)
  - `sig_cert` "考证" (w=1)

### S2 · State 结构 · 结果导向（5 个因子）

#### `S2-DG` · 目标达成

- **情绪切点**：成就感
- **描述**：看结果是否达到（被否定时是好事——"不再追求达成"是放下执念）。
- **权重**：0.9
- **意图**：`negative`（反向：否定时反而加分）
- **启用**：✓
- **关联信号**（4 个）：
  - `sig_accomplish` "实现" (w=1) _(negation→0)_
  - `sig_reach` "达到" (w=1)
  - `sig_target_done` "完成目标" (w=1)
  - `sig_meet_kpi` "达标" (w=1)

#### `S2-OU` · 产出/交付

- **情绪切点**：效率感
- **描述**：看是否有产出（被否定时是好事）。
- **权重**：0.9
- **意图**：`negative`（反向：否定时反而加分）
- **启用**：✓
- **关联信号**（4 个）：
  - `sig_output` "产出" (w=1) _(negation→0)_
  - `sig_deliver` "交付" (w=1)
  - `sig_export` "输出" (w=1)
  - `sig_make` "做出" (w=1)

#### `S2-KP` · KPI/OKR

- **情绪切点**：数据焦虑
- **描述**：量化指标驱动（被否定时是好事——"不被 KPI 绑架"）。
- **权重**：1
- **意图**：`negative`（反向：否定时反而加分）
- **启用**：✓
- **关联信号**（6 个）：
  - `sig_kpi` "KPI" (w=1) _(negation→0)_
  - `sig_okr` "OKR" (w=1) _(D1-W 也用)_
  - `sig_kpi_alt` "指标" (w=1)
  - `sig_performance` "业绩" (w=1)
  - `sig_data` "数据" (w=0.5)
  - `sig_review` "业绩考核" (w=1)

#### `S2-EF` · 效率追求

- **情绪切点**：卷
- **描述**：追求高效率（被否定时是好事——"不再卷效率"是放松）。
- **权重**：0.8
- **意图**：`negative`（反向：否定时反而加分）
- **启用**：✓
- **关联信号**（5 个）：
  - `sig_efficient` "效率" (w=1) _(negation→0)_
  - `sig_high_eff` "高效" (w=1)
  - `sig_optimize` "优化" (w=1)
  - `sig_boost_eff` "提效" (w=1)
  - `sig_accelerate` "加速" (w=1)

#### `S2-DL` · 截止驱动

- **情绪切点**：压力
- **描述**：被 deadline 牵引（被否定时是好事）。
- **权重**：1
- **意图**：`negative`（反向：否定时反而加分）
- **启用**：✓
- **关联信号**（5 个）：
  - `sig_due` "截止" (w=1) _(negation→0)_
  - `sig_due_past` "期限" (w=1)
  - `sig_last_due` "最后期限" (w=1)
  - `sig_ddl` "DDL" (w=1)
  - `sig_deadline` "deadline" (w=1) _(D1-W 也用)_

### S3 · State 结构 · 主体参与（7 个因子）

#### `S3-CH` · 主动选择

- **情绪切点**：掌控感
- **描述**：自己做出决定。
- **权重**：1
- **意图**：`positive`（正向：越高越好）
- **启用**：✓
- **关联信号**（5 个）：
  - `sig_decide` "决定" (w=1)
  - `sig_choose` "选择" (w=1)
  - `sig_pick` "选" (w=1)
  - `sig_pick_long` "挑" (w=1)
  - `sig_autonomy` "决定权" (w=1)

#### `S3-EX` · 主动探索

- **情绪切点**：好奇心
- **描述**：主动去尝试新事物。
- **权重**：1
- **意图**：`positive`（正向：越高越好）
- **启用**：✓
- **关联信号**（5 个）：
  - `sig_explore` "探索" (w=1)
  - `sig_try` "试一试" (w=1)
  - `sig_proactive` "主动找" (w=1)
  - `sig_discover` "发现" (w=1) _(T2-DI 也用)_
  - `sig_go_discover` "去发现" (w=1) _(主动去发现)_

#### `S3-CR` · 主动创造

- **情绪切点**：创造力
- **描述**：自己设计或创作。
- **权重**：1
- **意图**：`positive`（正向：越高越好）
- **启用**：✓
- **关联信号**（5 个）：
  - `sig_create` "创造" (w=1)
  - `sig_design` "设计" (w=1)
  - `sig_write_create` "创作" (w=1)
  - `sig_invent` "发明" (w=1)
  - `sig_make_thing` "做出来" (w=1)

#### `S3-EP` · 主动表达

- **情绪切点**：自我呈现
- **描述**：主动表达自己。
- **权重**：0.8
- **意图**：`positive`（正向：越高越好）
- **启用**：✓
- **关联信号**（5 个）：
  - `sig_express` "表达" (w=1)
  - `sig_say` "说出" (w=1)
  - `sig_share` "分享" (w=1)
  - `sig_tell` "讲述" (w=1)
  - `sig_write_down` "写下来" (w=1)

#### `S3-CG` · 主动改变

- **情绪切点**：能动性
- **描述**：主动做出改变。
- **权重**：1
- **意图**：`positive`（正向：越高越好）
- **启用**：✓
- **关联信号**（5 个）：
  - `sig_change` "改变" (w=1)
  - `sig_adjust` "调整" (w=1)
  - `sig_redo` "重新" (w=1)
  - `sig_redo_over` "推翻重来" (w=1)
  - `sig_change_way` "换一种方式" (w=1)

#### `S3-PE` · 被动执行

- **情绪切点**：无力感
- **描述**：被任务牵着走（被否定时是好事）。
- **权重**：0.9
- **意图**：`negative`（反向：否定时反而加分）
- **启用**：✓
- **关联信号**（5 个）：
  - `sig_assigned` "被安排" (w=1) _(negation→0)_
  - `sig_required` "被要求" (w=1)
  - `sig_no_choice` "没办法" (w=1)
  - `sig_must` "不得不" (w=1)
  - `sig_only_can` "只能" (w=1)

#### `S3-PA` · 被动接受

- **情绪切点**：被动
- **描述**：被动接收信息（被否定时是好事）。
- **权重**：0.7
- **意图**：`negative`（反向：否定时反而加分）
- **启用**：✓
- **关联信号**（2 个）：
  - `sig_informed` "被告知" (w=1) _(negation→0)_
  - `sig_notified` "被通知" (w=1)

### T1 · Trace 留痕 · 体验痕迹（5 个因子）

#### `T1-SE` · 感官细节

- **情绪切点**：通感
- **描述**：(味道/触感/声音) 被记住。
- **权重**：0.9
- **意图**：`positive`（正向：越高越好）
- **启用**：✓
- **关联信号**（6 个）：
  - `sig_taste` "味道" (w=1)
  - `sig_touch` "触感" (w=1)
  - `sig_sound` "声音" (w=1)
  - `sig_smell` "气味" (w=1)
  - `sig_smell_good` "好闻" (w=1)
  - `sig_tasty` "好吃" (w=1)

#### `T1-SC` · 场景细节

- **情绪切点**：画面感
- **描述**：(天气/地点) 的具体画面。
- **权重**：0.9
- **意图**：`positive`（正向：越高越好）
- **启用**：✓
- **关联信号**（6 个）：
  - `sig_rain` "雨" (w=1)
  - `sig_sun` "阳光" (w=1)
  - `sig_snow` "下雪" (w=1)
  - `sig_weather` "天气" (w=1)
  - `sig_cafe` "咖啡馆" (w=1)
  - `sig_street` "那条街" (w=1)

#### `T1-EM` · 情绪峰值

- **情绪切点**：情感印记
- **描述**：(喜/悲/静) 的强烈感受（与 D3-EM 区分——T1 是"被记住"，D3 是"事件本身"）。
- **权重**：1
- **意图**：`positive`（正向：越高越好）
- **启用**：✓
- **关联信号**（6 个）：
  - `sig_excited` "激动" (w=1)
  - `sig_calm` "平静" (w=1)
  - `sig_comfortable` "舒服" (w=1)
  - `sig_warm_heart` "暖心" (w=1)
  - `sig_lost` "失落" (w=1)
  - `sig_touched` "窝心" (w=1)

#### `T1-TA` · 时间锚点

- **情绪切点**：珍藏感
- **描述**：那一刻的清晰回忆。
- **权重**：1
- **意图**：`positive`（正向：越高越好）
- **启用**：✓
- **关联信号**（5 个）：
  - `sig_moment` "那一刻" (w=1)
  - `sig_remember` "记得" (w=1)
  - `sig_unforgettable` "难忘" (w=1)
  - `sig_remember_forever` "永远记得" (w=1)
  - `sig_instant` "那一瞬间" (w=1)

#### `T1-FR` · 独特首次

- **情绪切点**：人生高光
- **描述**：第一次的鲜明记忆。
- **权重**：1
- **意图**：`positive`（正向：越高越好）
- **启用**：✓
- **关联信号**（3 个）：
  - `sig_life_first` "人生第一次" (w=1)
  - `sig_first_experience` "初体验" (w=1)
  - `sig_first_time_alt` "头一回" (w=1) _(D3-NE 也用)_

### T2 · Trace 留痕 · 认知变化（5 个因子）

#### `T2-DI` · 新发现

- **情绪切点**：好奇心
- **描述**：新发现了某件事。
- **权重**：0.9
- **意图**：`positive`（正向：越高越好）
- **启用**：✓
- **关联信号**（3 个）：
  - `sig_discover` "发现" (w=1) _(S3-EX 也用)_
  - `sig_found` "找到了" (w=1)
  - `sig_notice` "注意到" (w=1)

#### `T2-UN` · 新理解

- **情绪切点**：成长感
- **描述**：对某事有了新的理解。
- **权重**：1
- **意图**：`positive`（正向：越高越好）
- **启用**：✓
- **关联信号**（4 个）：
  - `sig_understand` "明白" (w=1) _(模糊词"懂"已并入此)_
  - `sig_grasp` "搞懂" (w=1)
  - `sig_comprehend` "领悟" (w=1)
  - `sig_aha` "恍然大悟" (w=1)

#### `T2-OV` · 旧观点推翻

- **情绪切点**：认知重构
- **描述**：以前的看法被推翻。
- **权重**：1
- **意图**：`positive`（正向：越高越好）
- **启用**：✓
- **关联信号**（5 个）：
  - `sig_overturn` "推翻" (w=1)
  - `sig_change_view` "改变看法" (w=1)
  - `sig_no_longer_believe` "不再认为" (w=1)
  - `sig_refresh_view` "改观" (w=1)
  - `sig_refresh_cognition` "刷新认知" (w=1)

#### `T2-VA` · 新价值排序

- **情绪切点**：价值观升级
- **描述**：内心优先级重新排列。
- **权重**：1
- **意图**：`positive`（正向：越高越好）
- **启用**：✓
- **关联信号**（5 个）：
  - `sig_more_important` "更重要" (w=1)
  - `sig_less_important` "不再重要" (w=1)
  - `sig_re_sort` "重新排序" (w=1)
  - `sig_priority` "优先级" (w=0.7)
  - `sig_top_priority` "放在第一位" (w=1)

#### `T2-SR` · 自我重新认识

- **情绪切点**：自我觉醒
- **描述**：对自己有了新的认知。
- **权重**：1
- **意图**：`positive`（正向：越高越好）
- **启用**：✓
- **关联信号**（5 个）：
  - `sig_self_realize` "原来我是" (w=1)
  - `sig_i_thought` "我以为" (w=1)
  - `sig_i_realize` "我才知道" (w=1)
  - `sig_discover_self` "发现自己" (w=1)
  - `sig_re_know_self` "重新认识自己" (w=1)

### T3 · Trace 留痕 · 关系连接（7 个因子）

#### `T3-NK` · 新认识

- **情绪切点**：社交扩展
- **描述**：新建立了联系（与 D3-NB 区分——T3 强调"建立联系"，D3 强调"出现"）。
- **权重**：0.8
- **意图**：`positive`（正向：越高越好）
- **启用**：✓
- **关联信号**（2 个）：
  - `sig_make_friend` "结识" (w=1)
  - `sig_add_friend` "加好友" (w=1)

#### `T3-DC` · 深度交流

- **情绪切点**：灵魂共振
- **描述**：与他人深入对话。
- **权重**：1
- **意图**：`positive`（正向：越高越好）
- **启用**：✓
- **关联信号**（5 个）：
  - `sig_deep_talk` "深度" (w=1)
  - `sig_deep_in` "深入" (w=1)
  - `sig_long_talk` "长谈" (w=1)
  - `sig_heart_to_heart` "推心置腹" (w=1)
  - `sig_open_heart` "敞开心扉" (w=1)

#### `T3-CR` · 关系变化

- **情绪切点**：关系重构
- **描述**：关系发生转变。
- **权重**：1
- **意图**：`positive`（正向：越高越好）
- **启用**：✓
- **关联信号**（6 个）：
  - `sig_reconcile` "和好" (w=1)
  - `sig_breakup` "分手" (w=1)
  - `sig_quarrel` "闹翻" (w=1)
  - `sig_rel_change` "关系变化" (w=1)
  - `sig_distant` "疏远" (w=1)
  - `sig_close` "走近" (w=1)

#### `T3-CE` · 共同经历

- **情绪切点**：连接感
- **描述**：一起做了某件事。
- **权重**：0.9
- **意图**：`positive`（正向：越高越好）
- **启用**：✓
- **关联信号**（5 个）：
  - `sig_together` "一起" (w=1) _(D1-F 陪伴也用)_
  - `sig_together_long` "共同" (w=1)
  - `sig_together_one` "一块儿" (w=1)
  - `sig_we_together` "我们一起" (w=1)
  - `sig_companion` "陪伴" (w=1) _(D1-F 陪伴也用)_

#### `T3-EI` · 情感表达

- **情绪切点**：情感流动
- **描述**：表达了真实情感。
- **权重**：1
- **意图**：`positive`（正向：越高越好）
- **启用**：✓
- **关联信号**（5 个）：
  - `sig_confess` "表白" (w=1)
  - `sig_hug` "拥抱" (w=1)
  - `sig_shake_hand` "握手" (w=1)
  - `sig_tears` "流泪" (w=1)
  - `sig_cry_complain` "哭诉" (w=1)

#### `T3-UD` · 被理解

- **情绪切点**：被看见
- **描述**：感觉到被理解。
- **权重**：1
- **意图**：`positive`（正向：越高越好）
- **启用**：✓
- **关联信号**（4 个）：
  - `sig_understood` "被理解" (w=1)
  - `sig_understand_me` "懂我" (w=1)
  - `sig_you_understand` "你懂" (w=1)
  - `sig_understood_passive` "被懂得" (w=1)

#### `T3-UU` · 理解别人

- **情绪切点**：共情
- **描述**：理解了他人。
- **权重**：0.9
- **意图**：`positive`（正向：越高越好）
- **启用**：✓
- **关联信号**（4 个）：
  - `sig_understand_him` "理解他" (w=1)
  - `sig_understand_him2` "懂他" (w=1)
  - `sig_i_understand_you` "我懂你" (w=1)
  - `sig_turns_out_him` "原来他" (w=0.8)


# 3. 上下文识别


### 3.1 否定词（negations · 14 条）

按 priority 倒序匹配（数值越大越优先）。

| id | text | priority | intentOverride | scope |
|---|---|---:|---|---|
| `neg_no_more` | **不再** | 100 | reverse | global |
| `neg_not` | **不是** | 95 | reverse | global |
| `neg_not_too` | **不太** | 90 | reverse | global |
| `neg_never` | **从不** | 85 | reverse | global |
| `neg_never2` | **从未** | 85 | reverse | global |
| `neg_never3` | **绝不** | 80 | reverse | global |
| `neg_almost_not` | **几乎不** | 75 | reverse | global |
| `neg_never_ever` | **永不** | 70 | reverse | global |
| `neg_not_roll` | **不卷** | 65 | reverse | global |
| `neg_no_have` | **没** | 60 | reverse | global |
| `neg_not_yet` | **未** | 55 | reverse | global |
| `neg_none` | **无** | 50 | reverse | global |
| `neg_no` | **不** | 40 | reverse | global |
| `neg_dont` | **别** | 35 | reverse | global |


### 3.2 修饰符（modifiers · 9 条）

按 priority 倒序匹配。confidence 与 factor.weight 相乘作为最终权重。

| id | text | confidence | priority | scope |
|---|---|---:|---:|---|
| `mod_extreme` | **极其** | 1.5 | 95 | global |
| `mod_very` | **非常** | 1.4 | 90 | global |
| `mod_especial` | **特别** | 1.3 | 85 | global |
| `mod_pretty` | **很** | 1.2 | 80 | global |
| `mod_relatively` | **比较** | 1.1 | 75 | global |
| `mod_slightly` | **稍微** | 0.8 | 70 | global |
| `mod_a_bit` | **有点** | 0.7 | 65 | global |
| `mod_almost` | **几乎** | 0.5 | 60 | global |
| `mod_almost_not` | **几乎不** | 0.3 | 100 | global |


# 4. 意图（intents · 3 条）

### `positive` · 正向

- 分数越高越好（否定时反而扣分）
- reverseOnNegate: false
- color: `oklch(44% 0.072 168)`

### `negative` · 反向

- 分数越低越好（否定时反而加分）
- reverseOnNegate: true
- color: `oklch(60% 0.140 45)`

### `neutral` · 中性

- 仅反映存在与否
- reverseOnNegate: false
- color: `oklch(70% 0.105 75)`


# 5. 5 个观察指标（observations）

### `timeCompression` · 时间压缩度

- **公式**：`D2*0.4 + (10-D3)*0.3 + (10-T1)*0.3`
- **维度权重**：{"D2":0.4,"D3":-0.3,"T1":-0.3}
- **范围**：[0, 10]
- **高分含义**：warning（warning=需要警惕 / good=好事）
- **描述**：过去一段时间是否容易被压缩成模糊的"过去"
- **建议**：尝试增加新事件、保留具体回忆

### `experienceDensity` · 体验密度

- **公式**：`D3*0.5 + T1*0.5`
- **维度权重**：{"D3":0.5,"T1":0.5}
- **范围**：[0, 10]
- **高分含义**：good（warning=需要警惕 / good=好事）
- **描述**：单位时间内产生多少具有区分度的体验节点
- **建议**：保持节奏，警惕密度下降

### `resultOrientation` · 结果化程度

- **公式**：`S1*0.5 + S2*0.5`
- **维度权重**：{"S1":0.5,"S2":0.5}
- **范围**：[0, 10]
- **高分含义**：warning（warning=需要警惕 / good=好事）
- **描述**：当前生活有多大比例被目标和结果牵引
- **建议**：适度放下，享受过程

### `lifeParticipation` · 生命参与度

- **公式**：`S3*0.35 + T1*0.3 + T2*0.35`
- **维度权重**：{"S3":0.35,"T1":0.3,"T2":0.35}
- **范围**：[0, 10]
- **高分含义**：good（warning=需要警惕 / good=好事）
- **描述**：自己有多少真正参与了正在发生的事情
- **建议**：主动选择与创造是关键

### `timeTrace` · 时间留痕度

- **公式**：`T1*0.3 + T2*0.35 + T3*0.35`
- **维度权重**：{"T1":0.3,"T2":0.35,"T3":0.35}
- **范围**：[0, 10]
- **高分含义**：good（warning=需要警惕 / good=好事）
- **描述**：过去的时间在记忆/认知/关系里留下了多少东西
- **建议**：高留痕 = 你的时间有意义


# 6. 画像类型（profile_types · 3 种）

### 📅 task · 任务化

- **公式**：`D2*0.3 + S1*0.25 + S2*0.25 + (10-D3)*0.2`
- **描述**：重复度高 + 关注未来 + 关注结果 + 新事件少
- **干预建议**：试着增加无目的的体验

### 🧭 explore · 探索型

- **公式**：`D3*0.3 + T2*0.3 + S3*0.2 + (10-D2)*0.2`
- **描述**：新事件多 + 认知变化 + 主动参与 + 重复少
- **干预建议**：保持好奇心，警惕迷失方向

### 🌿 stable · 稳定陪伴

- **公式**：`T1*0.25 + T3*0.35 + (10-S1)*0.2 + (10-S2)*0.2`
- **描述**：体验留痕 + 关系连接 + 不焦虑未来 + 不卷结果
- **干预建议**：记得持续保持


# 7. 因子关系（factor_relations · 21 条）

| source | type | target | strength | note |
|---|---|---|---:|---|
| `D3-NB` | **synonym** | `T3-NK` | 0.6 | 都是"遇见新的人"，D3 强调出现，T3 强调建立联系 |
| `D3-CG` | **synonym** | `T2-UN` | 0.7 | 都是"认知变化"，D3 强调瞬间洞察，T2 强调沉淀理解 |
| `T1-EM` | **synonym** | `D3-EM` | 0.5 | 都是"情绪强度"，T1 强调被记住，D3 强调事件本身 |
| `S1-WO` | **synonym** | `S1-AN` | 0.7 | 都是负面未来导向，担忧更温和，焦虑更强烈 |
| `S2-KP` | **synonym** | `S2-DG` | 0.6 | 都是结果导向，KPI/OKR 与目标达成同源 |
| `S3-PE` | **synonym** | `S3-PA` | 0.7 | 都是被动，PE 是执行，PA 是接收 |
| `S3-CH` | **synonym** | `S3-EX` | 0.6 | 都是主动，CH 是决策，EX 是探索 |
| `T1-TA` | **synonym** | `T1-FR` | 0.6 | 都是时间锚点，TA 是任意时刻，FR 是第一次 |
| `T2-UN` | **synonym** | `T2-OV` | 0.7 | 都是认知升级，UN 是建立，OV 是推翻 |
| `D2-RC` | **antonym** | `D3-NE` | 0.7 | 刷手机 vs 探索新体验 |
| `S1-WO` | **antonym** | `D3-NE` | 0.6 | 担忧未来 vs 体验当下 |
| `S3-PE` | **antonym** | `S3-CH` | 0.8 | 被动执行 vs 主动选择 |
| `D2-SIM` | **antonym** | `D3-NE` | 0.7 | 日子相似 vs 新事件多 |
| `D1-W` | **antonym** | `D1-F` | 0.5 | 工作时间 vs 家庭时间（资源竞争） |
| `D3-ML` | **antonym** | `D3-UE` | 0.4 | 计划内达成 vs 意外事件 |
| `D1-W` | **cause** | `S2-DL` | 0.7 | 工作多 → 截止驱动多 |
| `S2-DL` | **cause** | `S1-AN` | 0.6 | 截止驱动 → 焦虑 |
| `T1-FR` | **cause** | `T2-UN` | 0.5 | 第一次 → 引发新理解 |
| `T3-DC` | **cause** | `T2-UN` | 0.6 | 深度交流 → 引发认知变化 |
| `T3-UD` | **cause** | `T2-SR` | 0.5 | 被理解 → 重新认识自己 |
| `D1-X` | **subset** | `D3-NE` | 0.6 | 闲暇娱乐常含新体验元素 |


# 8. 因子分布


### 8.1 按维度

- **D1 时间投入**（8）：`D1-W`, `D1-L`, `D1-F`, `D1-S`, `D1-A`, `D1-Z`, `D1-T`, `D1-X`
- **D2 时间重复**（5）：`D2-SIM`, `D2-ACT`, `D2-RT`, `D2-RP`, `D2-RC`
- **D3 新事件**（8）：`D3-NP`, `D3-NB`, `D3-NE`, `D3-NA`, `D3-UE`, `D3-ML`, `D3-CG`, `D3-EM`
- **S1 未来导向**（6）：`S1-PL`, `S1-GO`, `S1-EX`, `S1-WO`, `S1-AN`, `S1-FP`
- **S2 结果导向**（5）：`S2-DG`, `S2-OU`, `S2-KP`, `S2-EF`, `S2-DL`
- **S3 主体参与**（7）：`S3-CH`, `S3-EX`, `S3-CR`, `S3-EP`, `S3-CG`, `S3-PE`, `S3-PA`
- **T1 体验痕迹**（5）：`T1-SE`, `T1-SC`, `T1-EM`, `T1-TA`, `T1-FR`
- **T2 认知变化**（5）：`T2-DI`, `T2-UN`, `T2-OV`, `T2-VA`, `T2-SR`
- **T3 关系连接**（7）：`T3-NK`, `T3-DC`, `T3-CR`, `T3-CE`, `T3-EI`, `T3-UD`, `T3-UU`


### 8.2 按意图

- **正向（`positive`）**（38）：`D1-L`, `D1-F`, `D1-A`, `D1-Z`, `D1-X`, `D3-NP`, `D3-NB`, `D3-NE`, `D3-NA`, `D3-UE`, `D3-ML`, `D3-CG`, `D3-EM`, `S1-PL`, `S1-GO`, `S1-FP`, `S3-CH`, `S3-EX`, `S3-CR`, `S3-EP`, `S3-CG`, `T1-SE`, `T1-SC`, `T1-EM`, `T1-TA`, `T1-FR`, `T2-DI`, `T2-UN`, `T2-OV`, `T2-VA`, `T2-SR`, `T3-NK`, `T3-DC`, `T3-CR`, `T3-CE`, `T3-EI`, `T3-UD`, `T3-UU`
- **反向（`negative`）**（10）：`D2-RC`, `S1-WO`, `S1-AN`, `S2-DG`, `S2-OU`, `S2-KP`, `S2-EF`, `S2-DL`, `S3-PE`, `S3-PA`
- **中性（`neutral`）**（8）：`D1-W`, `D1-S`, `D1-T`, `D2-SIM`, `D2-ACT`, `D2-RT`, `D2-RP`, `S1-EX`


# 9. 信号使用频率

Top 30 跨因子共享信号：

| rank | signal | text | 因子数 |
|---:|---|---|---:|
| 1 | `sig_okr` | OKR | ██ 2 |
| 2 | `sig_deadline` | deadline | ██ 2 |
| 3 | `sig_companion` | 陪伴 | ██ 2 |
| 4 | `sig_first_time_alt` | 头一回 | ██ 2 |
| 5 | `sig_discover` | 发现 | ██ 2 |
| 6 | `sig_work` | 工作 | █░ 1 |
| 7 | `sig_meeting` | 开会 | █░ 1 |
| 8 | `sig_meeting_loose` | 会议 | █░ 1 |
| 9 | `sig_meeting_past` | 开了会 | █░ 1 |
| 10 | `sig_overtime` | 加班 | █░ 1 |
| 11 | `sig_overtime_past` | 加了班 | █░ 1 |
| 12 | `sig_project` | 项目 | █░ 1 |
| 13 | `sig_report` | 汇报 | █░ 1 |
| 14 | `sig_sync` | 同步 | █░ 1 |
| 15 | `sig_daily` | 日报 | █░ 1 |
| 16 | `sig_weekly` | 周会 | █░ 1 |
| 17 | `sig_regular` | 例会 | █░ 1 |
| 18 | `sig_study` | 学习 | █░ 1 |
| 19 | `sig_study_past` | 学了 | █░ 1 |
| 20 | `sig_study_to` | 学到 | █░ 1 |
| 21 | `sig_read` | 阅读 | █░ 1 |
| 22 | `sig_read_past` | 读过 | █░ 1 |
| 23 | `sig_read_book` | 看了书 | █░ 1 |
| 24 | `sig_read_part` | 看了点 | █░ 1 |
| 25 | `sig_book` | 读书 | █░ 1 |
| 26 | `sig_class` | 上课 | █░ 1 |
| 27 | `sig_course` | 课程 | █░ 1 |
| 28 | `sig_train` | 培训 | █░ 1 |
| 29 | `sig_practice` | 练习 | █░ 1 |
| 30 | `sig_vocab` | 背单词 | █░ 1 |

