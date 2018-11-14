import React, { Component } from 'react';
import './Player.scss';

export default class Player extends Component {
    render() {
        return (
            <div className="twitch-player">
                <div id="twitch-embed"></div>
            </div>
        );
    }
}
