import React , {useState} from 'react'

export default function Content2(){

	const [opacity , setOpacity] = useState(false)


	window.addEventListener('scroll', ()=>{
		const scrolledValue = document.documentElement.scrollTop

		if(scrolledValue <= 300){
			setOpacity(true);
		}
		else{
			setOpacity(false);
		}
	})

	return(
		<div className='Content2'>
			<iframe 
				className={opacity ? 'video dim' : 'video'}
				title='Saga Intro'
				frameBorder='0'
				src="https://player.vimeo.com/video/174826882">
			</iframe>
		</div>
	)
}