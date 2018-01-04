import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import { App } from '../../src/components/App';

const mockStore = configureStore();

describe('<App />', () => {
    // it('should be present', () => {
    //     //const wrapper = shallow(<App store={mockStore({source: { source: 'techcrunch'}})} />);
    //     const wrapper = shallow(<App source={{ source: 'techcrunch' }} />);
    //     // expect(wrapper.text()).to.equal('techcrunch');
    //     expect(wrapper.length).to.equal(1);
    // })

    // it('should work if we are testing it with the redux connected state', () => {
    //     // In this case App should be imported as import App from '...'
    //     const wrapper = mount(<App store={mockStore({source: { source: 'techcrunch'}})} />);
    //     console.log(wrapper.state())
    //     expect(wrapper.text()).to.equal('techcrunch');
    // });
});