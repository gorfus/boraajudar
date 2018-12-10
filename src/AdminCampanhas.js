import React from "react"
import { base } from './base'

class AdminCampanhas extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            campanhas: []
        }

        this.removeCampanha = this.removeCampanha.bind(this);
        this.renderCampanha = this.renderCampanha.bind(this);
    }

    componentDidMount() {
        // // // base.syncState('campanhas', {
        // // //     context: this,
        // // //     state: "campanhas",
        // // //     asArray: true,
        // // //     // then: () => this.setState({ syncedAllocations: true })
        // // // });

        // // // console.log(this.state.campanhas)

        const { database, auth } = this.props;
        this.comments = database.ref('comments')
        this.comments.on('value', snapshot => {
          this.setState(
            {
              comments: snapshot.val(),
              isLoading: false
            })
        })

        
    }

    removeCampanha(key){
        base.remove('campanhas/'+key, err =>{
            console.log(err)
        })
        //destruct assignement
        // const {[key]:undefined,...newCampanhas} = this.state.campanhas;
        // this.setState({
        //     campanhas:newCampanhas
        // })
    }

    renderCampanha(key,campanha) {
        return <li key={key}>@Camp:{campanha.nome} teste
        <button onClick={()=>1}>Editar</button>
        <button onClick={()=>this.removeCampanha(key)}>Remover</button></li>
    }

    render() {
        return (
           
            <div>
            <h2>Campanhass</h2>
            <h1>
            {JSON.stringify(this.state.campanhas)}
            </h1>
                <ul>
                    {Object.keys(this.state.campanhas)
                        .map(key => this.renderCampanha(key,this.state.campanhas[key]))}
                </ul>
            </div>
        )
    }
}

export default AdminCampanhas