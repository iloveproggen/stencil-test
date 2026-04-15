import { b as bootstrapLazy } from './index-DgCTx5eZ.js';
export { s as setNonce } from './index-DgCTx5eZ.js';
import { g as globalScripts } from './app-globals-DQuL1Twl.js';

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await globalScripts();
  return bootstrapLazy([["my-component",[[513,"my-component",{"first":[1],"middle":[1],"last":[1],"cardTitle":[1,"card-title"],"theme":[1],"isExpanded":[32],"customMessage":[32]}]]]], options);
};

export { defineCustomElements };
