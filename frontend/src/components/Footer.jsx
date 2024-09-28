import insta1 from "../assets/instagram-1.jpg";
import insta2 from "../assets/instagram-2.jpg";
import insta3 from "../assets/instagram-3.jpg";
import insta4 from "../assets/instagram-4.jpg";
import insta5 from "../assets/instagram-5.jpg";
import insta6 from "../assets/instagram-6.jpg";

const Footer = () => {
  return (
    <>
      <footer className="section__container footer__container">
        <div className="footer__col">
          <h4>CONTACT INFO</h4>
          <p>
            <span>
              <i className="ri-map-pin-fill"></i>
            </span>
            84 , Biren Roy Road(E) , Kolkata-08
          </p>
          <p>
            <span>
              <i className="ri-mail-fill"></i>
            </span>
            pratipkayal1@gmail.com
          </p>
          <p>
            <span>
              <i className="ri-phone-fill"></i>
            </span>
            +91 86978-87942
          </p>
        </div>
        <div className="footer__col">
          <h4>COMPANY</h4>
          <a href="/">Home</a>
          <a href="/">About Us</a>
          <a href="/">Work With Us</a>
          <a href="/">Our Blogs</a>
          <a href="/">Terms & Conditions</a>
        </div>
        <div className="footer__col">
          <h4>USEFUL LINKS</h4>
          <a href="/">Help</a>
          <a href="/">Track My Order</a>
          <a href="/">Men</a>
          <a href="/">Women</a>
          <a href="/">Dresses</a>
        </div>
        <div className="footer__col">
          <h4>INSTAGRAM</h4>
          <div className="instagram__grid">
            <img src={insta1} alt="" />
            <img src={insta2} alt="" />
            <img src={insta3} alt="" />
            <img src={insta4} alt="" />
            <img src={insta5} alt="" />
            <img src={insta6} alt="" />
          </div>
        </div>
      </footer>
      <div className="footer__bar">
        copywrite © 2024 by Pratip. All Rights Reserved. Privacy Policy | Terms
        & Conditions
      </div>
    </>
  );
};

export default Footer;
