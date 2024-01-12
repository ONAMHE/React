// class Test {    
//     constructor(){
//         this.name = 'test';
//     }
//     testa(){
//         console.log("nd")
//     }
// }
// class Test2 extends Test(){继承另一个对象同时拥有他的方法和参数
//     constructor(){
//         super();
//         this.name = 'test2';
//     }
//     testb(){
//         console.log("nd")
//     }
// }
import React from "react";
// import App from "./hansu";
class App extends React.Component{//只有继承这个类才能渲染组件
    render(){
        return(
                    <div>
                        <h1>何文茂 你好啊</h1>
                        <h2>我是测试</h2>
                    </div>
                )
    }
}
export default App;