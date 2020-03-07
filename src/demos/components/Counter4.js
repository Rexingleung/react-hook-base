/* @flow */
import React, {useState, useCallback} from 'react';
/*

	* 减少渲染次数

        * 把内联回调函数以及依赖项数组作为参数传入useCallback , 它将返回改回调函数的memoized版本 , 该回调函数仅在某个依赖项改变时才会更新
        * 把传进函数和依赖项数组作为参数传入 useMemo , 它仅会在某个依赖项改变时才会重新计算 , memoized值 , 这种优化有助于避免在每次渲染时都进行很大的开销计算

*/
let lastAddClick;
let lastChangeName
const Counter4 = () => {
    let [number,setNumber] = useState(0)
    let [name, setName] = useState('hanmeimmei')
    // 只有在依赖的变量更新
    const addClick = useCallback(() => setNumber(number + 1),[number])
    // 会在每次渲染的时候都会生成一个新的函数
    // const addClick = () => {
    //     return setNumber(number + 1)
    // }
    console.log(lastAddClick === addClick,'lastAddClick === addClick');
    lastAddClick = addClick

    const changeName = useCallback(() => setName(Date.now()),[name])
    // 会在每次渲染的时候都会生成一个新的函数
    // const addClick = () => {
    //     return setNumber(number + 1)
    // }
    console.log(lastChangeName === changeName, 'lastChangeName === lastChangeName');
    lastChangeName = changeName
    
    return (
        <div>
            <p>{number}:{ name } </p>
            <button onClick={addClick}>addClick</button>
            <button onClick={changeName}>changeName</button>
            <hr />
        </div>
    )
}
export default Counter4