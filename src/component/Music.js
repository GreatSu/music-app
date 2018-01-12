import React,{Component} from 'react'
import './Music.css'





class Music extends Component{

    componentDidMount() {
        window.$.getJSON('http://api.jirengu.com/fm/getChannels.php', function (data) {
            console.log(data.channels)
        }.bind(this))

       

    }

    render(){
        return(
            <div id="music">
                
            </div>
        )
    }
}
export default Music