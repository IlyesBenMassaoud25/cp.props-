import React from "react";
import FullName from "./Components/Profile/FullName";
import Bio from "./Components/Profile/Bio";
import Profession from "./Components/Profile/Profession";

function App() {
  const handleEvent = () => {
    alert(`${this.props.FullName}`);
  };
  return (
    <>
   {/* <header id="home">
    <Header/>
    </header> */}
    <div style={{margin:"150px 100px",fontSize:"1.2rem"}}>
    <h1>Self-Profile </h1> 
      <FullName firstName="Ilyes" lastName="Ben Massaoud">
      
            </FullName>
      {/* <br/> */}
      <div style={{border:"black double",  marginTop:"25px",}} id="about">
      <Bio FullName="Ilyes Ben Massoaud" Age="16"  Interests="FootBall player,Farming ,Taking care of animals, Travelling "  />
      </div>
      {/* <br/> */}
      <div id="profession"><Profession/></div>
      <button onClick={handleEvent}>User</button>
    </div>
    {/* <footer id="contact">
      <Footer/>
      </footer> */}

    </>
  );
}
export default App;