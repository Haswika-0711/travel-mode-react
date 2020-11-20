
import React,{Component} from 'react'
import "./App.css"
import CurrencyConverter from "./components/CurrencyConverter"
import Forex from "./components/Forex"

class App extends Component {
  render(){
    return (
      <div>
      <CurrencyConverter />
      <Forex/>
      </div>
      
    )
  }
}

export default App;


