import React from 'react';
import './style.css';

function Card(props)
{
    return(
        <div className="row"  > 
        <div className="icon mx-auto"><img src={props.icon}/></div>
        <p className="about-para">{props.para}</p></div>
    

)

};
export default Card;