import React from "react"
import {connect} from "react-redux"
import {showDate1Action,showDate2Action} from "../store/actionCreators"
class UserSelect extends React.Component{
    render(){
        const{showDate1Action,showDate2Action,value1,value2}=this.props
        return(
            <div className="dateselect">
                <span className="date" >日期选择</span>
                <div className="dateshow1">{value1}</div>
                <input type="date" className="date1" data-selcet="年-月-日" onChange={showDate1Action}/>
                <span className="minus">-</span>
                <div className="dateshow2">{value2}</div>
                <input type="date" className="date2" data-selcet="年-月-日" onChange={showDate2Action}/>
            </div>
        )
    }
}
const stateToProps=(state)=>{
    return{
        value1:state.dateValue1,
        value2:state.dateValue2
    }
}
const dispatchToProps={
    showDate1Action,
    showDate2Action
}
export default connect(stateToProps,dispatchToProps)(UserSelect)