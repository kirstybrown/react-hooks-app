import React, { useEffect, useState } from 'react';
import Message from './Message';
import './effects.css';

const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;

    useEffect( () => {
        // console.log('Hey!');
    }, []);

    useEffect( () => {
        // console.log('formState changed!');
    }, [formState]);

    useEffect( () => {
        // console.log('formState changed!');
    }, [email]);

    const handleInputChange = ({ target }) => {
        
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }

  return (
      <>
        <h1>useEffect</h1>
        <hr />

        <div className='form-group'>
            <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Your name"
                autoComplete="off"
                value={ name }
                onChange={ handleInputChange }
            />
        </div>
        <div className='form-group'>
            <input
                type="text"
                name="email"
                className="form-control"
                placeholder="email@gmail.com"
                autoComplete="off"
                value={ email }
                onChange={ handleInputChange }
            />
        </div>

        { name === '123' && <Message /> }


      </>
  )
};

export default SimpleForm;
