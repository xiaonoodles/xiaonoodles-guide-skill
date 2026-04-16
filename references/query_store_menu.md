# 菜谱查询场景

## 调用方式

根据用户选择的门店(storeId)以及就餐方式(sellChannelType),使用 MCP 工具 `queryStoreMenu` 查询指定门店的菜谱/菜单。

### 工具参数

| 参数 | 类型 | 必填 | 说明                                   |
|------|------|------|--------------------------------------|
| storeId | string | 是 | 门店ID，如 "1762960520600616960"         |
| sellChannelType | string | 是 | 就餐方式："TAKESELF"（堂食）默认或 "TAKEOUT"（外卖） |

### 返回数据结构

返回按分类组织的菜品列表，每个分类包含：
- **categoryName**: 分类名称（如"特色小面"、"超值套餐"、"人气小吃"）
- **categoryIcon**: 分类图标URL
- **dataType**: 数据类型（"CATEGORY" 或 "PROMOTION"）
- **products**: 菜品数组，每项包含：
  - **name**: 菜品展示名称
  - **productType**: 类型（"SINGLE" 单品 / "COMBO" 套餐）
  - **imageUrl**: 菜品图片URL
  - **isSellOut**: 是否售罄
  - **labels**: 标签（如有）
  - **cornerTags**: 角标标签（如有）

### 使用示例

```javascript
// 通过 Node.js 脚本调用
const menuResult = await callMcpTool('queryStoreMenu', {
  storeId: '1762960520600616960',
  sellChannelType: 'TAKESELF'
});
```

## 展示规则

1. 按 `categoryName` 分组展示菜品，分类顺序由 API 返回的 `sortIndex` 决定
2售罄商品（`isSellOut: true`）应标注"售罄"或置灰显示
3套餐（COMBO）和单品（SINGLE）可分别展示
