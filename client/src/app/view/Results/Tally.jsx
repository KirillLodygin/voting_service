import React from 'react';
import styled, { keyframes } from 'styled-components';

const TallyBlock = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: stretch;
	margin-bottom: 50px;
`;

const EntryBlock = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-around;
	margin-top: 70px;
`;

const textFlicker = keyframes`
  2% { 
    color: #FF0000;
    text-shadow: 0 0 15px #FF0000;
  }
  3% {
    color: #BF3030;
    text-shadow: none;
  }
  6% {
    color: #FF0000;
    text-shadow: 0 0 15px #FF0000;
  }
  9% {
    color: #BF3030;
    text-shadow: none;
  }
  11% {
    color: #FF0000;
    text-shadow: 0 0 15px #FF0000;
  }
  14% {
    color: #BF3030;
    text-shadow: none;
  }
  18% {
    color: #FF0000;
    text-shadow: 0 0 15px #FF0000;
  }
  32% {
    color: #FF0000;
    text-shadow: 0 0 15px #FF0000;
  }
  33% {
    color: #BF3030;
    text-shadow: none;
  }
  37% {
    color: #FF0000;
    text-shadow: 0 0 15px #FF0000;
  }
  39% {
    color: #BF3030;
    text-shadow: none;
  }
  43% {
    color: #FF0000;
    text-shadow: 0 0 15px #FF0000;
  }
  46% {
    color: #BF3030;
    text-shadow: none;
  }
  47% {
    color: #FF0000;
    text-shadow: 0 0 15px #FF0000;
  }
  100% {
    color: #FF0000;
    text-shadow: 0 0 15px #FF0000;
  }
`;

const Entry = styled.div`
	width: 55%;
	font-family: 'RobotoCondensed';
	font-size: 70px;
	color: #bf3030;
	animation: ${textFlicker} 5s infinite ease;
`;

const voteFlicker = keyframes`
  2% { 
    color: #008500;
    text-shadow: 0 0 15px #008500;
  }
  3% {
    color: #269926;
    text-shadow: none;
  }
  6% {
    color: #008500;
    text-shadow: 0 0 15px #008500;
  }
  9% {
    color: #269926;
    text-shadow: none;
  }
  11% {
    color: #008500;
    text-shadow: 0 0 15px #008500;
  }
  14% {
    color: #269926;
    text-shadow: none;
  }
  18% {
    color: #008500;
    text-shadow: 0 0 15px #008500;
  }
  32% {
    color: #008500;
    text-shadow: 0 0 15px #008500;
  }
  33% {
    color: #269926;
    text-shadow: none;
  }
  37% {
    color: #008500;
    text-shadow: 0 0 15px #008500;
  }
  39% {
    color: #269926;
    text-shadow: none;
  }
  43% {
    color: #008500;
    text-shadow: 0 0 15px #008500;
  }
  46% {
    color: #269926;
    text-shadow: none;
  }
  47% {
    color: #008500;
    text-shadow: 0 0 15px #008500;
  }
  100% {
    color: #008500;
    text-shadow: 0 0 15px #008500;
  }
`;

const VoteCount = styled.div`
	width: 45%;
	font-family: 'GochiHand';
	font-size: 110px;
	color: #008500;
	margin-bottom: 0;
	animation: ${voteFlicker} 5s infinite ease-in;
`;

const Tally = (props) => {
	const getPair = () => {
		return props.pair || [];
	};

	const getVotes = (entry) => {
		if (props.tally && entry in props.tally) {
			return props.tally[entry];
		}
		return 0;
	};

	return (
		<TallyBlock>
			{getPair().map((entry) => (
				<EntryBlock key={entry}>
					<Entry>{entry}</Entry>
					<VoteCount>{getVotes(entry)}</VoteCount>
				</EntryBlock>
			))}
		</TallyBlock>
	);
};

export default Tally;
