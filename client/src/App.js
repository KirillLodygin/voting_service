import React, { Component }from 'react';
import styled from 'styled-components';
//import theme from './theme'
import './App.css';
import ConnectionState from './app/view/ConnectionState';

const AppContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export default class App extends Component {
    render() {
        return (
            <AppContainer>
                <ConnectionState/>
            </AppContainer>
        );
    }
}
