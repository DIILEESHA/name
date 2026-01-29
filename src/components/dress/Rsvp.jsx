import "./dr.css";

const Rsvp = () => {
  return (
    <div className="dress pos">
      <div className="">
        <h2 className="dress_title po">Kindly Respond</h2>

        <h3 className="dress_sub ba">By July 10, 2026</h3>

        <p className="dress_para jom">
          We can’t wait to celebrate our special day with you. Please let us
          know if you will be joining us by the date above. Whether you are
          celebrating with us in person or from afar, we are so grateful for
          your love and support.
        </p>

        <div className="rsvp_action">
          <button className="rsvp_button">
            <a
              href="/rsvp"
              style={{ color: "inherit", textDecoration: "underline" }}
            >
              RSVP
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rsvp;
