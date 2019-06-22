import React from 'react';
import {render} from 'react-dom';
import App from './App';
import AppService from './modules/app.service';
import {config} from './modules/config';
import './modules/header.component';
import './modules/ts.module';
import './css/index.css';
import './scss/index.scss';

console.log(config.key);

const service = new AppService('Hello world');
service.log();

render(<App />, document.getElementById('app'));