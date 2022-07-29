//导入npm下载的express
const express = require('express')
const compression = require('compression')
const app = express()

//先压缩
app.use(compression())
//启用dist服务托管静态资源
app.use(express.static('./dist'))



//启动web服务器
app.listen(80, () => {
    console.log('server runing at http://192.168.1.11')
})