require('dotenv').config();
// const Koa = require('koa');
// const Router = require('koa-router');
// const bodyParser = require('koa-bodyparser');
// const mongoose = require('mongoose');

import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import mongoose from 'mongoose'

import api from './api'

import createFakeData from './createFakeData';


const { PORT, MONGO_URI } = process.env;

mongoose
.connect(MONGO_URI, {useNewUrlParser : true})
.then(()=>{
    console.log('Connected to MongoDB')
    // createFakeData();
})
.catch(e => {
    console.error(e)
})



const app = new Koa();
const router = new Router();


router.use('/api', api.routes());


app.use(bodyParser());






// app 인스턴스에 라우터 적용

app.use(router.routes()).use(router.allowedMethods());

const port = PORT || 4000;
app.listen(port, () => {
    console.log('listening to port', port)
})