import path from 'path';
import express from 'express';
import compression from 'compression';
import '@babel/polyfill';

const IS_DEV = process.env.NODE_ENV !== 'production';
const app = express();

// WARNING: Only for developing.
// I recommend use nginx or CDN in the production
app
    .use(compression())
    .use(express.static(path.resolve(__dirname, '../build')))
    .use(express.static(path.resolve(__dirname, '../static')));

app.get('/*', IS_DEV
    ? require('./server-hot-middleware').default
    : require('./server-render-middleware').default);

export default app;
