import React, { Component } from 'react'
import App from './hansu'
//{component} 表示导入大括号外边组件的某个功能这样在下面使用就不用   react.component来导入这个组件了
export default class Qiantao extends Component {
  render() {
    return (
      <div>
        <App></App>
    <Navbar></Navbar>
    <Swiper></Swiper>
      </div>
    )
  }
}

// 子类组件
class Navbar extends Component {
    render() {
  return <h3>测试成功，失败还是都没有</h3>
    
    }
}
function Swiper(){
    return(
        
    <div>这里是函数构造函数
        {/* 子类组件中嵌套组件 */}
        <App></App>
    </div>
    ) 
}
