# npm-package-seed
npm package seed, package to min, lib, umd, es

### build min
  it use rollup to build
- npm run build:min
  - ouput: dist/
  - include: amd,cjs,es,iife,umd
- amd
  npm run build:min:amd
- cjs
  npm run build:min:cjs
- es
  npm run build:min:es
- iife
  npm run build:min:iife
- umd
  npm run build:min:umd

### build dir
  it use babel to build
- npm run build
  - ouput: amd/; cjs/; commonjs/; es/; systemjs/; umd/;
  - include: amd,cjs,commonjs,es,systemjs,umd
- amd
  npm run build:amd
- cjs
  npm run build:cjs
- commonjs
  npm run build:commonjs
- es
  npm run build:es
- systemjs
  npm run build:systemjs
- umd
  npm run build:umd

### release
  use semantic-release to release to npm
  test 1 /doc/