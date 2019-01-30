import React from 'react';
import Botao from '../components/Botao';

const Grid = props => {
    return (
        <ul>
            {props.tarefas.map((tarefa, indice) => {
                return <div>
                    <li key={indice}>{tarefa}</li>
                    <Botao label="x" funcao={()=> props.excluir(indice)}/>
                </div> 
            })
            }
        </ul>
    )
}

export default Grid;