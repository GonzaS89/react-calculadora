import React from 'react';
import '../hojasestilo/botonclear.css'

function BotonClear (props) {
    return (
        <div className='botonclear' onClick={props.manejarClear}>
            {props.children}
        </div>
    )
};

export default BotonClear;