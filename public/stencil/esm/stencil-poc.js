import { p as promiseResolve, b as bootstrapLazy } from './index-4eZ7Wr37.js';
export { s as setNonce } from './index-4eZ7Wr37.js';
import { g as globalScripts } from './app-globals-DQuL1Twl.js';

/*
 Stencil Client Patch Browser v4.38.2 | MIT Licensed | https://stenciljs.com
 */

var patchBrowser = () => {
  const importMeta = import.meta.url;
  const opts = {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await globalScripts();
  return bootstrapLazy([["loading-component_2",[[257,"loading-component",{"data":[32],"isLoading":[32]}],[257,"my-component",{"name":[1],"inputValue":[32]}]]]], options);
});
//# sourceMappingURL=stencil-poc.js.map
