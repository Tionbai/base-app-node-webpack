# base-app-node-webpack

A base app in _Node.js_ with _Webpack 4_ and _Babel_ set up.

## Installation

Clone this repository. You will need node and npm installed globally on your machine.

### Installation:

```bash



npm install



```

### To run Webpack Dev Server:

```bash



npm run start



```

### To visit app in development:

```bash



localhost:8080



```

### To run Webpack Production Build:

```bash



npm run build



```

### To visit app in production:

```bash



npm run build:http-server


```

or if you are using `VSCode`, open with [VSCode Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

## Usage

This app uses _Webpack 4_.

_Webpack_ and _Babel_ is set up. Change configs as you wish.

Develop your app and deploy for production.

---

### Note If you update to _Webpack 5_:

_Webpack 5_ stops automatically polyfilling _Node.js core modules_. If you are using core modules in this app and update to _Webpack 5_ without polyfills, the app will break. It is possible to manually add polyfills.

Read more about updates in Webpack 5 release in the documentation: [Webpack 5 release](https://webpack.js.org/blog/2020-10-10-webpack-5-release/).

---

### How to add polyfills in Webpack 5:

Errors in the terminal will give hints on how to add the required polyfill.

**Example for path module:**

In your _Webpack config_:

```javascript
module.exports = {
	...
	resolve: {
	...
		fallback: {
			"path":  require.resolve("path-browserify"),
		},
	},
	...
};
```

and

```javascript
npm install path-browserify --save-dev
```

Restart the Dev Server and the error will be gone.

---

Read more:
[Node.js](https://nodejs.org/en/)
[Webpack](https://webpack.js.org/)
[Babel](https://babeljs.io/)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)