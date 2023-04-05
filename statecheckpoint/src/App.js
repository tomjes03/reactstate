import './App.css';
//import component from react in a class component
import { Component } from 'react'

//write the class component
class App extends Component {
  //Declare your state
  state = {
    show:"false",
    count: 0,
    date : new Date().toLocaleString(),
  }

  componentDidMount = () => {
    setInterval(() => {
      this.setState(
        prevState => ({
          count: prevState.count + 1,
          date : new Date().toLocaleString()
        })
      )
    }, 1000);
  }


 //Declare Person objects
  person = {
    name : "Adams Klean",
    profession: "Musician",
    Bio: "Manuel Iglesias draws from his life story when writing about the experiences of migrant workers. His first series of poems, My Father's Hands, appeared in The New Yorker and describes how his family crossed the Texas border to give Manuel and his brothers a better life. After receiving his Master's in Fine Arts from Columbia University, Manuel wrote three nonfiction novels about his experiences, including Under the Streaming Sun, which earned the National Prize for Arts and Sciences in 2008. Manuel is currently working on a collection of fictional short stories to be published in early 2021."

  }
  //rendering the component
  render() {
    //Modify the state using useState
    var toggle = e => {
      this.setState({show:!this.state.show})
    }

    const {count} = this.state
    const {date} = this.state

    //Get the updated show and assign it to the checIt variable
    const checkIt = this.state.show;
    //return what you want to display on the UI
    return(
      //use the empty tag to input more than one jsx and it takes no default styling
      <>
      {/* input a the toggle() in the button and assign between the opening and closing button tag    */}
       <center>
        <button className='btn' onClick={toggle}>
        {checkIt ? "click to Hide" : "click to Show"}</button> <span>{count}{date}</span>
        </center> 

      <div style={{width:"350px",marginLeft:"auto", marginRight:"auto",borderRadius:"10px", backgroundColor:"darkblue"}}>
      <div style={{
        boxShadow: "0 4px 8px 0 rgba(8, 5, 8, 0.2)",
        Width: "350px",
        textAlign: "center",
        marginTop: "20px",
        backgroundColor:"#503",
        borderRadius:"20px"
      }}>
       
        {
          checkIt && (<>
          <center>
          <img 
          src= {require("../src/randomprofile.jpg")}
          alt="random profile" 
          style={{textAlign:"center", width:"150px", borderRadius:"10px", marginTop:"10px"}} />
          </center>
          {this.person.name}
          <h2 style={{fontFamily:"fantasy", color:"AppWorkspace"}}>{this.person.profession}</h2>
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
