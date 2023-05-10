---
title: Button 按钮
---

# Button 按钮

常用的操作按钮。

## 基础用法

:::demo 使用 `type`、`plain`、`round` 和 `circle` 来定义按钮的样式。

button/basic

:::

## 高级用法

:::demo 使用 `type`、`plain`、`round` 和 `circle` 来定义按钮的样式。

button/basic

:::

## Button Attributes

| Attribute | Description                            | Type    | Accepted Values                                              | Default |
| --------- | -------------------------------------- | ------- | ------------------------------------------------------------ | ------- |
| size      | button size                            | string  | large / default /small                                       | —       |
| type      | button type                            | string  | default / primary / success / warning / danger / info / text | —       |
| plain     | determine whether it's a plain button  | boolean | —                                                            | false   |
| round     | determine whether it's a round button  | boolean | —                                                            | false   |
| circle    | determine whether it's a circle button | boolean | —                                                            | false   |
| disabled  | disable the button                     | boolean | —                                                            | false   |

### Button 插槽

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |
