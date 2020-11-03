import React from 'react';
import './style.css';
function Member(props)
{
    return(
        <div class="col-md-3   profile-pic text-center">
              <div class="img-box">
                <img
                  src={props.img_p}
                  class="img-responsive" alt=""
                />
              
              </div>
              <h2>{props.name}</h2>
      
         
            </div>

)

};
export default Member;