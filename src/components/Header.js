import React from 'react';
import './style.css';
function Header(props)
{
    return(
<section id="header">

<div className="container">
<h1 class="white">{props.title}</h1>
</div>
</section>

)

};
export default Header;