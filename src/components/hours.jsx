import React from 'react'

function Hours(){
    var timeOfDay;
    if(hrs>4 && hrs<12){
      timeOfDay="goodMorning";
    }else if(hrs>12 && hrs<17 ){
      timeOfDay="GoodAfternoon";
  
    }else if(hrs>17 && hrs<20){
      timeOfDay="evening";
  
    } else{
      timeOfDay="goodNight";
  
    }
    var date=new Date();
    var hrs= date.getHours();
  
    return(
  <>
  <h1> <Display name="bob" time={timeOfDay}/> </h1>
  </>
    );
  }
  
  export default Hours;
  
  function Display(props){
    // console.log(name)
    return(
  
      <h1>
  {props.time} {props.name}
      </h1>
    );
  }
