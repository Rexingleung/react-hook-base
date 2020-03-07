/* @flow */
import React, {useState} from 'react';
/*

	* 每一次渲染都有自己的Props and State
	* 每一次渲染都有他自己的时间处理函数
	* alert 会捕获我点击按钮时候的状态
	* 我们的组件函数每次渲染都会被调用 , 但是每一次调用中state值都是常量 , 并且他被赋予了当前渲染中的状态值
	* 在单次渲染的范围内 , props和state始终保持不变

*/
const Counter1 = () => {
    let [state, setState] = useState({number: 0});
    const alertNumber = () =>{
        setTimeout(function(){
            alert(state.number)
        },3000)
    }
    const lazyAdd = () =>{
        setTimeout(function(){
            setState(state => ({number: state.number + 1}))
            setState(state => ({number: state.number + 1}))
        },3000)
    }
    return (
        <div>
            <p>{ state.number } </p>
            <button onClick={()=> setState({ number: state.number + 1 })}> +</button>
            <hr />
            <button onClick={alertNumber}> 延迟弹出没更新前number</button>
            <hr />
            <button onClick={lazyAdd}> layAdd 延迟增加当前state</button>
        </div>
    )
}
export default Counter1