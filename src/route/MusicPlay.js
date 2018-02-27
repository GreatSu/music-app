import React,{Component} from 'react'
import './MusicPlay.css'
import {Link} from 'react-router-dom'
import axios from 'axios'
import MusicColor from '../component/Musiccolor'


// 图片路径
import zuoURL from '../img/箭头左.png'
import allURL from '../img/all.png'
import zbURL from "../img/左播放.png"
import pause from "../img/暂停.png"
import ybURL from "../img/右播放.png"
import bof from '../img/播放.png'

import citystory from '../audio/小城故事.mp3'
import warmheart from '../audio/暖心.mp3'
import rain from '../audio/雨滴.mp3'

import zhuanji from '../img/zhuanji.jpg'
import zhuanzhuan from '../img/zhuanzhuan.jpg'
import innierzai from '../img/yinnierzai.jpg'
import yanshantu from '../img/yanshantu.jpg'

import love from '../img/lovered.png'
import dislove from '../img/dislike.png'

const piclist ={
    "channels":[
        {
            pic : zhuanji,
            title:"这是一首歌",
            art:"林义汇"
        },
        {
            pic : zhuanzhuan,
            title:"这是另一首歌",
            art:"兰腾"
        },
        {
            pic: innierzai,
            title:"因你而在",
            art:"陈亮"
        },
        {
            pic:yanshantu,
            title:"研山图",
            art:"郭木森"
        }
    ]
}





const musicstr = [citystory,warmheart,rain]
let i = 0



class MusicPlay extends Component{


    constructor(props){
        super(props)
        this.state = {
            song:'',
            musiclong:"",
            musicnow:"",
            islove:false,
        }
        this.handlepause = this.handlepause.bind(this)
        this.colorshow = this.colorshow.bind(this)
        this.oninput = this.oninput.bind(this)
        this.handleprev =this.handleprev.bind(this)
        this.handlenext = this.handlenext.bind(this)
        this.format = this.format.bind(this)
        this.islovehandle = this.islovehandle.bind(this)
    }

    componentWillMount() {

        axios.get('http://api.jirengu.com/fm/getSong.php',{"channel":"public_tuijian_spring"}).then(res =>{
            const data = res.data.song
            this.setState({
                song:data
            })
            console.log(res)
        })
    }


  handlepause(e){
    
    const stopimg = document.querySelector('.stopimg')
    const musicplayer = document.querySelector('.musicplayer')
    console.log(musicplayer.duration)
    console.log(musicplayer.currentTime)
    if(e.target.src === pause){
        e.target.src = bof
        
        stopimg.style.animationPlayState = "paused"
        
        musicplayer.pause()
    }else{
        e.target.src = pause
        stopimg.style.animationPlayState = 'running'
        musicplayer.play()
    }
  }
    
  format(second){
      let t = parseInt(second || 0,10)
      let t1 = parseInt(t / 60,10)
      let t2 = t % 60

      if (t1 < 10) t1 = '0' + t1
      if (t2 < 10) t2 = '0' + t2

      return t1 + ':' + t2
  }


  componentDidMount(){
    setTimeout(()=>{
        const musicplayer = document.querySelector('.musicplayer')
        
        this.setState({
            musicnow:musicplayer.currentTime,
            musiclong:musicplayer.duration
        })
        setInterval(()=>{
            this.setState({
                musicnow:musicplayer.currentTime
            })
        },0)

    },2500)
    
  }

  handleprev(){
    const musicplayer = document.querySelector('.musicplayer')
    
    if(i>0){
        i--
    }else{
        i = musicstr.length - 1
    }
    musicplayer.src = musicstr[i]
    let num = Math.floor(Math.random()*4)
    const musictitle = document.querySelector('.musictitle')
    const musicart = document.querySelector('.musicart')
    const stopimg = document.querySelector('.stopimg')
    musictitle.innerHTML = piclist.channels[num].title
    musicart.innerHTML = piclist.channels[num].art
    stopimg.src = piclist.channels[num].pic

    setTimeout(()=>{
        this.setState({
            musiclong:musicplayer.duration
        })
    },500)
    
  }

  handlenext(){
    const musicplayer = document.querySelector('.musicplayer')
    if(i<musicstr.length -1){
        i++
    }else{
        i = 0
    }
    musicplayer.src = musicstr[i]
    let num = Math.floor(Math.random()*4)
    const musictitle = document.querySelector('.musictitle')
    const musicart = document.querySelector('.musicart')
    const stopimg = document.querySelector('.stopimg')
    musictitle.innerHTML = piclist.channels[num].title
    musicart.innerHTML = piclist.channels[num].art
    stopimg.src = piclist.channels[num].pic
    
    setTimeout(()=>{
        this.setState({
            musiclong:musicplayer.duration
        })
    },500)
   

  }

  islovehandle(){
      this.setState({
          islove : !this.state.islove
      })
  }

  colorshow(e){
    
    const musiccolor = document.querySelector('.colorcontainer')
    if(musiccolor.style.height >0+'px'){
        musiccolor.style.height = "0"
        
    }else{
        musiccolor.style.height = "15%"
    }
  }

   clickcolor(e){
    const musicplay = document.querySelector("#musicplay")
    musicplay.style.background = e.target.style.background
   }


   oninput(){
       let range = document.querySelector('input').value
    //    console.log(range)
       const audio = document.querySelector('audio')
       audio.currentTime = range
   }

    render(){
        
        const title = this.state.song?this.state.song.map((item, i) => {
            return (
              <span className="musictitle" key={i}>{item.title}</span>
            );
          }):null;

          const user = this.state.song?this.state.song.map((item, i) => {
            return (
              <span className="musicart" key={i}>{item.artist}</span>
            );
          }):null;

          const pic = this.state.song?this.state.song.map((item, i) => {
            return (
              <img className="stopimg" key={i} src={item.picture} alt="" />
            );
          }):null;
          
          const audio = this.state.song?this.state.song.map((item, i) => {
            return (
              <audio   className="musicplayer"  src={musicstr[2]} autoPlay  key={item.sid}  loop ></audio>
            );
          }):null;
        
        //   const timeleft = this.state.song?<span>{this.format(musicplayer.currentTime)}</span>:null

        //   const timeright = this.state.song?()=>{
        //     const musicplayer = document.querySelector('.musicplayer')
        //     return <span>{this.format(musicplayer.duration)}</span>
        // }:null

        return(
            <div id="musicplay">
                <div className="playhead">
                    <Link to="/"><img  className="headimg" src={zuoURL} alt="" /></Link>{title}<img className="headimg" onClick={this.colorshow} src={allURL} alt="" />
                </div>
                <div className="playmid">
                    {user}
                    {pic}
                   <div className="timelong">
                    <span >{this.format(this.state.musicnow)}</span><input type="range" value={this.state.musicnow} min="0" max={this.state.musiclong}  step="1"  onInput={this.oninput} /><span className="timeright">{this.format(this.state.musiclong)}</span>
                   </div>
                </div>
                <div className="jiathis_style_32x32 playmidtwo">
                    <Link to="http://www.jiathis.com/share" className="jiathis jiathis_txt jtico jtico_jiathis" target="_blank"></Link>
                    <img onClick={this.islovehandle} className='dislike' src={this.state.islove == true?love:dislove}/>
                </div>
                <div className="playfoot">
                    {audio}
                    <div className="controls">
                    <img onClick={this.handleprev} src={zbURL} alt=""/><img onClick={this.handlepause} src={pause} alt="" /><img onClick={this.handlenext}  src={ybURL} alt="" />
                    </div>
                </div>
                <MusicColor clickbg={this.clickcolor}/>
            </div>
        )
    }
}
export default MusicPlay

{/* <script type="text/javascript" src="http://v3.jiathis.com/code/jia.js" charset="utf-8"></script> */}