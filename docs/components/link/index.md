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

:::demo 使用 `underline` 决定鼠标 hover 上去是否显示下划线，默认禁用。

link/underline

:::

## 边框

:::demo 使用 `border` 决定鼠标 hover 上去是否显示边框，默认禁用，一般情况下，边框和下划线只能存在一个。

link/border

:::

## 禁用

:::demo 使用 `disabled` 禁用链接。

link/disabled

:::

## 自定义内容

:::demo 使用 `default` 插槽自定义内容。

link/slot

:::

## 属性

| Attribute | Description    | Type    | Accepted Values                                       | Default |
| --------- | -------------- | ------- | ----------------------------------------------------- | ------- |
| href      | 跳转地址       | string  | —                                                     | —       |
| type      | 链接类型       | string  | default / primary / success / warning / danger / info | default |
| underline | 是否启用下划线 | boolean | —                                                     | false   |
| border    | 是否启用边框   | boolean | —                                                     | false   |
| disabled  | 禁用链接       | boolean | —                                                     | false   |

## 插槽

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |
