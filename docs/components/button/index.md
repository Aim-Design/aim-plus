---
title: Button 按钮
---

# Button 按钮

```shell
import { createApp } from 'vue';
import { AimButton } from 'vangle';

const app = createApp();
app.use(AimButton);
```

## 基础用法

:::demo 使用 `type`、`size`、`round` 来定义按钮的样式。

button/basic

:::

## 禁用按钮

:::demo 你可以使用 `disabled` 属性来禁用按钮。

button/disabled

:::

## 文字按钮

:::demo 你可以使用 `text` 属性来定义一个没有背景颜色和边框的按钮。

button/text

:::

## 属性

| Attribute | Description  | Type    | Accepted Values                                              | Default |
| --------- | ------------ | ------- | ------------------------------------------------------------ | ------- |
| size      | 按钮尺寸     | string  | large / default /small                                       | —       |
| type      | 按钮类型     | string  | default / primary / success / warning / danger / info / text | —       |
| round     | 按钮的角更圆 | boolean | —                                                            | false   |
| text      | 文字按钮     | boolean | —                                                            | false   |
| disabled  | 禁用按钮     | boolean | —                                                            | false   |

## 插槽

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |
