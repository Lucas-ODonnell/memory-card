import React from 'react';
import './main.css';

const Header = ({score, totalScore}) => {
	return (
		<header>
			<div className="title-row">
				<h1 className="game-title">Bacteria Memory Game</h1>
				<div className="score-card">
					<div>
					Score: {score}
					</div>
					<div>
					Best score: {totalScore}
					</div>
				</div>
			</div>
			<div className="description">
				<p>Get points by clicking on an image, but don't click on any more than once!</p>
			</div>
		</header>
	)
}

export default Header;
