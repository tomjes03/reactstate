import './App.css';
import { Component } from 'react'

class App extends Component {
  state = {
    show:"false"
  
  }

  person = {
    name : "Adams Klean",
    profession: "Musician",
    Bio: "Manuel Iglesias draws from his life story when writing about the experiences of migrant workers. His first series of poems, My Father's Hands, appeared in The New Yorker and describes how his family crossed the Texas border to give Manuel and his brothers a better life. After receiving his Master's in Fine Arts from Columbia University, Manuel wrote three nonfiction novels about his experiences, including Under the Streaming Sun, which earned the National Prize for Arts and Sciences in 2008. Manuel is currently working on a collection of fictional short stories to be published in early 2021."

  }
  
 

  render() {
    var toggle = e => {
      this.setState({show:!this.state.show})
    }
    const checkIt = this.state.show;
      const styleCard = {
        boxShadow: "0 4px 8px 0 rgba(8, 5, 8, 0.2)",
        Width: "200px",
        textAlign: "center",
        marginTop: "20px",
        backgroundColor:"#ffe",
        borderRadius:"20px"
      }
    return(
      <>
       <center><button onClick={toggle}>{checkIt ? "Hide" : "Show"}</button></center>
      <div style={{marginLeft:"auto", marginRight:"auto", width:"370px", backgroundColor:"darkblue"}}>
      <div style={styleCard}>
       
        {
          checkIt && (<>
          <center>
          <img 
          src= {require("../src/randomprofile.jpg")}
          alt="random profile" 
          style={{textAlign:"center", width:"150px", borderRadius:"10px", marginTop:"10px"}} />
          </center>
          {this.person.name}
          <h2>{this.person.profession}</h2>
          <p className='biop'><span className='bio'>Bio</span><br/>{this.person.Bio}</p>
          </>)
        }
      </div>
      </div>
      </>
    )
  }
}

export default App;
