import React,{Component} from 'react'
import './LinkHome.css'
import {Link} from 'react-router-dom'

// 图片
import diantai from '../img/电台.png'
import tuijian from '../img/推荐歌单.png'
import paihang from '../img/排行榜.png'

class LinkHome extends Component{
    render(){
        return(
            <div className="linkhome">
                <Link to="/home">
                    <img src={diantai} alt=""/>
                    <span>MV</span>
                </Link>
                <Link to="/music">
                    <img src={tuijian} alt=""/>
                    <span>歌单</span>
                </Link>
                <Link to="/something">
                    <img src={paihang} alt=""/>
                    <span>排行榜</span>
                </Link>
            </div>
        )
    }
}
export default LinkHome