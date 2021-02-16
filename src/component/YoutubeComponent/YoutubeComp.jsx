import React from 'react';
import './YoutubeComp.css';

const YoutubeComp = (props) =>{
    return(
        <div className="youtube-wrapper">
            <div className="img-thumb">
                <img src="https://gbf.wiki/images/thumb/e/ea/Npc_m_3040321000_01.jpg/110px-Npc_m_3040321000_01.jpg" alt=""/>
                <p className="time">{props.time}</p>
            </div>
        <p className="tittle">{props.tittle}</p>
        <p className="desc">{props.desc}</p>
    </div>
    )
}



export default YoutubeComp;