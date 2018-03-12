# 基于Vue2.0 + webpack2.4 定制的后台模板 集成了大部分的后台功能
  开发者： 李大王
## Build Setup
## 基于node2.4 + 环境

``` bash
# 安装依赖
npm install

# localhost:8082 启动本地服务 （需要预装node环境）
npm run dev

# 文件打包
npm run build
```

## 目录结构描述 （开发者只需要动src文件夹底下的东西）
```
├── Readme.md                   // help
├── api                         // 所有的接口api
├── utils                       // 公共方法依赖
├── assets                      // 静态资源存放路径
├── components                  // 全局公用组件
├── views                       // 路由中的组件
│   ├── layout                  // 主视图
│   └── 其他                    // 其他
├── App.vue                     
├── main.js                     // 入口文件
├── router                      // 路由文件
├── store
│   ├── modules                 // 需要定义于全局的数据（基于vuex）
│   ├── index                   // 抛出store并注入到vue创建的实例中
│   └── getters                 // 获取全局数据的方法
├── styles                      // 样式表 （基于less的预编译语法 样式架构仿照bootstrap）这个文件最好也不要动想要写样式可以写在路由或者公共组件内部
│   ├── glyphicon               // 字体图标
│   └── getters                 // 获取全局数据的方法
└── tools
```
