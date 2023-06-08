<p align="center">
  <a href="https://aim-design.github.io/aim-plus" target="_blank" rel="noopener noreferrer">
    <img width="220" src="https://aim-design.github.io/aim-plus/images/logo-rect.png" alt="aim-plus logo">
  </a>
</p>
<p align="center" style="font-size: 40px;font-weight: 600;">AimPlus</p>

<p align="center">
      <a href="https://npmjs.com/package/aim-plus"
        ><img src="https://img.shields.io/npm/v/aim-plus.svg" alt="npm package"
      /></a>
      <img
        src="https://img.shields.io/badge/vue-v3.2.0%2B-%23407fbc"
        alt="vue"
      />
      <a href="https://github.com/Aim-Design/aim-plus/actions/workflows/ci.yml"
        ></a>
      <img
        src="https://img.shields.io/github/stars/Aim-Design/aim-plus"
        alt="stars"
      />
    </p>
<br/>

#### 克隆代码到本地

```shell

# github
git clone https://github.com/Aim-Design/aim-plus.git

# gitee
git clone https://gitee.com/aim-design/aim-plus.git

```

#### 安装依赖

```
pnpm install
```

#### 相关命令

```shell
# 本地开发环境
pnpm docs:dev

# 打包组件库
pnpm build:aim

# 发布到 npm，tips: 需要将npm的registry切换到原始的（https://registry.npmjs.org/）并提前登录
pnpm publish:aim

```

> 下面是项目中使用组件的步骤

#### 安装

```shell
npm install aim-plus

```

#### 完整引入

样式会自动导入

```typescript
// main.ts
import { createApp } from 'vue';
import AimPlus from 'aim-plus';
import App from './App.vue';

createApp(App).use(AimPlus).mount('#app');
```

#### 按需引入

样式会自动导入

```typescript
// main.ts
import { createApp } from 'vue';
import { AimButton } from 'aim-plus';
import App from './App.vue';

createApp(App).use(AimButton).mount('#app');
```

## 贡献者

<!-- readme: collaborators,contributors -start -->
<!-- readme: collaborators,contributors -end -->
