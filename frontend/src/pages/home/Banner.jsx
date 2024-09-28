import { Link } from "react-router-dom";
import bannerImg from "../../assets/header.png"
const Banner = () => {
  return (
    <div className="section__container header__container">
      <div className="header__content z-30">
        <h4 className="uppercase">UP TO 20% Discount on</h4>
        <h1>Girl&apos;s Fashion</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          impedit eos laboriosam magnam facilis illo soluta, quo nostrum autem
          dolorem fuga, neque ipsa perferendis. Reiciendis recusandae aspernatur
          molestiae minus temporibus.
        </p>
        <button className="btn"><Link to="/shop">EXPLORE MORE</Link></button>
      </div>
      <div className="header__image">
        <img src={bannerImg} alt="banner image" />
      </div>
    </div>
  );
};

export default Banner;
