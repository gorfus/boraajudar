import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { auth } from './base'

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
        console.log('login', this.email.value, this.passwd.value)

        auth.signInWithEmailAndPassword(_email, _passwd)
            .then((user) => {
                console.log(user)

                this.setState({
                    isLogged: true,
                    isLogging: false,
                    err: false,
                    user: user
                })
            })
            .catch((err) => {
                console.log(err)

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
            return <Redirect to="/admin" />
        }
        else {
            return (
                <div>
                    <input type="email" ref={ref => this.email = ref}></input>
                    <input type="passwd" ref={ref => this.passwd = ref}></input>
                    {this.state.err && <p>email ou senha inválidos</p>}
                    <button disabled={this.state.isLoggedIn} onClick={this.handleLogin} >Entrar</button>
                </div>
            )
        }
    }
}

export default Login