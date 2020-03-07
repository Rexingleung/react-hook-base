/* @flow */
import React, {useState} from 'react';
/*

	* 调用StateHook 的更新函数并传入当前的state时 , React将跳过子组件的渲染及effect的执行 , ( React使用Object.is比较算法来比较state )


*/
const Counter3 = () => {
    let [state, setState] = useState(function(){
        return {number: 0,name: "计数器"}
    });
    console.log('counter5 render');
    return (
        <div>
            <p>{state.name}:{ state.number } </p>
            <button onClick={()=> setState({ ...state, number: state.number + 1 })}> +</button> {/*这里需要手动合并state的值*/}
            <button onClick={()=> setState(state)}> 没更新操作</button> {/*直接传入老的state状态不更新*/}
            <hr />
        </div>
    )
}
export default Counter3