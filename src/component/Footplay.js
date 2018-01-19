import React,{Component} from 'react'
import "./Footplay.css"
import {Link} from 'react-router-dom'


// 图片
import kefu from "../img/客服.png"
import all from "../img/all.png"

class Footplay extends Component{
    render(){
        return(
            <Link to="/music/public_tuijian_suibiantingting">
            <div id="footplay">
                <img src={kefu} alt="" /><div className="hua"></div><img src={all} alt="" />
            </div>
            </Link>
        )
    }
}
export default Footplay