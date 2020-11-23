
import React,{Component} from 'react'
import "./App.css"

import Forex from "./components/Forex"
import Converter from "./components/Converter"

class App extends Component {
  render(){
    return (
      <div>
      <Forex/>
      <Converter />
      </div>
      
    )
  }
}

export default App;


