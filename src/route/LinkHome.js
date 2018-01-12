import React,{Component} from 'react'
import './LinkHome.css'
import {Link} from 'react-router-dom'

class LinkHome extends Component{
    render(){
        return(
            <div className="linkhome">
                <Link to="/home">
                    <img src='./dist/img/diantai.png' alt=""/>
                    <span>电台</span>
                </Link>
                <Link to="/music">
                    <img src='./dist/img/gedan.png' alt=""/>
                    <span>歌单</span>
                </Link>
                <Link to="/something">
                    <img src='./dist/img/paihangbang.png' alt=""/>
                    <span>排行榜</span>
                </Link>
            </div>
        )
    }
}
export default LinkHome