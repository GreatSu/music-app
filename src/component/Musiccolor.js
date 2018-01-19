import React,{Component} from 'react'
import './Musiccolor.css'

// background: linear-gradient(to right,red,blue,yellow)

let red = 'red'
let yellow = 'linear-gradient(to bottom,red,yellow,blue)'
let blue = 'linear-gradient(to bottom,	#ADD8E6,#00BFFF,#4169E1)'

class MusicColor extends Component{



    render(){
        return(
            <div className="colorcontainer">
                <div onClick={this.props.clickbg} className="redbg" style={{background:red}}></div>
                <div onClick={this.props.clickbg} className="redblue" style={{background:yellow}}></div>
                <div onClick={this.props.clickbg} className="skyblue" style={{background:blue}}></div>
            </div>
        )
    }

}

export default MusicColor
