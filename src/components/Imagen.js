import React from 'react';
import PropTypes from 'prop-types';

const Imagen = ({imagen}) => {
  return ( 
    <div className="col-lg-3 col-sm-12 col-md-6">
            <div className="card">
              <img src={imagen.previewURL} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">
                  Ancho: <span>{imagen.imageWidth} px</span>
                </p>
                <p className="card-text">
                  Alto: <span>{imagen.imageHeight} px</span>
                </p>
                <a href={imagen.largeImageURL}  target="_blanck" className="btn btn-primary">
                  Ver Imagen
                </a>
              </div>
            </div>
          </div>
   );
}

Imagen.propTypes = {
  imagen : PropTypes.object.isRequired
}
 
export default Imagen;