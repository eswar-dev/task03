import React from "react";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';



const Card = (props) => {
    console.log(props);
    const percentage = Number(props.percentage)
    console.log(percentage);
    return (
        
                        
        
        <div className="card m-2 col-md-3" >
            <div className="card" >
                        
           <img src={props.image} className="card-img-top" alt="..."/>
            <div className="card-body"  >
                
                
                <h5 className="card-title">course title: <h6>{props.title}</h6></h5>
                <p className="card-text"><h5>Course description:</h5>{props.description}</p>
                <h5 className="card-progress">course progress: <h6>{props.progress}</h6></h5>
                
                <div style={{display:'flex',justifyContent:'center'}}>
                <div style={{width:"100px",height:"100px"}}>
                     <CircularProgressbar style={{display:'flex',justifyContent:'center'}} value={percentage} text={`${percentage}%`} />
                </div>
                </div>
                </div>
                
            </div>
            </div>
            
            

        
    )
}

export default Card;
