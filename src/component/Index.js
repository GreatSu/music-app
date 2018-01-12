import React,{Component} from 'react'
import './Index.css'

class Index extends Component{

    componentDidMount(){
        setTimeout(()=>{
            let ind = document.querySelector('#ind')
            
            ind.style.transitionProperty = "opacity"
            ind.style.opacity = "0.1"
            ind.style.transitionDuration = "2s"
            setTimeout(()=>{
                ind.style.display="none"
            },2000)
        },2000)
    }

    render(){
        return(
            <div id="ind">
                <div className="indextop">
                    <div className="indextopdiv">
                        <img src="./dist/img/foot4.jpg" alt="" />
                    </div>
                    <img src="./dist/img/xuanmai.png" alt=""/>
                </div>
                <div className="indexbottom">
                    MEStar版权所有 @2017-2018
                </div>
            </div>
        )
    }
}

export default Index