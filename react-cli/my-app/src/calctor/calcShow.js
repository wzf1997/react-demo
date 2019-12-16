import React from 'react';
import store from "../store/store"
// import {connect} from "react-redux"
class Calcshow extends React.Component{
    constructor(props){
        super(props)
        this.state=store.getState()
        this.storeChange=this.storeChange.bind(this)
        store.subscribe(this.storeChange)
    }
    storeChange(){
        this.setState(store.getState())
    }
    render(){
        return(
            <div className="input">
                <div className="circles">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            <div className="show">{this.state.shownumber}</div>
            </div>
        )        
    }
}
export default Calcshow
// const stateToProps=(state)=>{
//     console.log(state.shownumber)
//     return {
//         show:state.shownumber
//     }
// }
// export default connect(stateToProps)(Calcshow)
