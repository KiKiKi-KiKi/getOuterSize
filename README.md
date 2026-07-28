# get-outer-size

[![NPM version](https://badgen.net/npm/v/get-outer-size)](https://www.npmjs.com/package/get-outer-size)
[![CI](https://github.com/KiKiKi-KiKi/getOuterSize/actions/workflows/ci.yml/badge.svg)](https://github.com/KiKiKi-KiKi/getOuterSize/actions/workflows/ci.yml)
[![ISC License](http://img.shields.io/badge/license-ISC-green.svg?style=flat)](https://github.com/KiKiKi-KiKi/useDebounceHooks/blob/master/package.json)

## install

```sh
$ npm install --save get-outer-size
```

## use

```javascript
import getOuterSize from 'get-outer-size';

const element = document.getElementById('my-element');
const {width, height} = getOuterSize(element);
// width = element width + border width + margin-right + margin-left
// height = element width + border width + margin-top + margin-bottom
```

## example

```html
<div class="div"></div>
```

```css
.div {
  margin: 10px 20px 15px;
  width: 100px;
  height: 100px;
}
```

```js
const element = document.getElementById('my-element');
const {width, height} = getOuterSize(element);
width; // => 140 (100px + 20px + 20px)
height; // => 125 (100px + 10px + 15px)
```
