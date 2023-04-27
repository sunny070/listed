import React from "react";

function Footer() {
    return <div className="last">
        <div className="text">
            <h2>Listed Inc</h2>
            <p className="p"> 1007 North Orange St., 4th Floor, Wilmington,
                New Castle, Delaware - 19801</p>
            <div className="text1">
                <p>
                    <a href="#"> Listed.fans @ 2022</a>
                    | All rights reserved
                </p>

            </div>
        </div>
        <div className="text"> 
            <div>
                <h4>Follow us on</h4>
                <div className="a">
                    <a href="https://www.instagram.com/listedfans/">
                        <img src="./images/instagram.svg"/>
                    </a>
                    <a href="https://www.linkedin.com/company/listed-fans/">
                        <img src="./images/linkedin.svg "/>
                    </a>
                    <a href="https://twitter.com/ListedFans">
                        <img src="./images/twitter.svg " />
                    </a>
                </div>
            </div>

        </div>
    </div>

}
export default Footer;