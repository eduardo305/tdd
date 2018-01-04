import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';

import NewsThumbnail from '../../src/components/NewsThumbnail';

describe('<NewsThumbnail />', () => {
  it('should render', () => {
    const wrapper = shallow(<NewsThumbnail />);
    expect(wrapper.length).to.equal(1);
  });

  it('should contain an image', () => {
    const wrapper = shallow(<NewsThumbnail />);
    expect(wrapper.find('.photo')).to.have.length(1);
  });
  
  it('should contain a default image in case none is provided', () => {
    const wrapper = shallow(<NewsThumbnail />);
    const defaultPhoto = 'http://abojeb.com/wp-content/uploads/2015/06/news-default.jpg';
    expect(wrapper.find('.photo').prop('src')).to.equal(defaultPhoto);
  });

  describe('News Thumbnail content', () => {
    let content, wrapper;

    beforeEach(() => {
      content = {
        title: 'news title',
        author: 'news author',
        description: 'news description',
        url: 'news link'
      };

      wrapper = shallow(<NewsThumbnail content={content} />);
    });

    it('should contain a news title', () => {
      expect(wrapper.find('.title')).to.have.length(1);
      expect(wrapper.find('.title').text()).to.equal(content.title);
    });

    it('should contain a news author ', () => {
      expect(wrapper.find('.author')).to.have.length(1);
      expect(wrapper.find('.author').text()).to.equal(content.author);
    });

    it('should display `unknown` if no author is specified', () => {
      content = {
        title: 'news title',
        description: 'news description',
        url: 'news link'
      };

      wrapper = shallow(<NewsThumbnail content={content} />);
      expect(wrapper.find('.author')).to.have.length(1);
      expect(wrapper.find('.author').text()).to.equal('unknown');
    });

    it('should contain a news description ', () => {
      expect(wrapper.find('.description')).to.have.length(1);
      expect(wrapper.find('.description').text()).to.equal(content.description);
    });

    it('should contain a news link', () => {
      expect(wrapper.find('.news-link')).to.have.length(1);
      expect(wrapper.find('.news-link').prop('href')).to.equal(content.url);
    });
  });

});