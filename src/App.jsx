import React, {useState, useEffect} from 'react';
import Header from './components/header/Header.jsx';
import Body from './components/main/Body.jsx';
import './App.css';

import camplobacter from './images/camplobacter.jpg';
import clostridium from './images/clostridium-perfrigens.jpg';
import ecoli from './images/ecoli.jpg';
import listeria from './images/listeria.jpeg';
import salmonella from './images/salmonella.jpg';
import bacillus from './images/bacilluscereus.jpg';
import botulism from './images/botulism.jpg';
import shigella from './images/shigella.png';
import staph from './images/staph.jpg';
import gono from './images/gonorrhea.jpg';
import syphilis from './images/syphilis.jpeg';
import lacto from './images/lactobacillus.jpg';


const App = () => {
	const cards = [{url: camplobacter, name: 'Campylobacter'}, 
		{url: clostridium, name: 'Clostridium perfringens'},
		{url: ecoli, name: 'Escherichia coli'},
		{url: listeria, name: 'Listeria'},
		{url: salmonella, name: 'Salmonella'},
		{url: bacillus, name: 'Bacillus Cereus'},
		{url: botulism, name: 'Clostridium botulinum'},
		{url: shigella, name: 'Shigella'},
		{url: staph, name: 'Staphylococcus aureus'},
		{url: gono, name: 'Neisseria gonorrhoeae'},
		{url: syphilis, name: 'Treponema pallidum'},
		{url: lacto, name: 'Lactobacillus acidophilus'}
	];
	
	const [score, setScore] = useState(0);
	const [totalScore, setTotalScore] = useState(0);
	const [usedCards, setUsedCards] = useState([]);
	const [randomize, setRandomized] = useState(cards)

	useEffect(() => {
		shuffleArray(randomize);
		setRandomized(randomize);
	}, [score, randomize])

	const shuffleArray = (array) => {
		for (let i = array.length - 1; i>0; i--) {
			let j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
	}

	const updateTotalScore = () => {
		if (score > totalScore) {
			setTotalScore(score);
		}
	}

	const updateScore = (value) => {
		if (usedCards.includes(value)) {
			updateTotalScore();
			setScore(0);
			setUsedCards([]); 
		} else {
			setUsedCards([...usedCards, value])
			setScore(score + 1);
		}
	}
  return (
		<div>
			<Header {...{score, totalScore}}/>
			<Body {...{randomize, updateScore}} />
		</div>
      );
}

export default App;
