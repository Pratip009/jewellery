import dealsImg from "../../assets/deals.png";

const DealsSection = () => {
  return (
    <section className="section__container deals__container">
      <div className="deals__image">
        <img src={dealsImg} alt="" />
      </div>
      <div className="deals__content">
        <h5>Deals up to 20% discount</h5>
        <h4>Deals of The Month</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta vitae,
          ratione animi praesentium quae tempora deleniti eos. Quasi laborum
          esse recusandae nihil ad repellat debitis dicta. Earum pariatur quos
          doloribus.
        </p>
        <div className="deals__countdown flex-wrap">
          <div className="deals__countdown__card">
            <h4>14</h4>
            <p>Days</p>
          </div>
          <div className="deals__countdown__card">
            <h4>20</h4>
            <p>Hours</p>
          </div>
          <div className="deals__countdown__card">
            <h4>15</h4>
            <p>Mins</p>
          </div>
          <div className="deals__countdown__card">
            <h4>05</h4>
            <p>Secs</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealsSection;
