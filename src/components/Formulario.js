import React, { useState } from 'react';
import styled from 'styled-components';
import Error from './Error';
import PropTypes from 'prop-types';

const Buscador = styled.div`
  width: 800px;
  background-color: #86becb;
  margin: auto;
  text-align: center;
  height: auto;

`;

const Formulario = ({setValor}) => {

  const [error, setError] = useState(false);
  const [datos, setDatos] = useState('');

  const leerDatos = e => {
    
    e.preventDefault();

    if(datos === ''){
      setValor('');
      setError(true);
      return;
    }else{
      setError(false);
       setValor(datos);
    }
  }

  return ( 
    <Buscador>
    <div className="text-center w-100 pt-5" id="buscar">BUSCADOR DE IMAGENES</div>
    {error ? 
      <Error 
        mensaje="Debe definer el término a buscar"
      /> 
      : null }
      <form onSubmit={leerDatos} >
      
      <div className="container d-flex justify-content-around pt-2">
        
        <input 
          type="text" 
          className="form-control m-4 w-60" 
          onChange={e => setDatos(e.target.value)} 
          value={datos}
        />
        <button type="submit" className="btn btn-primary m-auto">Buscar</button>
        
      </div>
      </form>
      
      
    </Buscador>
    
   );
}
 
Formulario.propTypes = {
  setValor: PropTypes.func.isRequired
}
export default Formulario;