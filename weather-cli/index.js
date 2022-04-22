#!/usr/bin/env node

const weather = require('weather-myself')

if (process.argv[2] === '--help') {
    console.log(`
    Usage:
      weather <cityName>
  
    Example:
      weather 北京
  `)
} else {
    let city = process.argv[2]
    weather(city)
        .then(data => {
            console.log(data)
        }).catch(err => {
            console.log(err)
        })
}