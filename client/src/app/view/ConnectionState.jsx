import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {Route, Switch} from 'react-router-dom';
import ResultsContainer from "./Results/Results";
import VotingContainer from "./Voting/Voting";
import {CompleteField} from "./components/Fields";

const ConnectingField = styled(CompleteField)`
    padding: 1% 10%;
    background: #1435AD;
    flex-direction: column;
    font-family: 'RobotoCondensed';
    font-size: 110px;
    color: #ffffff;
`;

const NotConnected = styled('p')`
    margin-bottom: 10px;
    font-weight: bold;
`;

const Report = styled('p')`
    background: #ffffff;
    color: #1435AD;
    font-size: 65px;
    font-style: italic;
    padding: 2% 1%;
`;

class ConnectionState extends PureComponent {
    render() {
        if (this.props.connectionState.connected) {
            return (
                <Switch>
                    <Route path="/results" component={ResultsContainer}/>
                    <Route exact path="/" component={VotingContainer}/>
                </Switch>
            )
        } else {
            const report = `{state: ${this.props.connectionState.state}, connected: ${this.props.connectionState.connected}}`;

            return (
                <ConnectingField>
                    <NotConnected>Not connected</NotConnected>
                    <Report
                        bg="white"
                        color="blue"
                        fontSize={0}
                        fontStyle="italic"
                    >{report}</Report>
                </ConnectingField>
            );
        }
    }
}

const mapStateToProps = (store) => {
    return {
        connectionState: store.connectionState
    };
};

export default connect(mapStateToProps)(ConnectionState);