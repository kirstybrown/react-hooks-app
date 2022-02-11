import React from 'react';
import { shallow } from 'enzyme';
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import { useFetch } from '../../../hooks/useFetch';
import { useCounter } from '../../../hooks/useCounter';

jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');


describe('Tests for MultipleCustomHooks component', () => { 

    beforeEach( () =>  {
 
        useCounter.mockReturnValue({
            counter: 10,
            increment: () => {}
        }); 
    });

    test('should show component correctly', () => { 
        
        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        });

        const wrapper = shallow( <MultipleCustomHooks /> );
        expect( wrapper ).toMatchSnapshot();
     })

      test('should show the info', () => { 

        useFetch.mockReturnValue({
            data: [{
                author: 'Fernando',
                quote: 'Hello!'
            }],
            loading: false,
            error: null
        });

        const wrapper = shallow( <MultipleCustomHooks /> );

        expect( wrapper.find('.alert').exists() ).toBe( false );
        expect( wrapper.find('.mb-0').text().trim() ).toBe( 'Hello!' );
        expect( wrapper.find('footer').text().trim() ).toBe( 'Fernando' );
        
        console.log( wrapper.html() );

      })
 })

 /* beforeEach( () =>  {
 
            useCounter.mockReturnValue({
                counter: 10,
                increment: () => {}
            }); 
        }); */