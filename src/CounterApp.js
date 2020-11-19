import React, {useState} from 'react';

import PropTypes from 'prop-types';
const ValueApp = ({value}) => {



  
    const [counter, setCounter] = useState( value );
    


    const handleAdd = () => {
        setCounter(counter + 1);
    }

    const handleReset = () => {
        setCounter(value);
    }

    const handleSubstract = () => {
        setCounter(counter - 1);
    }

    return (
        <>
        <h1> Counter App xD </h1>
        <h2> {counter} </h2>
        <button onClick = {  handleAdd  }> +1 </button>
        <button onClick = {  handleReset  }> Reset </button>
        <button onClick = {  handleSubstract  }> -1 </button>
        </>


    );



}

ValueApp.propTypes = {
    value: PropTypes.number.isRequired,
}

export default ValueApp;