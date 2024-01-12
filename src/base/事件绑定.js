import React, { Component } from 'react'

export default class App extends Component {
myref=React.createRef();
state = {
  list:[]
}
render() {
  return (
    <div>
      <input type='text' ref={this.myref}></input>
      <button onClick={
        ()=>{
          //不建议使用楼下的方法建议使用一个新的参数来复制原有参数然后将新的参数赋值给原来的list中
         this.state.list.push(this.myref.current.value)//得到input中的值
         this.setState({list:this.state.list})//手动刷新stats中的数据然后也会重新进行渲染
            //三个点表示展开数组，也就是去掉 【】
        //  let mymessage = [...this.state.list];//建议使用这种方法
        //  mymessage.push(this.myref.current.value)
        //  this.setState({list:mymessage})
        }
      }>发送</button>
       <ul>
        {
          this.state.list.map((item,index)=>{
            return (
            <li key={index}>{item}
            <button onClick={this.handlerDelete}>删除文件</button>
            </li>
          )
          })
        }
      </ul>
    </div>
  )
}
handlerDelete(){
console.log("我来了")

// this.state.list.slice()| concat()  也是表示后去数组虽然方法并不是用来获取数组的
// this.state.list.splice(index,1 )
}
}
