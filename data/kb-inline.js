/* AUTO-GENERATED from data/kb/*.json by data/build-inline.js — DO NOT EDIT
 * Generated at: 2026-09-21T07:09:12.688Z
 *
 * 包含 12 张 KB 表：dimensions, factors, signals, factor-signals, negations, modifiers, intents, observations, profile-types, scenarios, moods, factor-relations
 * 用法：
 *   - 在 app.html 中通过 <script src="data/kb-inline.js"></script> 加载
 *   - 运行时通过 window.TT_KB 访问
 *   - Domain 层调用 KB.index(...) 获取索引
 */

window.TT_KB = {
  "dimensions": {
    "_meta": {
      "table": "dimensions",
      "purpose": "D-S-T 三层 9 个维度的元数据",
      "version": "1.3.0",
      "primaryKey": "code",
      "foreignKeys": {}
    },
    "records": [
      {
        "code": "D1",
        "layer": "D",
        "layerName": "Duration 发生",
        "name": "时间投入",
        "question": "我的时间去了哪里？",
        "description": "流向 9 大类生活场景",
        "weight": 1,
        "threshold": 0.6,
        "color": "oklch(44% 0.072 168)",
        "icon": "→",
        "order": 1
      },
      {
        "code": "D2",
        "layer": "D",
        "layerName": "Duration 发生",
        "name": "时间重复",
        "question": "多少日子是相似的？",
        "description": "相似日占比、重复活动",
        "weight": 0.8,
        "threshold": 0.5,
        "color": "oklch(50% 0.080 168)",
        "icon": "↻",
        "order": 2
      },
      {
        "code": "D3",
        "layer": "D",
        "layerName": "Duration 发生",
        "name": "新事件",
        "question": "出现了多少区分度事件？",
        "description": "新地点、新人物、新体验",
        "weight": 1,
        "threshold": 0.3,
        "color": "oklch(56% 0.085 168)",
        "icon": "✦",
        "order": 3
      },
      {
        "code": "S1",
        "layer": "S",
        "layerName": "State 结构",
        "name": "未来导向",
        "question": "我的意识有多少在围绕未来？",
        "description": "计划、目标、预期、担忧",
        "weight": 0.9,
        "threshold": 0.4,
        "color": "oklch(70% 0.105 75)",
        "icon": "→",
        "order": 4
      },
      {
        "code": "S2",
        "layer": "S",
        "layerName": "State 结构",
        "name": "结果导向",
        "question": "我是否只在结果里找意义？",
        "description": "做完了吗？达成了吗？",
        "weight": 0.85,
        "threshold": 0.4,
        "color": "oklch(72% 0.110 75)",
        "icon": "✓",
        "order": 5
      },
      {
        "code": "S3",
        "layer": "S",
        "layerName": "State 结构",
        "name": "主体参与",
        "question": "是我在生活，还是事情带着我走？",
        "description": "主动选择 / 探索 / 创造",
        "weight": 1,
        "threshold": 0.4,
        "color": "oklch(74% 0.115 75)",
        "icon": "✋",
        "order": 6
      },
      {
        "code": "T1",
        "layer": "T",
        "layerName": "Trace 留痕",
        "name": "体验痕迹",
        "question": "是否形成可回忆的具体节点？",
        "description": "具体、独特的记忆节点",
        "weight": 0.95,
        "threshold": 0.3,
        "color": "oklch(56% 0.080 280)",
        "icon": "◆",
        "order": 7
      },
      {
        "code": "T2",
        "layer": "T",
        "layerName": "Trace 留痕",
        "name": "认知变化",
        "question": "我有没有变得不一样？",
        "description": "新发现、新理解、旧观点被推翻",
        "weight": 1,
        "threshold": 0.25,
        "color": "oklch(58% 0.085 280)",
        "icon": "↑",
        "order": 8
      },
      {
        "code": "T3",
        "layer": "T",
        "layerName": "Trace 留痕",
        "name": "关系连接",
        "question": "人与人之间是否留下了痕迹？",
        "description": "新认识、深度交流、关系变化",
        "weight": 0.9,
        "threshold": 0.3,
        "color": "oklch(60% 0.090 280)",
        "icon": "⇄",
        "order": 9
      }
    ]
  },
  "factors": {
    "_meta": {
      "table": "factors",
      "purpose": "56 个二级因子的元数据（不含 signals，signals 在 factor_signals 关联表）",
      "version": "1.3.0",
      "primaryKey": "id",
      "foreignKeys": {
        "dimCode": "dimensions.code"
      }
    },
    "records": [
      {
        "id": "D1-W",
        "dimCode": "D1",
        "name": "工作",
        "description": "职业投入的总量与质量。不是问\"你勤不勤奋\"，而是问\"这段时间里你把自己交给了什么\"。",
        "emotion": "身份表达",
        "weight": 1,
        "intent": "neutral",
        "enabled": true,
        "order": 1
      },
      {
        "id": "D1-L",
        "dimCode": "D1",
        "name": "学习",
        "description": "主动增长的时间投入。衡量一个人是否在为自己投资未来——不是为了产出，而是为了让自己不同。",
        "emotion": "自我增值",
        "weight": 0.7,
        "intent": "positive",
        "enabled": true,
        "order": 2
      },
      {
        "id": "D1-F",
        "dimCode": "D1",
        "name": "家庭",
        "description": "与家人共度的时间。不是共处一室，而是真正的在场。",
        "emotion": "情感归位",
        "weight": 0.9,
        "intent": "positive",
        "enabled": true,
        "order": 3
      },
      {
        "id": "D1-S",
        "dimCode": "D1",
        "name": "社交",
        "description": "主动维护的关系性时间投入。",
        "emotion": "归属感",
        "weight": 0.7,
        "intent": "neutral",
        "enabled": true,
        "order": 4
      },
      {
        "id": "D1-A",
        "dimCode": "D1",
        "name": "独处",
        "description": "一个人安静地与自己相处的时间。",
        "emotion": "自我对话",
        "weight": 0.8,
        "intent": "positive",
        "enabled": true,
        "order": 5
      },
      {
        "id": "D1-Z",
        "dimCode": "D1",
        "name": "睡眠",
        "description": "睡觉与休息的质量。",
        "emotion": "身体修复",
        "weight": 0.6,
        "intent": "positive",
        "enabled": true,
        "order": 6
      },
      {
        "id": "D1-T",
        "dimCode": "D1",
        "name": "通勤",
        "description": "上下班路上的时间。",
        "emotion": "机械重复",
        "weight": 0.5,
        "intent": "neutral",
        "enabled": true,
        "order": 7
      },
      {
        "id": "D1-X",
        "dimCode": "D1",
        "name": "闲暇/娱乐",
        "description": "非功利性的玩耍、看剧、游戏、爱好等为自己充电的时间。",
        "emotion": "自我充电",
        "weight": 0.6,
        "intent": "positive",
        "enabled": true,
        "order": 8
      },
      {
        "id": "D2-SIM",
        "dimCode": "D2",
        "name": "相似日占比",
        "description": "重复度高的日子占总天数比例。",
        "emotion": "无差别感",
        "weight": 0.8,
        "intent": "neutral",
        "enabled": true,
        "order": 1
      },
      {
        "id": "D2-ACT",
        "dimCode": "D2",
        "name": "重复活动",
        "description": "反复做同一件事。",
        "emotion": "麻木",
        "weight": 0.7,
        "intent": "neutral",
        "enabled": true,
        "order": 2
      },
      {
        "id": "D2-RT",
        "dimCode": "D2",
        "name": "重复路径",
        "description": "每天走同样的路、去同样的地方。",
        "emotion": "惯性",
        "weight": 0.6,
        "intent": "neutral",
        "enabled": true,
        "order": 3
      },
      {
        "id": "D2-RP",
        "dimCode": "D2",
        "name": "重复社交",
        "description": "反复见同一批人。",
        "emotion": "舒适圈",
        "weight": 0.6,
        "intent": "neutral",
        "enabled": true,
        "order": 4
      },
      {
        "id": "D2-RC",
        "dimCode": "D2",
        "name": "重复内容消费",
        "description": "刷同质化内容（被否定时是好事）。",
        "emotion": "信息茧房",
        "weight": 0.9,
        "intent": "negative",
        "enabled": true,
        "order": 5
      },
      {
        "id": "D3-NP",
        "dimCode": "D3",
        "name": "新地点",
        "description": "第一次去到的地方。",
        "emotion": "探索欲",
        "weight": 0.9,
        "intent": "positive",
        "enabled": true,
        "order": 1
      },
      {
        "id": "D3-NB",
        "dimCode": "D3",
        "name": "新人物",
        "description": "新认识的人（注意：与 T3-NK 区分——这里强调\"出现\"，T3 强调\"建立联系\"）。",
        "emotion": "新鲜感",
        "weight": 0.9,
        "intent": "positive",
        "enabled": true,
        "order": 2
      },
      {
        "id": "D3-NE",
        "dimCode": "D3",
        "name": "新体验",
        "description": "第一次尝试的事物。",
        "emotion": "冒险",
        "weight": 1,
        "intent": "positive",
        "enabled": true,
        "order": 3
      },
      {
        "id": "D3-NA",
        "dimCode": "D3",
        "name": "新行动",
        "description": "主动做了以前没做过的事（强调动作本身的新颖，不一定是体验）。",
        "emotion": "突破",
        "weight": 0.8,
        "intent": "positive",
        "enabled": true,
        "order": 4
      },
      {
        "id": "D3-UE",
        "dimCode": "D3",
        "name": "意外事件",
        "description": "计划外的突发状况。",
        "emotion": "刺激",
        "weight": 1,
        "intent": "positive",
        "enabled": true,
        "order": 5
      },
      {
        "id": "D3-ML",
        "dimCode": "D3",
        "name": "完成重要节点",
        "description": "关键里程碑达成。",
        "emotion": "成就感",
        "weight": 0.9,
        "intent": "positive",
        "enabled": true,
        "order": 6
      },
      {
        "id": "D3-CG",
        "dimCode": "D3",
        "name": "认知变化",
        "description": "产生了新的理解（与 T2-UN 区分——这里强调\"瞬间的洞察\"，T2 强调\"沉淀后的理解\"）。",
        "emotion": "啊哈时刻",
        "weight": 1,
        "intent": "positive",
        "enabled": true,
        "order": 7
      },
      {
        "id": "D3-EM",
        "dimCode": "D3",
        "name": "强烈情绪事件",
        "description": "情绪大起大落的标志性事件（与 T1-EM 区分——D3 是\"事件\"，T1 是\"被记住的细节\"）。",
        "emotion": "情绪过载",
        "weight": 0.8,
        "intent": "positive",
        "enabled": true,
        "order": 8
      },
      {
        "id": "S1-PL",
        "dimCode": "S1",
        "name": "计划",
        "description": "为未来做安排。",
        "emotion": "主动权",
        "weight": 0.7,
        "intent": "positive",
        "enabled": true,
        "order": 1
      },
      {
        "id": "S1-GO",
        "dimCode": "S1",
        "name": "目标",
        "description": "设定或追求目标。",
        "emotion": "方向感",
        "weight": 0.8,
        "intent": "positive",
        "enabled": true,
        "order": 2
      },
      {
        "id": "S1-EX",
        "dimCode": "S1",
        "name": "预期",
        "description": "对未来的想象。",
        "emotion": "希望感",
        "weight": 0.6,
        "intent": "neutral",
        "enabled": true,
        "order": 3
      },
      {
        "id": "S1-WO",
        "dimCode": "S1",
        "name": "担忧",
        "description": "对未来不确定性的焦虑（被否定时是好事——\"不再担心\"）。",
        "emotion": "隐性不安",
        "weight": 0.8,
        "intent": "negative",
        "enabled": true,
        "order": 4
      },
      {
        "id": "S1-AN",
        "dimCode": "S1",
        "name": "焦虑",
        "description": "紧张与压力（被否定时是好事——\"不焦虑了\"）。",
        "emotion": "压力感",
        "weight": 0.9,
        "intent": "negative",
        "enabled": true,
        "order": 5
      },
      {
        "id": "S1-FP",
        "dimCode": "S1",
        "name": "为未来准备",
        "description": "为将来做储备。",
        "emotion": "远见",
        "weight": 0.7,
        "intent": "positive",
        "enabled": true,
        "order": 6
      },
      {
        "id": "S2-DG",
        "dimCode": "S2",
        "name": "目标达成",
        "description": "看结果是否达到（被否定时是好事——\"不再追求达成\"是放下执念）。",
        "emotion": "成就感",
        "weight": 0.9,
        "intent": "negative",
        "enabled": true,
        "order": 1
      },
      {
        "id": "S2-OU",
        "dimCode": "S2",
        "name": "产出/交付",
        "description": "看是否有产出（被否定时是好事）。",
        "emotion": "效率感",
        "weight": 0.9,
        "intent": "negative",
        "enabled": true,
        "order": 2
      },
      {
        "id": "S2-KP",
        "dimCode": "S2",
        "name": "KPI/OKR",
        "description": "量化指标驱动（被否定时是好事——\"不被 KPI 绑架\"）。",
        "emotion": "数据焦虑",
        "weight": 1,
        "intent": "negative",
        "enabled": true,
        "order": 3
      },
      {
        "id": "S2-EF",
        "dimCode": "S2",
        "name": "效率追求",
        "description": "追求高效率（被否定时是好事——\"不再卷效率\"是放松）。",
        "emotion": "卷",
        "weight": 0.8,
        "intent": "negative",
        "enabled": true,
        "order": 4
      },
      {
        "id": "S2-DL",
        "dimCode": "S2",
        "name": "截止驱动",
        "description": "被 deadline 牵引（被否定时是好事）。",
        "emotion": "压力",
        "weight": 1,
        "intent": "negative",
        "enabled": true,
        "order": 5
      },
      {
        "id": "S3-CH",
        "dimCode": "S3",
        "name": "主动选择",
        "description": "自己做出决定。",
        "emotion": "掌控感",
        "weight": 1,
        "intent": "positive",
        "enabled": true,
        "order": 1
      },
      {
        "id": "S3-EX",
        "dimCode": "S3",
        "name": "主动探索",
        "description": "主动去尝试新事物。",
        "emotion": "好奇心",
        "weight": 1,
        "intent": "positive",
        "enabled": true,
        "order": 2
      },
      {
        "id": "S3-CR",
        "dimCode": "S3",
        "name": "主动创造",
        "description": "自己设计或创作。",
        "emotion": "创造力",
        "weight": 1,
        "intent": "positive",
        "enabled": true,
        "order": 3
      },
      {
        "id": "S3-EP",
        "dimCode": "S3",
        "name": "主动表达",
        "description": "主动表达自己。",
        "emotion": "自我呈现",
        "weight": 0.8,
        "intent": "positive",
        "enabled": true,
        "order": 4
      },
      {
        "id": "S3-CG",
        "dimCode": "S3",
        "name": "主动改变",
        "description": "主动做出改变。",
        "emotion": "能动性",
        "weight": 1,
        "intent": "positive",
        "enabled": true,
        "order": 5
      },
      {
        "id": "S3-PE",
        "dimCode": "S3",
        "name": "被动执行",
        "description": "被任务牵着走（被否定时是好事）。",
        "emotion": "无力感",
        "weight": 0.9,
        "intent": "negative",
        "enabled": true,
        "order": 6
      },
      {
        "id": "S3-PA",
        "dimCode": "S3",
        "name": "被动接受",
        "description": "被动接收信息（被否定时是好事）。",
        "emotion": "被动",
        "weight": 0.7,
        "intent": "negative",
        "enabled": true,
        "order": 7
      },
      {
        "id": "T1-SE",
        "dimCode": "T1",
        "name": "感官细节",
        "description": "(味道/触感/声音) 被记住。",
        "emotion": "通感",
        "weight": 0.9,
        "intent": "positive",
        "enabled": true,
        "order": 1
      },
      {
        "id": "T1-SC",
        "dimCode": "T1",
        "name": "场景细节",
        "description": "(天气/地点) 的具体画面。",
        "emotion": "画面感",
        "weight": 0.9,
        "intent": "positive",
        "enabled": true,
        "order": 2
      },
      {
        "id": "T1-EM",
        "dimCode": "T1",
        "name": "情绪峰值",
        "description": "(喜/悲/静) 的强烈感受（与 D3-EM 区分——T1 是\"被记住\"，D3 是\"事件本身\"）。",
        "emotion": "情感印记",
        "weight": 1,
        "intent": "positive",
        "enabled": true,
        "order": 3
      },
      {
        "id": "T1-TA",
        "dimCode": "T1",
        "name": "时间锚点",
        "description": "那一刻的清晰回忆。",
        "emotion": "珍藏感",
        "weight": 1,
        "intent": "positive",
        "enabled": true,
        "order": 4
      },
      {
        "id": "T1-FR",
        "dimCode": "T1",
        "name": "独特首次",
        "description": "第一次的鲜明记忆。",
        "emotion": "人生高光",
        "weight": 1,
        "intent": "positive",
        "enabled": true,
        "order": 5
      },
      {
        "id": "T2-DI",
        "dimCode": "T2",
        "name": "新发现",
        "description": "新发现了某件事。",
        "emotion": "好奇心",
        "weight": 0.9,
        "intent": "positive",
        "enabled": true,
        "order": 1
      },
      {
        "id": "T2-UN",
        "dimCode": "T2",
        "name": "新理解",
        "description": "对某事有了新的理解。",
        "emotion": "成长感",
        "weight": 1,
        "intent": "positive",
        "enabled": true,
        "order": 2
      },
      {
        "id": "T2-OV",
        "dimCode": "T2",
        "name": "旧观点推翻",
        "description": "以前的看法被推翻。",
        "emotion": "认知重构",
        "weight": 1,
        "intent": "positive",
        "enabled": true,
        "order": 3
      },
      {
        "id": "T2-VA",
        "dimCode": "T2",
        "name": "新价值排序",
        "description": "内心优先级重新排列。",
        "emotion": "价值观升级",
        "weight": 1,
        "intent": "positive",
        "enabled": true,
        "order": 4
      },
      {
        "id": "T2-SR",
        "dimCode": "T2",
        "name": "自我重新认识",
        "description": "对自己有了新的认知。",
        "emotion": "自我觉醒",
        "weight": 1,
        "intent": "positive",
        "enabled": true,
        "order": 5
      },
      {
        "id": "T3-NK",
        "dimCode": "T3",
        "name": "新认识",
        "description": "新建立了联系（与 D3-NB 区分——T3 强调\"建立联系\"，D3 强调\"出现\"）。",
        "emotion": "社交扩展",
        "weight": 0.8,
        "intent": "positive",
        "enabled": true,
        "order": 1
      },
      {
        "id": "T3-DC",
        "dimCode": "T3",
        "name": "深度交流",
        "description": "与他人深入对话。",
        "emotion": "灵魂共振",
        "weight": 1,
        "intent": "positive",
        "enabled": true,
        "order": 2
      },
      {
        "id": "T3-CR",
        "dimCode": "T3",
        "name": "关系变化",
        "description": "关系发生转变。",
        "emotion": "关系重构",
        "weight": 1,
        "intent": "positive",
        "enabled": true,
        "order": 3
      },
      {
        "id": "T3-CE",
        "dimCode": "T3",
        "name": "共同经历",
        "description": "一起做了某件事。",
        "emotion": "连接感",
        "weight": 0.9,
        "intent": "positive",
        "enabled": true,
        "order": 4
      },
      {
        "id": "T3-EI",
        "dimCode": "T3",
        "name": "情感表达",
        "description": "表达了真实情感。",
        "emotion": "情感流动",
        "weight": 1,
        "intent": "positive",
        "enabled": true,
        "order": 5
      },
      {
        "id": "T3-UD",
        "dimCode": "T3",
        "name": "被理解",
        "description": "感觉到被理解。",
        "emotion": "被看见",
        "weight": 1,
        "intent": "positive",
        "enabled": true,
        "order": 6
      },
      {
        "id": "T3-UU",
        "dimCode": "T3",
        "name": "理解别人",
        "description": "理解了他人。",
        "emotion": "共情",
        "weight": 0.9,
        "intent": "positive",
        "enabled": true,
        "order": 7
      }
    ]
  },
  "signals": {
    "_meta": {
      "table": "signals",
      "purpose": "所有信号词字典（独立于因子，可在多因子间共享）",
      "version": "1.3.0",
      "primaryKey": "id",
      "foreignKeys": {},
      "notes": [
        "signal 文本是核心索引",
        "type 描述语义类型（动作/状态/感官/事件/关系）",
        "tone 描述语气色彩（正向/负向/中性）"
      ]
    },
    "records": [
      {
        "id": "sig_work",
        "text": "工作",
        "type": "动作",
        "tone": "中性",
        "domain": "职业"
      },
      {
        "id": "sig_meeting",
        "text": "开会",
        "type": "事件",
        "tone": "中性",
        "domain": "职业"
      },
      {
        "id": "sig_meeting_loose",
        "text": "会议",
        "type": "事件",
        "tone": "中性",
        "domain": "职业"
      },
      {
        "id": "sig_meeting_past",
        "text": "开了会",
        "type": "事件",
        "tone": "中性",
        "domain": "职业"
      },
      {
        "id": "sig_overtime",
        "text": "加班",
        "type": "动作",
        "tone": "中性",
        "domain": "职业"
      },
      {
        "id": "sig_overtime_past",
        "text": "加了班",
        "type": "动作",
        "tone": "中性",
        "domain": "职业"
      },
      {
        "id": "sig_project",
        "text": "项目",
        "type": "对象",
        "tone": "中性",
        "domain": "职业"
      },
      {
        "id": "sig_report",
        "text": "汇报",
        "type": "动作",
        "tone": "中性",
        "domain": "职业"
      },
      {
        "id": "sig_sync",
        "text": "同步",
        "type": "动作",
        "tone": "中性",
        "domain": "职业"
      },
      {
        "id": "sig_okr",
        "text": "OKR",
        "type": "对象",
        "tone": "中性",
        "domain": "管理"
      },
      {
        "id": "sig_daily",
        "text": "日报",
        "type": "对象",
        "tone": "中性",
        "domain": "管理"
      },
      {
        "id": "sig_weekly",
        "text": "周会",
        "type": "事件",
        "tone": "中性",
        "domain": "管理"
      },
      {
        "id": "sig_regular",
        "text": "例会",
        "type": "事件",
        "tone": "中性",
        "domain": "管理"
      },
      {
        "id": "sig_deadline",
        "text": "deadline",
        "type": "对象",
        "tone": "中性",
        "domain": "管理"
      },
      {
        "id": "sig_study",
        "text": "学习",
        "type": "动作",
        "tone": "正向",
        "domain": "成长"
      },
      {
        "id": "sig_study_past",
        "text": "学了",
        "type": "动作",
        "tone": "正向",
        "domain": "成长"
      },
      {
        "id": "sig_study_to",
        "text": "学到",
        "type": "动作",
        "tone": "正向",
        "domain": "成长"
      },
      {
        "id": "sig_read",
        "text": "阅读",
        "type": "动作",
        "tone": "正向",
        "domain": "成长"
      },
      {
        "id": "sig_read_past",
        "text": "读过",
        "type": "动作",
        "tone": "正向",
        "domain": "成长"
      },
      {
        "id": "sig_read_book",
        "text": "看了书",
        "type": "动作",
        "tone": "正向",
        "domain": "成长"
      },
      {
        "id": "sig_read_part",
        "text": "看了点",
        "type": "动作",
        "tone": "正向",
        "domain": "成长"
      },
      {
        "id": "sig_book",
        "text": "读书",
        "type": "动作",
        "tone": "正向",
        "domain": "成长"
      },
      {
        "id": "sig_class",
        "text": "上课",
        "type": "动作",
        "tone": "正向",
        "domain": "成长"
      },
      {
        "id": "sig_course",
        "text": "课程",
        "type": "对象",
        "tone": "中性",
        "domain": "成长"
      },
      {
        "id": "sig_train",
        "text": "培训",
        "type": "事件",
        "tone": "中性",
        "domain": "成长"
      },
      {
        "id": "sig_practice",
        "text": "练习",
        "type": "动作",
        "tone": "正向",
        "domain": "成长"
      },
      {
        "id": "sig_vocab",
        "text": "背单词",
        "type": "动作",
        "tone": "中性",
        "domain": "成长"
      },
      {
        "id": "sig_paper",
        "text": "论文",
        "type": "对象",
        "tone": "中性",
        "domain": "学术"
      },
      {
        "id": "sig_family",
        "text": "家庭",
        "type": "对象",
        "tone": "正向",
        "domain": "家庭"
      },
      {
        "id": "sig_child",
        "text": "孩子",
        "type": "对象",
        "tone": "正向",
        "domain": "家庭"
      },
      {
        "id": "sig_companion",
        "text": "陪伴",
        "type": "动作",
        "tone": "正向",
        "domain": "家庭"
      },
      {
        "id": "sig_companion_past",
        "text": "陪了",
        "type": "动作",
        "tone": "正向",
        "domain": "家庭"
      },
      {
        "id": "sig_companion_child",
        "text": "陪孩子",
        "type": "动作",
        "tone": "正向",
        "domain": "家庭"
      },
      {
        "id": "sig_family_member",
        "text": "家人",
        "type": "对象",
        "tone": "正向",
        "domain": "家庭"
      },
      {
        "id": "sig_parents",
        "text": "父母",
        "type": "对象",
        "tone": "正向",
        "domain": "家庭"
      },
      {
        "id": "sig_spouse",
        "text": "配偶",
        "type": "对象",
        "tone": "正向",
        "domain": "家庭"
      },
      {
        "id": "sig_housework",
        "text": "家务",
        "type": "动作",
        "tone": "中性",
        "domain": "家庭"
      },
      {
        "id": "sig_cook",
        "text": "做饭",
        "type": "动作",
        "tone": "中性",
        "domain": "家庭"
      },
      {
        "id": "sig_pickup",
        "text": "接送",
        "type": "动作",
        "tone": "中性",
        "domain": "家庭"
      },
      {
        "id": "sig_social",
        "text": "社交",
        "type": "动作",
        "tone": "中性",
        "domain": "社交"
      },
      {
        "id": "sig_friend",
        "text": "朋友",
        "type": "对象",
        "tone": "正向",
        "domain": "社交"
      },
      {
        "id": "sig_meet_friend",
        "text": "见了",
        "type": "动作",
        "tone": "正向",
        "domain": "社交"
      },
      {
        "id": "sig_meet_past",
        "text": "见朋友",
        "type": "动作",
        "tone": "正向",
        "domain": "社交"
      },
      {
        "id": "sig_eat_together",
        "text": "去吃饭",
        "type": "动作",
        "tone": "正向",
        "domain": "社交"
      },
      {
        "id": "sig_party",
        "text": "聚会",
        "type": "事件",
        "tone": "中性",
        "domain": "社交"
      },
      {
        "id": "sig_dinner",
        "text": "饭局",
        "type": "事件",
        "tone": "中性",
        "domain": "社交"
      },
      {
        "id": "sig_banquet",
        "text": "应酬",
        "type": "事件",
        "tone": "中性",
        "domain": "社交"
      },
      {
        "id": "sig_team_building",
        "text": "团建",
        "type": "事件",
        "tone": "中性",
        "domain": "社交"
      },
      {
        "id": "sig_date",
        "text": "约会",
        "type": "事件",
        "tone": "正向",
        "domain": "社交"
      },
      {
        "id": "sig_alone",
        "text": "独处",
        "type": "状态",
        "tone": "正向",
        "domain": "个人"
      },
      {
        "id": "sig_daze",
        "text": "发呆",
        "type": "动作",
        "tone": "中性",
        "domain": "个人"
      },
      {
        "id": "sig_alone_self",
        "text": "一个人",
        "type": "状态",
        "tone": "中性",
        "domain": "个人"
      },
      {
        "id": "sig_alone_solo",
        "text": "独自",
        "type": "状态",
        "tone": "中性",
        "domain": "个人"
      },
      {
        "id": "sig_sit_quiet",
        "text": "静坐",
        "type": "动作",
        "tone": "正向",
        "domain": "个人"
      },
      {
        "id": "sig_meditate",
        "text": "冥想",
        "type": "动作",
        "tone": "正向",
        "domain": "个人"
      },
      {
        "id": "sig_walk",
        "text": "散步",
        "type": "动作",
        "tone": "正向",
        "domain": "个人"
      },
      {
        "id": "sig_sleep",
        "text": "睡眠",
        "type": "状态",
        "tone": "中性",
        "domain": "生理"
      },
      {
        "id": "sig_sleep_past",
        "text": "睡了",
        "type": "动作",
        "tone": "中性",
        "domain": "生理"
      },
      {
        "id": "sig_sleep_act",
        "text": "睡觉",
        "type": "动作",
        "tone": "中性",
        "domain": "生理"
      },
      {
        "id": "sig_nap",
        "text": "午睡",
        "type": "动作",
        "tone": "中性",
        "domain": "生理"
      },
      {
        "id": "sig_rest",
        "text": "休息",
        "type": "动作",
        "tone": "中性",
        "domain": "生理"
      },
      {
        "id": "sig_lie_in",
        "text": "赖床",
        "type": "动作",
        "tone": "中性",
        "domain": "生理"
      },
      {
        "id": "sig_insomnia",
        "text": "失眠",
        "type": "状态",
        "tone": "负向",
        "domain": "生理"
      },
      {
        "id": "sig_commute",
        "text": "通勤",
        "type": "动作",
        "tone": "中性",
        "domain": "通勤"
      },
      {
        "id": "sig_on_road",
        "text": "路上",
        "type": "状态",
        "tone": "中性",
        "domain": "通勤"
      },
      {
        "id": "sig_subway",
        "text": "地铁",
        "type": "对象",
        "tone": "中性",
        "domain": "通勤"
      },
      {
        "id": "sig_bus",
        "text": "公交",
        "type": "对象",
        "tone": "中性",
        "domain": "通勤"
      },
      {
        "id": "sig_drive",
        "text": "开车",
        "type": "动作",
        "tone": "中性",
        "domain": "通勤"
      },
      {
        "id": "sig_taxi",
        "text": "打车",
        "type": "动作",
        "tone": "中性",
        "domain": "通勤"
      },
      {
        "id": "sig_chore",
        "text": "杂务",
        "type": "动作",
        "tone": "中性",
        "domain": "杂务"
      },
      {
        "id": "sig_shop",
        "text": "购物",
        "type": "动作",
        "tone": "中性",
        "domain": "杂务"
      },
      {
        "id": "sig_courier",
        "text": "取快递",
        "type": "动作",
        "tone": "中性",
        "domain": "杂务"
      },
      {
        "id": "sig_repair",
        "text": "修理",
        "type": "动作",
        "tone": "中性",
        "domain": "杂务"
      },
      {
        "id": "sig_clean",
        "text": "清洁",
        "type": "动作",
        "tone": "中性",
        "domain": "杂务"
      },
      {
        "id": "sig_drama",
        "text": "看剧",
        "type": "动作",
        "tone": "中性",
        "domain": "娱乐"
      },
      {
        "id": "sig_drama_past",
        "text": "看了剧",
        "type": "动作",
        "tone": "中性",
        "domain": "娱乐"
      },
      {
        "id": "sig_binge",
        "text": "追剧",
        "type": "动作",
        "tone": "中性",
        "domain": "娱乐"
      },
      {
        "id": "sig_movie",
        "text": "电影",
        "type": "对象",
        "tone": "中性",
        "domain": "娱乐"
      },
      {
        "id": "sig_variety",
        "text": "综艺",
        "type": "对象",
        "tone": "中性",
        "domain": "娱乐"
      },
      {
        "id": "sig_game",
        "text": "打游戏",
        "type": "动作",
        "tone": "中性",
        "domain": "娱乐"
      },
      {
        "id": "sig_game_noun",
        "text": "游戏",
        "type": "对象",
        "tone": "中性",
        "domain": "娱乐"
      },
      {
        "id": "sig_game_past",
        "text": "玩了游戏",
        "type": "动作",
        "tone": "中性",
        "domain": "娱乐"
      },
      {
        "id": "sig_play",
        "text": "玩",
        "type": "动作",
        "tone": "中性",
        "domain": "娱乐"
      },
      {
        "id": "sig_music_listen",
        "text": "听歌",
        "type": "动作",
        "tone": "中性",
        "domain": "娱乐"
      },
      {
        "id": "sig_music",
        "text": "音乐",
        "type": "对象",
        "tone": "中性",
        "domain": "娱乐"
      },
      {
        "id": "sig_music_play",
        "text": "听音乐",
        "type": "动作",
        "tone": "中性",
        "domain": "娱乐"
      },
      {
        "id": "sig_tiktok",
        "text": "刷抖音",
        "type": "动作",
        "tone": "中性",
        "domain": "娱乐"
      },
      {
        "id": "sig_weibo",
        "text": "刷微博",
        "type": "动作",
        "tone": "中性",
        "domain": "娱乐"
      },
      {
        "id": "sig_fitness",
        "text": "健身",
        "type": "动作",
        "tone": "正向",
        "domain": "娱乐"
      },
      {
        "id": "sig_sport",
        "text": "运动",
        "type": "动作",
        "tone": "正向",
        "domain": "娱乐"
      },
      {
        "id": "sig_run",
        "text": "跑步",
        "type": "动作",
        "tone": "正向",
        "domain": "娱乐"
      },
      {
        "id": "sig_hike",
        "text": "爬山",
        "type": "动作",
        "tone": "正向",
        "domain": "娱乐"
      },
      {
        "id": "sig_draw",
        "text": "画画",
        "type": "动作",
        "tone": "正向",
        "domain": "娱乐"
      },
      {
        "id": "sig_repeat",
        "text": "重复",
        "type": "状态",
        "tone": "负向",
        "domain": "重复"
      },
      {
        "id": "sig_old_place",
        "text": "老地方",
        "type": "对象",
        "tone": "中性",
        "domain": "重复"
      },
      {
        "id": "sig_old_road",
        "text": "老路",
        "type": "对象",
        "tone": "中性",
        "domain": "重复"
      },
      {
        "id": "sig_old_shop",
        "text": "老店",
        "type": "对象",
        "tone": "中性",
        "domain": "重复"
      },
      {
        "id": "sig_same_place",
        "text": "同一家",
        "type": "对象",
        "tone": "中性",
        "domain": "重复"
      },
      {
        "id": "sig_old_friend",
        "text": "老朋友",
        "type": "对象",
        "tone": "中性",
        "domain": "重复"
      },
      {
        "id": "sig_old_colleague",
        "text": "老同事",
        "type": "对象",
        "tone": "中性",
        "domain": "重复"
      },
      {
        "id": "sig_scroll",
        "text": "刷",
        "type": "动作",
        "tone": "负向",
        "domain": "重复"
      },
      {
        "id": "sig_short_video",
        "text": "短视频",
        "type": "对象",
        "tone": "负向",
        "domain": "重复"
      },
      {
        "id": "sig_phone",
        "text": "刷手机",
        "type": "动作",
        "tone": "负向",
        "domain": "重复"
      },
      {
        "id": "sig_moments",
        "text": "看朋友圈",
        "type": "动作",
        "tone": "中性",
        "domain": "重复"
      },
      {
        "id": "sig_late_sleep",
        "text": "晚睡",
        "type": "状态",
        "tone": "中性",
        "domain": "重复"
      },
      {
        "id": "sig_early_rise",
        "text": "早起",
        "type": "状态",
        "tone": "中性",
        "domain": "重复"
      },
      {
        "id": "sig_late_work",
        "text": "加班到深夜",
        "type": "状态",
        "tone": "中性",
        "domain": "重复"
      },
      {
        "id": "sig_new_place_first",
        "text": "第一次去",
        "type": "事件",
        "tone": "正向",
        "domain": "新事件"
      },
      {
        "id": "sig_never_been",
        "text": "没去过",
        "type": "状态",
        "tone": "中性",
        "domain": "新事件"
      },
      {
        "id": "sig_new_open",
        "text": "新开的",
        "type": "对象",
        "tone": "正向",
        "domain": "新事件"
      },
      {
        "id": "sig_new_spot",
        "text": "新地方",
        "type": "对象",
        "tone": "正向",
        "domain": "新事件"
      },
      {
        "id": "sig_first_time",
        "text": "第一次",
        "type": "状态",
        "tone": "正向",
        "domain": "新事件"
      },
      {
        "id": "sig_first_try",
        "text": "第一次尝试",
        "type": "事件",
        "tone": "正向",
        "domain": "新事件"
      },
      {
        "id": "sig_first_eat",
        "text": "第一次吃",
        "type": "事件",
        "tone": "正向",
        "domain": "新事件"
      },
      {
        "id": "sig_first_visit",
        "text": "第一次到",
        "type": "事件",
        "tone": "正向",
        "domain": "新事件"
      },
      {
        "id": "sig_unprecedented",
        "text": "破天荒",
        "type": "状态",
        "tone": "正向",
        "domain": "新事件"
      },
      {
        "id": "sig_first_do",
        "text": "第一次做",
        "type": "事件",
        "tone": "正向",
        "domain": "新事件"
      },
      {
        "id": "sig_first_walk",
        "text": "第一次走",
        "type": "事件",
        "tone": "正向",
        "domain": "新事件"
      },
      {
        "id": "sig_first_meet",
        "text": "第一次约",
        "type": "事件",
        "tone": "正向",
        "domain": "新事件"
      },
      {
        "id": "sig_encounter",
        "text": "偶遇",
        "type": "事件",
        "tone": "中性",
        "domain": "新事件"
      },
      {
        "id": "sig_new_person",
        "text": "新来的",
        "type": "对象",
        "tone": "中性",
        "domain": "新事件"
      },
      {
        "id": "sig_accident",
        "text": "意外",
        "type": "事件",
        "tone": "中性",
        "domain": "新事件"
      },
      {
        "id": "sig_sudden",
        "text": "突然",
        "type": "状态",
        "tone": "中性",
        "domain": "新事件"
      },
      {
        "id": "sig_surprise",
        "text": "惊喜",
        "type": "事件",
        "tone": "正向",
        "domain": "新事件"
      },
      {
        "id": "sig_surprised",
        "text": "惊",
        "type": "状态",
        "tone": "中性",
        "domain": "新事件"
      },
      {
        "id": "sig_sudden_event",
        "text": "突发",
        "type": "事件",
        "tone": "中性",
        "domain": "新事件"
      },
      {
        "id": "sig_graduate",
        "text": "毕业",
        "type": "事件",
        "tone": "正向",
        "domain": "里程碑"
      },
      {
        "id": "sig_join",
        "text": "入职",
        "type": "事件",
        "tone": "正向",
        "domain": "里程碑"
      },
      {
        "id": "sig_launch",
        "text": "上线",
        "type": "事件",
        "tone": "正向",
        "domain": "里程碑"
      },
      {
        "id": "sig_release",
        "text": "发布",
        "type": "事件",
        "tone": "正向",
        "domain": "里程碑"
      },
      {
        "id": "sig_achieve",
        "text": "达成",
        "type": "动作",
        "tone": "正向",
        "domain": "里程碑"
      },
      {
        "id": "sig_realize",
        "text": "突然明白",
        "type": "状态",
        "tone": "正向",
        "domain": "新事件"
      },
      {
        "id": "sig_think_through",
        "text": "想通",
        "type": "状态",
        "tone": "正向",
        "domain": "新事件"
      },
      {
        "id": "sig_realize2",
        "text": "意识到",
        "type": "动作",
        "tone": "中性",
        "domain": "新事件"
      },
      {
        "id": "sig_epiphany",
        "text": "顿悟",
        "type": "状态",
        "tone": "正向",
        "domain": "新事件"
      },
      {
        "id": "sig_collapse",
        "text": "崩溃",
        "type": "状态",
        "tone": "中性",
        "domain": "情绪"
      },
      {
        "id": "sig_fury",
        "text": "暴怒",
        "type": "状态",
        "tone": "中性",
        "domain": "情绪"
      },
      {
        "id": "sig_ecstasy",
        "text": "狂喜",
        "type": "状态",
        "tone": "中性",
        "domain": "情绪"
      },
      {
        "id": "sig_sob",
        "text": "嚎啕大哭",
        "type": "状态",
        "tone": "中性",
        "domain": "情绪"
      },
      {
        "id": "sig_furious",
        "text": "气炸",
        "type": "状态",
        "tone": "中性",
        "domain": "情绪"
      },
      {
        "id": "sig_heartbreak",
        "text": "心碎",
        "type": "状态",
        "tone": "中性",
        "domain": "情绪"
      },
      {
        "id": "sig_plan",
        "text": "计划",
        "type": "动作",
        "tone": "正向",
        "domain": "未来"
      },
      {
        "id": "sig_plan_to",
        "text": "打算",
        "type": "动作",
        "tone": "正向",
        "domain": "未来"
      },
      {
        "id": "sig_arrange",
        "text": "安排",
        "type": "动作",
        "tone": "正向",
        "domain": "未来"
      },
      {
        "id": "sig_reserve",
        "text": "预定",
        "type": "动作",
        "tone": "中性",
        "domain": "未来"
      },
      {
        "id": "sig_goal",
        "text": "目标",
        "type": "对象",
        "tone": "正向",
        "domain": "未来"
      },
      {
        "id": "sig_aim",
        "text": "目的",
        "type": "对象",
        "tone": "中性",
        "domain": "未来"
      },
      {
        "id": "sig_vision",
        "text": "愿景",
        "type": "对象",
        "tone": "正向",
        "domain": "未来"
      },
      {
        "id": "sig_aspiration",
        "text": "想成为",
        "type": "状态",
        "tone": "正向",
        "domain": "未来"
      },
      {
        "id": "sig_want",
        "text": "要做到",
        "type": "状态",
        "tone": "正向",
        "domain": "未来"
      },
      {
        "id": "sig_expect",
        "text": "期待",
        "type": "状态",
        "tone": "正向",
        "domain": "未来"
      },
      {
        "id": "sig_hope",
        "text": "希望",
        "type": "状态",
        "tone": "正向",
        "domain": "未来"
      },
      {
        "id": "sig_imagine",
        "text": "预想",
        "type": "动作",
        "tone": "中性",
        "domain": "未来"
      },
      {
        "id": "sig_prediction",
        "text": "预期",
        "type": "动作",
        "tone": "中性",
        "domain": "未来"
      },
      {
        "id": "sig_assume",
        "text": "设想",
        "type": "动作",
        "tone": "中性",
        "domain": "未来"
      },
      {
        "id": "sig_worry",
        "text": "担心",
        "type": "状态",
        "tone": "负向",
        "domain": "未来"
      },
      {
        "id": "sig_concern",
        "text": "担忧",
        "type": "状态",
        "tone": "负向",
        "domain": "未来"
      },
      {
        "id": "sig_anxiety",
        "text": "忧虑",
        "type": "状态",
        "tone": "负向",
        "domain": "未来"
      },
      {
        "id": "sig_uneasy",
        "text": "放心不下",
        "type": "状态",
        "tone": "负向",
        "domain": "未来"
      },
      {
        "id": "sig_anxious",
        "text": "焦虑",
        "type": "状态",
        "tone": "负向",
        "domain": "未来"
      },
      {
        "id": "sig_tense",
        "text": "紧张",
        "type": "状态",
        "tone": "负向",
        "domain": "未来"
      },
      {
        "id": "sig_pressure",
        "text": "压力",
        "type": "状态",
        "tone": "负向",
        "domain": "未来"
      },
      {
        "id": "sig_anxiety_feel",
        "text": "焦虑感",
        "type": "状态",
        "tone": "负向",
        "domain": "未来"
      },
      {
        "id": "sig_breathless",
        "text": "喘不过气",
        "type": "状态",
        "tone": "负向",
        "domain": "未来"
      },
      {
        "id": "sig_long_term",
        "text": "长期",
        "type": "时间",
        "tone": "中性",
        "domain": "未来"
      },
      {
        "id": "sig_next_year",
        "text": "明年",
        "type": "时间",
        "tone": "中性",
        "domain": "未来"
      },
      {
        "id": "sig_five_years",
        "text": "未来五年",
        "type": "时间",
        "tone": "中性",
        "domain": "未来"
      },
      {
        "id": "sig_ten_years",
        "text": "十年计划",
        "type": "时间",
        "tone": "中性",
        "domain": "未来"
      },
      {
        "id": "sig_save_money",
        "text": "存钱",
        "type": "动作",
        "tone": "正向",
        "domain": "未来"
      },
      {
        "id": "sig_savings",
        "text": "储蓄",
        "type": "动作",
        "tone": "正向",
        "domain": "未来"
      },
      {
        "id": "sig_cert",
        "text": "考证",
        "type": "动作",
        "tone": "正向",
        "domain": "未来"
      },
      {
        "id": "sig_complete",
        "text": "完成",
        "type": "动作",
        "tone": "中性",
        "domain": "结果"
      },
      {
        "id": "sig_done",
        "text": "做完",
        "type": "动作",
        "tone": "中性",
        "domain": "结果"
      },
      {
        "id": "sig_finish",
        "text": "搞完",
        "type": "动作",
        "tone": "中性",
        "domain": "结果"
      },
      {
        "id": "sig_finish_off",
        "text": "搞定",
        "type": "动作",
        "tone": "中性",
        "domain": "结果"
      },
      {
        "id": "sig_end",
        "text": "结束",
        "type": "动作",
        "tone": "中性",
        "domain": "结果"
      },
      {
        "id": "sig_accomplish",
        "text": "实现",
        "type": "动作",
        "tone": "正向",
        "domain": "结果"
      },
      {
        "id": "sig_reach",
        "text": "达到",
        "type": "动作",
        "tone": "正向",
        "domain": "结果"
      },
      {
        "id": "sig_target_done",
        "text": "完成目标",
        "type": "动作",
        "tone": "正向",
        "domain": "结果"
      },
      {
        "id": "sig_meet_kpi",
        "text": "达标",
        "type": "动作",
        "tone": "正向",
        "domain": "结果"
      },
      {
        "id": "sig_output",
        "text": "产出",
        "type": "对象",
        "tone": "中性",
        "domain": "结果"
      },
      {
        "id": "sig_deliver",
        "text": "交付",
        "type": "动作",
        "tone": "中性",
        "domain": "结果"
      },
      {
        "id": "sig_export",
        "text": "输出",
        "type": "动作",
        "tone": "中性",
        "domain": "结果"
      },
      {
        "id": "sig_make",
        "text": "做出",
        "type": "动作",
        "tone": "中性",
        "domain": "结果"
      },
      {
        "id": "sig_kpi",
        "text": "KPI",
        "type": "对象",
        "tone": "中性",
        "domain": "结果"
      },
      {
        "id": "sig_kpi_alt",
        "text": "指标",
        "type": "对象",
        "tone": "中性",
        "domain": "结果"
      },
      {
        "id": "sig_performance",
        "text": "业绩",
        "type": "对象",
        "tone": "中性",
        "domain": "结果"
      },
      {
        "id": "sig_data",
        "text": "数据",
        "type": "对象",
        "tone": "中性",
        "domain": "结果"
      },
      {
        "id": "sig_review",
        "text": "业绩考核",
        "type": "事件",
        "tone": "中性",
        "domain": "结果"
      },
      {
        "id": "sig_efficient",
        "text": "效率",
        "type": "对象",
        "tone": "中性",
        "domain": "结果"
      },
      {
        "id": "sig_high_eff",
        "text": "高效",
        "type": "状态",
        "tone": "中性",
        "domain": "结果"
      },
      {
        "id": "sig_optimize",
        "text": "优化",
        "type": "动作",
        "tone": "中性",
        "domain": "结果"
      },
      {
        "id": "sig_boost_eff",
        "text": "提效",
        "type": "动作",
        "tone": "中性",
        "domain": "结果"
      },
      {
        "id": "sig_accelerate",
        "text": "加速",
        "type": "动作",
        "tone": "中性",
        "domain": "结果"
      },
      {
        "id": "sig_due",
        "text": "截止",
        "type": "对象",
        "tone": "中性",
        "domain": "结果"
      },
      {
        "id": "sig_due_past",
        "text": "期限",
        "type": "对象",
        "tone": "中性",
        "domain": "结果"
      },
      {
        "id": "sig_last_due",
        "text": "最后期限",
        "type": "对象",
        "tone": "中性",
        "domain": "结果"
      },
      {
        "id": "sig_ddl",
        "text": "DDL",
        "type": "对象",
        "tone": "中性",
        "domain": "结果"
      },
      {
        "id": "sig_decide",
        "text": "决定",
        "type": "动作",
        "tone": "正向",
        "domain": "主体"
      },
      {
        "id": "sig_choose",
        "text": "选择",
        "type": "动作",
        "tone": "正向",
        "domain": "主体"
      },
      {
        "id": "sig_pick",
        "text": "选",
        "type": "动作",
        "tone": "正向",
        "domain": "主体"
      },
      {
        "id": "sig_pick_long",
        "text": "挑",
        "type": "动作",
        "tone": "正向",
        "domain": "主体"
      },
      {
        "id": "sig_autonomy",
        "text": "决定权",
        "type": "对象",
        "tone": "正向",
        "domain": "主体"
      },
      {
        "id": "sig_explore",
        "text": "探索",
        "type": "动作",
        "tone": "正向",
        "domain": "主体"
      },
      {
        "id": "sig_try",
        "text": "试一试",
        "type": "动作",
        "tone": "正向",
        "domain": "主体"
      },
      {
        "id": "sig_proactive",
        "text": "主动找",
        "type": "动作",
        "tone": "正向",
        "domain": "主体"
      },
      {
        "id": "sig_create",
        "text": "创造",
        "type": "动作",
        "tone": "正向",
        "domain": "主体"
      },
      {
        "id": "sig_design",
        "text": "设计",
        "type": "动作",
        "tone": "正向",
        "domain": "主体"
      },
      {
        "id": "sig_write_create",
        "text": "创作",
        "type": "动作",
        "tone": "正向",
        "domain": "主体"
      },
      {
        "id": "sig_invent",
        "text": "发明",
        "type": "动作",
        "tone": "正向",
        "domain": "主体"
      },
      {
        "id": "sig_make_thing",
        "text": "做出来",
        "type": "动作",
        "tone": "正向",
        "domain": "主体"
      },
      {
        "id": "sig_express",
        "text": "表达",
        "type": "动作",
        "tone": "正向",
        "domain": "主体"
      },
      {
        "id": "sig_say",
        "text": "说出",
        "type": "动作",
        "tone": "正向",
        "domain": "主体"
      },
      {
        "id": "sig_share",
        "text": "分享",
        "type": "动作",
        "tone": "正向",
        "domain": "主体"
      },
      {
        "id": "sig_tell",
        "text": "讲述",
        "type": "动作",
        "tone": "正向",
        "domain": "主体"
      },
      {
        "id": "sig_write_down",
        "text": "写下来",
        "type": "动作",
        "tone": "正向",
        "domain": "主体"
      },
      {
        "id": "sig_change",
        "text": "改变",
        "type": "动作",
        "tone": "正向",
        "domain": "主体"
      },
      {
        "id": "sig_adjust",
        "text": "调整",
        "type": "动作",
        "tone": "正向",
        "domain": "主体"
      },
      {
        "id": "sig_redo",
        "text": "重新",
        "type": "状态",
        "tone": "中性",
        "domain": "主体"
      },
      {
        "id": "sig_redo_over",
        "text": "推翻重来",
        "type": "动作",
        "tone": "正向",
        "domain": "主体"
      },
      {
        "id": "sig_change_way",
        "text": "换一种方式",
        "type": "动作",
        "tone": "正向",
        "domain": "主体"
      },
      {
        "id": "sig_assigned",
        "text": "被安排",
        "type": "状态",
        "tone": "负向",
        "domain": "被动"
      },
      {
        "id": "sig_required",
        "text": "被要求",
        "type": "状态",
        "tone": "负向",
        "domain": "被动"
      },
      {
        "id": "sig_no_choice",
        "text": "没办法",
        "type": "状态",
        "tone": "负向",
        "domain": "被动"
      },
      {
        "id": "sig_must",
        "text": "不得不",
        "type": "状态",
        "tone": "负向",
        "domain": "被动"
      },
      {
        "id": "sig_only_can",
        "text": "只能",
        "type": "状态",
        "tone": "负向",
        "domain": "被动"
      },
      {
        "id": "sig_informed",
        "text": "被告知",
        "type": "状态",
        "tone": "负向",
        "domain": "被动"
      },
      {
        "id": "sig_notified",
        "text": "被通知",
        "type": "状态",
        "tone": "负向",
        "domain": "被动"
      },
      {
        "id": "sig_taste",
        "text": "味道",
        "type": "感官",
        "tone": "中性",
        "domain": "感官"
      },
      {
        "id": "sig_touch",
        "text": "触感",
        "type": "感官",
        "tone": "中性",
        "domain": "感官"
      },
      {
        "id": "sig_sound",
        "text": "声音",
        "type": "感官",
        "tone": "中性",
        "domain": "感官"
      },
      {
        "id": "sig_smell",
        "text": "气味",
        "type": "感官",
        "tone": "中性",
        "domain": "感官"
      },
      {
        "id": "sig_smell_good",
        "text": "好闻",
        "type": "感官",
        "tone": "正向",
        "domain": "感官"
      },
      {
        "id": "sig_tasty",
        "text": "好吃",
        "type": "感官",
        "tone": "正向",
        "domain": "感官"
      },
      {
        "id": "sig_rain",
        "text": "雨",
        "type": "场景",
        "tone": "中性",
        "domain": "场景"
      },
      {
        "id": "sig_sun",
        "text": "阳光",
        "type": "场景",
        "tone": "中性",
        "domain": "场景"
      },
      {
        "id": "sig_snow",
        "text": "下雪",
        "type": "场景",
        "tone": "中性",
        "domain": "场景"
      },
      {
        "id": "sig_weather",
        "text": "天气",
        "type": "场景",
        "tone": "中性",
        "domain": "场景"
      },
      {
        "id": "sig_cafe",
        "text": "咖啡馆",
        "type": "场景",
        "tone": "中性",
        "domain": "场景"
      },
      {
        "id": "sig_street",
        "text": "那条街",
        "type": "场景",
        "tone": "中性",
        "domain": "场景"
      },
      {
        "id": "sig_excited",
        "text": "激动",
        "type": "情绪",
        "tone": "正向",
        "domain": "情绪"
      },
      {
        "id": "sig_calm",
        "text": "平静",
        "type": "情绪",
        "tone": "中性",
        "domain": "情绪"
      },
      {
        "id": "sig_comfortable",
        "text": "舒服",
        "type": "情绪",
        "tone": "正向",
        "domain": "情绪"
      },
      {
        "id": "sig_warm_heart",
        "text": "暖心",
        "type": "情绪",
        "tone": "正向",
        "domain": "情绪"
      },
      {
        "id": "sig_lost",
        "text": "失落",
        "type": "情绪",
        "tone": "负向",
        "domain": "情绪"
      },
      {
        "id": "sig_touched",
        "text": "窝心",
        "type": "情绪",
        "tone": "正向",
        "domain": "情绪"
      },
      {
        "id": "sig_moment",
        "text": "那一刻",
        "type": "时间锚",
        "tone": "中性",
        "domain": "锚点"
      },
      {
        "id": "sig_remember",
        "text": "记得",
        "type": "动作",
        "tone": "中性",
        "domain": "锚点"
      },
      {
        "id": "sig_unforgettable",
        "text": "难忘",
        "type": "状态",
        "tone": "正向",
        "domain": "锚点"
      },
      {
        "id": "sig_remember_forever",
        "text": "永远记得",
        "type": "状态",
        "tone": "正向",
        "domain": "锚点"
      },
      {
        "id": "sig_instant",
        "text": "那一瞬间",
        "type": "时间锚",
        "tone": "中性",
        "domain": "锚点"
      },
      {
        "id": "sig_life_first",
        "text": "人生第一次",
        "type": "事件",
        "tone": "正向",
        "domain": "锚点"
      },
      {
        "id": "sig_first_time_alt",
        "text": "头一回",
        "type": "事件",
        "tone": "正向",
        "domain": "锚点"
      },
      {
        "id": "sig_first_experience",
        "text": "初体验",
        "type": "事件",
        "tone": "正向",
        "domain": "锚点"
      },
      {
        "id": "sig_discover",
        "text": "发现",
        "type": "动作",
        "tone": "正向",
        "domain": "认知"
      },
      {
        "id": "sig_go_discover",
        "text": "去发现",
        "type": "动作",
        "tone": "正向",
        "domain": "认知"
      },
      {
        "id": "sig_found",
        "text": "找到了",
        "type": "动作",
        "tone": "正向",
        "domain": "认知"
      },
      {
        "id": "sig_notice",
        "text": "注意到",
        "type": "动作",
        "tone": "中性",
        "domain": "认知"
      },
      {
        "id": "sig_understand",
        "text": "明白",
        "type": "状态",
        "tone": "正向",
        "domain": "认知"
      },
      {
        "id": "sig_grasp",
        "text": "搞懂",
        "type": "动作",
        "tone": "正向",
        "domain": "认知"
      },
      {
        "id": "sig_comprehend",
        "text": "领悟",
        "type": "动作",
        "tone": "正向",
        "domain": "认知"
      },
      {
        "id": "sig_aha",
        "text": "恍然大悟",
        "type": "状态",
        "tone": "正向",
        "domain": "认知"
      },
      {
        "id": "sig_overturn",
        "text": "推翻",
        "type": "动作",
        "tone": "中性",
        "domain": "认知"
      },
      {
        "id": "sig_change_view",
        "text": "改变看法",
        "type": "动作",
        "tone": "中性",
        "domain": "认知"
      },
      {
        "id": "sig_no_longer_believe",
        "text": "不再认为",
        "type": "动作",
        "tone": "中性",
        "domain": "认知"
      },
      {
        "id": "sig_refresh_view",
        "text": "改观",
        "type": "动作",
        "tone": "正向",
        "domain": "认知"
      },
      {
        "id": "sig_refresh_cognition",
        "text": "刷新认知",
        "type": "动作",
        "tone": "中性",
        "domain": "认知"
      },
      {
        "id": "sig_interested",
        "text": "感兴趣",
        "type": "状态",
        "tone": "正向",
        "domain": "认知"
      },
      {
        "id": "sig_fall_in_love",
        "text": "爱上",
        "type": "动作",
        "tone": "正向",
        "domain": "认知"
      },
      {
        "id": "sig_obsessed",
        "text": "迷上",
        "type": "状态",
        "tone": "中性",
        "domain": "认知"
      },
      {
        "id": "sig_grass_plant",
        "text": "种草",
        "type": "动作",
        "tone": "正向",
        "domain": "认知"
      },
      {
        "id": "sig_want_to_try",
        "text": "想试试",
        "type": "状态",
        "tone": "正向",
        "domain": "认知"
      },
      {
        "id": "sig_more_important",
        "text": "更重要",
        "type": "状态",
        "tone": "中性",
        "domain": "价值"
      },
      {
        "id": "sig_less_important",
        "text": "不再重要",
        "type": "状态",
        "tone": "中性",
        "domain": "价值"
      },
      {
        "id": "sig_re_sort",
        "text": "重新排序",
        "type": "动作",
        "tone": "中性",
        "domain": "价值"
      },
      {
        "id": "sig_priority",
        "text": "优先级",
        "type": "对象",
        "tone": "中性",
        "domain": "价值"
      },
      {
        "id": "sig_top_priority",
        "text": "放在第一位",
        "type": "状态",
        "tone": "中性",
        "domain": "价值"
      },
      {
        "id": "sig_self_realize",
        "text": "原来我是",
        "type": "状态",
        "tone": "中性",
        "domain": "自我"
      },
      {
        "id": "sig_i_thought",
        "text": "我以为",
        "type": "状态",
        "tone": "中性",
        "domain": "自我"
      },
      {
        "id": "sig_i_realize",
        "text": "我才知道",
        "type": "状态",
        "tone": "中性",
        "domain": "自我"
      },
      {
        "id": "sig_discover_self",
        "text": "发现自己",
        "type": "动作",
        "tone": "中性",
        "domain": "自我"
      },
      {
        "id": "sig_re_know_self",
        "text": "重新认识自己",
        "type": "动作",
        "tone": "中性",
        "domain": "自我"
      },
      {
        "id": "sig_make_friend",
        "text": "结识",
        "type": "动作",
        "tone": "正向",
        "domain": "关系"
      },
      {
        "id": "sig_add_friend",
        "text": "加好友",
        "type": "动作",
        "tone": "正向",
        "domain": "关系"
      },
      {
        "id": "sig_deep_talk",
        "text": "深度",
        "type": "状态",
        "tone": "正向",
        "domain": "关系"
      },
      {
        "id": "sig_deep_in",
        "text": "深入",
        "type": "状态",
        "tone": "正向",
        "domain": "关系"
      },
      {
        "id": "sig_long_talk",
        "text": "长谈",
        "type": "动作",
        "tone": "正向",
        "domain": "关系"
      },
      {
        "id": "sig_heart_to_heart",
        "text": "推心置腹",
        "type": "动作",
        "tone": "正向",
        "domain": "关系"
      },
      {
        "id": "sig_open_heart",
        "text": "敞开心扉",
        "type": "动作",
        "tone": "正向",
        "domain": "关系"
      },
      {
        "id": "sig_reconcile",
        "text": "和好",
        "type": "事件",
        "tone": "正向",
        "domain": "关系"
      },
      {
        "id": "sig_breakup",
        "text": "分手",
        "type": "事件",
        "tone": "中性",
        "domain": "关系"
      },
      {
        "id": "sig_quarrel",
        "text": "闹翻",
        "type": "事件",
        "tone": "中性",
        "domain": "关系"
      },
      {
        "id": "sig_rel_change",
        "text": "关系变化",
        "type": "事件",
        "tone": "中性",
        "domain": "关系"
      },
      {
        "id": "sig_distant",
        "text": "疏远",
        "type": "状态",
        "tone": "中性",
        "domain": "关系"
      },
      {
        "id": "sig_close",
        "text": "走近",
        "type": "状态",
        "tone": "正向",
        "domain": "关系"
      },
      {
        "id": "sig_together",
        "text": "一起",
        "type": "状态",
        "tone": "正向",
        "domain": "关系"
      },
      {
        "id": "sig_together_long",
        "text": "共同",
        "type": "状态",
        "tone": "正向",
        "domain": "关系"
      },
      {
        "id": "sig_together_one",
        "text": "一块儿",
        "type": "状态",
        "tone": "正向",
        "domain": "关系"
      },
      {
        "id": "sig_we_together",
        "text": "我们一起",
        "type": "状态",
        "tone": "正向",
        "domain": "关系"
      },
      {
        "id": "sig_confess",
        "text": "表白",
        "type": "动作",
        "tone": "正向",
        "domain": "关系"
      },
      {
        "id": "sig_hug",
        "text": "拥抱",
        "type": "动作",
        "tone": "正向",
        "domain": "关系"
      },
      {
        "id": "sig_shake_hand",
        "text": "握手",
        "type": "动作",
        "tone": "中性",
        "domain": "关系"
      },
      {
        "id": "sig_tears",
        "text": "流泪",
        "type": "动作",
        "tone": "中性",
        "domain": "关系"
      },
      {
        "id": "sig_cry_complain",
        "text": "哭诉",
        "type": "动作",
        "tone": "中性",
        "domain": "关系"
      },
      {
        "id": "sig_understood",
        "text": "被理解",
        "type": "状态",
        "tone": "正向",
        "domain": "关系"
      },
      {
        "id": "sig_understand_me",
        "text": "懂我",
        "type": "状态",
        "tone": "正向",
        "domain": "关系"
      },
      {
        "id": "sig_you_understand",
        "text": "你懂",
        "type": "状态",
        "tone": "正向",
        "domain": "关系"
      },
      {
        "id": "sig_understood_passive",
        "text": "被懂得",
        "type": "状态",
        "tone": "正向",
        "domain": "关系"
      },
      {
        "id": "sig_understand_him",
        "text": "理解他",
        "type": "状态",
        "tone": "正向",
        "domain": "关系"
      },
      {
        "id": "sig_understand_him2",
        "text": "懂他",
        "type": "状态",
        "tone": "正向",
        "domain": "关系"
      },
      {
        "id": "sig_i_understand_you",
        "text": "我懂你",
        "type": "状态",
        "tone": "正向",
        "domain": "关系"
      },
      {
        "id": "sig_turns_out_him",
        "text": "原来他",
        "type": "状态",
        "tone": "中性",
        "domain": "关系"
      },
      {
        "id": "sig_trust",
        "text": "信任",
        "type": "状态",
        "tone": "正向",
        "domain": "关系"
      },
      {
        "id": "sig_truth",
        "text": "真话",
        "type": "对象",
        "tone": "中性",
        "domain": "关系"
      }
    ]
  },
  "factor-signals": {
    "_meta": {
      "table": "factor_signals",
      "purpose": "因子与信号词的多对多关联",
      "version": "1.3.0",
      "primaryKey": [
        "factorId",
        "signalId"
      ],
      "foreignKeys": {
        "factorId": "factors.id",
        "signalId": "signals.id"
      },
      "notes": [
        "weight 是该信号对此因子的相对权重（默认 1.0）",
        "matchType 决定匹配方式：exact（精确）/loose（容许间距）",
        "negationOverride 可覆盖默认否定行为"
      ]
    },
    "records": [
      {
        "factorId": "D1-W",
        "signalId": "sig_work",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D1-W",
        "signalId": "sig_meeting",
        "weight": 1,
        "matchType": "loose",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D1-W",
        "signalId": "sig_meeting_loose",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D1-W",
        "signalId": "sig_meeting_past",
        "weight": 0.9,
        "matchType": "loose",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D1-W",
        "signalId": "sig_overtime",
        "weight": 1,
        "matchType": "loose",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D1-W",
        "signalId": "sig_overtime_past",
        "weight": 0.9,
        "matchType": "loose",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D1-W",
        "signalId": "sig_project",
        "weight": 0.8,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D1-W",
        "signalId": "sig_report",
        "weight": 0.8,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D1-W",
        "signalId": "sig_sync",
        "weight": 0.7,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D1-W",
        "signalId": "sig_okr",
        "weight": 0.8,
        "matchType": "exact",
        "negationOverride": null,
        "note": "跨维度"
      },
      {
        "factorId": "D1-W",
        "signalId": "sig_daily",
        "weight": 0.7,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D1-W",
        "signalId": "sig_weekly",
        "weight": 0.7,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D1-W",
        "signalId": "sig_regular",
        "weight": 0.7,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D1-W",
        "signalId": "sig_deadline",
        "weight": 0.8,
        "matchType": "exact",
        "negationOverride": null,
        "note": "跨维度"
      },
      {
        "factorId": "D1-L",
        "signalId": "sig_study",
        "weight": 1,
        "matchType": "loose",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D1-L",
        "signalId": "sig_study_past",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D1-L",
        "signalId": "sig_study_to",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D1-L",
        "signalId": "sig_read",
        "weight": 0.9,
        "matchType": "loose",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D1-L",
        "signalId": "sig_read_past",
        "weight": 0.9,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D1-L",
        "signalId": "sig_read_book",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D1-L",
        "signalId": "sig_read_part",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D1-L",
        "signalId": "sig_book",
        "weight": 0.9,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D1-L",
        "signalId": "sig_class",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D1-L",
        "signalId": "sig_course",
        "weight": 0.7,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D1-L",
        "signalId": "sig_train",
        "weight": 0.8,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D1-L",
        "signalId": "sig_practice",
        "weight": 0.8,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D1-L",
        "signalId": "sig_vocab",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D1-L",
        "signalId": "sig_paper",
        "weight": 0.9,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D1-F",
        "signalId": "sig_family",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D1-F",
        "signalId": "sig_child",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D1-F",
        "signalId": "sig_companion",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D1-F",
        "signalId": "sig_companion_past",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D1-F",
        "signalId": "sig_companion_child",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D1-F",
        "signalId": "sig_family_member",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D1-F",
        "signalId": "sig_parents",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D1-F",
        "signalId": "sig_spouse",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D1-F",
        "signalId": "sig_housework",
        "weight": 0.8,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D1-F",
        "signalId": "sig_cook",
        "weight": 0.8,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D1-F",
        "signalId": "sig_pickup",
        "weight": 0.8,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D1-S",
        "signalId": "sig_social",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D1-S",
        "signalId": "sig_friend",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D1-S",
        "signalId": "sig_meet_friend",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D1-S",
        "signalId": "sig_meet_past",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D1-S",
        "signalId": "sig_eat_together",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D1-S",
        "signalId": "sig_party",
        "weight": 0.9,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D1-S",
        "signalId": "sig_dinner",
        "weight": 0.7,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D1-S",
        "signalId": "sig_banquet",
        "weight": 0.6,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D1-S",
        "signalId": "sig_team_building",
        "weight": 0.7,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D1-S",
        "signalId": "sig_date",
        "weight": 0.9,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D1-A",
        "signalId": "sig_alone",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D1-A",
        "signalId": "sig_daze",
        "weight": 0.8,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D1-A",
        "signalId": "sig_alone_self",
        "weight": 0.9,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D1-A",
        "signalId": "sig_alone_solo",
        "weight": 0.9,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D1-A",
        "signalId": "sig_sit_quiet",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D1-A",
        "signalId": "sig_meditate",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D1-A",
        "signalId": "sig_walk",
        "weight": 0.8,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D1-Z",
        "signalId": "sig_sleep",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D1-Z",
        "signalId": "sig_sleep_past",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D1-Z",
        "signalId": "sig_sleep_act",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D1-Z",
        "signalId": "sig_nap",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D1-Z",
        "signalId": "sig_rest",
        "weight": 0.8,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D1-Z",
        "signalId": "sig_lie_in",
        "weight": 0.7,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D1-Z",
        "signalId": "sig_insomnia",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D1-T",
        "signalId": "sig_commute",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D1-T",
        "signalId": "sig_on_road",
        "weight": 0.7,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D1-T",
        "signalId": "sig_subway",
        "weight": 0.8,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D1-T",
        "signalId": "sig_bus",
        "weight": 0.8,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D1-T",
        "signalId": "sig_drive",
        "weight": 0.9,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D1-T",
        "signalId": "sig_taxi",
        "weight": 0.9,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D1-X",
        "signalId": "sig_drama",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D1-X",
        "signalId": "sig_drama_past",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D1-X",
        "signalId": "sig_binge",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D1-X",
        "signalId": "sig_movie",
        "weight": 0.8,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D1-X",
        "signalId": "sig_variety",
        "weight": 0.7,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D1-X",
        "signalId": "sig_game",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D1-X",
        "signalId": "sig_game_noun",
        "weight": 0.9,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D1-X",
        "signalId": "sig_game_past",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D1-X",
        "signalId": "sig_play",
        "weight": 0.5,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D1-X",
        "signalId": "sig_music_listen",
        "weight": 0.9,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D1-X",
        "signalId": "sig_music",
        "weight": 0.7,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D1-X",
        "signalId": "sig_music_play",
        "weight": 0.9,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D1-X",
        "signalId": "sig_tiktok",
        "weight": 0.8,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D1-X",
        "signalId": "sig_weibo",
        "weight": 0.8,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D1-X",
        "signalId": "sig_fitness",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D1-X",
        "signalId": "sig_sport",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D1-X",
        "signalId": "sig_run",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D1-X",
        "signalId": "sig_hike",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D1-X",
        "signalId": "sig_draw",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D2-SIM",
        "signalId": "sig_repeat",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D2-RT",
        "signalId": "sig_old_place",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D2-RT",
        "signalId": "sig_old_road",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D2-RT",
        "signalId": "sig_old_shop",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D2-RT",
        "signalId": "sig_same_place",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D2-RP",
        "signalId": "sig_old_friend",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D2-RP",
        "signalId": "sig_old_colleague",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D2-RC",
        "signalId": "sig_scroll",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": "negation→0"
      },
      {
        "factorId": "D2-RC",
        "signalId": "sig_short_video",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D2-RC",
        "signalId": "sig_phone",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D2-RC",
        "signalId": "sig_moments",
        "weight": 0.7,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D3-NP",
        "signalId": "sig_new_place_first",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D3-NP",
        "signalId": "sig_never_been",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D3-NP",
        "signalId": "sig_new_open",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D3-NP",
        "signalId": "sig_new_spot",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D3-NP",
        "signalId": "sig_first_visit",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D3-NB",
        "signalId": "sig_encounter",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D3-NB",
        "signalId": "sig_new_person",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D3-NE",
        "signalId": "sig_first_time",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D3-NE",
        "signalId": "sig_first_try",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D3-NE",
        "signalId": "sig_first_eat",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D3-NE",
        "signalId": "sig_first_time_alt",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": "T1-FR 也用"
      },
      {
        "factorId": "D3-NA",
        "signalId": "sig_unprecedented",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D3-NA",
        "signalId": "sig_first_do",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D3-NA",
        "signalId": "sig_first_walk",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D3-NA",
        "signalId": "sig_first_meet",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D3-UE",
        "signalId": "sig_accident",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D3-UE",
        "signalId": "sig_sudden",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D3-UE",
        "signalId": "sig_surprise",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D3-UE",
        "signalId": "sig_surprised",
        "weight": 0.7,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D3-UE",
        "signalId": "sig_sudden_event",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D3-ML",
        "signalId": "sig_graduate",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D3-ML",
        "signalId": "sig_join",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D3-ML",
        "signalId": "sig_launch",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D3-ML",
        "signalId": "sig_release",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D3-ML",
        "signalId": "sig_achieve",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D3-CG",
        "signalId": "sig_realize",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D3-CG",
        "signalId": "sig_think_through",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D3-CG",
        "signalId": "sig_realize2",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D3-CG",
        "signalId": "sig_epiphany",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D3-EM",
        "signalId": "sig_collapse",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D3-EM",
        "signalId": "sig_fury",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D3-EM",
        "signalId": "sig_ecstasy",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D3-EM",
        "signalId": "sig_sob",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D3-EM",
        "signalId": "sig_furious",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "D3-EM",
        "signalId": "sig_heartbreak",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "S1-PL",
        "signalId": "sig_plan",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "S1-PL",
        "signalId": "sig_plan_to",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "S1-PL",
        "signalId": "sig_arrange",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "S1-PL",
        "signalId": "sig_reserve",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "S1-GO",
        "signalId": "sig_goal",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "S1-GO",
        "signalId": "sig_aim",
        "weight": 0.7,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "S1-GO",
        "signalId": "sig_vision",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "S1-GO",
        "signalId": "sig_aspiration",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "S1-GO",
        "signalId": "sig_want",
        "weight": 0.8,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "S1-EX",
        "signalId": "sig_expect",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "S1-EX",
        "signalId": "sig_hope",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "S1-EX",
        "signalId": "sig_imagine",
        "weight": 0.7,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "S1-EX",
        "signalId": "sig_prediction",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "S1-EX",
        "signalId": "sig_assume",
        "weight": 0.7,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "S1-WO",
        "signalId": "sig_worry",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": "negation→0"
      },
      {
        "factorId": "S1-WO",
        "signalId": "sig_concern",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "S1-WO",
        "signalId": "sig_anxiety",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "S1-WO",
        "signalId": "sig_uneasy",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "S1-AN",
        "signalId": "sig_anxious",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": "negation→0"
      },
      {
        "factorId": "S1-AN",
        "signalId": "sig_tense",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "S1-AN",
        "signalId": "sig_pressure",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "S1-AN",
        "signalId": "sig_anxiety_feel",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "S1-AN",
        "signalId": "sig_breathless",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "S1-FP",
        "signalId": "sig_long_term",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "S1-FP",
        "signalId": "sig_next_year",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "S1-FP",
        "signalId": "sig_five_years",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "S1-FP",
        "signalId": "sig_ten_years",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "S1-FP",
        "signalId": "sig_save_money",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "S1-FP",
        "signalId": "sig_savings",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "S1-FP",
        "signalId": "sig_cert",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "S2-DG",
        "signalId": "sig_accomplish",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": "negation→0"
      },
      {
        "factorId": "S2-DG",
        "signalId": "sig_reach",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "S2-DG",
        "signalId": "sig_target_done",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "S2-DG",
        "signalId": "sig_meet_kpi",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "S2-OU",
        "signalId": "sig_output",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": "negation→0"
      },
      {
        "factorId": "S2-OU",
        "signalId": "sig_deliver",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "S2-OU",
        "signalId": "sig_export",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "S2-OU",
        "signalId": "sig_make",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "S2-KP",
        "signalId": "sig_kpi",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": "negation→0"
      },
      {
        "factorId": "S2-KP",
        "signalId": "sig_okr",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": "D1-W 也用"
      },
      {
        "factorId": "S2-KP",
        "signalId": "sig_kpi_alt",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "S2-KP",
        "signalId": "sig_performance",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "S2-KP",
        "signalId": "sig_data",
        "weight": 0.5,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "S2-KP",
        "signalId": "sig_review",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "S2-EF",
        "signalId": "sig_efficient",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": "negation→0"
      },
      {
        "factorId": "S2-EF",
        "signalId": "sig_high_eff",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "S2-EF",
        "signalId": "sig_optimize",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "S2-EF",
        "signalId": "sig_boost_eff",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "S2-EF",
        "signalId": "sig_accelerate",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "S2-DL",
        "signalId": "sig_due",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": "negation→0"
      },
      {
        "factorId": "S2-DL",
        "signalId": "sig_due_past",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "S2-DL",
        "signalId": "sig_last_due",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "S2-DL",
        "signalId": "sig_ddl",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "S2-DL",
        "signalId": "sig_deadline",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": "D1-W 也用"
      },
      {
        "factorId": "S3-CH",
        "signalId": "sig_decide",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "S3-CH",
        "signalId": "sig_choose",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "S3-CH",
        "signalId": "sig_pick",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "S3-CH",
        "signalId": "sig_pick_long",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "S3-CH",
        "signalId": "sig_autonomy",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "S3-EX",
        "signalId": "sig_explore",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "S3-EX",
        "signalId": "sig_try",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "S3-EX",
        "signalId": "sig_proactive",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "S3-EX",
        "signalId": "sig_discover",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": "T2-DI 也用"
      },
      {
        "factorId": "S3-EX",
        "signalId": "sig_go_discover",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": "主动去发现"
      },
      {
        "factorId": "S3-CR",
        "signalId": "sig_create",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "S3-CR",
        "signalId": "sig_design",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "S3-CR",
        "signalId": "sig_write_create",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "S3-CR",
        "signalId": "sig_invent",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "S3-CR",
        "signalId": "sig_make_thing",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "S3-EP",
        "signalId": "sig_express",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "S3-EP",
        "signalId": "sig_say",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "S3-EP",
        "signalId": "sig_share",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "S3-EP",
        "signalId": "sig_tell",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "S3-EP",
        "signalId": "sig_write_down",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "S3-CG",
        "signalId": "sig_change",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "S3-CG",
        "signalId": "sig_adjust",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "S3-CG",
        "signalId": "sig_redo",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "S3-CG",
        "signalId": "sig_redo_over",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "S3-CG",
        "signalId": "sig_change_way",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "S3-PE",
        "signalId": "sig_assigned",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": "negation→0"
      },
      {
        "factorId": "S3-PE",
        "signalId": "sig_required",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "S3-PE",
        "signalId": "sig_no_choice",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "S3-PE",
        "signalId": "sig_must",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "S3-PE",
        "signalId": "sig_only_can",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "S3-PA",
        "signalId": "sig_informed",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": "negation→0"
      },
      {
        "factorId": "S3-PA",
        "signalId": "sig_notified",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "T1-SE",
        "signalId": "sig_taste",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "T1-SE",
        "signalId": "sig_touch",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "T1-SE",
        "signalId": "sig_sound",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "T1-SE",
        "signalId": "sig_smell",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "T1-SE",
        "signalId": "sig_smell_good",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "T1-SE",
        "signalId": "sig_tasty",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "T1-SC",
        "signalId": "sig_rain",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "T1-SC",
        "signalId": "sig_sun",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "T1-SC",
        "signalId": "sig_snow",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "T1-SC",
        "signalId": "sig_weather",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "T1-SC",
        "signalId": "sig_cafe",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "T1-SC",
        "signalId": "sig_street",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "T1-EM",
        "signalId": "sig_excited",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "T1-EM",
        "signalId": "sig_calm",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "T1-EM",
        "signalId": "sig_comfortable",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "T1-EM",
        "signalId": "sig_warm_heart",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "T1-EM",
        "signalId": "sig_lost",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "T1-EM",
        "signalId": "sig_touched",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "T1-TA",
        "signalId": "sig_moment",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "T1-TA",
        "signalId": "sig_remember",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "T1-TA",
        "signalId": "sig_unforgettable",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "T1-TA",
        "signalId": "sig_remember_forever",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "T1-TA",
        "signalId": "sig_instant",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "T1-FR",
        "signalId": "sig_life_first",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "T1-FR",
        "signalId": "sig_first_experience",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "T1-FR",
        "signalId": "sig_first_time_alt",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": "D3-NE 也用"
      },
      {
        "factorId": "T2-DI",
        "signalId": "sig_discover",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": "S3-EX 也用"
      },
      {
        "factorId": "T2-DI",
        "signalId": "sig_found",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "T2-DI",
        "signalId": "sig_notice",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "T2-UN",
        "signalId": "sig_understand",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": "模糊词\"懂\"已并入此"
      },
      {
        "factorId": "T2-UN",
        "signalId": "sig_grasp",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "T2-UN",
        "signalId": "sig_comprehend",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "T2-UN",
        "signalId": "sig_aha",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "T2-OV",
        "signalId": "sig_overturn",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "T2-OV",
        "signalId": "sig_change_view",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "T2-OV",
        "signalId": "sig_no_longer_believe",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "T2-OV",
        "signalId": "sig_refresh_view",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "T2-OV",
        "signalId": "sig_refresh_cognition",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "T2-VA",
        "signalId": "sig_more_important",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "T2-VA",
        "signalId": "sig_less_important",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "T2-VA",
        "signalId": "sig_re_sort",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "T2-VA",
        "signalId": "sig_priority",
        "weight": 0.7,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "T2-VA",
        "signalId": "sig_top_priority",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "T2-SR",
        "signalId": "sig_self_realize",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "T2-SR",
        "signalId": "sig_i_thought",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "T2-SR",
        "signalId": "sig_i_realize",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "T2-SR",
        "signalId": "sig_discover_self",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "T2-SR",
        "signalId": "sig_re_know_self",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "T3-NK",
        "signalId": "sig_make_friend",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "T3-NK",
        "signalId": "sig_add_friend",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "T3-DC",
        "signalId": "sig_deep_talk",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "T3-DC",
        "signalId": "sig_deep_in",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "T3-DC",
        "signalId": "sig_long_talk",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "T3-DC",
        "signalId": "sig_heart_to_heart",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "T3-DC",
        "signalId": "sig_open_heart",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "T3-CR",
        "signalId": "sig_reconcile",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "T3-CR",
        "signalId": "sig_breakup",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "T3-CR",
        "signalId": "sig_quarrel",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "T3-CR",
        "signalId": "sig_rel_change",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "T3-CR",
        "signalId": "sig_distant",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "T3-CR",
        "signalId": "sig_close",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "T3-CE",
        "signalId": "sig_together",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": "D1-F 陪伴也用"
      },
      {
        "factorId": "T3-CE",
        "signalId": "sig_together_long",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "T3-CE",
        "signalId": "sig_together_one",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "T3-CE",
        "signalId": "sig_we_together",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "T3-CE",
        "signalId": "sig_companion",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": "D1-F 陪伴也用"
      },
      {
        "factorId": "T3-EI",
        "signalId": "sig_confess",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "T3-EI",
        "signalId": "sig_hug",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "T3-EI",
        "signalId": "sig_shake_hand",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "T3-EI",
        "signalId": "sig_tears",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "T3-EI",
        "signalId": "sig_cry_complain",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "T3-UD",
        "signalId": "sig_understood",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "T3-UD",
        "signalId": "sig_understand_me",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "T3-UD",
        "signalId": "sig_you_understand",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "T3-UD",
        "signalId": "sig_understood_passive",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "T3-UU",
        "signalId": "sig_understand_him",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "T3-UU",
        "signalId": "sig_understand_him2",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "T3-UU",
        "signalId": "sig_i_understand_you",
        "weight": 1,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      },
      {
        "factorId": "T3-UU",
        "signalId": "sig_turns_out_him",
        "weight": 0.8,
        "matchType": "exact",
        "negationOverride": null,
        "note": ""
      }
    ]
  },
  "negations": {
    "_meta": {
      "table": "negations",
      "purpose": "否定词表（影响抽取逻辑）",
      "version": "1.3.0",
      "primaryKey": "id",
      "notes": [
        "priority 越大越优先匹配",
        "scope: 'global' 作用于所有因子；'per-factor' 需在 factors.negations 显式声明",
        "intentOverride: 'reverse' 把 negative intent 翻转为正向得分；'cancel' 直接取消命中"
      ]
    },
    "records": [
      {
        "id": "neg_no_more",
        "text": "不再",
        "priority": 100,
        "scope": "global",
        "intentOverride": "reverse",
        "language": "zh-CN"
      },
      {
        "id": "neg_not",
        "text": "不是",
        "priority": 95,
        "scope": "global",
        "intentOverride": "reverse",
        "language": "zh-CN"
      },
      {
        "id": "neg_not_too",
        "text": "不太",
        "priority": 90,
        "scope": "global",
        "intentOverride": "reverse",
        "language": "zh-CN"
      },
      {
        "id": "neg_never",
        "text": "从不",
        "priority": 85,
        "scope": "global",
        "intentOverride": "reverse",
        "language": "zh-CN"
      },
      {
        "id": "neg_never2",
        "text": "从未",
        "priority": 85,
        "scope": "global",
        "intentOverride": "reverse",
        "language": "zh-CN"
      },
      {
        "id": "neg_never3",
        "text": "绝不",
        "priority": 80,
        "scope": "global",
        "intentOverride": "reverse",
        "language": "zh-CN"
      },
      {
        "id": "neg_almost_not",
        "text": "几乎不",
        "priority": 75,
        "scope": "global",
        "intentOverride": "reverse",
        "language": "zh-CN"
      },
      {
        "id": "neg_never_ever",
        "text": "永不",
        "priority": 70,
        "scope": "global",
        "intentOverride": "reverse",
        "language": "zh-CN"
      },
      {
        "id": "neg_not_roll",
        "text": "不卷",
        "priority": 65,
        "scope": "global",
        "intentOverride": "reverse",
        "language": "zh-CN",
        "note": "互联网 slang"
      },
      {
        "id": "neg_no_have",
        "text": "没",
        "priority": 60,
        "scope": "global",
        "intentOverride": "reverse",
        "language": "zh-CN"
      },
      {
        "id": "neg_not_yet",
        "text": "未",
        "priority": 55,
        "scope": "global",
        "intentOverride": "reverse",
        "language": "zh-CN"
      },
      {
        "id": "neg_none",
        "text": "无",
        "priority": 50,
        "scope": "global",
        "intentOverride": "reverse",
        "language": "zh-CN"
      },
      {
        "id": "neg_no",
        "text": "不",
        "priority": 40,
        "scope": "global",
        "intentOverride": "reverse",
        "language": "zh-CN"
      },
      {
        "id": "neg_dont",
        "text": "别",
        "priority": 35,
        "scope": "global",
        "intentOverride": "reverse",
        "language": "zh-CN"
      }
    ]
  },
  "modifiers": {
    "_meta": {
      "table": "modifiers",
      "purpose": "强度修饰符表（影响 confidence）",
      "version": "1.3.0",
      "primaryKey": "id",
      "notes": [
        "confidence = factor.weight × rule.weight × modifier.confidence",
        "priority 越大越优先匹配",
        "scope: 'global' 全局；'per-factor' 需 factors.modifiers 显式声明"
      ]
    },
    "records": [
      {
        "id": "mod_extreme",
        "text": "极其",
        "confidence": 1.5,
        "priority": 95,
        "scope": "global",
        "language": "zh-CN"
      },
      {
        "id": "mod_very",
        "text": "非常",
        "confidence": 1.4,
        "priority": 90,
        "scope": "global",
        "language": "zh-CN"
      },
      {
        "id": "mod_especial",
        "text": "特别",
        "confidence": 1.3,
        "priority": 85,
        "scope": "global",
        "language": "zh-CN"
      },
      {
        "id": "mod_pretty",
        "text": "很",
        "confidence": 1.2,
        "priority": 80,
        "scope": "global",
        "language": "zh-CN"
      },
      {
        "id": "mod_relatively",
        "text": "比较",
        "confidence": 1.1,
        "priority": 75,
        "scope": "global",
        "language": "zh-CN"
      },
      {
        "id": "mod_slightly",
        "text": "稍微",
        "confidence": 0.8,
        "priority": 70,
        "scope": "global",
        "language": "zh-CN"
      },
      {
        "id": "mod_a_bit",
        "text": "有点",
        "confidence": 0.7,
        "priority": 65,
        "scope": "global",
        "language": "zh-CN"
      },
      {
        "id": "mod_almost",
        "text": "几乎",
        "confidence": 0.5,
        "priority": 60,
        "scope": "global",
        "language": "zh-CN"
      },
      {
        "id": "mod_almost_not",
        "text": "几乎不",
        "confidence": 0.3,
        "priority": 100,
        "scope": "global",
        "language": "zh-CN",
        "note": "复合修饰，优先匹配"
      }
    ]
  },
  "intents": {
    "_meta": {
      "table": "intents",
      "purpose": "因子意图枚举（决定评分方向）",
      "version": "1.3.0",
      "primaryKey": "code"
    },
    "records": [
      {
        "code": "positive",
        "name": "正向",
        "description": "分数越高越好（否定时反而扣分）",
        "color": "oklch(44% 0.072 168)",
        "reverseOnNegate": false
      },
      {
        "code": "negative",
        "name": "反向",
        "description": "分数越低越好（否定时反而加分）",
        "color": "oklch(60% 0.140 45)",
        "reverseOnNegate": true
      },
      {
        "code": "neutral",
        "name": "中性",
        "description": "仅反映存在与否",
        "color": "oklch(70% 0.105 75)",
        "reverseOnNegate": false
      }
    ]
  },
  "observations": {
    "_meta": {
      "table": "observations",
      "purpose": "5 个观察指标的元数据（公式 + 权重 + 描述）",
      "version": "1.3.0",
      "primaryKey": "key"
    },
    "records": [
      {
        "key": "timeCompression",
        "name": "时间压缩度",
        "formula": "D2*0.4 + (10-D3)*0.3 + (10-T1)*0.3",
        "description": "过去一段时间是否容易被压缩成模糊的\"过去\"",
        "weightByDim": {
          "D2": 0.4,
          "D3": -0.3,
          "T1": -0.3
        },
        "range": [
          0,
          10
        ],
        "highMeans": "warning",
        "advice": "尝试增加新事件、保留具体回忆"
      },
      {
        "key": "experienceDensity",
        "name": "体验密度",
        "formula": "D3*0.5 + T1*0.5",
        "description": "单位时间内产生多少具有区分度的体验节点",
        "weightByDim": {
          "D3": 0.5,
          "T1": 0.5
        },
        "range": [
          0,
          10
        ],
        "highMeans": "good",
        "advice": "保持节奏，警惕密度下降"
      },
      {
        "key": "resultOrientation",
        "name": "结果化程度",
        "formula": "S1*0.5 + S2*0.5",
        "description": "当前生活有多大比例被目标和结果牵引",
        "weightByDim": {
          "S1": 0.5,
          "S2": 0.5
        },
        "range": [
          0,
          10
        ],
        "highMeans": "warning",
        "advice": "适度放下，享受过程"
      },
      {
        "key": "lifeParticipation",
        "name": "生命参与度",
        "formula": "S3*0.35 + T1*0.3 + T2*0.35",
        "description": "自己有多少真正参与了正在发生的事情",
        "weightByDim": {
          "S3": 0.35,
          "T1": 0.3,
          "T2": 0.35
        },
        "range": [
          0,
          10
        ],
        "highMeans": "good",
        "advice": "主动选择与创造是关键"
      },
      {
        "key": "timeTrace",
        "name": "时间留痕度",
        "formula": "T1*0.3 + T2*0.35 + T3*0.35",
        "description": "过去的时间在记忆/认知/关系里留下了多少东西",
        "weightByDim": {
          "T1": 0.3,
          "T2": 0.35,
          "T3": 0.35
        },
        "range": [
          0,
          10
        ],
        "highMeans": "good",
        "advice": "高留痕 = 你的时间有意义"
      }
    ]
  },
  "profile-types": {
    "_meta": {
      "table": "profile_types",
      "purpose": "用户画像分类定义（criteria 是 Domain 表达式）",
      "version": "1.3.0",
      "primaryKey": "code"
    },
    "records": [
      {
        "code": "task",
        "name": "任务化",
        "emoji": "📅",
        "criteria": {
          "formula": "D2*0.3 + S1*0.25 + S2*0.25 + (10-D3)*0.2",
          "description": "重复度高 + 关注未来 + 关注结果 + 新事件少",
          "intervention": "试着增加无目的的体验"
        }
      },
      {
        "code": "explore",
        "name": "探索型",
        "emoji": "🧭",
        "criteria": {
          "formula": "D3*0.3 + T2*0.3 + S3*0.2 + (10-D2)*0.2",
          "description": "新事件多 + 认知变化 + 主动参与 + 重复少",
          "intervention": "保持好奇心，警惕迷失方向"
        }
      },
      {
        "code": "stable",
        "name": "稳定陪伴",
        "emoji": "🌿",
        "criteria": {
          "formula": "T1*0.25 + T3*0.35 + (10-S1)*0.2 + (10-S2)*0.2",
          "description": "体验留痕 + 关系连接 + 不焦虑未来 + 不卷结果",
          "intervention": "记得持续保持"
        }
      }
    ]
  },
  "scenarios": {
    "_meta": {
      "table": "scenarios",
      "purpose": "场景定义（用于日记分类）",
      "version": "1.3.0",
      "primaryKey": "code"
    },
    "records": [
      {
        "code": "task",
        "name": "任务化",
        "description": "以任务完成为核心的工作/学习场景",
        "color": "oklch(44% 0.072 168)",
        "icon": "💼"
      },
      {
        "code": "explore",
        "name": "探索",
        "description": "新尝试、新地方、新知识的探索场景",
        "color": "oklch(70% 0.105 75)",
        "icon": "🧭"
      },
      {
        "code": "stable",
        "name": "稳定陪伴",
        "description": "与家人、朋友的稳定陪伴场景",
        "color": "oklch(56% 0.080 280)",
        "icon": "🌿"
      },
      {
        "code": "travel",
        "name": "出差/旅行",
        "description": "异地、搬迁、出差等场景",
        "color": "oklch(72% 0.115 168)",
        "icon": "✈"
      },
      {
        "code": "rest",
        "name": "休息",
        "description": "主动放空、疗愈、恢复精力",
        "color": "oklch(60% 0.090 80)",
        "icon": "🌙"
      }
    ]
  },
  "moods": {
    "_meta": {
      "table": "moods",
      "purpose": "情绪标签字典",
      "version": "1.3.0",
      "primaryKey": "code"
    },
    "records": [
      {
        "code": "positive",
        "name": "积极",
        "emoji": "😊",
        "color": "oklch(44% 0.072 168)"
      },
      {
        "code": "mixed",
        "name": "中性",
        "emoji": "😐",
        "color": "oklch(70% 0.105 75)"
      },
      {
        "code": "negative",
        "name": "消极",
        "emoji": "😔",
        "color": "oklch(56% 0.080 280)"
      },
      {
        "code": "excited",
        "name": "兴奋",
        "emoji": "🤩",
        "color": "oklch(60% 0.140 45)"
      },
      {
        "code": "calm",
        "name": "平静",
        "emoji": "😌",
        "color": "oklch(72% 0.115 168)"
      },
      {
        "code": "anxious",
        "name": "焦虑",
        "emoji": "😰",
        "color": "oklch(58% 0.090 50)"
      },
      {
        "code": "tired",
        "name": "疲惫",
        "emoji": "😪",
        "color": "oklch(60% 0.080 280)"
      },
      {
        "code": "focused",
        "name": "专注",
        "emoji": "🎯",
        "color": "oklch(60% 0.150 168)"
      }
    ]
  },
  "factor-relations": {
    "_meta": {
      "table": "factor_relations",
      "purpose": "因子之间的语义关系（同义/反义/因果）",
      "version": "1.3.0",
      "primaryKey": [
        "sourceFactorId",
        "targetFactorId",
        "type"
      ],
      "foreignKeys": {
        "sourceFactorId": "factors.id",
        "targetFactorId": "factors.id"
      },
      "notes": [
        "type: 'synonym' 同义 / 'antonym' 反义 / 'cause' 因果 / 'subset' 子集",
        "strength: 0-1，越大关系越强",
        "用于聚合洞察：用户某对因子强相关时给提示"
      ]
    },
    "records": [
      {
        "sourceFactorId": "D3-NB",
        "targetFactorId": "T3-NK",
        "type": "synonym",
        "strength": 0.6,
        "note": "都是\"遇见新的人\"，D3 强调出现，T3 强调建立联系"
      },
      {
        "sourceFactorId": "D3-CG",
        "targetFactorId": "T2-UN",
        "type": "synonym",
        "strength": 0.7,
        "note": "都是\"认知变化\"，D3 强调瞬间洞察，T2 强调沉淀理解"
      },
      {
        "sourceFactorId": "T1-EM",
        "targetFactorId": "D3-EM",
        "type": "synonym",
        "strength": 0.5,
        "note": "都是\"情绪强度\"，T1 强调被记住，D3 强调事件本身"
      },
      {
        "sourceFactorId": "S1-WO",
        "targetFactorId": "S1-AN",
        "type": "synonym",
        "strength": 0.7,
        "note": "都是负面未来导向，担忧更温和，焦虑更强烈"
      },
      {
        "sourceFactorId": "S2-KP",
        "targetFactorId": "S2-DG",
        "type": "synonym",
        "strength": 0.6,
        "note": "都是结果导向，KPI/OKR 与目标达成同源"
      },
      {
        "sourceFactorId": "S3-PE",
        "targetFactorId": "S3-PA",
        "type": "synonym",
        "strength": 0.7,
        "note": "都是被动，PE 是执行，PA 是接收"
      },
      {
        "sourceFactorId": "S3-CH",
        "targetFactorId": "S3-EX",
        "type": "synonym",
        "strength": 0.6,
        "note": "都是主动，CH 是决策，EX 是探索"
      },
      {
        "sourceFactorId": "T1-TA",
        "targetFactorId": "T1-FR",
        "type": "synonym",
        "strength": 0.6,
        "note": "都是时间锚点，TA 是任意时刻，FR 是第一次"
      },
      {
        "sourceFactorId": "T2-UN",
        "targetFactorId": "T2-OV",
        "type": "synonym",
        "strength": 0.7,
        "note": "都是认知升级，UN 是建立，OV 是推翻"
      },
      {
        "sourceFactorId": "D2-RC",
        "targetFactorId": "D3-NE",
        "type": "antonym",
        "strength": 0.7,
        "note": "刷手机 vs 探索新体验"
      },
      {
        "sourceFactorId": "S1-WO",
        "targetFactorId": "D3-NE",
        "type": "antonym",
        "strength": 0.6,
        "note": "担忧未来 vs 体验当下"
      },
      {
        "sourceFactorId": "S3-PE",
        "targetFactorId": "S3-CH",
        "type": "antonym",
        "strength": 0.8,
        "note": "被动执行 vs 主动选择"
      },
      {
        "sourceFactorId": "D2-SIM",
        "targetFactorId": "D3-NE",
        "type": "antonym",
        "strength": 0.7,
        "note": "日子相似 vs 新事件多"
      },
      {
        "sourceFactorId": "D1-W",
        "targetFactorId": "D1-F",
        "type": "antonym",
        "strength": 0.5,
        "note": "工作时间 vs 家庭时间（资源竞争）"
      },
      {
        "sourceFactorId": "D1-W",
        "targetFactorId": "S2-DL",
        "type": "cause",
        "strength": 0.7,
        "note": "工作多 → 截止驱动多"
      },
      {
        "sourceFactorId": "S2-DL",
        "targetFactorId": "S1-AN",
        "type": "cause",
        "strength": 0.6,
        "note": "截止驱动 → 焦虑"
      },
      {
        "sourceFactorId": "T1-FR",
        "targetFactorId": "T2-UN",
        "type": "cause",
        "strength": 0.5,
        "note": "第一次 → 引发新理解"
      },
      {
        "sourceFactorId": "T3-DC",
        "targetFactorId": "T2-UN",
        "type": "cause",
        "strength": 0.6,
        "note": "深度交流 → 引发认知变化"
      },
      {
        "sourceFactorId": "T3-UD",
        "targetFactorId": "T2-SR",
        "type": "cause",
        "strength": 0.5,
        "note": "被理解 → 重新认识自己"
      },
      {
        "sourceFactorId": "D1-X",
        "targetFactorId": "D3-NE",
        "type": "subset",
        "strength": 0.6,
        "note": "闲暇娱乐常含新体验元素"
      },
      {
        "sourceFactorId": "D3-ML",
        "targetFactorId": "D3-UE",
        "type": "antonym",
        "strength": 0.4,
        "note": "计划内达成 vs 意外事件"
      }
    ]
  }
};

// ============================================================
// 索引构建
// ============================================================
(function(){
  const KB = window.TT_KB;
  const Index = {
    factorsById: {},
    factorsByDim: {},
    signalsById: {},
    signalsByText: {},
    negationsByText: {},
    negationsByPriority: [],
    modifiersByText: {},
    modifiersByPriority: [],
    intentsByCode: {},
    dimsByCode: {},
    obsByKey: {},
    ptByCode: {},
    scenarioByCode: {},
    moodByCode: {},
    relationsByFactor: {},
    signalsOfFactor: {},
    factorsOfSignal: {},
  };

  KB.factors.records.forEach(f => {
    Index.factorsById[f.id] = f;
    (Index.factorsByDim[f.dimCode] = Index.factorsByDim[f.dimCode] || []).push(f);
  });
  KB.signals.records.forEach(s => {
    Index.signalsById[s.id] = s;
    (Index.signalsByText[s.text] = Index.signalsByText[s.text] || []).push(s);
  });
  KB.negations.records.forEach(n => { Index.negationsByText[n.text] = n; });
  Index.negationsByPriority = KB.negations.records.slice().sort((a,b) => b.priority - a.priority);
  KB.modifiers.records.forEach(m => { Index.modifiersByText[m.text] = m; });
  Index.modifiersByPriority = KB.modifiers.records.slice().sort((a,b) => b.priority - a.priority);
  KB.intents.records.forEach(i => { Index.intentsByCode[i.code] = i; });
  KB.dimensions.records.forEach(d => { Index.dimsByCode[d.code] = d; });
  KB.observations.records.forEach(o => { Index.obsByKey[o.key] = o; });
  KB['profile-types'].records.forEach(p => { Index.ptByCode[p.code] = p; });
  KB.scenarios.records.forEach(s => { Index.scenarioByCode[s.code] = s; });
  KB.moods.records.forEach(m => { Index.moodByCode[m.code] = m; });
  KB['factor-relations'].records.forEach(r => {
    (Index.relationsByFactor[r.sourceFactorId] = Index.relationsByFactor[r.sourceFactorId] || []).push(r);
  });
  KB['factor-signals'].records.forEach(fs => {
    const factor = Index.factorsById[fs.factorId];
    const signal = Index.signalsById[fs.signalId];
    if (!factor || !signal) return;
    (Index.signalsOfFactor[fs.factorId] = Index.signalsOfFactor[fs.factorId] || []).push({
      signal, weight: fs.weight, matchType: fs.matchType, negationOverride: fs.negationOverride
    });
    (Index.factorsOfSignal[fs.signalId] = Index.factorsOfSignal[fs.signalId] || []).push({
      factor, weight: fs.weight, matchType: fs.matchType
    });
  });

  window.TT_KB_INDEX = Index;
})();
