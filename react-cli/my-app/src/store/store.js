import {createStore, applyMiddleware} from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';
// const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose
// const enhancer =composeEnhancers(applyMiddleware(thunk))
// // 安装了一个谷歌浏览器redux插件
// const store = createStore(reducer,enhancer)
const store = createStore(reducer,applyMiddleware(thunk));
export default store;