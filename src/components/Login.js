import React from "react"
import { useAuth0 } from "@auth0/auth0-react";


function Login(){
  const { loginWithRedirect } = useAuth0();
    return <div className="box">
      <p>OurProducts</p>  
    <div className="boxitem1">
    
    <a href="https://openinapp.com/"><img src="./images/openinapplogo.svg" alt="logo"/> </a>
    </div>
    <div className="boxitem2">
    <h4>
        <a onClick={() => loginWithRedirect()} href="https://openinapp.com/"><img src="./images/listedDarklogo.svg" alt="logo"/></a>

    </h4>
    </div>
    </div>
}
export default Login;