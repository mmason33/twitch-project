import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './App.scss';
import './vendor/reset.css';
import Container from './components/Container/Container.js';

class App extends Component{
    render(){
        return(
            <div className="App">
                <Container />
            </div>
        );
    }
}

export default hot(module)(App);
