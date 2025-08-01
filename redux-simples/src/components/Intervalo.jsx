import React from 'react';
import { connect } from 'react-redux';
import './Intervalo.css';

import Card from './Card';
import { alterarNumeroMinimo, alterarNumeroMaximo } from '../store/actions/numerosAction';

function Intervalo(props) {
	const { min, max } = props;
	return (
		<Card title="Intervalo de Números" red>
			<div className="Intervalo">
				<span>
					<strong>Mínimo</strong>
					<input type="number" value={min} onChange={e => props.alterarMinimo(+e.target.value)} />
				</span>
				<span>
					<strong>Máximo</strong>
					<input type="number" value={max} onChange={e => props.alterarMaximo(+e.target.value)} />
				</span>
			</div>
		</Card>
	);
}

function mapStateToProps(state) {
	return {
		min: state.numeros.min,
		max: state.numeros.max
	}
}

function mapDispatchToProps(disptach) {
	return {
		alterarMinimo(novoNumero) {
			// action creator -> action
			const action = alterarNumeroMinimo(novoNumero);
			disptach(action);
		},
		alterarMaximo(novoNumero) {
			// action creator -> action
			const action = alterarNumeroMaximo(novoNumero);
			disptach(action);
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Intervalo);