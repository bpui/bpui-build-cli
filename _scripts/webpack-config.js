'use strict';

/**
* Copyright (c) 2021 bp. All Rights Reserved.
* Author: brian.li
* Date: 2021-07-12 10:37
* Desc: 
*/


exports.initResolveAlias = function (configChain) {
  configChain.resolve.alias
    .set("febs", "febs-browser");
}

exports.initPluginPreload = function (configChain) {
  configChain
    .plugin('PreloadWebpack')
    .use(require('@vue/preload-webpack-plugin'), [{
      rel: 'preload',
      include: 'all' // or 'initial'
    }]);
}


exports.initBundleAnalyzer = function (configChain) {
  if (process.env.BPUI_ANALYZER == '1') {
    configChain
      .plugin('webpack-bundle-analyzer')
      .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin);
  }
}