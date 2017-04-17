# :alien: Greedo
[![npm version](https://badge.fury.io/js/greedo.svg)](https://www.npmjs.com/package/greedo)
![](http://img.badgesize.io/pfrankov/greedo/master/greedo.css)
![](http://img.badgesize.io/pfrankov/greedo/master/greedo.css?compression=gzip)  
Bootstrap-like flexbox-based responsive grid system.

Partial class names compatibility:
- [x] Bootstrap
- [x] Flexbox Grid

## Demo
http://pfrankov.github.io/greedo/

#### Try it!
https://jsbin.com/xisodasori/edit?html,output

## Installation

```bash
npm install --save greedo
```

## Usage

#### CDN
```html
<link rel="stylesheet" href="//cdn.rawgit.com/pfrankov/greedo/v1.1.0/greedo.css"/>
```

#### With [Webpack](https://webpack.js.org/)
```javascript
// ES2015+ / TypeScript
import {} from "greedo";

// CommonJS
require("greedo");
```

##### Webpack 2 loaders:
```javascript
{
    test: /\.css$/,
    use: [
        {
            loader: "style-loader"
        },
        {
            loader: "css-loader"
        }
    ]
}
```