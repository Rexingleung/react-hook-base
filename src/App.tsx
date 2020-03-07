import React from 'react';
// import SimpleComponent from './demos/components/SimpleComponent'
// import PurpDom from './demos/components/PurpDom'
import Counter1 from './demos/components/Counter1';
import Counter2 from './demos/components/Counter2';
import Counter3 from './demos/components/Counter3';
import Counter4 from './demos/components/Counter4';

function App() {
  return (
    <div className="App">
      {/*<SimpleComponent />
      <PurpDom /> */}
      <hr />
      * 每一次渲染都有自己的Props and State
      <br/>
	* 每一次渲染都有他自己的时间处理函数
  <br/>
	* alert 会捕获我点击按钮时候的状态
  <br/>
	* 我们的组件函数每次渲染都会被调用 , 但是每一次调用中state值都是常量 , 并且他被赋予了当前渲染中的状态值
  <br/>
	* 在单次渲染的范围内 , props和state始终保持不变
      <Counter1 />
      <hr />
      *惰性处理state
      <br/>
        * initialState参数只会在组件的初始渲染中起作用 , 后续渲染是会被忽略
        <br/>
        * 如果出事state需要通过复杂计算获得 , 则可以传入一个函数 , 在函数中计算并返回初始的state , 此函数只在初始渲染是被调用
        <br/>
        * 与class组件中的setState方法不同 , useState不会自动合并更新对象 , 你可以用函数式的setState结合展开运算符来达到合并更新的效果
        <br/>
    * initialState 初始化参数只会有组件初始渲染的时候调用 , 后续渲染会被忽略
      <Counter2 />
      <hr />
      <br/>
      * 调用StateHook 的更新函数并传入当前的state时 , React将跳过子组件的渲染及effect的执行 , ( React使用Object.is比较算法来比较state )
      <Counter3 />
      <hr />
      * 减少渲染次数
      <br/>
        * 把内联回调函数以及依赖项数组作为参数传入useCallback , 它将返回改回调函数的memoized版本 , 该回调函数仅在某个依赖项改变时才会更新
        <br/>
        * 把传进函数和依赖项数组作为参数传入 useMemo , 它仅会在某个依赖项改变时才会重新计算 , memoized值 , 这种优化有助于避免在每次渲染时都进行很大的开销计算
        <br/>
      <Counter4 />
      <hr />
    </div>
  );
}

export default App;
