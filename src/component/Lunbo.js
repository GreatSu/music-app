import React,{Component} from "react"
import './lunbo.css'
import Swiper from 'swiper'

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
                            <img src="./dist/img/weida.jpg" alt="" />
                        </div>
                        <div className="swiper-slide">
                            <img src="./dist/img/zhoujielun.jpg" alt="" />
                        </div>
                        <div className="swiper-slide">
                            <img src="./dist/img/xuebuhui.jpg" alt="" />
                        </div>
                        <div className="swiper-slide">
                            <img src="./dist/img/zhoujieluncaihong.jpg" alt="" />
                        </div>
                    </div>
                    <div className="swiper-pagination"></div>
                    
                </div>
            </div>
        )
    }
}
export default Lunbo