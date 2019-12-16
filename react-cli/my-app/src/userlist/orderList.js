import React from "react"
export default class OrderList extends React.Component{
    render(){
        return(
            <ul className="orderList">
                <li>编号</li>
                <li>创建时间</li>
                <li>支付金额</li>
                <li>来访编号</li>
                <li>姓名</li>
                <li>类型</li>
                <li>用户来源</li>
                <li>用户包裹</li>
                <li>订单编号</li>
                <li>过期时间</li>
                <li>电话</li>
                <li>网名</li>
                <li>账户</li>
                <li>密码</li>
            </ul>
        )       
    }
}