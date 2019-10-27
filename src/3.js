import React , {useState} from 'react'

export default function Content2(){

	const [cn , setCN] = useState('video dim')


	window.addEventListener('scroll', ()=>{
		const scrolledValue = document.documentElement.scrollTop

		if(scrolledValue <= 300){
			setCN('video dim');
		}
		else{
			setCN('video');
		}
	})

	return(
		<div className='Content2'>
			<iframe 
				className={cn}
				title='Saga Intro'
				frameBorder='0'
				src="https://player.vimeo.com/video/174826882">
			</iframe>
		</div>
	)
}