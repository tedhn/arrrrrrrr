import React , { useState } from 'react'
import './sass/css.css'
import icon from './icon.png'

export default function Header(){

	const [scrolled , setScrolled] = useState(false);

	window.addEventListener('scroll', ()=>{
		const scrolledValue = document.documentElement.scrollTop

		if(scrolledValue >= 100){
			setScrolled(true);
		}
		else{
			setScrolled(false);
		}
	})


	return(
		<div className='asdf' >
				<div className={scrolled? 'header scrolled' : 'header'}>
					<img src={icon} alt='not found'></img>
					<div className='name'>Maple Saga</div>
					<button>Library</button>
					<button>Earn Nx</button>
					<button>Forum</button>
				</div>
		</div>
	)
}