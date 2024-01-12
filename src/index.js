import React from "react" //引入react核心包
import  ReactDOM  from "react-dom/client" //将组件渲染到页面中去
import App from './base/事件绑定'
// ReactDOM.render(<div>这个写法和楼下的是一样的</div>,document.getElementById("root"))
// ReactDOM.createRoot(document.getElementById("root"))
// // .render(React.createElement("div",{id:"onamh",className:"hwm"},"233243242"));
// .render(<App></App>)
let dom = ReactDOM.createRoot(document.getElementById("root"))
dom.render(<App/>)