import React, { Component } from "react";
import "./Video.css";
import axios from "axios";

class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {
      json: ""
    };
  }

  componentWillMount() {
    axios.get("/dist/js/mv.json").then(res => {
      const datas = res.data.channels;
      console.log(datas);
      this.setState({
        json: datas
      });
    });
  }

  render() {
    const videos = this.state.json ? (
      <video className="mvplay"  controls autoPlay  src={this.state.json[this.props.match.params.id-1].mv} />
    ) : null;

    return <div  className="isvideo">{videos}</div>;
  }
}

export default Video;
