import React, { useState } from 'react';

import './effects.css';

const FormWithCustomHook = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email, password } = formState;

    const handleInputChange = ({ target }) => {
        
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }

  return (
      <>
        <h1>FormWithCustomHook</h1>
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
        <div className='form-group'>
            <input
                type="password"
                name="password"
                className="form-control"
                placeholder="*****"
                autoComplete="off"
                value={ password }
                onChange={ handleInputChange }
            />
        </div>

      </>
  )
};

export default FormWithCustomHook;
