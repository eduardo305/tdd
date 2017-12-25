import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import App from '../../src/components/App';

describe('<App />', () => {
    it('should be present', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('div')).to.have.length(1);
    })
});