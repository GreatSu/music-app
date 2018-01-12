import React,{Component} from 'react'
import './ComponentHome.css'

import {BrowserRouter as Router} from 'react-router-dom'
import LinkHome from './route/LinkHome';
import Index from './component/Index'
import Lunbo from './component/Lunbo'
import Music from './component/Music'
import MusicList from './component/MusicList'




class ComponentHome extends Component{

    

    render(){
        return(
            <Router>
            <div id="componenthome">
                {/* <Index /> */}
                <Lunbo />
                <LinkHome/>
                <MusicList />
            </div>
            </Router >

        )
    }
}
export default ComponentHome