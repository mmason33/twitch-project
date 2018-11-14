import React, { Component } from 'react';
import './Container.scss';

import Header from './../Header/Header.js';
import Player from './../Player/Player.js';

export default class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            channel: 'NICKMERCS',
            inputBoxClass: 'input-box',
            addChannelClass: 'add-channel',
        }
    }

    componentDidMount() {
        const script = document.createElement('script');
        script.setAttribute('src', 'https://player.twitch.tv/js/embed/v1.js');

        document.body.appendChild(script);
    }

    handleChannelClick() {
        this.state.inputBoxClass === 'input-box' ?
            this.setState({
                inputBoxClass: 'input-box show',
                addChannelClass: 'add-channel hide',
            }) :
            this.setState({
                inputBoxClass: 'input-box',
                addChannelClass: 'add-channel',
            });
    }

    handleCloseChannelSearch() {
        this.setState({
            inputBoxClass: 'input-box',
            addChannelClass: 'add-channel',
        });
    }

    handleChange(e) {
        console.log(e.target.value)
        this.setState({
            channel: e.target.value,
        });
    }

    handleChannelSubmit(e) {
        e.preventDefault();
        console.log(this.state.channel);
        document.getElementById('twitch-embed').innerHTML = '';
        // new Twitch.Embed("twitch-embed", {
        //     height: window.innerHeight - 75,
        //     width: "100%",
        //     channel: this.state.channel,
        // });

        var options = {
            width: 1920,
            height: 900,
            channel: this.state.channel,
          };
          var player = new Twitch.Player("twitch-embed", options);
          player.setVolume(0.5);
    }

    render() {
        return (
            <div class="container">
                <Header headerImage="https://dev.twitch.tv/assets/images/TwitchDev.png"
                inputBoxClass={this.state.inputBoxClass}
                addChannelClass={this.state.addChannelClass}
                value={this.state.channel}
                handleChannelClick={this.handleChannelClick.bind(this)}
                handleCloseChannelSearch={this.handleCloseChannelSearch.bind(this)}
                handleChannelSubmit={this.handleChannelSubmit.bind(this)}
                handleChange={this.handleChange.bind(this)}
                />
                <Player height={window.innerHeight - 75} width="100%" channel={this.state.channel}/>
            </div>
        );
    }
}
