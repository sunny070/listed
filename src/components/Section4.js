import React from "react";
import { useAuth0 } from "@auth0/auth0-react";


function Section4(){
    const { loginWithRedirect } = useAuth0();
    return <div className="sec4">
    <div className="section4">
        <img src="./images/Illustrations 3.png" alt="Illustration1"/>
    </div>
        <div className="section4-text">
            <h2>We have a Fix !</h2>
        <p>
            <br/>
So we fixed this problem of sub-optimal user experiences by building
 a tool that ensures all social media links open in the apps they should. 
 It’s called OpeninApp
            <br/>
            <br/>
            <div className="icon1">
                <img src="./images/globe icon.svg" alt=""/>
            <p>
                <span> <strong>130 Mn+</strong> </span>
                Redirects Served
            </p>
            </div>
            <div className="icon2" >
                <img src="./images/Users Icon.svg" alt=""/>
            <p>
                <span><strong>100,000+</strong> </span>
                Creators Using
            </p>

            </div>
            </p>
            <button onClick={() => loginWithRedirect()} style={{textDecoration:"none"}} >
             Get Started For Free
            </button>
        </div>

        </div>
}
export default Section4;