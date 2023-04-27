import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function Section1(){

        const { loginWithRedirect } = useAuth0();

    return <div className="section1">

    <a onClick={() => loginWithRedirect()} href="https://openinapp.com/"><img  src="./images/openinapplogo1.svg" alt="logo"/> </a>

        </div>
}
export default Section1;