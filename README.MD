This is one pure vue project. It include vue2, vue-router3, webpack4, babel7. Just can use by downloading and npm install.


#### Author Create Process 
1, 利用vue-cli构建一个简单的vue应用

2, 安装babel-loader

3，安装webpack4，添加webpack.config.js [参考](https://www.valentinog.com/blog/webpack-4-tutorial/)
```
    > 配置babel-loader

    > 配置html编译插件

    > 配置css编译插件

    > 安装webpack-dev-server，热加载，（即每次改变代码都重新编译刷新）

    > 配置环境：mode:'production' || 'development', 打包跟不打包的区别
```

4, 配置webpack4 and babel7 for vue.js [参考](https://markus.oberlehner.net/blog/setting-up-a-vue-project-with-webpack-4-and-babel-7/)
```
    > 配置vue-loader
    
    > 配置scss-loader
    
    > 配置file-loader
```
5, 应用vue-router [参考](https://scotch.io/tutorials/getting-started-with-vue-router)


#### .babelrc
安装babel-loader，它是把ES6 or more， 转换为ES5的工具
```
npm i babel-core babel-loader babel-preset-env --save-dev
```
.babelrc:该文件是对babel-loader的配置文件，它的位置无所谓，babel会自动找到它

#### webpack.config.js
安装webpack，它是代码构建工具
```
npm i webpack --save-dev
npm i webpack-cli --save-dev
```
webpack.config.js:该文件是webpack的配置文件

#### package.json
npm，它是nodeJs的安装包工具，主要负责下载各种依赖包
```
npm init
```
package.json:该文件是npm的配置文件
