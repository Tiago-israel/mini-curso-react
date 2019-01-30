import React from 'react'

const Input = props => (
    <input type="text" value={props.tarefa} onChange={props.dataBind} />
)

export default Input;