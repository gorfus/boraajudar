import React, { Component } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { auth } from '../Data/base'

import AdminCampanhas from './Campanhas'
import NovaCampanha from './NovaCampanha'

const AdminHome = props => <p> Bem Vindo <b> {props.user.email}</b></p>

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

        if (this.state.isAuthing) { return (<h1>aguarde...</h1>) }

        if (!this.state.isLoggedId) { return (<Redirect to="/login" ></Redirect>) }

        return (
            <div>
                <div className="card">
                    <hr />
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h1> Painel Administrativo </h1>
                            <Route path='/' render={() => <AdminHome user={this.state.user} />} />
                        </div>
                    </div>
                    <hr />

                    <Route path={`${this.props.match.url}/admincampanhas`} component={AdminCampanhas} />
                    <div className="container">
                        <NovaCampanha />
                    </div>
                </div>
            </div>
        )
    }
}

export default Admin