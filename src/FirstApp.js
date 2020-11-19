import React from 'react';
import PropTypes from 'prop-types';
const PrimerComponente = ( {saludo} ) => {

const saludo2 =  {
    nombre: 'Roberto',
    apellido: 'Salmeron'
}

console.log(saludo)


return (

    <>
    <h1> {saludo} </h1>
     {/* <pre> {JSON.stringify(saludo, null , 3)} </pre> */}
     <p> Simon va verdad la cosa es que simon</p>
    </>
    );


}

PrimerComponente.propTypes = {
    saludo : PropTypes.string.isRequired,
}


export default PrimerComponente; 