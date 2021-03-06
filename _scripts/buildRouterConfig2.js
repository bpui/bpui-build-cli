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
  let layoutConfig = `'use strict';\r`
  let layoutConfig2 = '';
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

    // layout file.
    if (values.length == 2 && values[1] == '_layout.vue') {
      let vv = values[0];
      if (vv == 'default') {
        vv = '_default';
      }
      layoutConfig += `import ${vv} from '../pages/${values[0]}/_layout.vue';\r`;
      layoutConfig2 += `  ${values[0]}: ${vv},\r`;
      
      return;
    }

    if (values[values.length - 1][0] == '_') {
      return;
    }

    if (url.indexOf('default/') == 0) {
      url = url.substring('default/'.length);
    }
    else if (url == 'default') {
      url = '';
    }

    let componentName = null;
    routerConfig += `{path:'/${url}',name:${componentName}, component: () => import('../pages/${value}')},\r`
  })

  Promise.all(arrFn).then(res => {
    // routerConfig += `{path:'*', component: () => import('../pages/default/404.vue')},\r`
    routerConfig += `]
/* eslint-enable */
`
    layoutConfig += `

export default {
`
    layoutConfig += layoutConfig2;
    layoutConfig += `};`;
    
    try {
      febs.file.dirAssure(path.join(process.cwd(), 'src', 'router'));
      fs.writeFileSync(
        path.join(process.cwd(), 'src', 'router', '_tmpConfig.ts'),
        routerConfig,
        'utf8'
      )
      fs.writeFileSync(
        path.join(process.cwd(), 'src', 'router', '_tmpLayout.ts'),
        layoutConfig,
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