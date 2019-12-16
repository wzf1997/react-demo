import React  from "react" 
import {BrowserRouter as Router,Route,Link} from "react-router-dom"
import {connect} from "react-redux"
import Calc from "../calctor/index.js"
import Userlist from "../userlist/index.js"
class AppRouter extends React.Component{ 
    render(){
        const {display1,display2}=this.props
        return(
            <Router>
                <div className="lists">
                    <div></div>
                    {/* // eslint-disable-next-line */}
                    <div>
                        <Link to="/block" className={display1==="block"?"blue":"index1"}>首页</Link>
                    </div>
                    <div></div>
                    {/* // eslint-disable-next-line */}
                    <div>
                        <Link to="/list/block" className={display2==="block"?"blue":"sale1"}>收入分析</Link>
                    </div>
                    <div></div>
                </div>
                {/* exact 表示精确匹配 */}
                <Route path="/:display" exact component={Calc}/>
                {/*:id 表示规则 */}
                <Route path="/list/:display" component={Userlist}/>
            </Router>
        )
    }
}
const stateToProps=(state)=>{
    return{
        display1:state.display1,
        display2:state.display2
    }
}
export default connect(stateToProps)(AppRouter)
