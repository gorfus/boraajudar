import React, { Component } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { auth } from './base'

import AdminCampanhas from './AdminCampanhas'

const AdminHome = props => <p>Seja Bem VIndo FUlanooooo</p>
class Admin extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isAuthing: true,
            isLoggedId: false,
            user: null
        }
    }

    componentDidMount() {
        auth.onAuthStateChanged(user => {
            this.setState({
                isAuthing: false,
                isLoggedId: !!user,  // 2 !! é para converter o null para false
                user: user
            })
        })
    }

    render() {
        if (this.state.isAuthing) {
            return (<h1>aguarde...</h1>)
        }

        if (!this.state.isLoggedId) {
            return (<Redirect to="/login" ></Redirect>)
        }

        return (

            <div className="card">
                <h1>
                    Painel Administrativo
                  
                </h1>
                <Route path='/' component={AdminHome} />
                <Route path={`${this.props.match.url}/admincampanhas`} component={AdminCampanhas} />
            </div>
        )
    }
}

export default Admin