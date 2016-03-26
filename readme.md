# Note Client

本项目志在基于NW.js开发自定义笔记客户端

## 开发环境搭建

本项目使用nwjs

[github地址](https://github.com/nwjs/nw.js)

1.下载NW.js开发版

[nwjs0.13.0开发版](http://dl.nwjs.io/v0.13.0/nwjs-sdk-v0.13.0-osx-x64.zip)

```
cd mynote;
/Applications/nwjs-sdk-v0.13.0-osx-x64/nwjs.app/Contents/MacOS/nwjs ./
```

打开nwjs界面，输入⌘+⌥+i打开调试界面

2.下载nodejs依赖包

```
npm --registry http://registry.cnpmjs.org install
```

3.安装sqlite3命令行工具

```
npm --registry http://registry.cnpmjs.org install sqlite3 -g
```

4.使用命令行操作sqlite数据库
```
sqlite3 ./db/test.db

>.tables // 等于show tables
其他命令输入.help查看
```

5.css

```
node ./bin/watch.js
```

开启less编译模式后，在less文件夹下所有less文件改动，都会自动编译成css文件夹下的css文件

