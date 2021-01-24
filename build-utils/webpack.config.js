const { merge } = require("webpack-merge");

const commonConfig = require("./webpack.common.js");

// Run optional addons in webpack config
const getAddons = (addonsArgs) => {
  // If addons is array of addons, return array, else return addon inside array.
  const addons = Array.isArray(addonsArgs) ? addonsArgs : [addonsArgs];

  // Return addons if true, else return false.
  return addons
    .filter(Boolean)
    .map((name) => require(`./addons/webpack.${name}.js`));
};

module.exports = ({ env, addon }) => {
  const envConfig = require(`./webpack.${env}.js`);

  // Merge common config, environment config, and addons.
  return merge(commonConfig, envConfig, ...getAddons(addon));
};
