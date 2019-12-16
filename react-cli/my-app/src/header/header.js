import React from "react"
export default class Header extends React.Component{
    render(){
        return(
            <div className="header">
                <img src={[require("../img/ship.png")]} alt=""></img>
                <p>每天进步一点点，离目标更近一点点！</p>
                <p className="name"> 段惠乾</p>
                <p className="loginout">退出</p>
            </div>
        )
    }
}