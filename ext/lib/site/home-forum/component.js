import React, { Component } from 'react'

import HomeCatalogo from '../home-catalogo/component'
import HomeAbout from '../home-about/component'


const HomeForum = (props) => {
  const { params: { forum } } = props;
  let years

  switch (forum) {
    case 'propuestas':
      years = ['2023']
      return <HomeCatalogo {...props} years={years} archive={false} />
    case 'archivo':
      years = ['2022', '2021']
      return <HomeCatalogo {...props} years={years} archive={true} />
    case 'acerca-de':
      return <HomeAbout {...props} />      
    default:
      // que nunca caiga en la vieja pantalla de proyectos
      //return <HomeProyectos {...props} />
      return <HomeCatalogo {...props} />
  }
}

export default HomeForum
