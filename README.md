# getWeather-npm
获取城市天气的工具

## weather文件

### package-Name:weather-myself

这是一款查询城市天气的工具


### 安装

```bash
npm install --save weather-myself
```

### 使用

```
const weather = require('weather-myself')

weather('北京')
    .then(data => {
        console.log(data)
    }).catch(err => {
        console.log(err)
    })
```



## 文件weather-cli

### package-Name:weather-myself-cli

一款查询天气的命令行工具

### 安装

```bash
npm install -g weather-myself-cli
```

### 使用

```
const weather = require('weather-myself-cli')
```

```bash
weather 北京
```


