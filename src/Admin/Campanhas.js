import React from "react"
// import { base } from './base'
import base from '../Data/base'

class AdminCampanhas extends React.Component {
    constructor(props) {
        super(props)

        this.removeCampanha = this.removeCampanha.bind(this);
        this.renderCampanha = this.renderCampanha.bind(this);

        this.state = {
            "campanhas": {}
        }

        base.bindToState('campanhas', {
            context: this,
            state: 'campanhas'
        })
    }

    componentDidMount() {
        base.syncState('campanhas', {
            context: this,
            state: "campanhas",
            asArray: true,
            // then: () => this.setState({ syncedAllocations: true })
        });
    }

    removeCampanha(key) {
        base.remove('campanhas/' + key, err => {
            console.log(err)
        })
    }

    renderCampanha(key, campanha) {
        return (
            <li key={key}>@Camp: {campanha.nome} 
                <button onClick={() => 1}>Editar</button>
                <button onClick={() => this.removeCampanha(key)}>Remover</button>
            </li>
        )
    }

    render() {
        return (
            <div>
                <h2>Campanhas</h2>
                <h1>
                    {JSON.stringify(this.state.campanhas)}
                </h1>
                <ul>
                    {Object.keys(this.state.campanhas)
                        .map(key => this.renderCampanha(key, this.state.campanhas[key]))}
                </ul>
            </div>
        )
    }
}

export default AdminCampanhas