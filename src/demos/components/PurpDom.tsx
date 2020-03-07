/** 
 * 纯class调用
 * PureComponent的自动为我们添加的shouldComponentUpdate函数
*/
import React, { PureComponent } from 'react'
interface IProps {
    isIProps: boolean;
}
interface IState {
    isShow: boolean;
    count: number;

}

class PurpDom extends PureComponent<IProps, IState> {
    public constructor(props: IProps) {
        super(props)
        this.state = {
            isShow: this.props.isIProps,
            count: 0
        }
    }
    /**
     * update
     */
    public update() { 
        this.setState({
            count:this.state.count + 1
        })
    }
    /**
     * name
     */
    public static defaultProps = {
        isIProps: false
    }
    public render(): any {
        return (
            <div>
                {this.state.isShow}
                <button onClick={()=>{this.update()}}>+1</button>
                {this.state.count}
            </div>
        )
    }
}
export default PurpDom