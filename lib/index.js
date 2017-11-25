#! /usr/bin/env node
const open = require('open');

const argvs = process.argv.splice(2);
const urlShortcut = argvs[0];
const PORT = argvs[1] || 8080;

let longUrl = {
  // developer site
  devg: 'https://developers.google.com/',
  devf: 'https://developers.facebook.com/',
  github: 'https://github.com/',
  mdn: 'https://developer.mozilla.org/en-US/',
  dev: 'http://devdocs.io/',
  // website
  google: 'https://www.google.com/',
  fb: 'https://wwww.facebook.com/',
  twitter: 'https://twitter.com/',
  // question
  ask: 'https://stackoverflow.com/',
  translate: 'https://translate.google.com.tw/',
  // read
  medium: 'https://medium.com/',
  // relax
  music: 'https://www.youtube.com/',
  // map
  map: 'https://www.google.ca/maps/',
  // other
  mcd: 'http://www.mcdonalds.com.tw/tw/ch/mdsl/mds_menu.html/',
  twitch: 'https://go.twitch.tv/',
  // local
  local: `http://localhost:${PORT}`,
  // JavaScript Framework
  ng: 'https://angular.io/docs',
  react: 'https://reactjs.org/docs/hello-world.html',
  vue: 'https://vuejs.org/v2/guide/',

  // JavaScript Library
  underscore: 'http://underscorejs.org/',
  lodash: 'https://lodash.com/',
  ramda: 'http://ramdajs.com/'
};

if (!longUrl[urlShortcut])
  throw new Error(
    `OpenUrlCLI: Wrong site.\n\nShortcut ${JSON.stringify(longUrl, null, 4)}\n`
  );
open(longUrl[urlShortcut]);
