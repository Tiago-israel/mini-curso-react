import React, { Component } from 'react'
import Input from '../components/Input';
import Botao from '../components/Botao';
import Grid from '../components/Grid';
export default class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tarefa: '',
            tarefas: []
        }
        fetch('https://swapi.co/api/people')
        .then(resp => resp.json())
        .then(data => {
            const nomes = data.results.map(x => x.name);
            this.setState({tarefas:nomes})
        })
    }

    dataBind = (event) => {
        let tarefa = this.state.tarefa;
        tarefa = event.target.value;
        this.setState({ tarefa });
    }

    addTarefa = () => {
        const tarefa = this.state.tarefa;
        const tarefas = this.state.tarefas;
        tarefas.push(tarefa);
        this.setState({ tarefas });
    }

    excluir = (indice) => {
        let tarefas = this.state.tarefas;
        tarefas.splice(indice, 1);
        this.setState({tarefas});
    }

    render() {
        return (
            <div>
                <Input tarefa={this.state.tarefa} dataBind={this.dataBind} />
                <Botao funcao={this.addTarefa} label="add tarefa" />
                <Grid excluir={this.excluir} tarefas={this.state.tarefas} />
            </div>
        )
    }
}