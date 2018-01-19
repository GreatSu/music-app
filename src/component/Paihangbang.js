import React,{Component} from 'react'
import './paihangbang.css'
import axios from 'axios'
import {Link} from 'react-router-dom'
import jiantouzuo from '../img/箭头左.png'

class Paihangbang extends Component{

    constructor(props){
        super(props)
        this.state = {
            jsons : '',
            spans : ''
        }
    }

    componentWillMount(){
        axios.get('./dist/js/paihangbang.json').then(res=>{
            const json = res.data.channels
            this.setState({
                jsons:json
        }) 
    })

    }

    render(){
        
        const all = this.state.jsons?this.state.jsons.map((item,i)=>{
            return (
                <div className="fullcontainer" key={i}>
                    <div>
                        <img  src={item.cover_middle} alt="" />
                    </div>
                    <div className="rightcontainer">
                        <h3>{item.name}</h3>
                        {item.info.map((items,i)=>
                            <div className="insidename" key={i}>
                            <span>{i+1}&#x3000;{items.title}</span>
                            <span > - {items.singer}</span>
                            </div>
                        )}
                    </div>
                </div>
            )
        }):null;

        return(
            <div id="paihangbang">
                {all}
                <Link to='/'>< img className="fiexd" src={jiantouzuo} alt=""/></Link>
            </div>
        )
    }
}
export default Paihangbang