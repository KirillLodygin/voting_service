import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import { keyframes } from 'styled-components';
import { fadeInDown, fadeInUp  } from 'react-animations';
import Vote from './Vote';
import Winner from '../Winner';

import {vote} from '../../redux/actions/votingConditionActions';

const animationOrders = [
    [keyframes`${fadeInDown}`, keyframes`${fadeInUp}`],
    [keyframes`${fadeInDown}`, keyframes`${fadeInUp}`],
    [keyframes`${fadeInUp}`, keyframes`${fadeInDown}`],
    [keyframes`${fadeInUp}`, keyframes`${fadeInUp}`]
];

class Voting extends PureComponent {
    render() {

        return (
            <div>
                {this.props.votingCondition.get('winner') ?
                    <Winner winner={this.props.votingCondition.get('winner')}/> :
                    <Vote
                        pair={this.props.votingCondition.getIn(['vote', 'pair'])}
                        cN={this.props.votingCondition.get('colorsNumbers')}
                        vote={this.props.voteAction}
                        hasVoted={this.props.votingCondition.getIn(['myVote', 'entry'])}
                        vS={!!this.props.votingCondition.getIn(['myVote', 'entry'])}
                        animationOrder={animationOrders[Math.floor(Math.random()*4)]}
                    />}
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        votingCondition: store.votingCondition
    };
};

const mapDispatchToProps = dispatch => ({
    voteAction: entry => dispatch(vote(entry)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Voting);