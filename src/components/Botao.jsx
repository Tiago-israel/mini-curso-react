import React from 'react';
import PropTypes from 'prop-types';

const Botao = props => (
    <button onClick={props.funcao}>{props.label}</button>
)

Botao.propTypes = {
    funcao: PropTypes.func,
    label : PropTypes.string
}

export default Botao;