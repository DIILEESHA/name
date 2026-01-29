import "./in.css";
import eight from "../../assets/us3.jpg";

const Faq = () => {
  return (
    <div className="invite" id="faq">
      <div className="nvite_grid">
        <div className="in_sub">
          <img src={eight} alt="Wedding Couple" className="in_img hayyo" />
        </div>

        <div className="in_sub text_content">
          <h4 className="top_invite_textS">FREQUENTLY ASKED QUESTIONS</h4>

          {/* FAQ 1: Dress Code */}
          <ul className="faq_ul">
            <li className="faq_li">What is the dress code?</li>
            <p className="ans">
              We would love for our guests to dress elegantly. The dress code is Black Tie—formal gowns, tuxedos, or sophisticated suits are perfect for the celebration.
            </p>
          </ul>

          {/* FAQ 2: Ceremony Times */}
          <ul className="faq_ul">
            <li className="faq_li">When are the ceremonies?</li>
            <p className="ans">
              The Sikh Ceremony will be on September 11 at 9:30 AM, and the Orthodox Ceremony will be on September 17 at 2:00 PM.
            </p>
          </ul>

        

          {/* FAQ 4: Hotel for Guests */}
          <ul className="faq_ul">
            <li className="faq_li">Where can guests stay?</li>
            <p className="ans">
              Guests can stay at Hotel Balkan. A discounted rate will be available in March, and a booking code will be provided on the hotel website.
            </p>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Faq;
