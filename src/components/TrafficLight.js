import React from 'react'
import Light from './Light';


function TrafficLight(props){
    return(
        <div className='traffic-light-container'>
            <div className='section-container'>
                <div className='section-container'>
                    <Light state={props.stateOfTrafficLight[1]} />    
                    <Light state={props.stateOfTrafficLight[2]} />   
                    <Light state={props.stateOfTrafficLight[3]} />    
                </div> 
            </div>  
        </div>
    );
}

export default TrafficLight