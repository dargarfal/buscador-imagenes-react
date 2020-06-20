import React, {Fragment, useState, useEffect } from 'react';
import axios from 'axios';

//Components
import Formulario from './components/Formulario';
import Resultados from './components/Resultados';

function App() {

  
  const [valor, setValor] = useState('');
  const [resultado, setResultado] = useState([]);
  const [paginaactual, setPaginaActual] = useState(1);
  const [totalpaginas, setTotalPaginas] = useState(1);
  
  useEffect(() => {

    const apikey = '17131506-1758d765277b44b2771b7d526'; 
    const paginado = 28;

    if(valor !== ''){
      const consultandoApi = async () => {
        const url = 'https://pixabay.com/api/?key='+ apikey +'&q='+ valor +'&per_page='+ paginado +'&page='+paginaactual;
  
        const res = await axios.get(url);
        return res;
      }
      
      consultandoApi()
        .then(res => {
          setResultado(res.data.hits); 
          const calTotalPaginas = Math.ceil(res.data.totalHits / 30);
          setTotalPaginas(calTotalPaginas);
        })
        .catch(err => console.log(err))
    }
    
      const irArriba = document.querySelector('#buscar');
      irArriba.scrollIntoView({ behavior: "smooth" });

  }, [valor, paginaactual]);

  const paginaAnterior = () => {
    const nuevaPaginaActual = paginaactual - 1;

    if(nuevaPaginaActual === 0) return;
    
    setPaginaActual(nuevaPaginaActual);
      }

  const paginaSiguiente = () => {
    const nuevaPaginaSiguiente = paginaactual + 1;

    if(nuevaPaginaSiguiente > totalpaginas) return;

    setPaginaActual(nuevaPaginaSiguiente);
    
  }

  return (
   <Fragment>
    <Formulario 
      setValor={setValor}
    />
    {resultado.length !== 0  ?
      <Resultados 
      resultado={resultado}
      />
    : null } 
    <div className="container text-center">
      {(paginaactual !== 1) 
      ?
        <button 
          type="button" 
          className="btn btn-info mt-3 mr-1"
          onClick={paginaAnterior}
          >&laquo; Anterior
        </button>
      :
        null
    }
      {(paginaactual !== totalpaginas)
        ?
        <button 
          type="button" 
          className="btn btn-info mt-3 "
          onClick={paginaSiguiente}>
            Siguiente &raquo;
        </button>
        :
        null    
    }
    </div> 
   </Fragment>  
  );
}

export default App;
