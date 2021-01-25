// const { merge } = import('webpack-merge');
const { merge } = require('webpack-merge');

const commonConfig = require('./webpack.common.js');

// Run optional addons in webpack config
const getAddons = (addonsArgs) => {
  // If addons is array of addons, return array, else return addon inside array.
  const addons = Array.isArray(addonsArgs) ? addonsArgs : [addonsArgs];

  // Return addons if true, else return false.
  return (
    addons
      .filter(Boolean)
      /* eslint-disable-next-line */
      .map((name) => require(`./addons/webpack.${name}.js`))
  );
};

// Merge common config, environment config, and addons.
module.exports = ({ env, addon }) => {
  /* eslint-disable-next-line */
  const envConfig = require(`./webpack.${env}.js`);

  return merge(commonConfig, envConfig, ...getAddons(addon));
};
