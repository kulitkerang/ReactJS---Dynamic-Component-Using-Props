import React, { Component } from 'react';
import YoutubeComp from '../../component/YoutubeComponent/YoutubeComp';

class Home extends Component {
    render(){
        return(
            <div>
                <p>Youtube Component</p>
                <hr/>
                <YoutubeComp
                     time="05.55"
                     tittle="Latihan Part-1"
                     desc="Belum ada" />            
                <YoutubeComp
                     time="05.55"
                     tittle="Latihan Part-2"
                     desc="Belum ada" />
                <YoutubeComp
                     time="05.55"
                     tittle="Latihan Part-3"
                     desc="Belum ada" />
                <YoutubeComp
                     time="05.55"
                     tittle="Latihan Part-4"
                     desc="Belum ada" />
                <YoutubeComp
                     time="05.55"
                     tittle="Latihan Part-5"
                     desc="Belum ada" />
            </div>
        )
    }
}

YoutubeComp.defaultProps = {
    time:'00.00',
    tittle:'Add Here',
    desc:'Add Here'
}

export default Home;