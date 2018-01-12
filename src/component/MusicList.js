import React, { Component } from "react";
import "./MusicList.css";
import { Link } from "react-router-dom";

class MusicList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      json: []
    };
  }

  componentWillMount() {
    let xml = new XMLHttpRequest();
    xml.open("get", "http://api.jirengu.com/fm/getChannels.php", true);
    xml.send();
    xml.onreadystatechange = () => {
      if (xml.readyState == XMLHttpRequest.DONE) {
        if (xml.status == 200) {
          let gotjson = JSON.parse(xml.responseText);
          this.setState({
            json: gotjson
          });
        }
      }
    };

    console.log('111')
  }

  render() {
    let rdnummin = Math.floor(Math.random() * 30);
    let rdnummax = rdnummin + 6;
    // const xuanran = this.state.json.channels.slice(rdnummin,rdnummax).map((item,i)=>{
    //     return <div key={i}>{item.name}</div>
    // })

    return (
      <div id="musiclist">
        <Link to="/music">
          <div className="listhead">
            <span>
              <img className="spanimg" src="./dist/img/演出日历.png" alt="" />今日歌单
            </span>
            <img className="listheadimg" src="./dist/img/箭头右.png" alt="" />
          </div>
        </Link>
        <div className="sixmusic">{console.log(this.state.json)}</div>
      </div>
    );
  }
}
export default MusicList;
