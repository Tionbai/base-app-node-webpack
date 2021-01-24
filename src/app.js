import path from 'path';

export default () => {
  console.log(path.resolve(__dirname, '..', '/dist'));
}
