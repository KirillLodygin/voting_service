import React from 'react';
import styled from 'styled-components';
//import useSound from 'use-sound';
import {fieldsColor, buttonsColor} from '../../colors_maps';
import {PulseDiv} from './PulseDiv';
//import btnSound from '../../sounds/btnSound.mp3';

const Btn = styled.div`
     position: relative;
     display: inline-block;
     font-family: 'RobotoCondensed';
     font-size: 50px;
     padding: 10px 15px;
     margin-bottom: 80px;
     color: ${props => (props.selected) ? fieldsColor[props.num] : buttonsColor[props.num]};
     letterSpacing: 3px;
     background: ${props => (props.selected) ? buttonsColor[props.num] : 'transparent'};
     overflow: hidden;
     transition: .6s ease;
     border: none;
     cursor: wait;
     box-shadow: 0 0  ${props => (props.selected) ? '10px' : '0'} ${props => buttonsColor[props.num]},
                  0 0 ${props => (props.selected) ? '40px' : '0'} ${props => buttonsColor[props.num]},
                  0 0 ${props => (props.selected) ? '80px' : '0'} ${props => buttonsColor[props.num]};
`;

const BtnHv = styled(Btn)`
     cursor: pointer;
     
    &:hover {
        color: ${props => (!props.vS) ? fieldsColor[props.num] : buttonsColor[props.num] };
        background: ${props => (props.vS) ? buttonsColor[props.num] : 'transparent'};
        transition-delay: .5s;
        box-shadow: 0 0 10px ${props => (!props.vS) ? buttonsColor[props.num] : 'transparent'},
                    0 0 40px ${props => (!props.vS) ? buttonsColor[props.num] : 'transparent'},
                    0 0 80px ${props => (!props.vS) ? buttonsColor[props.num] : 'transparent'}
    }
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
`;

const Span1a = styled(Span1)`
    ${Btn}:hover & {
        left: 100%;
    }
`;

const Span2 = styled(BtnSpan)`
    top: -100%;
    right: 0;
    width: 3px;
    height: 100%;
    background: linear-gradient(180deg, transparent, ${props => buttonsColor[props.num]});
`;

const Span2a = styled(Span2)`
    ${Btn}:hover & {
        top: 100%;
    }
`;

const Span3 = styled(BtnSpan)`
    bottom: 0;
    right: -100%;
    width: 100%;
    height: 3px;
    background: linear-gradient(270deg, transparent, ${props => buttonsColor[props.num]});
`;

const Span3a = styled(Span3)`
     ${Btn}:hover & {
        right: 100%;
    }
`;

const Span4 = styled(BtnSpan)`
    bottom: -100%;
    left: 0;
    width: 3px;
    height: 100%;
    background: linear-gradient(0, transparent, ${props => buttonsColor[props.num]});
`;

const Span4a = styled(Span4)`
    ${Btn}:hover & {
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
     cursor: ${props => props.vS ? 'pointer' : 'default'};
     color: ${props => fieldsColor[props.num]};
     background: ${props => buttonsColor[props.num]};
     transition: 1s ease;
     box-shadow: 0 0 10px ${props => buttonsColor[props.num]},
                 0 0 40px ${props => buttonsColor[props.num]},
                 0 0 80px ${props => buttonsColor[props.num]}; 
`;

export const VotingBtn = (props) => {
    const {num, entry, hasVoted, vote, vS, voted} = props;
    console.log(vS);
    const spans = [1, 2, 3, 4].map((i) => {
            switch (i) {
                case 1:
                    return (vS) ? <Span1 key={i} num={num}/> : <Span1a key={i} num={num}/>;

                case 2:
                    return (vS) ? <Span2 key={i} num={num}/> : <Span2a key={i} num={num}/>;

                case 3:
                    return (vS) ? <Span3 key={i} num={num}/> : <Span3a key={i} num={num}/>;

                default:
                    return (vS) ? <Span4 key={i} num={num}/> : <Span4a key={i} num={num}/>;
            }
        }
    );
    //const [play] = useSound(btnSound);

    return (
        <BtnWrapper>
            {
                (vS) ?
                    <Btn
                        num={num}
                        selected={hasVoted === entry}
                        vS={vS}
                    >
                        {spans}
                        {entry}
                    </Btn> :
                    <BtnHv
                        num={num}
                        selected={hasVoted === entry}
                        vS={vS}
                        onClick={() => {
                            vote(entry);
                            voted(!vS);
                        }}
                    >
                        {spans}
                        {entry}
                    </BtnHv>
            }
        </BtnWrapper>
    )
};

export const TacticBtn = (props) => {
    //const [play] = useSound(btnSound);
    return (
        <SmallBtn
            interval={'3s'}
            num={props.num}
            onClick={() =>{
                props.handleClick();
            }
            }
        >
            {props.tactic}
        </SmallBtn>
    );
};