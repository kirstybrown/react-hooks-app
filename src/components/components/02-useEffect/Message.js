import React, { useEffect, useState } from 'react';

const Message = () => {

    const [coords, setCoords] = useState({ x:0, y:0});
    const {x,y} = coords;

    useEffect(() => {
      
        const mouseMove = (e) => {
            // console.log(e);
        const coors = { x: e.x, y: e.y };
        console.log(coors);
        }
        window.addEventListener('mousemove', mouseMove );

      return () => {
        window.removeEventListener('mousemove', mouseMove );
      };
    }, []);
    
  return (
    <>
        <h3>You're great!</h3>
        <p>
            x: { x } y: { y }
        </p>
    </>
);
};

export default Message;