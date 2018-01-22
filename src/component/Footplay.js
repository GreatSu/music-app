import React,{Component} from 'react'
import "./Footplay.css"
import {Link} from 'react-router-dom'


// 图片
import kefu from "../img/客服.png"
import all from "../img/all.png"

class Footplay extends Component{
    render(){
        return(
            
            <div id="footplay">
                <Link to="/music/id"><img src={kefu} alt="" />
                <div className="hua"></div>
                </Link>
             <Link to="/login">
             <img  src={all} alt="" />
             </Link>
             </div>
           
            
        )
    }
}
export default Footplay