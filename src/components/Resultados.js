import React from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types';

//Components
import Imagen from './Imagen';

const Resultado = styled.div`
  width: 800px;
  margin: auto;
  padding-top: 3rem;
 
`;

const Resultados = ({resultado}) => {

  

  return (
    <Resultado>
      {resultado !== 0 
      ? 
      <div className="constainer w-100">
        <div className="row">
          {resultado.map(imagen => (
            <Imagen 
              key={imagen.id}
              imagen={imagen}
            />
          ))}
         </div>
      </div>
      :
      <div className="alert alert-light" role="alert">
        No se encontraron resultados para esta busqueda
      </div>
      }
      
    </Resultado>
  );
};

Resultados.propTypes = {
  resultado : PropTypes.array.isRequired
}

export default Resultados;
