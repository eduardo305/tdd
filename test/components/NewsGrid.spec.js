import React from 'react';
import { shallow, mount } from 'enzyme';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import NewsWrapper from 'news-wrapper';

import { NewsGrid } from '../../src/components/NewsGrid';

chai.use(sinonChai);
let news = new NewsWrapper({
  token: 'foo'
})

describe('<NewsGrid />', () => {
   it('should contain techcrunch as its default state', () => {
     const stub = sinon.stub(NewsGrid.prototype, 'componentWillMount');
     const wrapper = shallow(<NewsGrid newsWrapper={news}/>);
     expect(wrapper.state().source).to.equal('techcrunch');
   });

   it('should contain the source passed as props', () => {
     const wrapper = shallow(<NewsGrid source={'cnn'} newsWrapper={news}/>);
     expect(wrapper.state().source).to.equal('cnn');
   });

   it('should contain an empty array of news when initially created', () => {
     const wrapper = shallow(<NewsGrid source={'cnn'} newsWrapper={news} />);
     expect(wrapper.state().news).length.to.be.empty;
   });

   it('should call renderNews when state.news has data', () => {
     const wrapper = shallow(<NewsGrid source={'cnn'} newsWrapper={news} />);
     const spyOnRenderNews = sinon.spy(wrapper.instance(), 'renderNews');
     wrapper.setState({ news: [{ title: 'news1'}, { title: 'news2' }] });
     expect(spyOnRenderNews).to.have.been.calledOnce;
   });

   it('should contain 3 news if state.news has 3 items', () => {
     const wrapper = mount(<NewsGrid source={'cnn'} newsWrapper={news} />);
     wrapper.setState({ news: [{ title: 'news1' }, { title: 'news2' }, { title: 'news3'}] });
     expect(wrapper.find('.NewsThumbnail').length).to.equal(3);
   });
});