import React, { useEffect , useState } from 'react';

const STATUS_TYPING = 'typing'
const STATUS_DELETING = 'deleting'

export default function Content(){

	const [selected_text,setSelectedText] = useState({selected : 0 , index : 0 , status : STATUS_TYPING})

	const texts = ['FM Hoes' , 'Raiderers' , 'Broke'];
	const selected = selected_text.selected;
	const index = selected_text.index;
	const status = selected_text.status;

  const startTyping = () => {
    if (status === STATUS_TYPING) {
      if (index > texts[selected].length - 1) {
        setSelectedText({ ...selected_text, status: STATUS_DELETING})
      } else {
        setSelectedText({ ...selected_text, index: index + 1 });
      }
    } else {
      if (index <= -1) {
        const next_selected = (selected + 1) % 3;
        setSelectedText({ ...selected_text, selected: next_selected, index: 0, status: STATUS_TYPING});
      } else {
        setSelectedText({ ...selected_text, index: index - 1 });
      }
    }
  }

	useEffect(()=>{
		setTimeout(startTyping , 300)
	},[selected , index , status])

	return(
		<div className='Content'>
			<div className="line1">
				<div>We are</div>
				<div className="typing">{texts[selected].substring(0, index)}</div>
			</div>	
			<div className='otherLines'>MapleSaga is a low rate, nostalgic MapleStory private server.</div>
			<div className='otherLines'>Enjoy old-school MapleStory gameplay and a friendly community.</div>
			<div className='otherLines'>x8 EXP / x5 Mesos / v62 with a Skill Rebalance</div>
		</div>
	)
}

