const express = require('express');
const path = require('path');
const fs = require('fs');
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Home from '../frontend/src/pages/ssr/Home';
import StyleContext from 'isomorphic-style-loader/StyleContext';

//init app
const app = express();

//set view engine
app.set('view engine', 'ejs');

app.use('/assets', express.static('../frontend/public/assets'));

app.get('/',(req, res) => {

    const css = new Set();//css for all rendered components
    const insertCss = (...styles) => {
        styles.forEach(style => {
            css.add(style._getCss())
        })
    }

    const body = ReactDOMServer.renderToString(
    <StyleContext.Provider value={{ insertCss }}>
        <Home/>
    </StyleContext.Provider>
    );

    res.render('index', {css:[...css], body:body})
});

app.get('/abbrev/abbrev.js', (req,res) => {
    res.end('Inv')
})

app.listen(8080, () => {
    console.log('Started::')
});