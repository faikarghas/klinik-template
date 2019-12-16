
const withCSS = require('@zeit/next-css')  // ini kita import dulu package yang tadi di install
const withSASS = require('@zeit/next-sass') // ini kita import dulu package yang tadi di install
const withPlugins = require('next-compose-plugins') // ini kita import dulu package yang tadi di install

module.exports = withPlugins([
    withCSS,
    withSASS
])


// withPlugins diatas untuk mempermudah ngebungkus package withCSS dan withSASS serta kalo ada package lainnya yang mau dipake