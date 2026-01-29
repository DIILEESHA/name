import "./in.css";
import eight from "../../assets/us.jpg";
import cers from "../../assets/cer.png";
import recs from "../../assets/rec.png";

const Invite = () => {
  return (
    <div className="invite">
      <div className="nvite_grid">
        <div className="in_sub">
          <img src={eight} alt="Martin and Chantel" className="in_img" />
        </div>

        <div className="in_sub text_content">
          <h4 className="top_invite_text">You're Invited</h4>

          <p className="bible_verse">
            “So they are no longer two, but one flesh. Therefore, what God has
            joined together, let no one separate.”
            <br />
            <span>— Matthew 19:6</span>
            <br />
            <br />
          </p>

          {/* <h2 className="names_title">Martin & Chantel</h2>
          <p className="invite_msg">invite you to celebrate their wedding</p> */}

          <div className="details_section">
            <div className="detail_item maj">
              <img src={cers} alt="" className="jo" />
              <br />
              <h3 className="nb">Sikh Ceremony</h3>
              <h2 className="in_time">9:30 AM</h2>
              <p className="aa">
                September 11th, 2026
                <br />
                Caledon Golf Course
              </p>
              <p className="address">
                <a
                  className="hep"
                  target="_blank"
                  href="https://maps.app.goo.gl/FR6rR1FFYXtDR6C46"
                >
                  Location Link
                </a>
              </p>
            </div>

            <div className="detail_item maj">
              <img src={recs} alt="" className="jo" />
              <br />

              <h3 className="nb">Orthodox Ceremony </h3>
              <h2 className="in_time">2:00 PM</h2>

              <p className="aa">
                September 17th, 2026
                <br />
                Hram Svetog Save
              </p>
              <a
                href="https://maps.app.goo.gl/MXPks7ScFQBUkfZA6"
                target="_blank"
                className="hep"
              >
                <p className="address">Location Link</p>
              </a>
            </div>
          </div>

          {/* <h1 className="invite_title">We await your presence</h1> */}
        </div>
      </div>
    </div>
  );
};

export default Invite;
