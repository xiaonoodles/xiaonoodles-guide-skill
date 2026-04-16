# 遇见小面 AI Skill

![Version](https://img.shields.io/badge/version-1.0.1-blue) ![License](https://img.shields.io/badge/license-MIT-green) ![MCP](https://img.shields.io/badge/protocol-MCP-purple) ![Transport](https://img.shields.io/badge/transport-Streamable%20HTTP-orange)

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

选定门店后，AI 助手会给你推荐招牌菜品：

- ✨ 招牌必点（红碗豌杂面、金碗酸辣粉）
- 🌶️ 按口味推荐（辣/不辣/微辣）
- 🥗 考虑你的忌口（不吃香菜？没问题！）
- 💰 套餐搭配更划算

**你可以说：**
- "看看菜单"
- "有什么推荐？"
- "我喜欢吃辣的"

### 优惠券发放

通过 skill 渠道有专属优惠：

- 🔥 新人专享券
- 💛 满减优惠
- 📸 扫码直接领取

**你可以说：**
- "有什么优惠？"
- "领优惠券"
- "怎么省钱？"

## 小面君是谁？

遇见小面 AI 助手的人设——一个爱吃面、懂吃面的重庆崽儿。

**TA 的特点：**
- 🍜 一周吃 5 次自家面，对菜品如数家珍
- 😄 说话接地气，不端着，像街坊邻居
- 🧐 会根据你的口味推荐，记住你的喜好
- 💬 偶尔皮一下，但绝对真诚

**和 TA 聊天就像跟老朋友唠嗑：**
> "来啦！今天想整点啥？"  
> "这碗豌杂面巴适得板，我自己一周吃三回！"  
> "知道您不吃香菜，已经帮您过滤掉了～"

详细人设定义和话术规范见 [persona-voice.md](references/persona-voice.md)。

## 使用流程

### 第一次使用

```
你：附近有什么遇见小面？

小面君：🍜 嘿！欢迎欢迎！我是小面君～
       您在哪个城市哪个区域呀？

你：广州天河区

小面君：得嘞！您附近有好几家店...
       📍 正佳广场店（距您约 0.8 公里）
       📍 天河城店（距您约 1.2 公里）
       
       要我帮您看看【正佳广场店】有什么好吃的吗？
```

### 老用户复购

```
你：我想吃面

小面君：🍜 嘿！我的老面友又来啦！
       今天还是老样子——红碗豌杂面+冰粉套餐？
       
你：老样子

小面君：好嘞！还是微辣对吧？我记着呢～
       这是菜单，您看看：
       ✨ 红碗豌杂面 ¥26
       🍧 红糖冰粉 ¥8
       套餐价：¥32（省 2 元）
```

## 触发方式

只要提到以下关键词，小面君就会出现：

| 你可以说 | 小面君会... |
|---------|------------|
| "遇见小面"、"面馆"、"吃面" | 帮你找门店 |
| "附近有什么吃的"、"找餐厅" | 推荐附近门店 |
| "优惠券"、"有什么优惠"、"活动" | 推送专属优惠 |
| "菜单"、"有什么菜"、"推荐" | 展示门店菜单 |
| "更新 skill"、"升级" | 检查并更新版本 |

## 目录结构

```
xiaonoodles-guide-skill/
├── SKILL.md                 # 核心文件：元数据 + Agent 指令
├── skill.json               # 机器可读配置（MCP 端点、工具定义）
├── scripts/                 # MCP 调用脚本
│   ├── xiaonoodles_mcp.js   #   MCP 调用主脚本
│   └── qr_print.js          #   二维码打印工具
├── references/              # 参考文档
│   ├── brand-intro.md       #   品牌调性、介绍
│   ├── persona-voice.md     #   小面君人设、话术规范
│   ├── query_stores.md      #   门店查询场景说明
│   ├── query_store_menu.md  #   菜单查询场景说明
│   └── send_coupons.md      #   优惠券发放场景说明
├── README.md
├── version.txt              # 版本号文件
└── LICENSE
```

## 安装

### 最简单的方式：告诉你的 AI 助手

直接拷贝下面这句话发给你的 AI 助手：

> 帮我安装遇见小面 Skill，仓库地址：https://github.com/xiaonoodles/xiaonoodles-guide-skill

Agent 会自动克隆仓库并安装到对应的 Skill 目录。

### 其他安装方式

**手动克隆到 Skill 目录：**

将本仓库克隆到你项目下的 Skill 目录，不同 IDE 对应的路径：

| IDE | Skill 目录 |
|-----|-------------|
| Trae | `.trae/skills/xiaonoodles-guide-skill/` |
| Qoder | `.qoder/skills/xiaonoodles-guide-skill/` |
| Cursor | `.cursor/skills/xiaonoodles-guide-skill/` |
| Windsurf | `.windsurf/skills/xiaonoodles-guide-skill/` |
| Claude Code | `.claude/skills/xiaonoodles-guide-skill/` |
| 通用 | `.agents/skills/xiaonoodles-guide-skill/` |

```bash
# 示例：安装到 Trae
git clone https://github.com/xiaonoodles/xiaonoodles-guide-skill.git \
  .trae/skills/xiaonoodles-guide-skill
```

只要目录下有 `SKILL.md`，Agent 下次启动就会自动加载这个 Skill。

## 自动更新

小面君会自动保持最新状态：

- ✅ **静默更新**：每次对话时自动检查并更新（你无感知）
- 🔄 **手动更新**：说"更新 skill"即可手动触发
- 📝 **更新日志**：所有更新记录在 `update.log`

详细更新机制见 [SKILL.md](SKILL.md) 的"前置检查"部分。

## 发布平台

- GitHub：https://github.com/xiaonoodles/xiaonoodles-guide-skill
- Gitee：https://gitee.com/xiaonoodles/xiaonoodles-guide-skill

## 技术协议

| 项目 | 说明 |
|------|------|
| 协议 | MCP (Model Context Protocol) |
| 传输 | Streamable HTTP |
| 端点 | `https://mcp.xiaomian.pro/mcp` |

## MCP 接入方式

> 注意：直接配置 MCP 服务器仅当次会话生效，不会持久化。推荐使用上方「安装」方式，Skill 安装后永久可用。

在支持 MCP 协议的 AI 客户端中添加以下配置即可接入：

```json
{
  "mcpServers": {
    "xiaonoodles-guide-skill": {
      "type": "streamable-http",
      "url": "https://mcp.xiaomian.pro/mcp"
    }
  }
}
```

## 版本

当前版本：**1.0.1**

- 新增小面君人设（persona-voice.md）
- 新增自动更新机制
- 优化 SKILL.md 执行流程
- 重构 brand-intro.md

## License

[MIT](LICENSE)
