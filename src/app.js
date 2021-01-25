const path = require('path');

export default () => {
  console.log(path.resolve(__dirname, '..', '/dist'));
};
