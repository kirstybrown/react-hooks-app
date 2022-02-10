import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import HookApp from '../HookApp';

describe('Tests for HookApp component', () => { 
    
    const wrapper = shallow( <HookApp />);

    test('should show Hook App correctly', () => { 
        expect( wrapper ).toMatchSnapshot();
     });

     test('should show header correctly', () => { 

        const title = 'Hello from HookApp';
        const h1Text = wrapper.find('h1').text().trim();
        expect( h1Text ).toBe( title );
      });
 });