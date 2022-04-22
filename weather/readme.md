# weather-myself

这是一款查询城市天气的工具


## 安装

```bash
npm install --save weather-myself
```

## 使用
```
const weather = require('weather-myself')

weather('北京')
    .then(data => {
        console.log(data)
    }).catch(err => {
        console.log(err)
    })
```