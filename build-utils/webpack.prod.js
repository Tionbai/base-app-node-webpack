const path = require("path");
const Dotenv = require("dotenv-webpack");

module.exports = {
  mode: "production",
  plugins: [
    new Dotenv({
      path: path.join(__dirname, '../.env.production'),
    }),
  ],
  devtool: "source-map",
};
