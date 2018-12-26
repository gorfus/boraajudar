// parou nos 48 minutos do video do projeto BoraAjudar da Aula 2

//módulos
import React, { Component } from 'react';

//Navegação
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

//componentes WebSite
import Header from './Website/Header'
import Home from './Website/Home'
import Sobre from './Website/Sobre'
import WebsiteCampanhas from './Website/Campanhas'
import Contato from './Website/Contato'
import Login from './Website/Login'
import Footer from './Website/Footer'

//componentes Admin
import AdminHome from './Admin/Home'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      "campanhas": {},
      "user": null
    }
  }

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path='/' component={Home} />
          <Route exact path='/sobre' component={Sobre} />
          <Route exact path='/contato' component={Contato} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/campanhas' component={WebsiteCampanhas} />
          <Route exact path='/adminHome' component={AdminHome} />
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;
