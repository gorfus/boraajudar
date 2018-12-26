import React, { Component } from 'react'
import base from '../Data/base'
import { Redirect } from 'react-router-dom'

//Components

class NovaCampanha extends Component {
    constructor(props) {
        super(props)
        this.state = {
            success: false
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(e) {
        this.setState({
            success: true
        })

        const novaCampanha = {
            nome: this.nome.value,
            descricao: this.descricao.value
        };
        base.push('campanhas', {
            data: novaCampanha
        }).then((err) => {
            err && console.log(err);
        })

    }
    render() {
        return (
            <div className="container" style={{ padding: "120px" }}>
                {this.state.success && <Redirect to="/AdminHome" />}
                <h1>Nova campanha</h1>
                <hr />
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="form-group">
                                <label htmlFor="nome">Nome</label>
                                <input type="text" className="form-control" id="nome" ref={(ref) => this.nome = ref}></input>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="form-group">
                                <label htmlFor="descricao">Descrição</label>
                                <input type="text" className="form-control" id="descricao" ref={(ref) => this.descricao = ref}></input>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="row ">
                        <div className="col-lg-12 text-center">
                            <button type="submit" className="btn btn-info">Salvar</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
export default NovaCampanha