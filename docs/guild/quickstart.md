---
title: 快速开始
---

# 快速开始

本节将介绍如何在项目中使用 AimPlus。

## 引入组件库

### 完整引入

```typescript
// main.ts
import { createApp } from 'vue';
import AimPlus from 'aim-plus';
import App from './App.vue';

createApp(App).use(AimPlus).mount('#app');
```

### 按需引入

```typescript
// main.ts
import { createApp } from 'vue';
import { AimButton } from 'aim-plus';
import App from './App.vue';

createApp(App).use(AimButton).mount('#app');
```

### 开始使用

各个组件的使用方法请参阅它们各自的文档。
