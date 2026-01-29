import "./in.css";
import eight from "../../assets/us3.jpg";

const Faq = () => {
  return (
    <div className="invite" id="faq">
      <div className="nvite_grid">
        <div className="in_sub">
          <img src={eight} alt="Martin and Chantel" className="in_img hayyo" />
        </div>

        <div className="in_sub text_content">
          <h4 className="top_invite_textS">FREQUENTLY ASKED QUESTIONS</h4>

          {/* FAQ 1: Dress Code */}
          <ul className="faq_ul">
            <li className="faq_li">What is the dress code?</li>
            <p className="ans">
              We would love for our guests to dress up with us! The dress code is
              <strong> Black Tie</strong>. Think elegant gowns, tuxedos, or formal suits—perfect for a night of sophistication and celebration.
            </p>
          </ul>

          {/* FAQ 2: Arrival Time */}
          <ul className="faq_ul">
            <li className="faq_li">What time should I arrive?</li>
            <p className="ans">
              The ceremony will begin promptly at 3:30 PM. We kindly ask guests
              to arrive at Good Shepherd Chaldean Cathedral by 3:00 PM to be
              seated.
            </p>
          </ul>

          {/* FAQ 3: Reception Time */}
          <ul className="faq_ul">
            <li className="faq_li">What time is the reception?</li>
            <p className="ans">
              The reception will begin at <strong>6:30 PM</strong>. We look forward to celebrating together!
            </p>
          </ul>

          {/* FAQ 4: Transportation/Parking */}
          <ul className="faq_ul">
            <li className="faq_li">Is there parking available?</li>
            <p className="ans">
              Yes, there is ample free parking available at both the Good
              Shepherd Cathedral and The Venetian Banquet Hall for all guests.
            </p>
          </ul>

          {/* FAQ 5: RSVP Deadline */}
          <ul className="faq_ul">
            <li className="faq_li">When should I RSVP by?</li>
            <p className="ans">
              Please let us know if you can join us by <strong>April 1, 2026</strong>. You can RSVP directly through this website.
            </p>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Faq;
