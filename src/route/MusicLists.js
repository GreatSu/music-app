import React,{Component} from 'react'
import './MusicLists.css'





class MusicLists extends Component{

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
export default MusicLists