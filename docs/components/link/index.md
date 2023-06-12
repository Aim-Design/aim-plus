---
title: Link 链接
---

# Link 链接

超链接。

## 基础用法

:::demo

link/basic

:::

## 下划线

:::demo 使用 `underline` 决定是否启用下划线，默认启用。

link/underline

:::

## 禁用

:::demo 使用 `disabled` 禁用链接。

link/disabled

:::

## 属性

| Attribute | Description  | Type    | Accepted Values                                       | Default |
| --------- | ------------ | ------- | ----------------------------------------------------- | ------- |
| href      | 跳转地址     | string  | —                                                     | —       |
| type      | 链接类型     | string  | default / primary / success / warning / danger / info | default |
| underline | 否启用下划线 | boolean | —                                                     | true    |
| disabled  | 禁用链接     | boolean | —                                                     | false   |

## 插槽

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |
