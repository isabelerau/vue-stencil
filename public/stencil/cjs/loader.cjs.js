'use strict';

var index = require('./index-BwftVgcC.js');
var appGlobals = require('./app-globals-V2Kpy_OQ.js');

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await appGlobals.globalScripts();
  return index.bootstrapLazy([["loading-component_2.cjs",[[257,"loading-component",{"data":[32],"isLoading":[32]}],[257,"my-component",{"name":[1],"inputValue":[32]}]]]], options);
};

exports.setNonce = index.setNonce;
exports.defineCustomElements = defineCustomElements;
//# sourceMappingURL=loader.cjs.js.map
