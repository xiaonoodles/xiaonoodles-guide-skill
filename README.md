# 遇见小面 AI Skill

![Version](https://img.shields.io/badge/version-1.0.2-blue) ![License](https://img.shields.io/badge/license-MIT-green) ![MCP](https://img.shields.io/badge/protocol-MCP-purple) ![Transport](https://img.shields.io/badge/transport-Streamable%20HTTP-orange)

这是一个 AI Skill——安装后，你的 AI 助手就能化身遇见小面的"店小二"，帮你找门店、看菜单、领优惠。

全球 500+ 门店的重庆小面品牌，现在有了自己的 AI 服务。

## 关于遇见小面

源于重庆、面向全国的新锐快餐品牌。

| 项目 | 内容 |
|------|------|
| 品牌名称 | 遇见小面 |
| 创立时间 | 2014 年（广州） |
| 招牌产品 | 红碗豌杂面、金碗酸辣粉、抄手家族 |
| 门店数量 | 全球 500+ 家 |
| 覆盖城市 | 北京、上海、广州、深圳、香港、新加坡等 |
| 上市信息 | 港交所主板（02408.HK）"中式面馆第一股" |

## 这个 Skill 能做什么

遇见小面的官方信息服务，包含 3 项 MCP 查询能力：

| 能力 | 你可以问 | 来源 |
|------|----------|------|
| **门店查询** | "附近哪有遇见小面？""XX店几点关门？" | MCP |
| **菜单推荐** | "有什么好吃的？""推荐个套餐" | MCP |
| **优惠券发放** | "有优惠吗？""怎么领券？" | MCP |

### 门店查询

告诉 AI 助手你的位置，快速找到附近门店：

- 📍 门店地址和距离
- ⏰ 营业时间
- 📞 联系电话
- 🍽️ 支持堂食/外卖/自提

**你可以说：**
- "附近有什么遇见小面？"
- "我在天河区，找家面馆"
- "公司附近吃面"

### 菜单推荐

根据你的口味偏好，推荐门店热门菜品：

- 招牌必点（红碗豌杂面、金碗酸辣粉）
- 按辣度推荐（微辣/中辣/特辣）
- 忌口过滤（不吃香菜/不吃辣）
- 套餐搭配

**你可以说：**
- "有什么好吃的？"
- "推荐个不辣的"
- "招牌是什么？"

### 优惠券发放

Skill 渠道专属优惠，扫码即领：

- 🎁 新用户专享券
- 💰 满减优惠
- 📱 二维码直接领取

**你可以说：**
- "有优惠吗？"
- "怎么领券？"
- "优惠券"

## 安装

### 最简单的方式：告诉你的 AI 助手

直接拷贝下面这句话发给你的 AI 助手：

> 帮我安装遇见小面 Skill，仓库地址：https://github.com/xiaonoodles/xiaonoodles-guide-skill

AI 助手会自动完成安装。

### 手动安装

如果你使用 Trae、Cursor、VS Code 等 IDE，可以将本仓库克隆到 Skill 目录：

| IDE | Skill 目录 |
|-----|-----------|
| Trae | `~/.trae/skills/xiaonoodles-guide-skill` |
| Cursor | `~/.cursor/skills/xiaonoodles-guide-skill` |
| VS Code + Cline | `~/.cline/skills/xiaonoodles-guide-skill` |

```bash
# 克隆到对应目录
git clone https://github.com/xiaonoodles/xiaonoodles-guide-skill.git ~/.trae/skills/xiaonoodles-guide-skill
```

## 使用流程

### 第 1 步：激活 Skill

对 AI 助手说：
- "我想吃面"
- "附近有什么遇见小面"
- "找家面馆"

AI 助手会激活遇见小面 Skill，化身"小面君"为你服务。

### 第 2 步：告诉位置

告诉小面君你的位置：
- "我在广州天河区"
- "公司附近"
- "我在正佳广场"

### 第 3 步：选择门店

小面君会推荐附近门店：

```
📍 遇见小面·正佳广场店（距您约 0.8 公里）
   地址：天河路 228 号正佳广场 B1 层
   ⏰ 营业到 22:00
   👆 这家最近，走路 10 分钟

📍 遇见小面·天河城店（距您约 1.2 公里）
   ...
```

### 第 4 步：查看菜单/领券

选择门店后，你可以：
- 看菜单："这家有什么好吃的？"
- 领优惠："有优惠券吗？"

### 示例对话

```
你：附近有什么遇见小面？

小面君：🍜 嘿！欢迎欢迎！我是小面君～
       您在哪个城市哪个区域呀？

你：广州天河区

小面君：得嘞！等我瞅瞅天河区有啥店哈...
       有了！您附近有好几家：

       📍 遇见小面·正佳广场店（距您约 0.8 公里）
          地址：天河路 228 号正佳广场 B1 层
          ⏰ 营业到 22:00
          👆 这家最近，走路 10 分钟

       要我帮您看看这家有什么好吃的吗？

你：有什么推荐的？

小面君：✨ 给您推荐我们的镇店之宝——红碗豌杂面！
       秘制豌杂酱配上劲道面条，吃过的都说巴适～
       我自己一周要吃三回，信我，不会错！

       对了！🎁 差点忘了，有个福利先给您～
       这是咱们 skill 渠道的专属优惠：
       【二维码】
       领完券再点餐，更划算！
```

## 小面君是谁？

> "我不是客服，我是您的吃面搭子。"

**小面君**是遇见小面 AI 助手的人设：

- 🍜 爱吃面，一周至少吃 5 次自家产品
- 😄 热情实在，不端着，像街坊邻居
- 🧐 懂吃，对食材和口味有研究
- 💬 话痨属性，但不会让人感到烦
- 🎭 有点小幽默，偶尔皮一下

**口头禅：**
- "来啦！今天想整点啥？"
- "信我，这个巴适得板！"
- "得嘞！"
- "慢用哈，好吃再来！"

## 自动更新

本 Skill 支持自动更新：

- 每次激活时自动检查版本
- 发现新版本自动下载更新
- 更新过程静默完成，无需手动操作

如需手动更新，对 AI 助手说："更新遇见小面 Skill"

## 技术信息

| 项目 | 说明 |
|------|------|
| 协议 | MCP (Model Context Protocol) |
| 传输 | Streamable HTTP |
| 端点 | `https://mcp.xiaomian.pro/mcp` |
| 版本 | 1.0.2 |
| 协议版本 | 2024-11-05 |

### 发布平台

- GitHub: https://github.com/xiaonoodles/xiaonoodles-guide-skill
- Gitee: https://gitee.com/xiaonoodles/xiaonoodles-guide-skill

## 文件结构

```
xiaonoodles-guide-skill/
├── skill.json              # 技能元数据
├── SKILL.md                # 执行指令
├── README.md               # 本文件
├── version.txt             # 版本号
├── scripts/
│   ├── xiaonoodles_mcp.js  # MCP 调用脚本
│   └── qr_print.js         # 二维码打印
└── references/
    ├── brand-intro.md      # 品牌调性
    ├── persona-voice.md    # 小面君人设
    ├── query_stores.md     # 门店查询场景
    ├── query_store_menu.md # 菜单查询场景
    └── send_coupons.md     # 优惠券场景
```

## 参与贡献

欢迎提交 Issue 和 Pull Request！

## 品牌信息

遇见小面于 2014 年在广州创立，以重庆小面切入市场，招牌产品包括红碗豌杂面、金碗酸辣粉、抄手家族、小锅冒菜等。全球门店超 500 家，覆盖北京、上海、广州、深圳、香港、新加坡等城市。2025 年 12 月在港交所主板上市（股票代码：02408.HK），为"中式面馆第一股"。

---

<p align="center">
  🍜 想吃面，找小面君！
</p>
