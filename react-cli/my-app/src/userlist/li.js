import React from "react" 
export default class Lis extends React.Component{
    render(){
        return(
            <ul className="numberList">
                <li>{this.props.id}</li>
                <li>{this.props.create_time.slice(0,10)}</li>
                <li>{this.props.pay_money}</li>
                <li>{this.props.openid.slice(-5,-1)}</li>
                <li>{this.props.name}</li>
                <li>{this.props.type}</li>
                <li>{this.props.user_where}</li>
                <li>{this.props.package}</li>
                <li>{this.props.order_no}</li>
                <li>{this.props.expire_date.slice(0,10)}</li>
                <li>{this.props.phone}</li>
                <li>{this.props.zihao}</li>
                <li>{this.props.account}</li>
                <li>{this.props.password}</li>
            </ul>
        )
    }
}