[![Build Status](https://travis-ci.org/esdoc/esdoc-es7-plugin.svg?branch=master)](https://travis-ci.org/esdoc/esdoc-es7-plugin)
[![Coverage Status](https://coveralls.io/repos/esdoc/esdoc-es7-plugin/badge.svg)](https://coveralls.io/r/esdoc/esdoc-es7-plugin)
[![Document](https://doc.esdoc.org/github.com/esdoc/esdoc-es7-plugin/badge.svg)](https://doc.esdoc.org/github.com/esdoc/esdoc-es7-plugin)

# ESDoc ES7 Plugin
**This is an experimental plugin.**

This plugin only **ignores ES7 syntax**(does not optimize) to produce the documentation.
So, ES7 information(ClassProperties, AsyncFunctions and etc...) is not presented in the documentation.

Now, ignore the following syntax.

- es7.comprehensions
- es7.classProperties
- es7.functionBind
- es7.asyncFunctions
- es7.decorators
- es7.exportExtensions
- es7.objectRestSpread
- es7.trailingFunctionCommas
- es7.exponentiationOperator

FYI: https://babeljs.io/docs/usage/experimental/

# Install and Usage
```sh
npm install esdoc-es7-plugin
```

setup ``plugin`` property in ``esdoc.json``

```json
{
  "source": "./src",
  "destination": "./doc",
  "plugins": [
    {"name": "esdoc-es7-plugin"}
  ]
}
```

execute ESDoc

```json
esdoc -c esdoc.json
```

# LICENSE
MIT

# Author
[Ryo Maruyama@h13i32maru](https://twitter.com/h13i32maru)
