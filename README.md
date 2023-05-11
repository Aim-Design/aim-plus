<p align="center">
  <a href="https://aim-design.github.io/aim-plus" target="_blank" rel="noopener noreferrer">
    <img width="180" src="https://aim-design.github.io/aim-plus/images/logo-rect.png" alt="vangle logo">
  </a>
</p>
<br/>
<p align="center">
  <!-- <a href="https://npmjs.com/package/vangle"><img src="https://img.shields.io/npm/v/vangle.svg" alt="npm package"></a>
  <img src="https://img.shields.io/badge/vue-v3.2.0%2B-%23407fbc" alt="vue">
  <a href="https://github.com/vangleer/vangle/actions/workflows/ci.yml"><img src="https://github.com/vangleer/vangle/actions/workflows/ci.yml/badge.svg?branch=main" alt="build status"></a>
  <img src="https://img.shields.io/github/stars/vangleer/vangle" alt="stars"> -->
</p>
<br/>

# Vange ⚡

Vue3 UI Components Library

> 注：该仓库主要记录从 0 搭建一个组件库的方法，包括组件文档的编写

[在线预览 github](https://aim-design.github.io/aim-plus/)

[在线预览 gitee](https://aim-design.gitee.io/aim-plus/)

## 克隆代码到本地

```shell

# github
git clone https://github.com/Aim-Design/aim-plus.git

# gitee
git clone https://gitee.com/aim-design/aim-plus.git

```

## 安装依赖

```
pnpm install
```

> pnpm 版本是 6.32.6

## 命令介绍

```shell
# 本地开发环境
pnpm docs:dev

# 打包组件库
pnpm build:aim

# 发布到 npm，tips: 需要将npm的registry切换到原始的（https://registry.npmjs.org/）并提前登录
pnpm publish:aim


## 快速开始

### 用法

#### 安装依赖

```

npm install aim-plus

````

#### 完整引入

样式会自动导入。

```typescript
// main.ts
import { createApp } from 'vue';
import AimPlus from 'aim-plus';
import App from './App.vue';

createApp(App).use(AimPlus).mount('#app');
````
