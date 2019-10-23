import React from 'react';
import ReactDOM from 'react-dom';
import Header from './1';

function App(){
	return(
		<div className='frontPage'>
			<Header/>
		</div>
	)
}


ReactDOM.render(<App />, document.getElementById('root'));