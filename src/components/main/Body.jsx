import React from 'react';
import './main.css';

const Body = ({randomize, updateScore}) => {
	return (
		<div className="body-grid">
			{randomize.map((card) => {
				return (
					<div className='card' key={card.name} onClick={() => updateScore(card.name)}>
						<img src={card.url} alt={card.name} />
						<p>{card.name}</p>
					</div>
				)
			})}
		</div>
	)
}

export default Body;

