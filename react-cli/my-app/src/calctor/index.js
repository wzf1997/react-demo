import React from 'react';
import Calcshow from "./calcShow"
import Animate from "./animate"
import {showNumberAction,comparyNumberAction,clearNumberAction,showZeroAction,showCircleAction,showResultAction,indexAction} from "../store/actionCreators"
import {connect} from "react-redux"
class Calctor extends React.Component{
    componentDidMount(){
        let show=this.props.match.params.display
        this.props.indexAction(show)
    }
    render(){
        const { showNumberAction ,comparyNumberAction,clearNumberAction,showZeroAction,showCircleAction,showResultAction,display}=this.props
        //判断动画组件是否加载   
        let jsx=display==="block"?<Animate/>:""
        return(
            <div >
                <div className="tab">
                    <div className="index">
                        {/*  显示组件 */}
                        <Calcshow></Calcshow>
                            <div className="calc">
                                <div className="methods">
                                    <table className="table">
                                        <tbody>
                                            <tr className="first">
                                                <td onClick={clearNumberAction}>AC</td>
                                                <td onClick={comparyNumberAction}>+/-</td>
                                                <td onClick={showNumberAction}>%</td>
                                                <td onClick={showNumberAction}>÷</td>
                                            </tr>
                                            <tr>
                                                <td onClick={showNumberAction}>7</td>
                                                <td onClick={showNumberAction}>8</td>
                                                <td onClick={showNumberAction}>9</td>
                                                <td onClick={showNumberAction}>×</td>
                                            </tr>
                                            <tr>
                                                <td onClick={showNumberAction}>4</td>
                                                <td onClick={showNumberAction}>5</td>
                                                <td onClick={showNumberAction}>6</td>
                                                <td onClick={showNumberAction}>-</td>
                                            </tr>
                                            <tr>
                                                <td onClick={showNumberAction}>1</td>
                                                <td onClick={showNumberAction}>2</td>
                                                <td onClick={showNumberAction}>3</td>
                                                <td onClick={showNumberAction}>+</td>
                                            </tr>
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <td onClick={showZeroAction}>0</td>
                                                <td ></td>
                                                <td onClick={showCircleAction}>.</td>
                                                <td onClick={showResultAction}>=</td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                    {/* 是否加载动画组件 */}
                                    {jsx}
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        )        
    }
}
const stateToProps=(state)=>{
    return {
        display:state.display
    }
}
const dispatchToProps={
    showNumberAction,
    comparyNumberAction,
    clearNumberAction,
    showZeroAction,
    showCircleAction,
    showResultAction,
    indexAction
}
export default connect(stateToProps,dispatchToProps)(Calctor)