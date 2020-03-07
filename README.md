[TOC]
### React Hooks
- 这是react 16.8新增的特性 , 他可以让你在编写class的情况下使用state以及其他React特性
- 如果你在编写函数组件并意识到需要向其添加一些state , 以前的做法是必须将其它转化为class , 现在你可以在现有的函数组件中使用Hook

### 解决的问题
- 在组件之间复用状态逻辑很难 , 可能要用到render props和告诫组件 , react 需要为共享状态逻辑提供更好的原生途径 , Hook使你在无需修改组件结构的情况下复用状态逻辑
- 复杂组件变得难以理解 , Hook将组件中相互关联的部分拆分成更小的函数( 比如设置订阅或请求数据 )
- 难以理解的class , 包括难以捉摸的this

### 注意事项
- 只能在函数最外层调用Hook, 不要在循环 , 条件判断或者子函数中调用
- 只能在React的函数中调用Hook , 不要在其他JavaScript函数中调用

### React Hooks API
#### useState
- 通过在函数组件里面调用它来给组件添加一些内部state , React会在重复渲染时保留这个state
- useState 会返回两个值 , 一个当前状态和一个让你更新他的函数 , 你可在事件处理函数中或其他一些地方调用这个函数, 他类似class组件的this.setState , 但是它不会吧新的state和旧的state进行合并
- useState唯一的参数就是初始state
- 返回一个state , 以及更新的state
    - 在初始化渲染期间 , 返回的状态( state )与传入的第一个参数( initialState )值相同
    - setState 函数用于更新state , 他接受一个新的state值并将组件的一次重新渲染加入队列

##### 每次渲染都是独立的闭包
- 每一次渲染都有自己的Props and State
- 每一次渲染都有他自己的时间处理函数
- alert 会捕获我点击按钮时候的状态
- 我们的组件函数每次渲染都会被调用 , 但是每一次调用中state值都是常量 , 并且他被赋予了当前渲染中的状态值
- 在单次渲染的范围内 , props和state始终保持不变

对于第一点例子
```js

import React, {useState} from 'react';
const Counter1 = () => {
    let [state, setState] = useState({number: 0});
    const alertNumber = () =>{ 
        setTimeout(function(){
            alert(state.number)
        },3000)
    }
    return (
        <div>
            <p>{ state.number } </p>
            <button onClick={()=> setState({ number: state.number + 1 })}> +</button>
            <button onClick={alertNumber}> 弹出number</button> {/* 这里我弹出number是 , 是弹出来之前的state.number , 我点击后这个方法后 , 不管后面怎么变 */}
        </div>
    )
}
export default Counter1
```
当然对于上述 , 每次渲染调用该函数的时候 , 都有自己的state 和 props 我们可以通过主动传state和props值给他 , 来获取最新的state和props值
例子
```js

import React, {useState} from 'react';
const Counter1 = () => {
    let [state, setState] = useState({number: 0});
    const alertNumber = () =>{
        setTimeout(function(){
            alert(state.number)
        },3000)
    }
    const lazyAdd = () =>{
        setTimeout(function(){
            setState(state => ({number: state.number + 1})) // 这里将当前的state的值传给setState
        },5000)
    }
    return (
        <div>
            <p>{ state.number } </p>
            <button onClick={()=> setState({ number: state.number + 1 })}> +</button>
            <button onClick={alertNumber}> 弹出number</button>
            <button onClick={lazyAdd}> lazyAdd</button> // 延迟5秒进行加一
        </div>
    )
}
export default Counter1
```

#### 惰性处理state
- initialState参数只会在组件的初始渲染中起作用 , 后续渲染是会被忽略
- 如果出事state需要通过复杂计算获得 , 则可以传入一个函数 , 在函数中计算并返回初始的state , 此函数只在初始渲染是被调用
- 与class组件中的setState方法不同 , useState不会自动合并更新对象 , 你可以用函数式的setState结合展开运算符来达到合并更新的效果

#### reactHook 性能优化
- 调用StateHook 的更新函数并传入当前的state时 , React将跳过子组件的渲染及effect的执行 , ( React使用Object.is比较算法来比较state )
- 减少渲染次数
    - 把内联回调函数以及依赖项数组作为参数传入useCallback , 它将返回改回调函数的memoized版本 , 该回调函数仅在某个依赖项改变时才会更新
    - 把传进函数和依赖项数组作为参数传入 useMemo , 它仅会在某个依赖项改变时才会重新计算 , memoized值 , 这种优化有助于避免在每次渲染时都进行很大的开销计算