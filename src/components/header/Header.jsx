import Nav from "../nav/Nav";
import "./header.css";
import vow from "../../assets/video.mov";
const Header = () => {
  return (
    <div className="header_container">
      <div className="video">
        <video autoPlay playsInline loop muted className="videos" src={vow} />
      </div>
      <Nav />
      <div className="inside_header">
        <div className="couple_name_section">
          <h2 className="couple_name">J</h2>
          <h2 className="couple_name">M</h2>
        </div>

        <h2 className="full_name">Jaslene  & Mišel  </h2>

        <h3 className="date">September 11 2026</h3>
      </div>
    </div>
  );
};

export default Header;
