import React from 'react';
import ReactDOM from 'react-dom';
import Header from './1';
import Content from './2';
import Content2 from './3';

function App(){
	return(
		<div className='frontPage'>
			<Header/>
			<Content/>
			<Content2/>
		</div>
	)
}


ReactDOM.render(<App />, document.getElementById('root'));