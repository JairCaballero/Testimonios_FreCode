import React from 'react';
import '../styles/testimonio.css';

// Props -> Propiedades del componentes (props)
function Testimonio(props) {
  return (
    <div className='contenedor-testimonio'>
      {/* require -> poner img */}
      <img className='img-testimonio' src={require(`../img/testimonio-${props.imagen}.jpg`)} alt="Fto" />
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-textimonio'><strong> {props.nombre} </strong> en {props.pais}</p>
        <p className='cargo-testimonio'>{props.cargo} en <strong> {props.empresa} </strong></p>
        <p className='texto-testimonio'>"{props.testimonio}"</p>
      </div>
    </div>
  );
}

// default -> solo se importara este y nignuno mas en el archivo
export default Testimonio;