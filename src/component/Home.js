import React,{Component} from 'react'
import './Home.css'
import axios from 'axios'
import {Link} from 'react-router-dom'
import back from '../img/返回.png'

class Home extends Component{

    constructor(props){
        super(props)
        this.state = {
            dota:""
        }
    }

    componentWillMount(){
        axios.get('./dist/js/mv.json').then(res=>{
            const datas = res.data.channels
            this.setState({
                dota:datas
            })
            
        })
    }

    render(){
        const videos = this.state.dota?this.state.dota.map((item,i)=>{
            return(
                <Link className="moviea" to={"/home/"+item.id} key={i}>
                <div className="movie" >
                    < img src={item.img} alt=""/>
                    <div>
                        <span>{item.singer}</span>--<span>{item.title}</span>
                    </div>
                </div>
                </Link>
            )
        }):null
        return(
            <div id="home" >
                {videos}
                <Link className="back" to="/">
                <img  src={back} alt="" />
                </Link>
            </div>
        )
    }
}

export default Home