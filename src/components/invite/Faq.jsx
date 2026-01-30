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

          {/* FAQ 1: Dual Ceremony */}
          <ul className="faq_ul">
            <li className="faq_li">What is a dual ceremony wedding?</li>
            <p className="ans">
              We are celebrating both of our cultures and faiths with two ceremonies—a Sikh ceremony and a Christian Orthodox ceremony. Guests are welcome to attend one or both, as noted on your invitation.
            </p>
          </ul>

          {/* FAQ 2: Ceremonies & Languages */}
          <ul className="faq_ul">
            <li className="faq_li">What should I know about the ceremonies?</li>
            <p className="ans">
              The Sikh ceremony will include Punjabi and English, while the Christian Orthodox ceremony will be primarily in Serbian/Church Slavonic with brief explanations in English.
            </p>
          </ul>

          {/* FAQ 3: Sikh Ceremony Etiquette */}
          <ul className="faq_ul">
            <li className="faq_li">Is there anything special to know for the Sikh ceremony?</li>
            <p className="ans">
              Modest attire is appreciated, head coverings are required, and shoes will be removed before entering. Breakfast and a light lunch will be provided.
            </p>
          </ul>

          {/* FAQ 4: Travel & Stay */}
          <ul className="faq_ul">
            <li className="faq_li">Where should I stay and how do I get around?</li>
            <p className="ans">
              We recommend staying near the city center in Belgrade. A hotel with a group rate is listed on our Stay page, and taxis and ride-sharing apps are easily available.
            </p>
          </ul>

          {/* FAQ 5: Gifts */}
          <ul className="faq_ul">
            <li className="faq_li">Are gifts expected?</li>
            <p className="ans">
              Your presence means the world to us. If you wish to give something, a card or contribution toward our future together is deeply appreciated.
            </p>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Faq;
