'use strict'

/**
 * Copyright (c) 2017 Copyright bp All Rights Reserved.
 * Author: lipengxiang
 * Date: 2019-06-10 16:34
 * Desc: 用于根据pages目录创建router配置.
 */

var path = require('path')
var febs = require('febs')
var fs = require('fs')
var chalk = require('chalk');

const PATH = path.join(process.cwd(), 'src', 'pages')

exports.run = function (layout) {
  console.log('');
  console.log('**************************************************************');
  console.log('> Will build project router config layout: ' + chalk.blue(layout||'All layouts'));
  console.log('**************************************************************');
  console.log('');

  let pages = febs.file.dirExplorerFilesRecursive(PATH, /.*\.(vue|VUE)/)
  let routerConfig = `/* eslint-disable */

export default [\r
`

  let arrFn = [];
  pages.forEach((value, index) => {
    value = febs.string.replace(value, '\\', '/')
    let values = value.split('/')
    let url = febs.string.replace(value, '/index.vue', '')
    url = febs.string.replace(url, '.vue', '')
    if (values.indexOf('components') > 0) {
      return
    }

    if (layout && !(url.indexOf(layout + '/') == 0 || url == layout)) {
      return;
    }

    if (url.indexOf('default/') == 0) {
      url = url.substring('default/'.length);
    }
    else if (url == 'default') {
      url = '';
    }

    let componentName = null;
    var data = febs.utils.denodeify(fs.readFile, fs)(PATH + `/${value}`, "utf-8");
    arrFn.push(data);
    data.then(res => {
      var str = res.toString();
      var arr = str.match(/<breadName>([\s\S]*?)<\/breadName>/);
      if (arr) componentName = JSON.stringify(arr[1]);
      if (url == 'index') url = ''
      routerConfig += `{path:'/${url}',name:${componentName}, component: () => import('../pages/${value}')},\r`
    }
    ).catch(err => {
      console.log(err)
    })

  })

  Promise.all(arrFn).then(res => {
    // routerConfig += `{path:'*', component: () => import('../pages/default/404.vue')},\r`
    routerConfig += `]
/* eslint-enable */
`

    try {
      febs.file.dirAssure(path.join(process.cwd(), 'src', 'router'));
      fs.writeFileSync(
        path.join(process.cwd(), 'src', 'router', '_tmpConfig.ts'),
        routerConfig,
        'utf8'
      )
    } catch (e) {
      /* eslint-disable */
      console.log('make router config error')
      console.error(e)
      /* eslint-enable */
    }
  })

}