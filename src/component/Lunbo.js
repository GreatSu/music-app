import React,{Component} from "react"
import './lunbo.css'
import Swiper from 'swiper'


// 图片
import weda from "../img/weida.jpg"
import zhoujielun from "../img/zhoujielun.jpg"
import xuebuhui from "../img/xuebuhui.jpg"
import caihong from "../img/zhoujieluncaihong.jpg"

class Lunbo extends Component{

    componentDidMount(){
        let galleryTop = new Swiper('.gallery-top', {
            spaceBetween: 10,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
              },
              pagination: {
                el: '.swiper-pagination',
              },
          });
    }

    render(){
        return(
            <div className="lunbotu">
                <div className="swiper-container gallery-top">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <img src={weda} alt="" />
                        </div>
                        <div className="swiper-slide">
                            <img src={zhoujielun} alt="" />
                        </div>
                        <div className="swiper-slide">
                            <img src={xuebuhui} alt="" />
                        </div>
                        <div className="swiper-slide">
                            <img src={caihong} alt="" />
                        </div>
                    </div>
                    <div className="swiper-pagination"></div>
                    
                </div>
            </div>
        )
    }
}
export default Lunbo