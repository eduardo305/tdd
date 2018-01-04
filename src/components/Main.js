import React from 'react';
import NewsWrapper from 'news-wrapper';

import NewsGrid from './NewsGrid';


const newsWrapper = new NewsWrapper({
  token: 'fb616dff3cdf4ff5a66f8689360c6fe9'
});

export default () => {
  return (
    <div className='Main' style={{ margin: '0 10px' }}>
      <NewsGrid newsWrapper={newsWrapper} />
    </div>
  );
};
