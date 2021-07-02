import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './style.css'

let Greet = () =>  {
    
    return (
        <React.Fragment>
            <h1>Hello, world! 这一个一段关于中文的测试</h1>
            <a>这个一个链接</a>   
        </React.Fragment>
    )
}
// console.log(Server.renderToString(<Greet />))

ReactDOM.render(
    <Greet/>,
    document.getElementById('app')
)