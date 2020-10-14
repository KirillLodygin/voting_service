import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import { keyframes } from 'styled-components';
import { fadeInDown, fadeInUp  } from 'react-animations';
import Vote from './Vote';
import Winner from '../Winner';

import {vote} from '../../redux/actions/votingConditionActions';
import {voted} from '../../redux/actions/votedActions';

const animationOrders = [
    [keyframes`${fadeInDown}`, keyframes`${fadeInUp}`],
    [keyframes`${fadeInDown}`, keyframes`${fadeInUp}`],
    [keyframes`${fadeInUp}`, keyframes`${fadeInDown}`],
    [keyframes`${fadeInUp}`, keyframes`${fadeInUp}`]
];

class Voting extends PureComponent {
    render() {
        const {
            votingCondition,
            votedState,
            votedAction,
            voteAction,
        } = this.props;

        return (
            <div>
                {votingCondition.get('winner') ?
                    <Winner winner={votingCondition.get('winner')}/> :
                    <Vote
                        pair={votingCondition.getIn(['vote', 'pair'])}
                        cN={votingCondition.get('colorsNumbers')}
                        vote={voteAction}
                        hasVoted={votingCondition.getIn(['myVote', 'entry'])}
                        vS={votedState.voted}
                        voted={votedAction}
                        animationOrder={animationOrders[Math.floor(Math.random()*4)]}
                    />}
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        votingCondition: store.votingCondition,
        votedState: store.votedState
    };
};

const mapDispatchToProps = dispatch => ({
    voteAction: entry => dispatch(vote(entry)),
    votedAction: status => dispatch(voted(status))
});

export default connect(mapStateToProps, mapDispatchToProps)(Voting);