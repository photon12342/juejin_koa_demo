# my-project

## src下是前端代码
启动前端本地环境
```
npm install
npm run serve
```

打包代码放到 server/static下面
```
npm run build
```

## server文件夹是代理静态文件的服务
```
cd server
npm install
node index.js
```
## service文件夹是写的一个接口服务，用来测试代理问题
```
cd service
npm install
node index.js
```

### Customize configuration
对应掘金文章 [使用 Koa 做前端静态资源代理(搭建前端生产环境)](xxx).
