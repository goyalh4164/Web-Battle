import React from "react";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
  AiFillGithub
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer >
      <div >
        <h1>CodeSpace</h1>
        <p>@all right reserved</p>
      </div>

      <div>
        <h5>Follow Us</h5>
        <div>
          <a href="#" target={"blank"}>
          <AiFillGithub/>
          GitHub
          </a>
          <a href="#" target={"blank"}>
            <AiFillInstagram/>
            Instagram
          </a>
          <a href="#" target={"blank"}>
            <AiFillYoutube/>
            Youtube
            
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;