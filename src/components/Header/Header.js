import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Header.scss';

export default class Header extends Component {
    render() {
        return(
            <header className="twitch-header">
                <img src={this.props.headerImage}/>
                <button className={this.props.addChannelClass} onClick={this.props.handleChannelClick}>Add Channel</button>
                <div className={this.props.inputBoxClass}>
                <form onSubmit={this.props.handleChannelSubmit}>
                    <button className="close" onClick={this.props.handleCloseChannelSearch}>X</button>
                    <input type="text" onChange={this.props.handleChange}></input>
                    <button className="submit">Add</button>
                </form>
                </div>
            </header>
        )
    }
}
