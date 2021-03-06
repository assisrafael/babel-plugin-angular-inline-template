# babel-plugin-angular-inline-template [![Build Status](https://travis-ci.org/assisrafael/babel-plugin-angular-inline-template.svg?branch=master)](https://travis-ci.org/assisrafael/babel-plugin-angular-inline-template) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/assisrafael/babel-plugin-angular-inline-template/master/LICENSE)

[![NPM](https://nodei.co/npm/babel-plugin-angular-inline-template.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/babel-plugin-angular-inline-template/)

Babel plugin for inlining templates into angular 1.X components and directives


## How to use

In `.babelrc` or similar:

```json
{
  "plugins": [
    ["babel-plugin-angular-inline-template", {
      "basePath": "<ROOT-PATH-TO-YOUR-FILE>"
    }]
  ]
}
```

Or if you want to use relative templateUrl's:

```json
{
  "plugins": [
    "babel-plugin-angular-inline-template"
  ]
}
```

All templates are minified using [html-minifier](https://github.com/kangax/html-minifier)
