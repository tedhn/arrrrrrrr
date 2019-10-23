import React, { useEffect , useState} from 'react';
import { type } from 'os';

let count = 0 ;
let index = 0 ;
let currentLetter = '';

export default function Content(){

	const texts = ['FM Hoes' , 'Raiderers' , 'Broke'];

	let [letter , setLetter] = useState('');



	const typing =()=>{
		if(count === texts.length){
			count = 0;
		}
	
		currentLetter = texts[count];

		setLetter(currentLetter.slice(0, ++index))

		if(letter.length === currentLetter.length){
			index = 0 ;
			count ++;
		}
		
		document.querySelector('.typing').textContent = letter;
	}


	return(
		<div className='Content'>
			<div className="line1">
				<div>We are</div>
				<div className="typing"></div>
			</div>		
			<button onClick={typing}>Click me</button>
		</div>
	)
}

