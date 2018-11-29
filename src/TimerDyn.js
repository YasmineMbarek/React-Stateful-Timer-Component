import React from 'react';
const HMS =[{value:"Hour"},{value:"Minute"},{value:"Second"},]

let minute=0,
 hours=0,
second=0;
function convert(timeinmill){
  hours= Math.floor(timeinmill / (1000 * 60 * 60) % 60);
      minute= Math.floor(timeinmill / (1000 * 60) % 60);
    second= Math.floor(timeinmill / 1000 % 60);
   return String(hours).padStart(2, 0)+"   :   "+ String(minute).padStart(2, 0)+"   :   "+ String(second).padStart(2, 0)
}
let  Title = (props) => 
<div> 
<h4>{props.hms.value}</h4>
</div>
const Titles=(props)=>
 props.titlelist.map((el,i)=>
<div key={i}> <Title hms={el}/></div>)



const TimerDynamique = ({hms}) => {
  
    return (
      
        <div className="container">
         <div className="container-time"> <h1>
           {convert(hms)}
          </h1></div>
          <div className="container-hms">
         
          <Titles titlelist={HMS}/>
          </div>
          

      </div>
    );
 
}

export default TimerDynamique;