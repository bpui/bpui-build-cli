'use strict';

/**
* Copyright (c) 2021 bp. All Rights Reserved.
* Author: brian.li
* Date: 2021-07-12 11:11
* Desc: 
*/

exports.getOptions = function (options) {
  var src_options = options;
  options = [];
  for (var i = 0; i < src_options.length; i++) {
    var src_option = src_options[i].split('=');
    if (src_option.length == 1) {
      options.push({ key: src_option[0] });
    } else {
      options.push({ key: src_option[0], value: src_option[1] });
    }
  }

  return options;
}


exports.getOptionByName = function (options, name) {
  var src_options = options;
  for (var i = 0; i < src_options.length; i++) {
    var src_option = src_options[i].split('=');
    if (src_option.length == 1) {
      if (src_option[0] == name) {
        return '';
      }
    } else {
      if (src_option[0] == name) {
        return src_option[1];
      }
    }
  }

  return null;
}
