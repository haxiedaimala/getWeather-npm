const axios = require('axios')


function getWeather(city) {
    return new Promise((resolve, reject) => {
        axios.get(`https://api2.jirengu.com/getWeather.php?city=${encodeURI(city)}`)
            .then(response => {
                resolve(response.data)
            }).catch(error => {
                reject(error)
            })
    })
}


module.exports = getWeather