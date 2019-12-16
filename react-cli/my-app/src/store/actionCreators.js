import {USERLIST,SELECTLIST,SHOWDATE1,SHOWDATE2,INITIALIZE,PAGE1,PAGE2,PAGE3,PREVPAGE1,PREVPAGE2,PREVPAGE3,PREVPAGE4,NEXTPAGE1,NEXTPAGE2,NEXTPAGE3
,SHOWNUMBER,COMPARYNUMBER1,COMPARYNUMBER2,CLEARNUMBER,SHOWZERO,SHOWCIRCLE,SHOWANIMATE,SHOWRESULT,SHOWERROR,SHOWINDEX,SHOWUSER} from "./actionTypes"
//用fetch请求到数据
export const showUserAction = ()=>{
    return (dispatch)=>{
        fetch("http://pre.zhushang.net/Supplychain/getDataForHavePost",{
            method:"post",
            mode:"cors",
            headers:{"Content-type":"application/x-www-form-urlencoded"},
            body:"type=1&page=1&num=20"
        }).then(response=>{
            return response.json()
        }).then((responseText)=>{
            const arr1=responseText.slice(0,8)
            const arr2=responseText.slice(10)
            const arr=[...arr1,...arr2]
            const action={
                type:USERLIST,
                value:arr
            }
            dispatch(action)
        })
    }
}
// 按钮点击查询的功能
export const selectListAction=()=>{
    return (dispatch,getState)=>{
        const time1=new Date(getState().dateValue1).getTime()
        const time2=new Date(getState().dateValue2).getTime()
        const arr=getState().userlis
        const newarr=arr.filter((elem)=>{
            const litime=new Date(elem.create_time.slice(0,10)).getTime() 
            return litime>=time1&&litime<=time2
        })
        const action={
            type:SELECTLIST,
            value:newarr
        }
        dispatch(action)
    }
}
//将日期1的值传入到state中
export const showDate1Action=(e)=>{
    return (dispatch)=>{
        const action={
            type:SHOWDATE1,
            value:e.target.value
        }
        dispatch(action)
    }
}
//将日期2的值传入到state中
export const showDate2Action=(e)=>{
    return (dispatch)=>{
        const action={
            type:SHOWDATE2,
            value:e.target.value
        }
        dispatch(action)
    }
}
//根据查询的数据选择本页展示几条数据
export const selectDateAction=(e)=>{
    return (dispatch,getState)=>{
        let pshow= Number(e.target.value)  
        let pcount=getState().selectlis.length
        let arr=getState().selectlis
        //初始化下一页数字为1
        const action={
            type:INITIALIZE,
            pshow
        }
        dispatch(action)  
        //判断当前页面有几条数据
        if(pcount/pshow<=3&&pcount/pshow>2){
            const arr1=arr.slice(0,pshow)
            const arr2=arr.slice(pshow,2*pshow)
            const arr3=arr.slice(2*pshow)
            const action={
                type:PAGE3,
                arr1,arr2,arr3
            }
            dispatch(action)
        }
        else if(pcount/pshow>1&&pcount/pshow<=2){
            const arr4=arr.slice(0,pshow)
            const arr5=arr.slice(pshow) 
            const action={
                type:PAGE2,
                arr4,arr5
            }
            dispatch(action)
        }
        else{
            const arr6=arr.slice(0,arr.lenth)
            const action={
                type:PAGE1,
                arr6
            }
            dispatch(action)
        }
    }
}
//按钮点击上一页
export const prevPageAction=()=>{
    return (dispatch,getState)=>{
        let prevpage=getState().prevpage
        const arrPage1=getState().arr1
        const arrPage2=getState().arr2
        const arrPage3=getState().arr3
        if(prevpage>1){
            prevpage--
            const action={
                type:PREVPAGE1,
                prevpage
            }
            dispatch(action)
        }
        if(prevpage===1){
            const action={
                type:PREVPAGE2,
                arrPage1
            }
            dispatch(action)
            
        }
        else if(prevpage===2){
            const action={
                type:PREVPAGE3,
                arrPage2
            }
            dispatch(action)
        }
        else{
            const action={
                type:PREVPAGE4,
                arrPage3
            }
            dispatch(action)
        }
    }
}
//按钮点击下一页
export const nextPageAction=()=>{
    return (dispatch,getState)=>{
        let prevpage=getState().prevpage
        let nextpage=getState().nextpage
        const arrPage2=getState().arr2
        const arrPage3=getState().arr3
        if(prevpage<nextpage){
            prevpage++
            const action={
                type:NEXTPAGE1,
                prevpage
            }
            dispatch(action)
        }
        if(prevpage===3){
            const action={
                type:NEXTPAGE2,
                arrPage3
            }
            dispatch(action)
        }
        if(prevpage===2){
            const action={
                type:NEXTPAGE3,
                arrPage2
            }
            dispatch(action)
        }
        
    }
}
//计算器数字拼接
export const showNumberAction=(e)=>{
    return (dispatch,getState)=>{
        const arr=getState().shownumber
        const value=e.target.innerHTML
        arr.push(value)
        console.log(arr)
        const action={
            type:SHOWNUMBER,
            arr
        }
        dispatch(action)
    }
}
//给数字加﹣号
export const comparyNumberAction=()=>{
    return (dispatch,getState)=>{
        let arrAdd=["-"]
        //获得当前数组
        let arr=getState().shownumber
        //合并成一条字符串 
        let str=arr.join("")
        if(arr.length===0){
            return 
        }
        //判断当前字符串大于0
        //eslint-disable-next-line
        if(Number(str)>0&&Number(str)!==NaN){
            const action={
                type:COMPARYNUMBER1,
                arr:arrAdd.concat(arr)
            }
            dispatch(action)
        } 
        //如果当前字符串小于0  
        //eslint-disable-next-line
        if(Number(str)<0&&Number(str)!==NaN){
            const newArr=arr.slice(1)
            const action={
                type:COMPARYNUMBER2,
                arr:newArr
            }
            dispatch(action)
        } 
    }
}
//清空显示屏
export const clearNumberAction=()=>{
    return (dispatch)=>{
        const arr=[]
        const action={
            type:CLEARNUMBER,
            arr
        }
        dispatch(action)
    }
}
//对于0的处理
export const showZeroAction=(e)=>{
    return (dispatch,getState)=>{
        let arr=getState().shownumber
        const newValue=e.target.innerHTML
        if((arr[0]==="0"&&arr[1]!=="0")||arr[0]!=="0"){
            arr.push(newValue)
            const action={
                type:SHOWZERO,
                arr
            }
            dispatch(action)
        }
    }
}
//对于点的处理
export const showCircleAction=(e)=>{
    return (dispatch,getState)=>{
        let arr=getState().shownumber
        const newValue=e.target.innerHTML
        if(arr[0]!=="."&&arr[arr.length-1]!=="."){
            arr.push(newValue)
            const action={
                type:SHOWCIRCLE,
                arr
            }
            dispatch(action)
        }
    }
}
//计算结果的处理
export const showResultAction=()=>{
    return (dispatch,getState)=>{
        //显示结果
        const action={
            type:SHOWANIMATE,
            display:"block"
        }
        dispatch(action)
        //获得当前数组
        let arr=getState().shownumber
        let str=arr.join("") 
        //判断当前字符串中有没有 乘号和除号  有乘号和除号全部替换成 对应的符号
        try{
            if(str.indexOf("×")!==-1 ||str.indexOf("÷")!==-1){
                //乘法的时候将显示屏中所有的乘号都替换成*
                const str1=str.replace(/×/g,"*")
                str=str1.replace(/÷/g,"/")
            }
            //eslint-disable-next-line
            let str3=eval(str)
            //防止出现小数0.1+0.2 这种情况  结果保留2位
            let newArr=[str3.toFixed(2)]
            setTimeout(()=>{
                const action={
                    type:SHOWRESULT,
                    newArr,
                }
                dispatch(action)
            },1500)
        }
        catch (error) {
            //错误捕捉
            const newArr=[].push(error)
            setTimeout(()=>{
                const action={
                    type:SHOWERROR,
                    newArr
                }
                dispatch(action)
            },1500)
        }
    }
}
//tab 切换 
export const indexAction=(show)=>{
    return (dispatch)=>{
        const action={
            type:SHOWINDEX,
            show
        }
        dispatch(action)
    }
}
export const userAction=(show)=>{
    return (dispatch)=>{
        const action={
            type:SHOWUSER,
            show
        }
        dispatch(action)
    }
}     