'use strict';

var index = require('./index-CHtasHuu.js');
var appGlobals = require('./app-globals-V2Kpy_OQ.js');

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await appGlobals.globalScripts();
  return index.bootstrapLazy([["my-component.cjs",[[513,"my-component",{"first":[1],"middle":[1],"last":[1],"cardTitle":[1,"card-title"],"theme":[1],"isExpanded":[32],"customMessage":[32]}]]]], options);
};

exports.setNonce = index.setNonce;
exports.defineCustomElements = defineCustomElements;
