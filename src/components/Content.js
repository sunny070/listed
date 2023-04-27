import React from "react"
import Login from "./Login"

function Content(){
return <div>
        <div className="heading">
        <img src="./images/background.jpg" alt="startingimage"/> 

        </div>
        <div className="heading-text" >
            
        <img className="listed"  src="./images/listedLogo.svg" alt=""/>
            <h1>We are a Lab
                
             Building Products<br/>
                for the Creator Economy
            </h1>
                <Login/>
        </div>
        
        </div>
        
}
export default Content;
