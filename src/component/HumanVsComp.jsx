import React, {Component} from 'react';
import HumanPlayer from '../shared/HumanPlayer';
import Score from '../shared/Score';

class HumanVSComp extends Component {
    componentWillMount() {
        this.props.setGameScores();
    }
    render() {
        return (
            <div className="wrapper">
    
                <a className="btn" onClick={this.props.startGame}>Start Game</a>
        
                <div className="game">
                    <HumanPlayer gameStarted={this.props.gameStarted} current={this.props.player1Choice} items={this.props.items} selectChoice={this.props.onHumanSelect} />
                    <Score scores={this.props.scores} />
                </div>
            </div>
        );
    }
}

export default HumanVSComp;
