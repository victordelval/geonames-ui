import React from 'react';
import { shallow } from 'enzyme';
import LocationList from './LocationList';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-15.4';

Enzyme.configure({ adapter: new Adapter() });

describe('LocationList', () => {
    it('Should render a loading message', () => {
        const locationList = shallow(
            <LocationList.WrappedComponent data={ [] } total={ 0 } loading={ true }
                queried={ false } search={ 'test' } />
        );

        // console.log(locationList.debug());

        expect(locationList.find('HintMessage').length).toEqual(1);
    })
})