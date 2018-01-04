import React from 'react';
import PropTypes from 'prop-types';

import '../styles/NewsThumbnail.css';

const defaultPhoto = 'http://abojeb.com/wp-content/uploads/2015/06/news-default.jpg';

const NewsThumbnail = (props) => {
  const { content } = props;
  const { urlToImage, title, author = 'unknown', description, url } = content;
  return (
    <div className='NewsThumbnail'>
      <a href={url} className='news-link'>
        <div>
          <img
            src={urlToImage || defaultPhoto}
            className='photo' 
            alt='news photo'
            style={{ width: '100%' }}
          /></div>
        <div>
          <div className='title'>{title}</div>
          <div className='author'>{author}</div>
          <div className='description'>{description}</div>
        </div>
      </a>
    </div>
  );
}

NewsThumbnail.defaultProps = {
  content: {
    photo: defaultPhoto,
    title: '',
    category: '',
    author: '',
    description: '',
    link: ''
  }
};

NewsThumbnail.propTypes = {
  content: PropTypes.object.isRequired
};

export default NewsThumbnail;