# Vue 3 + TypeScript + Vite

本项目已集成 vue-router（@4）。

## 路由结构
- `/` -> `Home` (src/pages/Home.vue) 懒加载
- `/about` -> `About` (src/pages/About.vue) 懒加载
- 兜底：`/:pathMatch(.*)*` -> `NotFound` (src/pages/NotFound.vue)

路由文件：`src/router/index.ts`

特点：
- 懒加载组件（动态 import）
- 设置 `document.title` 来自 `meta.title`
- 自定义 `scrollBehavior` 返回顶部
- 使用 `import.meta.env.BASE_URL` 支持部署子路径 / 微前端场景（例如 qiankun）

## 使用
开发：
```
npm run dev
```

构建：
```
npm run build
```

预览：
```
npm run preview
```

## 新增页面
添加新页面示例：
```ts
// src/router/index.ts
routes.push({
  path: '/demo',
  name: 'Demo',
  component: () => import('../pages/Demo.vue'),
  meta: { title: 'Demo' }
})
```

## 微前端（提示）
如果后续接入 qiankun：
1. 保持 `createWebHistory(import.meta.env.BASE_URL)` 以适配主应用分配的基础路径。
2. 需要时可将路由模式改为 `createWebHistory(window.__POWERED_BY_QIANKUN__ ? '/子应用基座/' : import.meta.env.BASE_URL)`。

---
原始模板说明（保留）：

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).
