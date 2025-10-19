import { b as bootstrapLazy } from './index-4eZ7Wr37.js';
export { s as setNonce } from './index-4eZ7Wr37.js';
import { g as globalScripts } from './app-globals-DQuL1Twl.js';

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await globalScripts();
  return bootstrapLazy([["loading-component_2",[[257,"loading-component",{"data":[32],"isLoading":[32]}],[257,"my-component",{"name":[1],"inputValue":[32]}]]]], options);
};

export { defineCustomElements };
//# sourceMappingURL=loader.js.map
