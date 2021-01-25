import app from './app';
import './index.scss';
import myImage from './assets/images/Smiling-coffee.jpg';

console.log('Webpack bundled successfully.');

console.log(process.env.NODE_ENV);

app();

document.querySelector('.coffee-image').src = myImage;
