import React from "react"
import Lis from "./li"
import Userselect from "./userSelect"
import OrderList from "./orderList"
import {connect} from "react-redux"
import {showUserAction,selectListAction,selectDateAction,nextPageAction,prevPageAction,userAction} from "../store/actionCreators"
import store from "../store/store"
class UserList extends React.Component{
    componentDidMount(){
        let show=this.props.match.params.display
        this.props.userAction(show)
        const action=showUserAction()
        store.dispatch(action)
    }
    render(){
        const {pageShow,selectDateAction,prevpage,nextpage,nextPageAction,prevPageAction}=this.props
        return( 
            <div className="tab" > 
                <div className="sale">
                    <select className="selectmoney">
                        <option value="总收入">总收入</option>
                        <option value="后台">后台</option>
                    </select>
                    <select className="selectNumber" onChange={selectDateAction}>
                        <option>显示条数</option>
                        <option value="6" >6</option>
                        <option value="12" >12</option>
                        <option value="18" >18</option>
                    </select>
                    {/*用户组件*/}
                    <Userselect/>
                    <div className="buttonclick">
                        <button className="select" onClick={this.props.selectListAction}>查询</button>
                        <button className="asyc">同步</button>
                        <span className="text">交易上次手动同步时间:<span className="time"> 2019-09-25 10:09:36 </span></span>
                    </div>
                    {/*表头组件*/}
                    <OrderList/>
                    <div>
                        {pageShow.map((elem,i)=>{return <Lis  key={i} {...elem}></Lis>})}
                    </div>
                    {/*分页部分*/}
                    <div className="fenye">
                        <div className="startpage" onClick={prevPageAction}>上一页</div>
                        <div className="page"> 
                            <span className="start">{prevpage}</span>/ 
                            <span className="endPage">{nextpage}</span> 
                        </div>
                        <div className="endpage" onClick={nextPageAction}>下一页</div>
                    </div>    
                </div>
            </div>
        )
    }
}
const stateToProps=(state)=>{
    return{
        pageShow:state.pageShow,
        prevpage:state.prevpage,
        nextpage:state.nextpage
    }
}
const dispatchToProps={
    selectListAction,
    selectDateAction,
    nextPageAction,
    prevPageAction,
    userAction
}
export default connect(stateToProps,dispatchToProps)(UserList)