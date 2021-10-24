import React from 'react';
import styled from 'styled-components';
import { fieldsColor } from '../../colors_maps';
import { CompleteField } from '../components/Fields';
import VotingBlock from './VotingBlock';

const GlobalField = styled(CompleteField)`
	flex-direction: row;
`;

const VotingField = styled('div')`
	background: ${(props) => fieldsColor[props.num]};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-end;
	width: 50%;
	height: 100%;
	animation: 1.3s ${(props) => (props.vS ? 'none' : props.animation)};
`;

const Vote = (props) => {
	const getPair = () => {
		return props.pair || [];
	};

	return (
		<GlobalField>
			{getPair().map((entry, i) => (
				<VotingField
					key={entry}
					num={props.cN[i]}
					animation={props.animationOrder[i]}
					vS={props.vS}
				>
					<VotingBlock
						num={props.cN[i]}
						entry={entry}
						hasVoted={props.hasVoted}
						vote={props.vote}
						vS={props.vS}
					/>
				</VotingField>
			))}
		</GlobalField>
	);
};

export default Vote;
