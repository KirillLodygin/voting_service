import styled, { keyframes } from 'styled-components';
import { pulse } from 'react-animations';

const PulseAnimation = keyframes`${pulse}`;

export const PulseDiv = styled.div`
	animation: infinite ${(props) => props.interval} ${PulseAnimation};
	display: block;
	margin-bottom: 80px;
`;
