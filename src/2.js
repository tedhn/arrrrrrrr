import React, { useEffect } from 'react';

let count = 0 ;
let index = 0 ;
let currentLetter = '';
let letter = '';

export default function Content(){

	const texts = ['FM Hoes' , 'Raiderers' , 'Broke'];

	const typing =()=>{
		if(count === texts.length){
			count = 0;
		}

		currentLetter = texts[count];

		letter = currentLetter.slice(0 , ++index);

		document.querySelector('.typing').textContent = letter;

		if(letter.length === currentLetter.length){

			count ++ ;
			index = 0 ;

		}

		setTimeout(typing , 400)
	}

	const deleting =()=>{
		if(letter.length === 0){
			setTimeout(typing , 400)
		}
		else{
			letter = letter.slice(0 , -1);
			document.querySelector('.typing').textContent = letter;
		}
	}

	useEffect(typing,[])

	return(
		<div className='Content'>
			<div className="line1">
				<div>We are</div>
				<div className="typing"></div>
				<button onClick={typing}>asdf</button>
				<button onClick={deleting}>1234</button>
			</div>	
		</div>
	)
}

