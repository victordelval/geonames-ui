import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-15.4';

Enzyme.configure({ adapter: new Adapter() });

describe('Header', () => {
    it('Should render the header of the page', () => {
        const header = shallow(<Header />);

        expect(header.text()).toEqual('GeoNames Ui');
        expect(header.find('h1').length).toEqual(1);
    })
})