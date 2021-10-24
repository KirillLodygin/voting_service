import React from 'react';
import styled from 'styled-components';
import { buttonsColor } from '../../colors_maps';
import { VotingBtn } from '../components/Buttons';
import { FlashDiv } from '../components/FlashDiv';

const Block = styled('div')`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: auto;
	margin-bottom: 100px;
`;

const Voted = styled(FlashDiv)`
	font-family: 'GochiHand';
	text-transform: uppercase;
	letter-spacing: 4px;
	margin-bottom: 140px;
	font-size: 80px;
	color: ${(props) => buttonsColor[props.num]};
	text-shadow: 0 0 15px ${(props) => buttonsColor[props.num]};
	transition: 0.7s ease-in;
`;

const VotingBlock = (props) => {
	const voted =
		props.hasVoted === props.entry ? (
			<Voted num={props.num} interval={'7s'}>
				Voted
			</Voted>
		) : (
			<div />
		);

	return (
		<Block>
			{voted}

			<VotingBtn
				num={props.num}
				entry={props.entry}
				hasVoted={props.hasVoted}
				vote={props.vote}
				vS={props.vS}
			/>
		</Block>
	);
};

export default VotingBlock;
