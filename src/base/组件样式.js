import React, { Component } from 'react'
import './css/index.css'   //导入外部的css文件
export default class 组件样式 extends Component {
  render() {
    var obj={
        color: "red"
        // 在这里写属性的时候要采用驼峰命名的方法将background-color写成 gackgroundColor
    }
    return (
      <div>
        app测试
        {23+34214}
        <div style={obj}>div中设置属性只能在外面自定义后再这里当作参数来使用</div>
        <div className="active">这里是外部css测试文件</div>
        <label htmlFor='name'>用户名</label>
        <input type='text' id='name'></input>
      </div>
    )
  }
}
