import "./sc.css";

const Hotel = () => {
  return (
    <div className="nio hpo">
      <h2 className="dress_sub ba">Hotel Details</h2>

      <div className="hotel-info">
        <br />
        <h3 className="dress_title po">Hotel Balkan</h3>
    
        <p className="dress_para jom">
          <em>Note:</em> There will be a discounted price for our guests for the
          month of March. We will provide a booking code for our guests on the
          website.
        </p>

            <p className="dress_title po uu">
          <strong>Website:</strong>{" "}
          <div className="bosi">
            <a
              href="https://hotelbalkanbeograd.com/en/"
              target="_blank"
              className="balki"
              rel="noopener noreferrer"
            >
Book Now
            </a>
          </div>
        </p>
      </div>
    </div>
  );
};

export default Hotel;
