# Setup React Project

You will be setting up a basic React app in this assignment.

## What you will learn

- Setup a Node project with `package.json`
- Create a simple React component using JSX
- Bundle React app using Webpack
- Setup Babel to transpile JSX to JavaScript
- Setup HTMLWebpackPlugin to add bundle reference in template HTML
- Configure Webpack Dev Server

## What you need to do

First, you need to install `react` and `react-dom`.

Next, Create a React component in `/src/index.js` that renders:

```html
<h1>Hello React!</h1>
```

Next, install `webpack`, `babel` and dependent tools to do following tasks.

Configure Webpack with following conditions:

1. Entry point should be `/src/index.js`
2. Created bundle should be stored in `/dist` folder with file name as `bundle.js`
3. All `js` and `jsx` files need to be transpiled by Babel to JavaScript

Next, Install Webpack HTMLWebpackPlugin.

Configure webpack to take `/src/index.html` as the template file to generate output html file that contains the reference to `bundle.js`.

Next, Install and configure `webpack-dev-server`.

## How to run your solution

### Build

Go to the project in terminal. Run `npm run build` to build the project and store the output files in `/dist` folder.

### Run

Go to the project in terminal. Run `npm start` to open the project in browser using `webpack-dev-server`.
