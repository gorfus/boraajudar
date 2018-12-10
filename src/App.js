// aasd
// parou nos 48 minutos do video do projeto BoraAjudar da Aula 2

import React, { Component } from 'react';
//Navegação
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

//componentes
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import Sobre from './Sobre'
import HomeCampanhas  from './HomeCampanhas'
import Contato from './Contato'
import Admin from './Admin'
import Login from './Login'

import base from './base'

class App extends Component {
  render() {
    return (
      <Router>
        <div className=''>
          <Header />
          <Route exact path='/' component={Home} />
          <Route  path='/sobre' component={Sobre} />
          <Route  path='/homecampanhas' component={HomeCampanhas} />
          <Route  path='/contato' component={Contato} />
          <Route  path='/admin' component={Admin} />
          <Route path='/login' component={Login} />
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;
