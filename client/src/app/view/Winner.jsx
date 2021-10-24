import React from 'react';
import { CompleteField } from './components/Fields';
import styled, { keyframes } from 'styled-components';

const WinnerField = styled(CompleteField)`
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const frameFlicker = keyframes`
  2% {
    border: 3px solid rgb(0, 180, 230);
    box-shadow: 0 0 15px -1px #1D7373, 
    0 0 12px -1px #1D7373 inset;
  }
  3% {
    border: 3px solid #006363;
    box-shadow: none;
  }
  5% {
    border: 3px solid #1D7373;
    box-shadow: 0 0 15px -1px #1D7373, 
    0 0 12px -1px #1D7373 inset;
  }
  6% {
    border: 3px solid #006363;
    box-shadow: none;
  }
  7% {
    border: 3px solid #1D7373;
    box-shadow: 0 0 15px -1px #1D7373, 
    0 0 12px -1px #1D7373 inset;
  }
  9% {
    border: 3px solid #006363;
    box-shadow: none;
  }
  13% {
    border: 3px solid #1D7373;
    box-shadow: 0 0 15px -1px #1D7373, 
    0 0 12px -1px #1D7373 inset;
  }
  16% {
    border: 3px solid #006363;
    box-shadow: none;
  }
  18% {
    border: 3px solid #1D7373;
    box-shadow: 0 0 15px -1px #1D7373, 
    0 0 12px -1px #1D7373 inset;
  }
  22% {
    border: 3px solid #006363;
    box-shadow: none;
  }
  34% {
    border: 3px solid #1D7373;
    box-shadow: 0 0 15px -1px #1D7373, 
    0 0 12px -1px #1D7373 inset;
  }
  36% {
    border: 3px solid #006363;
    box-shadow: none;
  }
  54% {
    border: 3px solid #1D7373;
    box-shadow: 0 0 15px -1px #1D7373, 
    0 0 12px -1px #1D7373 inset;
  }
  100% {
    border: 3px solid #1D7373;
    box-shadow: 0 0 15px -1px #1D7373, 
    0 0 12px -1px #1D7373 inset;
  }
`;

const Frame = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding 70px 200px;
    border: 3px solid #006363;
    border-radius: 15px;
    animation: ${frameFlicker} 2s infinite linear;
`;

const winnerFlicker = keyframes`
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

const AdWinner = styled('div')`
	padding: 5px 10px;
	margin-bottom: 20px;
	text-align: center;
	font-family: 'GochiHand';
	font-size: 90px;
	color: #008500;
	margin-bottom: 0;
	animation: ${winnerFlicker} 3s infinite linear;
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

const Advt = styled.div`
	padding: 5px 10px;
	text-align: center;
	font-family: 'RobotoCondensed';
	font-size: 80px;
	color: #bf3030;
	animation: ${textFlicker} 5s infinite linear;
`;

const letterFlicker = keyframes`
  2% { 
    color: #A60000;
    text-shadow: 0 0 15px #A60000;
  }
  3% {
    color: #BF3030;
    text-shadow: none;
  }
  6% {
    color: #A60000;
    text-shadow: 0 0 15px #A60000;
  }
  9% {
    color: #BF3030;
    text-shadow: none;
  }
  11% {
    color: #A60000;
    text-shadow: 0 0 15px #A60000;
  }
  14% {
    color: #BF3030;
    text-shadow: none;
  }
  18% {
    color: #A60000;
    text-shadow: 0 0 15px #A60000;
  }
  32% {
    color: #A60000;
    text-shadow: 0 0 15px #A60000;
  }
  33% {
    color: #BF3030;
    text-shadow: none;
  }
  37% {
    color: #A60000;
    text-shadow: 0 0 15px #A60000;
  }
  39% {
    color: #BF3030;
    text-shadow: none;
  }
  40% {
    color: #A60000;
    text-shadow: 0 0 15px #A60000;
  }
  100% {
    color: #A60000;
    text-shadow: 0 0 15px #A60000;
  }
`;

const Letter = styled('span')`
	animation: ${letterFlicker} 3s infinite ease;
`;

const Winner = (props) => {
	let str = '';
	for (let i = 0; i < props.winner.length - 2; i++) {
		str += props.winner[i];
	}

	return (
		<WinnerField>
			<Frame>
				<AdWinner>Winner is</AdWinner>
				<Advt>
					<span>
						{str}
						<Letter>{props.winner[props.winner.length - 2]}</Letter>
						{props.winner[props.winner.length - 1]}
					</span>
				</Advt>
			</Frame>
		</WinnerField>
	);
};

export default Winner;
