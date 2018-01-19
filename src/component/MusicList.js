import React, { Component } from "react";
import "./MusicList.css";
import { Link } from "react-router-dom";

// 图片
import rili from "../img/演出日历.png"
import jiantouyou from "../img/箭头右.png"


class MusicList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      json: ''
    };
  }

  componentDidMount() {

    
      const xml = new XMLHttpRequest();
      xml.open("get", "http://api.jirengu.com/fm/getChannels.php", true);
      xml.send();
      xml.onreadystatechange = () => {
        if (xml.readyState === XMLHttpRequest.DONE) {
          if (xml.status === 200) {
            let gotjson = JSON.parse(xml.responseText);
            this.setState({
              json: gotjson
            });
          }
        }
      };
  }


 

  render() {
    let rdnummin = Math.floor(Math.random() * 30);
    let rdnummax = rdnummin + 6;
    const jsons = this.state.json?this.state.json.channels.slice(rdnummin,rdnummax).map((item, i) => {
      return (
        <div className="service" key={i}>
          <Link to={"/music/"+item.channel_id}>
          <img className="serimg" src={item.cover_middle} alt="" />
          <span>{item.name}</span>
          </Link>
        </div>
      );
    }):console.log('111');

    return (
      <div id="musiclist">
        <Link to="/music">
          <div className="listhead">
            <span>
              <img className="spanimg" src={rili} alt="" />今日歌单
            </span>
            <img className="listheadimg" src={jiantouyou} alt="" />
          </div>
        </Link>
        <div className="sixmusic">{jsons}</div>
      </div>
    );
  }
}


export default MusicList;
