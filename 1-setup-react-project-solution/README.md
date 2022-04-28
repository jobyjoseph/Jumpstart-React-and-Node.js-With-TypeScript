# Setup React Project

Once we complete this project we learn:

- how to create a Node project using `npm init -y`

## Steps Involved

Initialize a Node project using:

```shell
npm init -y
```

Next, install `react` and `react-dom` packages.

Create a `/src` folder to store source files. Inside that, create an `index.html` file with below content.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React Starter</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

Next create new file `index.js` in `src` folder. Paste below content:

```javascript
import React from "react";
import { createRoot } from "react-dom/client";

const App = () => {
  return <h1>Hello React!</h1>;
};

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);
```

### Webpack

Install `webpack` bundler and `webpack-cli`:

```shell
npm install --save-dev webpack webpack-cli
```

Create `webpack.config.js` in project root. Paste below content:

```javascript
var path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
};
```

Update `package.json` to run webpack:

```javascript
"scripts": {
  "build": "webpack"
}
```

### Babel

Install Babel for Webpack to bundle `.jsx` files. Install Babel and dependencies:

```shell
npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev
```

Create `.babelrc` file in project root and add below contents.

```
{ "presets": ["@babel/preset-env", "@babel/preset-react"] }
```

Update webpack config to use Babel.

```javascript
module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
```

### HtmlWebpackPlugin

Install plugin using:

```
npm install --save-dev html-webpack-plugin
```

Update webpack configuration to use the plugin.

```javascript
var HtmlWebpackPlugin = require("html-webpack-plugin");
var path = require("path");

module.exports = {
  entry: "./src/index.js",
  //...
  module: {
    /*...*/
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
```

### Webpack Dev Server

Install webpack dev server:

```
npm i webpack-dev-server --save-dev
```

Update `scripts` in package.json to run dev server:

```javascript
"scripts": {
  "start": "webpack-dev-server --open --hot",
  "build": "webpack"
}
```
