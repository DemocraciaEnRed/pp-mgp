import React, { Component } from 'react'

import config from 'lib/config'
import Anchor from 'ext/lib/site/anchor'
import BannerForoVecinal from 'ext/lib/site/banner-foro-vecinal/component'
import BannerMapaVectores from 'ext/lib/site/banner-mapa-vectores/component'
import ThumbsVoto from 'ext/lib/site/thumbs-voto/component'
// import Barrios from 'ext/lib/site/barrios/component'
// import Proyectos from 'ext/lib/site/proyectos/component'
// import ProyectosFactibles from 'ext/lib/site/proyectosFactibles/component'
// import ProyectosGanadores from 'ext/lib/site/proyectosGanadores/component'
import Jump from 'ext/lib/site/jump-button/component'
import Footer from 'ext/lib/site/footer/component'
import EncuentrosProximos from 'ext/lib/site/encuentrosProximos/component'
import BannerInvitacion from 'ext/lib/site/banner-invitacion/component'
// import forumStore from 'lib/stores/forum-store/forum-store'
// import topicStore from 'lib/stores/topic-store/topic-store'
import textStore from 'lib/stores/text-store'
import TypeformButton from './typeform'

export default class HomeMultiforumOverride extends Component {
  constructor (props) {
    super(props)

    this.state = {
      texts: {}
    }
  }

  componentWillMount () {
    textStore.findAllDict().then((textsDict) => {
      this.setState({
        texts: textsDict
      })
    }).catch((err) => {
      this.state = {
        texts: {}
      }
    })
  }

  componentDidMount () {
    this.goTop()
  }

  goTop () {
    Anchor.goTo('container')
  }

  render () {
    return (
      <div className='ext-home-multiforum'>
        <Anchor id='container'>
          <BannerForoVecinal title="Presupuesto participativo de General Pueyrredon" texts={this.state.texts} />
          <ThumbsVoto texts={this.state.texts} />
          <BannerInvitacion />
          <EncuentrosProximos />
          <BannerMapaVectores />
          <Jump goTop={this.goTop} />
          <Footer />
        </Anchor>
      </div>
    )
  }
}
