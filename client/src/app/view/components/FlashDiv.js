import styled, { keyframes } from 'styled-components';
import { flash } from 'react-animations';

const FlashAnimation = keyframes`${flash}`;

export const FlashDiv = styled.div`
  animation: infinite ${props => props.interval} ${FlashAnimation};
  display: block;
`;