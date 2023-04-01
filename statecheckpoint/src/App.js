import './App.css';
import { Component } from 'react'

class App extends Component {
  state = {
    fullName : "Adam",
    bio : "will look into it",
    imgSrc : "logo",
    profession : "Musician",
    show:"false"
  }


  render() {
    return(
      <>
      <button onClick={this.state.handleClick}>Click me</button>
      </>
    )
  }
}

export default App;
