import React, { Component } from 'react';
import Header from './components/Header/Header.js';
// import { hot } from 'react-hot-loader';

export default class App extends Component{
    render(){
        return(
            <div className="App">
                <Header headerImage="test"></Header>
                <h1> Hello, World! </h1>
            </div>
        );
    }
}
