import React,{Component} from 'react'
import './ComponentHome.css'


import LinkHome from './route/LinkHome';
import Index from './component/Index'
import Lunbo from './component/Lunbo'
import MusicList from './component/MusicList'
import Footplay from './component/Footplay'



class ComponentHome extends Component{

    

    render(){
        return(
            
            <div id="componenthome">
                <Index />
                <Lunbo />
                <LinkHome/>
                <MusicList />
                <Footplay/>
            </div>
           

        )
    }
}
export default ComponentHome