import React, { useEffect , useState} from 'react';

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
		console.log(currentLetter)
		setLetter(currentLetter.slice(0, ++index))
		console.log(index + ')' + letter)
		if(letter.length === currentLetter.length){
			index = 0 ;
			count ++;
		}
		
		document.querySelector('.typing').textContent = letter;

	}

	useEffect(
		typing
	,[])

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

