# 一些需要记录的东西

### 1.支持 Less

首先安装依赖：

```
npm install less less-loader --save-dev
or
yarn add less less-loader --save-dev
```

然后修改config/webpack.config.js：

```js
// style files regexes
    const cssRegex = /\.css$/;
    const cssModuleRegex = /\.module\.css$/;
    const sassRegex = /\.(scss|sass)$/;
    const sassModuleRegex = /\.module\.(scss|sass)$/;
+   const lessRegex = /\.less$/;
+   const lessModuleRegex = /\.module\.less$/;
    ...(略)
    // Opt-in support for SASS (using .scss or .sass extensions).
    // By default we support SASS Modules with the
    // extensions .module.scss or .module.sass
    {
        test: sassRegex,
        exclude: sassModuleRegex,
        use: getStyleLoaders(
            {
                importLoaders: 2,
                sourceMap: isEnvProduction && shouldUseSourceMap,
            },
            'sass-loader'
        ),
        // Don't consider CSS imports dead code even if the
        // containing package claims to have no side effects.
        // Remove this when webpack adds a warning or an error for this.
        // See https://github.com/webpack/webpack/issues/6571
        sideEffects: true,
    },
    // Adds support for CSS Modules, but using SASS
    // using the extension .module.scss or .module.sass
    {
        test: sassModuleRegex,
        use: getStyleLoaders(
            {
                importLoaders: 2,
                sourceMap: isEnvProduction && shouldUseSourceMap,
                modules: {
                    getLocalIdent: getCSSModuleLocalIdent,
                  },
            },
            'sass-loader'
        ),
    },
    // 以下这里仿照上面sass的代码，配置下less。
+   {
+       test: lessRegex,
+           exclude: lessModuleRegex,
+           use: getStyleLoaders(
+               {
+                   importLoaders: 2,
+                   sourceMap: isEnvProduction && shouldUseSourceMap,
+               },
+               'less-loader'
+            ),
+           sideEffects: true,
+   },
+   {
+       test: lessModuleRegex,
+       use: getStyleLoaders(
+           {
+               importLoaders: 2,
+               sourceMap: isEnvProduction && shouldUseSourceMap,
+               modules: {
+                   getLocalIdent: getCSSModuleLocalIdent,
+               },
+           },
+           'less-loader'
+       ),
+   },
```

如果找不到`config/webpack.config.js`，则需要先暴露配置文件`yarn eject`. 在执行eject如果报git相关错误，就需要对相关文件添加到git的版本控制当中。

### 2. Mock.js安装与使用

在开发过程中，为了方便前端独自调试接口，经常使用Mock.js拦截Ajax请求，并返回预置好的数据。本小节介绍下如何在react项目中使用Mock.js。

执行安装：

```text
npm install mockjs --save
```

在src下新建mock.js，代码如下：

```js
import Mock from 'mockjs'

const domain = '/api/'

// 模拟getData接口
Mock.mock(domain + 'getData', function () {
    let result = {
      code: 200,
      message: 'OK',
      data: 'test'
    }
    return result
})
```

然后在**src/index.js**中引入mock.js:

```js
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import store from './store'
+   import './mock'
import './common/style/frame.styl'

    ...（略）
```

如此简单。这样，在项目中请求`/api/getData`的时候，就会被Mock.js拦截，并返回mock.js中写好的数据。

### 3. 解决本地开发跨域问题

在react开发环境中，默认启动的是3000端口，而后端API服务可能在本机的80端口，这样在ajax请求的时候会出现跨域问题。可以借助http-proxy-middleware工具实现反向代理。

执行安装：

```text
npm install http-proxy-middleware --save-dev
```

在src下创建setupProxy.js，代码如下：

```js
const proxy = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(
        '^/api',
        proxy({
            target: 'http://localhost',
            changeOrigin: true
        })
    )
}
```

这代码的意思就是，只要请求地址是以"/api"开头，那就反向代理到http://localhost域名下，跨域问题解决！大家可以根据实际需求进行修改。

> ※注意：setupProxy.js设置后，一定要重启项目才生效。

### 4. 给项目配置路径别名

做`react`项目，然后就想着给项目配置路径别名，毕竟老看着`../../../`等这种非常难受，就想着给项目配置个`@`作为项目`src`的别名拿来使用，之前做的`vue`项目自带一个`@`路径别名，并且也非常方便配置，但查了下`react`，好像并不好弄。

目前来说，我找到了两种方案：

1. 使用`npm run eject`暴露`config`配置文件夹，来改写`wabpack`

   打开 config 文件夹下的 webpack.config.js 文件

   ```
   搜索 webpackAliases 找到 alias 配置项，添加自定义路径别名
   alias: {
      	...省略
       //文件别名路径
       '@': path.resolve(__dirname, '../src')
   },
   ```

2. 使用第三方的`@craco/craco`。直接看文档即可

经过思考，我采用的是第二种方案，因为只是配置个路径别名，把`webpack`配置全部暴露出来，完全没必要，而且`npm run eject`是不可逆的。
