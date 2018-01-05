import React, { Component } from 'react';
import { connect } from 'react-redux';

import Spinner from './Spinner';
import NewsThumbnail from './NewsThumbnail';
import '../styles/NewsGrid.css';

export class NewsGrid extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      source: props.source || 'techcrunch',
      news: []
    };
  }
  
  componentWillMount() {
    this.props.newsWrapper.search.everything(this.state.source.source)
      .then(({ data }) => {
        this.setState({
          news: data.articles
        });
      })
  }
  
  renderNews() {
    const { news } = this.state;

    return news.map(_new => {
      return <NewsThumbnail key={_new.title} content={_new} />
    });
  }

  render() {
    const { news } = this.state;

    if (news.length === 0) {
      return <Spinner />;
    }

    return <div className='NewsGrid'>{ this.renderNews() }</div>
  }
}

const mapStateToProps = ({ source }) => {
  return {
    source
  }
}

export default connect(mapStateToProps)(NewsGrid);