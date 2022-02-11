import { renderHook, act } from '@testing-library/react-hooks';
import useForm from '../../hooks/useForm';


describe('Tests for useForm', () => { 

    const initialForm = {
        name: 'kirsty',
        email: 'kirsty.a.d.brown@gmail.com'
    }

    test('should return a default form', () => { 
        const { result } = renderHook( () => useForm(initialForm) );
        const [ formValues, handleInputChange, reset ] = result.current;

        expect( result.current[0].name ).toBe( 'kirsty' );
        expect( result.current[0].email ).toBe( 'kirsty.a.d.brown@gmail.com' );

        expect( formValues ).toEqual( initialForm );
        expect( typeof handleInputChange ).toBe( 'function' );
        expect( typeof reset ).toBe( 'function' );

     });

    test('should change the value on the form (change name)', () => { 
        const { result } = renderHook( () => useForm(initialForm) );
        const [ , handleInputChange ] = result.current;

        act( () => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'fernando'
                }
            });
        });

        const [ formValues ] = result.current;
        console.log(formValues);
        expect( formValues ).toEqual( { ...initialForm, name: 'fernando' });

    });

    test('should re-establish the form with RESET ', () => { 

        const { result } = renderHook( () => useForm(initialForm) );
        const [ , handleInputChange, reset ] = result.current;

        act( () => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'fernando'
                }
            });
            reset();
        });

        const [ formValues ] = result.current;
        console.log(formValues);
        expect( formValues ).toEqual( initialForm );
     })

 })