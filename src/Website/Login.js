import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { auth } from '../Data/base'

class Login extends Component {
    constructor(props) {
        super(props)

        this.email = null;
        this.passwd = null;
        this.handleLogin = this.handleLogin.bind(this);

        this.state = {
            isLogged: false,
            isLogging: false,
            err: false,
            user: {}
        }
    }

    handleLogin() {
        this.setState({
            isLogged: false,
            isLogging: true,
            err: false,
            user: {}
        })

        let _email = this.email.value;
        let _passwd = this.passwd.value;

        auth.signInWithEmailAndPassword(_email, _passwd)
            .then((user) => {
                this.setState({
                    isLogged: true,
                    isLogging: false,
                    err: false,
                    user: user
                })
            })
            .catch((err) => {
                this.setState({
                    isLogged: false,
                    isLogging: false,
                    err: true,
                    user: {}
                })
            })
    }

    render() {
        if (this.state.isLogged) {
            return <Redirect to="/AdminHome" />
        }
        else {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <input type="email" className="form-control" ref={ref => this.email = ref}></input>
                                <input type="passwd" className="form-control" ref={ref => this.passwd = ref}></input>
                                {this.state.err && <div className="alert alert-warning">email ou senha inválidos</div>}
                                <button disabled={this.state.isLoggedIn} onClick={this.handleLogin} >Entrar</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default Login