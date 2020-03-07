/* @flow */
import React, {useState} from 'react';
/*

    *惰性处理state
        * initialState参数只会在组件的初始渲染中起作用 , 后续渲染是会被忽略
        * 如果出事state需要通过复杂计算获得 , 则可以传入一个函数 , 在函数中计算并返回初始的state , 此函数只在初始渲染是被调用
        * 与class组件中的setState方法不同 , useState不会自动合并更新对象 , 你可以用函数式的setState结合展开运算符来达到合并更新的效果

    * initialState 初始化参数只会有组件初始渲染的时候调用 , 后续渲染会被忽略

*/
const Counter2 = () => {
    let [state, setState] = useState(function(){
        console.log("初始状态");
        return {number: 0,name: "计数器"}
        
    });
    return (
        <div>
            <p>{state.name}:{ state.number } </p>
            <button onClick={()=> setState({ ...state, number: state.number + 1 })}> +</button> {/*这里需要手动合并state的值*/}
            <hr />
        </div>
    )
}
export default Counter2