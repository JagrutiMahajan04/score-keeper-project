import './App.css';

import {useState,useEffect} from "react";
import tennis from "./tennis.gif";

function App() {

  const [scoreA,setScoreA]= useState(0);
  const [scoreB,setScoreB]= useState(0);

  useEffect(()=>{
    const  a = localStorage.getItem("scoreA");
    const  b = localStorage.getItem("scoreB");
    if(a){
      setScoreA(a);
    }
    if(b){
      setScoreB(b);
    }

  },[])

  useEffect(()=>{
    if(scoreA > 0)
    {
      localStorage.setItem("scoreA",scoreA);
    }
    if(scoreB> 0)
    {
      localStorage.setItem("scoreB",scoreB);
    }
  },[scoreA,scoreB])

  function Reset(){
    setScoreA(0);
    setScoreB(0);
    localStorage.clear();


  }

  return (
    <div className='score-keeper-container'>
    <img src= {tennis}className ="img-tennis"/>
    <h2 className='score-keeper-heading'>Tennis Score Keeper</h2>
  
    <div className='score-card-container'>
      <div className='score-card'>
        <h1 className='score-card-heading'>Player 1</h1> 
        <h6 className='score-count'>{scoreA}</h6>
        <div className='button-container'>
          <button className='score-button' onClick={()=>{setScoreA(scoreA+1)}}>+</button>
          <button className='score-button' onClick={()=>{setScoreA(scoreA-1)}}>-</button>
        </div>
      </div>
          <div>     
           <button  className='reset-button' onClick={Reset}>Reset</button>
         </div>

      <div className='score-card'>
      <h1 className='score-card-heading'>Player 2</h1> 
      <h6 className='score-count'>{scoreB}</h6>
      <div className='button-container'>
          <button className='score-button'onClick={()=>{setScoreB(scoreB+1)}}>+</button>
          <button className='score-button'onClick={()=>{setScoreB(scoreB-1)}}>-</button>
        </div>

      </div>
        

    </div>

    </div>
  );
}

export default App;
