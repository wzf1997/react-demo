import {USERLIST,SELECTLIST,SHOWDATE1,SHOWDATE2,INITIALIZE,PAGE1,PAGE2,PAGE3,PREVPAGE1,PREVPAGE2,PREVPAGE3,PREVPAGE4,NEXTPAGE1,NEXTPAGE2,NEXTPAGE3
,SHOWNUMBER,COMPARYNUMBER1,COMPARYNUMBER2,CLEARNUMBER,SHOWZERO,SHOWCIRCLE,SHOWRESULT,SHOWANIMATE,SHOWERROR,SHOWINDEX,SHOWUSER} from "./actionTypes"
const defaultState={
    //所有数据
    userlis:[],
    dateValue1:"",
    dateValue2:"",
    prevpage:1,
    nextpage:1,
    //查询过滤的数据
    selectlis:[],
    //本页显示的数据
    pageShow:[],
    //第一页展示的数据
    arr1:[],
    //第二页展示的数据
    arr2:[],
    //第三页展示的数据
    arr3:[],
    shownumber:[],
    result:"",
    display:"none",
    display1:"none",
    display2:"none"
}
export default (state=defaultState,action)=>{
    const newState=JSON.parse(JSON.stringify(state))
    if(action.type===USERLIST){
        newState.userlis=action.value
        return newState
    }
    if(action.type===SHOWDATE1){
        newState.dateValue1=action.value
        return newState
    }
    if(action.type===SHOWDATE2){
        newState.dateValue2=action.value
        return newState
    }
    if(action.type===SELECTLIST){
        newState.selectlis=action.value
        newState.pageShow=action.value
        return newState
    }
    if(action.type===INITIALIZE){
        newState.prevpage=1
        newState.pshow=action.pshow
        return newState
    }
    if(action.type===PAGE3){
        newState.nextpage=3
        newState.pageShow=action.arr1
        newState.arr1=action.arr1
        newState.arr2=action.arr2
        newState.arr3=action.arr3
        return newState
    }
    if(action.type===PAGE2){
        newState.nextpage=2
        newState.pageShow=action.arr4
        newState.arr1=action.arr4
        newState.arr2=action.arr5
        return newState
    }
    if(action.type===PAGE1){
        newState.nextpage=1
        newState.pageShow=action.arr6
        newState.arr1=action.arr6
        return newState
    }
    if(action.type===NEXTPAGE1){
        newState.prevpage=action.prevpage
        return newState
    }
    if(action.type===NEXTPAGE2){
        newState.pageShow=action.arrPage3
        return newState
    }
    if(action.type===NEXTPAGE3){
        newState.pageShow=action.arrPage2
        return newState
    }
    if(action.type===PREVPAGE1){
        newState.prevpage=action.prevpage
        return newState
    }
    if(action.type===PREVPAGE2){
        newState.pageShow=action.arrPage1
        return newState
    }
    if(action.type===PREVPAGE3){
        newState.pageShow=action.arrPage2
        return newState
    }
    if(action.type===PREVPAGE4){
        newState.pageShow=action.arrPage3
        return newState
    }
    if(action.type===SHOWNUMBER){
        newState.shownumber=action.arr
        return newState
    }
    if(action.type===COMPARYNUMBER1){
        newState.shownumber=action.arr
        return newState
    }
    if(action.type===COMPARYNUMBER2){
        newState.shownumber=action.arr
        return newState
    }
    if(action.type===CLEARNUMBER){
        newState.shownumber=action.arr
        return newState
    }
    if(action.type===SHOWZERO){
        newState.shownumber=action.arr
        return newState
    }
    if(action.type===SHOWCIRCLE){
        newState.shownumber=action.arr
        return newState
    }
    if(action.type===SHOWANIMATE){
        newState.display="block"
        return newState
    }
    if(action.type===SHOWRESULT){
        newState.display="none"
        newState.shownumber=action.newArr
        return newState
    }
    if(action.type===SHOWERROR){
        newState.shownumber=action.newArr
        return newState
    }
    if(action.type===SHOWINDEX){
        newState.display1=action.show
        newState.display2="none"
        return newState
    }
    if(action.type===SHOWUSER){
        newState.display2=action.show
        newState.display1="none"
        return newState
    }
    return state
}
