import React from 'react'
import './sass/css.css'
import icon from './icon.png'
import Content from './2'

export default function Header(){

	return(
		<div className='asdf'>
				<div className='header'>
					<img src={icon} alt='not found'></img>
					<div className='name'>Maple Saga</div>
					<button>Library</button>
					<button>Earn Nx</button>
					<button>Forum</button>
				</div>
		</div>
	)
}