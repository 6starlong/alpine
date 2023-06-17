---
cover: https://p0.meituan.net/csc/ed548b3571dbdcf24c5ad323eb6244ea626140.jpg
date: 2023-06-01
layout: article
---
# http 请求被变成 https 请求

项目开发中新增了用于测试环境的接口地址，替换接口地址后发现始终报错，反复对比 network 面板后发现网络请求地址中的 http 都变成 https 了，由于项目的测试地址是 http 协议的才导致的报错。

原因是 `index.html` 中添加了如下 CSP 内容，自动将 http 的不安全请求升级为 https。

```html
<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
```

---

相关链接

[http 请求被变成https请求 - 不忘初心dbsdxq - 博客园 (cnblogs.com)](https://www.cnblogs.com/mggahui/p/13932906.html)