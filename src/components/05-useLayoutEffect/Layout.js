import React, { useState, useLayoutEffect, useRef } from 'react';
import { useCounter } from '../../hooks/useCounter';
import useFetch from '../../hooks/useFetch';
import './layout.css';

const Layout = () => {

    const { counter, increment } = useCounter(1);

    const { data } = useFetch( `https://www.breakingbadapi.com/api/quotes/${ counter }` );

    const { quote } = !!data && data[0];

    const pTag = useRef();
    const [boxSize, setBoxSize] = useState({});

    useLayoutEffect(() => {
      setBoxSize(pTag.current.getBoundingClientRect());
    }, [quote]);
    


  return (
      <div>
          <h1>Layout Effect</h1>
          <hr />
                <blockquote className="blockquote text-end">
                    <p 
                        className=""
                        ref={pTag}
                    > { quote } </p>
                </blockquote>
                <button 
                        onClick={increment}
                        className='btn btn-primary'>
                        Next quote
                </button>

                <pre>
                    { JSON.stringify( boxSize, null, 3)}
                </pre>
       </div>
  )
}

export default Layout;
