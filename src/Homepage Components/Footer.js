import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div class="footer-basic">
      <footer>
        <div class="social">
          <a href="/#">
            <i class="icon ion-social-instagram"></i>
          </a>
          <a href="/#">
            <i class="icon ion-social-snapchat"></i>
          </a>
          <a href="/#">
            <i class="icon ion-social-twitter"></i>
          </a>
          <a href="/#">
            <i class="icon ion-social-facebook"></i>
          </a>
        </div>
        <ul class="list-inline">
          <li class="list-inline-item">
            <a href="/#">HOME</a>
          </li>
          <li class="list-inline-item">
            <a href="/#">TEAM</a>
          </li>
          <li class="list-inline-item">
            <a href="https://youtu.be/b68ujpUFjCA">CLICK ME</a>
          </li>
        </ul>
        <p class="copyright">BADMAASH COMPANY AKA DABRI BOIZ © 2022</p>
      </footer>
    </div>
  );
};
export default Footer;
