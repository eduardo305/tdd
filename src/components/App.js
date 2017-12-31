import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewsWrapper from 'news-wrapper';

import buildUrl from 'build-url';

// export default () => {
//     const news = new NewsWrapper({
//         token: 'fb616dff3cdf4ff5a66f8689360c6fe9'
//     });

//     const promise = news.search.topheadlines('cnn');
//     promise.then(({ data }) => console.log('articles', data.articles));

//     const sourcePromise = news.search.sources('technology');
//     sourcePromise.then(({ data }) => console.log('sources', data.sources));

//     return <div>app</div>;
// } 

class App extends Component {
    render() {
        return <div>{this.props.current.source}</div>;
    }
}

const mapStateToProps = (state) => {
    return {
        current: state.source
    }
}

export default connect(mapStateToProps)(App);