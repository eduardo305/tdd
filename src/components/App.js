import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewsWrapper from 'news-wrapper';
import buildUrl from 'build-url';

import Header from './Header';
import Main from './Main';

export default () => {
    // const news = new NewsWrapper({
    //     token: 'fb616dff3cdf4ff5a66f8689360c6fe9'
    // });

    // const promise = news.search.topheadlines('cnn');
    // promise.then(({ data }) => console.log('articles', data.articles));

    // const sourcePromise = news.search.sources('technology');
    // sourcePromise.then(({ data }) => console.log('sources', data.sources));

    return (
        <div className='App' style={{ maxWidth: '920px', margin: 'auto' }}>
            <Header />
            <Main />
        </div>
    );
}