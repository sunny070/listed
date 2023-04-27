import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function Section2(){

   
        const { loginWithRedirect } = useAuth0();
        const { logout } = useAuth0();
        const { user, isAuthenticated } = useAuth0();
   
    
    return <div className="sec2">
    <div className="section2">
        <img src="./images/Illustrations 1.png" alt="Illustration1"/>
        {isAuthenticated&&<p>{user.name}</p>}
        </div>
        <div className="section2-text">
            <h2>What’s Broken?</h2>
        <p>Almost all your favorite creators on Instagram share 
            links to their latest YouTube videos in their bio or stories. 
            But whenever you tap on those links, you get redirected to the YouTube 
            website instead of the YouTube app.
            <br/>
            <br/>
            And here you can’t watch the video in full screen nor 
            can you like it, comment on it or subscribe to the
            channel
            </p>
            {
                isAuthenticated?<button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                Log Out
              </button> :
           
            <button onClick={() => loginWithRedirect()}>Learn More</button>
}

            {/* <button>
            <a href="https://www.youtube.com/@listedfans">Learn More</a>
            </button> */}
        </div>

        </div>
}
export default Section2;