'use strict';

/**
* Copyright (c) 2021 bp. All Rights Reserved.
* Author: brian.li
* Date: 2021-07-12 10:10
* Desc: 
*/


module.exports = function (cfg/*: { maxSize, minSize }*/) {
  cfg |= {};
  var maxSize = cfg.maxSize || 512 * 1024;
  var minSize = cfg.minSize || 30 * 1024;
  
  return {
    automaticNameDelimiter: '~',
    chunks: 'all',
    name: true,
    maxSize: maxSize,
    minSize: minSize,
    cacheGroups: {
      ui: {
        name: "vendor-ui",
        priority: 20,
        reuseExistingChunk: false,
        enforce: true,
        test: /([\\/]node_modules[\\/]((\@bpui\/ui))[\\/])/
      },
      bpui: {
        name: "vendor-bpui",
        priority: 20,
        reuseExistingChunk: false,
        enforce: true,
        test: /([\\/]node_modules[\\/]((bpui\.js))[\\/])/
      },
      bpui_actionsheet: {
        name: "vendor-bpui-actionsheet",
        priority: 20,
        reuseExistingChunk: false,
        enforce: true,
        test: /([\\/]node_modules[\\/]((\@bpui\/actionsheet))[\\/])/
      },
      bpui_checkbox: {
        name: "vendor-bpui-checkbox",
        priority: 20,
        reuseExistingChunk: false,
        enforce: true,
        test: /([\\/]node_modules[\\/]((\@bpui\/checkbox))[\\/])/
      },
      bpui_dialog: {
        name: "vendor-bpui-dialog",
        priority: 20,
        reuseExistingChunk: false,
        enforce: true,
        test: /([\\/]node_modules[\\/]((\@bpui\/dialog))[\\/])/
      },
      bpui_input: {
        name: "vendor-bpui-input",
        priority: 20,
        reuseExistingChunk: false,
        enforce: true,
        test: /([\\/]node_modules[\\/]((\@bpui\/input))[\\/])/
      },
      bpui_libs: {
        name: "vendor-bpui-libs",
        priority: 20,
        reuseExistingChunk: false,
        enforce: true,
        test: /([\\/]node_modules[\\/]((\@bpui\/libs))[\\/])/
      },
      bpui_navbarview: {
        name: "vendor-bpui-navbarview",
        priority: 20,
        reuseExistingChunk: false,
        enforce: true,
        test: /([\\/]node_modules[\\/]((\@bpui\/navbar-view))[\\/])/
      },
      bpui_picker: {
        name: "vendor-bpui-picker",
        priority: 20,
        reuseExistingChunk: false,
        enforce: true,
        test: /([\\/]node_modules[\\/]((\@bpui\/picker))[\\/])/
      },
      bpui_popover: {
        name: "vendor-bpui-popover",
        priority: 20,
        reuseExistingChunk: false,
        enforce: true,
        test: /([\\/]node_modules[\\/]((\@bpui\/popover))[\\/])/
      },
      bpui_radio: {
        name: "vendor-bpui-radio",
        priority: 20,
        reuseExistingChunk: false,
        enforce: true,
        test: /([\\/]node_modules[\\/]((\@bpui\/radio))[\\/])/
      },
      bpui_select: {
        name: "vendor-bpui-select",
        priority: 20,
        reuseExistingChunk: false,
        enforce: true,
        test: /([\\/]node_modules[\\/]((\@bpui\/select))[\\/])/
      },
      bpui_switch: {
        name: "vendor-bpui-switch",
        priority: 20,
        reuseExistingChunk: false,
        enforce: true,
        test: /([\\/]node_modules[\\/]((\@bpui\/switch))[\\/])/
      },
      bpui_tabbar: {
        name: "vendor-bpui-tabbar",
        priority: 20,
        reuseExistingChunk: false,
        enforce: true,
        test: /([\\/]node_modules[\\/]((\@bpui\/tabbar))[\\/])/
      },
      bpui_tableview: {
        name: "vendor-bpui-tableview",
        priority: 20,
        reuseExistingChunk: false,
        enforce: true,
        test: /([\\/]node_modules[\\/]((\@bpui\/table-view))[\\/])/
      },
      bpui_uploader: {
        name: "vendor-bpui-uploader",
        priority: 20,
        reuseExistingChunk: false,
        enforce: true,
        test: /([\\/]node_modules[\\/]((\@bpui\/uploader))[\\/])/
      },
      // 处理入口chunk
      febs: {
        name: "vendor-febs",
        priority: 20,
        reuseExistingChunk: false,
        enforce: true,
        test: /[\\/]node_modules[\\/]febs\-browser[\\/]/
      },
    }
  };
}