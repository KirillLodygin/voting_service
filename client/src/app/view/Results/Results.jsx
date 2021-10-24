import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Winner from '../Winner';
import Tally from './Tally';
import { CompleteField } from '../components/Fields';
import { TacticBtn } from '../components/Buttons';
import * as actionCreators from '../../redux/actions/next_and_restart_action_creators';

const ResultField = styled(CompleteField)`
	flex-direction: column;
	justify-content: space-around;
`;

const Tactics = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
`;

class Results extends PureComponent {
	render() {
		const { votingCondition } = this.props;

		return votingCondition.get('winner') ? (
			<Winner winner={votingCondition.get('winner')} />
		) : (
			<ResultField>
				<Tally
					pair={votingCondition.getIn(['vote', 'pair'])}
					tally={votingCondition.getIn(['vote', 'tally'])}
				/>
				<Tactics>
					<TacticBtn tactic={'Restart'} handleClick={this.props.restart} />
					<TacticBtn tactic={'Next'} handleClick={this.props.next} />
				</Tactics>
			</ResultField>
		);
	}
}

function mapStateToProps(store) {
	return {
		votingCondition: store.votingCondition,
	};
}

export default connect(mapStateToProps, actionCreators)(Results);
