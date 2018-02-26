import React,{Component} from 'react'
import './Login.css'
import {Link} from 'react-router-dom'
import xiaojvjv from '../img/xiaojvjv.jpg'
import shenfen from '../img/身份证 .png'
import PropTypes from "prop-types";
import dajvjv from '../img/dajvjv.jpg'

class Login extends Component{
    static contextTypes = {
        router: PropTypes.object
      }
    constructor(){
        super()
        this.state = {
            isshow :false,
            userinfo:{
                username:"sususu",
                password:"123456"
            }
        }
        this.handleisshow = this.handleisshow.bind(this)
        this.handlesubmit = this.handlesubmit.bind(this)
        this.handleregist = this.handleregist.bind(this)
    }

    handleisshow(){
        this.setState({
            isshow:!this.state.isshow
        })
    }

    handlesubmit(e){
        e.preventDefault()
        let inputuser = document.querySelector('.username')
        let inputpass = document.querySelector('.password')
        if(inputuser.value === this.state.userinfo.username && inputpass.value === this.state.userinfo.password){
            alert("登录成功")
            this.context.router.history.push('/');
        }else{
            alert('用户名或密码出错')
            inputuser.value=""
            inputpass.value=""
        }
    }

    handleregist(e){
        e.preventDefault()
        let inputuser = document.querySelector('.username')
        let inputpass = document.querySelector('.password')
        let repass = document.querySelector('.repass')
        this.setState({
            userinfo:{
                username:inputuser.value,
                password:inputpass.value
            }
        })

        if(inputpass.value === repass.value){
            alert("恭喜您,注册成功")
            inputuser.value=""
            inputpass.value=""
            repass.value=""
            this.setState({
                isshow:false
            })
        }else{
            alert('两次输入密码不一致')
            inputpass.value=""
            repass.value=""
        }
    }

    render(){

        

        return(
            <div id="login" style={{backgroundImage:`URL(${dajvjv})`}}>
                
                <div>
                    <Link to="/">返回首页</Link>
                    <span onClick={this.handleisshow}>  &#x3000; {this.state.isshow===true?"去登录":"去注册"}</span>
                </div>
                {this.state.isshow===true?<Registpage regist={this.handleregist} />:<Loginpage  sub={this.handlesubmit} />}
            </div>
        )
    }

}



class Loginpage extends Component{
    render(){
        return(
            <div className="loginpage">
                <img src={xiaojvjv}  alt="" />
                <form>
                    <input type="text" placeholder="请输入用户名" className="username"  required/>
                    <input  type="password" placeholder="请输入密码" className="password"  required />
                    <input type="submit" onClick={this.props.sub} className="submit" value="登录" />
                </form>
            </div>
        )
    }
}



class Registpage extends Component{
    render(){
        return(
            <div className="registpage">
                <img src={shenfen}  alt="" />
                <form>
                    <input type="text" className="username" placeholder="请输入用户名"  required/>
                    <input  type="password" className="password" placeholder="请输入密码" required />
                    <input type="password" className="repass" placeholder="请确认密码" required/>
                    <input type="submit" onClick={this.props.regist} value="注册" />
                </form>
            </div>
        )
    }
}


export default Login