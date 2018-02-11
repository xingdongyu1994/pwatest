import React from 'react'
import {Link} from 'react-router'
import imgs from '../img/1.jpg'

class App extends React.Component {
  render() {
    console.log("11111111",this.props)
     return (
      <div>
        <div>
          <a><Link to='/page'>首页</Link></a>
          <a><Link to='/other'>其他</Link></a>
        </div>
        <div>
          <img src={imgs}/>
          {this.props.children}
        </div>
      </div>
    )}
 }
export default App
