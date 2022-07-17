import React, { Component } from 'react';
import { FaUserGraduate } from "react-icons/fa";
import { IconContext } from "react-icons";
    class Profession extends Component {
        render() { 
  return (
    <IconContext.Provider value={{ color: "black", size: "1.5em" }}>
  
    <div class="card bg-dark text-white">
  
  
  <div class="card-img-overlay">
    <FaUserGraduate />
    <h5 class="card-title"><b>Profession</b></h5>
    <p class="card-text">I am currently a student at GO My Code and I am a hight school student in pionneer of Beja (2nd Year section of science).
    <br> I got a certificate in GoMyCode in the field of introduction of web devolopment</br></p>
    <p class="card-text"><b>SKIILS</b> <br/> -HTML/CSS <br/> -JAVASCRIPT <br/> -REACT.js <br/> </p>
    
  </div>
</div>
    </IconContext.Provider>
  );
}}
export default Profession;
