/** 
 * 普通class调用
*/
import React, { Component } from 'react'
interface IProps {
    propsShow: boolean
}
interface IState {
    isShow: boolean
}
class SimpleComponent extends Component<IProps,IState> {
    public constructor(props: IProps){
        super(props)
        this.state = {
            isShow: false
        }
    }
    static defaultProps = {
        propsShow: false
    }
    public render(){
        // return (
        //     <div>
        //         {this.props.propsShow}
        //         {this.state.isShow}
        //     </div>
        // )
        // return 1231
        // return [
        //     1,3,4,5
        // ]
        return <>我是占位块</>
    }
}
export default SimpleComponent