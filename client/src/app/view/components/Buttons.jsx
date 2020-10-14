import React from 'react';
import styled from 'styled-components';
import useSound from 'use-sound';
import {fieldsColor, buttonsColor} from '../../colors_maps';
import {PulseDiv} from './PulseDiv';
import btnSound from '../../sounds/btnSound.mp3';

const BtnAfterVoting = styled.div`
     position: relative;
     display: inline-block;
     font-family: 'RobotoCondensed';
     font-size: 50px;
     padding: 10px 15px;
     margin-bottom: 80px;
     color: ${props => buttonsColor[props.num]};
     letterSpacing: 3px;
     background: transparent;
     overflow: hidden;
     transition: .6s ease;
     border: none;
     cursor: wait;
`;

const BtnBeforeVoting = styled(BtnAfterVoting)`
     cursor: pointer;
     &:hover {
       color: ${props => fieldsColor[props.num]};
       background: ${props => buttonsColor[props.num]};
       transition-delay: .5s;
       box-shadow: 0 0 10px ${props => buttonsColor[props.num]},
                   0 0 40px ${props => buttonsColor[props.num]},
                   0 0 80px ${props => buttonsColor[props.num]};
     }
`;

const VotedBtn = styled(BtnAfterVoting)`
    background: ${props => buttonsColor[props.num]};
    color: ${props => fieldsColor[props.num]};
    box-shadow: 0 0 10px ${props => buttonsColor[props.num]},
                0 0 40px ${props => buttonsColor[props.num]},
                0 0 80px ${props => buttonsColor[props.num]};
`;

const BtnSpan = styled('span')`
    display: block;
    position: absolute;
    transition: .6s ease;
    transition-delay: .25s;
`;

const Span1 = styled(BtnSpan)`
    top: 0;
    left: -100%;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, transparent, ${props => buttonsColor[props.num]});
    
     ${BtnBeforeVoting}:hover & {
        left: 100%;
    }
`;

const Span2 = styled(BtnSpan)`
    top: -100%;
    right: 0;
    width: 3px;
    height: 100%;
    background: linear-gradient(180deg, transparent, ${props => buttonsColor[props.num]});
    
    ${BtnBeforeVoting}:hover & {
        top: 100%;
    }
`;


const Span3 = styled(BtnSpan)`
    bottom: 0;
    right: -100%;
    width: 100%;
    height: 3px;
    background: linear-gradient(270deg, transparent, ${props => buttonsColor[props.num]});
    
    ${BtnBeforeVoting}:hover & {
        right: 100%;
     }
`;

const Span4 = styled(BtnSpan)`
    bottom: -100%;
    left: 0;
    width: 3px;
    height: 100%;
    background: linear-gradient(0, transparent, ${props => buttonsColor[props.num]});
    
    ${BtnBeforeVoting}:hover & {
        bottom: 100%;
    }
`;

const BtnWrapper = styled.div`
    margin: 0;
    padding: 0;
`;

const SmallBtn = styled(PulseDiv)`
     font-family: 'GochiHand';
     text-transform: uppercase;
     font-size: 40px;
     padding: 10px 15px;
     letterSpacing: 3px;
     cursor: pointer;
     color: #031321;
     background: #008500;
     transition: 1s ease;
     box-shadow: 0 0 10px #008500,
                 0 0 40px #008500,
                 0 0 80px #008500; 
`;

export const VotingBtn = (props) => {
    const spans = [1, 2, 3, 4].map((i) => {
            switch (i) {
                case 1:
                    return <Span1 key={i} num={props.num}/>;

                case 2:
                    return <Span2 key={i} num={props.num}/>;

                case 3:
                    return <Span3 key={i} num={props.num}/>;

                default:
                    return <Span4 key={i} num={props.num}/>;
            }
        }
    );
    const [play] = useSound(btnSound);

    return (
        <BtnWrapper>
            {
                (!props.vS) ?
                    <BtnBeforeVoting
                        num={props.num}
                        onClick={() => {
                            play();
                            props.vote(props.entry);
                        }}
                    >
                        {spans}
                        {props.entry}
                    </BtnBeforeVoting> :
                    (props.hasVoted === props.entry) ?
                        <VotedBtn
                            num={props.num}
                        >
                            {props.entry}
                        </VotedBtn> :
                        <BtnAfterVoting
                            num={props.num}
                        >
                            {props.entry}
                        </BtnAfterVoting>
            }
        </BtnWrapper>
    )
};

export const TacticBtn = (props) => {
    const [play] = useSound(btnSound);
    return (
        <SmallBtn
            interval={'3s'}
            onClick={() => {
                play();
                props.handleClick();
            }
            }
        >
            {props.tactic}
        </SmallBtn>
    );
};