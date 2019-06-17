import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import HumanPlayer from '../component/HumanPlayer.jsx';
import Score from '../component/Score.jsx';

class HumanVSComp extends Component {
    componentWillMount() {
        this.props.setGameScores();
    }
    render() {
        return (
            <div className="wrapper">
    
                <Link className="btn" onClick={this.props.startGame}>Start Game</Link>
        
                <div className="game">
                    <HumanPlayer gameStarted={this.props.gameStarted} current={this.props.player1Choice} items={this.props.items} selectChoice={this.props.onHumanSelect} />
                    <Score scores={this.props.scores} />
                </div>
            </div>
        );
    }
}

export default HumanVSComp;
