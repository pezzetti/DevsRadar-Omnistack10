import React from 'react';
// Componente jsx, css, funcao js
// estado: imutabilidade (informações mantidas pelo componente)
// propriedade (atributo "title") Informações que o componente pai passa para os componentes filho
// <> e </> fragment, para não ter que colocar div ou com o componente Fragment


function Header(props) {
  return (<h1>{props.title}</h1>)
}

export default Header;