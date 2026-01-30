import "./sc.css";
import cers from "../../assets/cer.png";
import recs from "../../assets/rec.png";
import Nos from "../Nos";
const Schedule = () => {
  return (
    <div className="sc mosa" id="schedule">
      <div className="sc_grid">
        <div className="sc_sub tops">
          <div className="hope">
            <h2 className="text_sc" id="wedding">THE</h2>
            <h2 className="text_sc">WEDDING</h2>
            <h2 className="text_sc">DAY</h2>
            <h2 className="text_sc_p">Schedule</h2>
          </div>
        </div>
        <div className="sc_sub">
          <div className="details_section hab">
            <div className="detail_item ui mo">
              <img src={cers} alt="" className="jo" />
              <br />
              <h3 className="nb">Sikh Ceremony </h3>
              <h2 className="in_time"> 9:30 am </h2>
              <p className="aa ">
                {" "}
                September 11th 2026
                <br />
              </p>
              <p className="address r">
                <a
                  className="hep"
                  target="_blank"
                  href="https://maps.app.goo.gl/1s87KgKFJbQKFUGe8"
                >
                  {/* 2 High Meadow Pl, North York, ON M9L 2Z5 */}
                  Caledon Golf Course
                </a>
              </p>
            </div>
            <br />

            <div className="detail_item ui mo">
              <img src={cers} alt="" className="jo" />
              <br />
              <h3 className="nb"> Orthodox Ceremony </h3>
              <h2 className="in_time"> 2:00pm </h2>
              <p className="aa ">
                {" "}
                September 17th 2026
                <br />
              </p>
              <p className="address r">
                <a
                  className="hep"
                  target="_blank"
                  href="https://maps.app.goo.gl/1s87KgKFJbQKFUGe8"
                >
                  {/* 2 High Meadow Pl, North York, ON M9L 2Z5 */}
                  Hram Svetog Save
                </a>
              </p>
            </div>

            <br />

            <div className="detail_item mo">
              <img src={recs} alt="" className="jo" />
              <br />
              <h3 className="nb">Following the Orthodox Ceremony </h3>
              <h2 className="in_time">5:30 PM</h2>

              <p className="aa">Topčiderac</p>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <Nos />
      <br />
      <br />
      <br />
      <div className="sc_grid muda">
        <div className="sc_sub gio">
          <div className="details_section hab ">
            <div className="detail_item ui mo gio">
              <img src={cers} alt="" className="jo" />
              <br />
              <h3 className="nb">Lady Sangeet </h3>
              <h2 className="in_time">6:30 PM </h2>
              <p className="aa ">
                {" "}
                September 6, 2026
                <br />
              </p>
              <p className="address r yy">
                <a
                  className="hep"
                  target="_blank"
                  href="https://maps.app.goo.gl/1s87KgKFJbQKFUGe8"
                >
                  {/* 2 High Meadow Pl, North York, ON M9L 2Z5 */}
                  Caledon Golf Course
                </a>
              </p>
            </div>
            <br />

            <div className="detail_item ui mo gio">
              <img src={cers} alt="" className="jo" />
              <br />
              <h3 className="nb"> Maiyaan </h3>
              <h2 className="in_time"> 6:30pm </h2>
              <p className="aa ">
                {" "}
                September 9, 2026
                <br />
              </p>
              <p className="address r yy">
                <a
                  className="hep"
                  target="_blank"
                  href="https://maps.app.goo.gl/1s87KgKFJbQKFUGe8"
                >
                  {/* 2 High Meadow Pl, North York, ON M9L 2Z5 */}
                  Hram Svetog Save
                </a>
              </p>
            </div>

            <br />

            <div className="detail_item ui mo gio">
              <img src={cers} alt="" className="jo" />
              <br />
              <h3 className="nb"> Welcome Party </h3>
              <h2 className="in_time"> TBD </h2>
              <p className="aa ">
                {" "}
                September 16, 2026
                <br />
              </p>
              <p className="address r yy">
                <a
                  className="hep"
                  target="_blank"
                  href="https://maps.app.goo.gl/1s87KgKFJbQKFUGe8"
                >
                  {/* 2 High Meadow Pl, North York, ON M9L 2Z5 */}
                  Belgrade, Serbia
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="sc_sub ">
          <div className="hopes">
            <h2 className="text_sc">THE</h2>
            <h2 className="text_sc">PRE</h2>
            <h2 className="text_sc">WEDDING</h2>
            <h2 className="text_sc_p">Schedule</h2>
            <div className="doha">
              <div className="ab_titles">
                <h2 className="ab_title">Select guests only</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
