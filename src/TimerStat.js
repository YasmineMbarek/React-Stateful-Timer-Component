import React from 'react';
import TimerDynamique from './TimerDyn';
class Timer extends React.Component{
    constructor(props){
      super(props)
      this.state={
        timer:0,
        status:false
      }
      
    }
    handleClick = () => {
      this.setState(state => {
        if (state.status) {
          clearInterval(this.timer1);
        } else {
          const startTime = Date.now() - this.state.timer;
          this.timer1 = setInterval(() => {
            this.setState({ timer: Date.now() - startTime });
          });
        }
        return { status: !state.status };
      });
    };
    handleReset = () => {
        this.setState({ timer: 0, status: false });
      };
    render(){
      const { status } = this.state;
      return (
        
          <div >
           <h3>
           <TimerDynamique hms={this.state.timer}/>
           </h3>
           <div className="container-startReset">
            <button onClick={this.handleClick}>{status ? 'Stop' : 'Start'}</button>
            <input  className="reset" type="submit" value="Reset" onClick={this.handleReset}/>
          </div>
           
    
            
        </div>
      );
   
  
    }
  }
  
 
export default Timer ;