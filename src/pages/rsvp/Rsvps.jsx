import { useState } from "react";
import "./rs.css";
import { House } from "lucide-react";
import { db } from "./firebaseConfig";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Rsvps = () => {
  const [attending, setAttending] = useState("");
  const [guestCount, setGuestCount] = useState("1"); // string to allow typing/delete

  const [formData, setFormData] = useState({
    guests: [{ firstName: "", lastName: "" }],
    meal: "",
    dietary: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // Update guest count & inputs
  const handleGuestCountChange = (value) => {
    // Allow empty string while typing
    setGuestCount(value);

    const num = parseInt(value);
    if (!isNaN(num) && num >= 1) {
      const updatedGuests = [...formData.guests];
      while (updatedGuests.length < num) {
        updatedGuests.push({ firstName: "", lastName: "" });
      }
      while (updatedGuests.length > num) {
        updatedGuests.pop();
      }
      setFormData({ ...formData, guests: updatedGuests });
    }
  };

  // Handle guest name input
  const handleGuestChange = (index, field, value) => {
    const updatedGuests = [...formData.guests];
    updatedGuests[index][field] = value;
    setFormData({ ...formData, guests: updatedGuests });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form validation
  const validate = () => {
    let newErrors = {};

    if (!attending) newErrors.attending = "Please select attendance";

    if (attending === "yes") {
      formData.guests.forEach((guest, index) => {
        if (!guest.firstName || !guest.lastName) {
          newErrors[`guest-${index}`] = "Guest name required";
        }
      });
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      await addDoc(collection(db, "rsvps"), {
        attending,
        guests: formData.guests,
        meal: formData.meal,
        dietary: formData.dietary,
        message: formData.message,
        createdAt: Timestamp.now(),
      });

      toast.success("RSVP submitted successfully");

      // Reset form
      setFormData({
        guests: [{ firstName: "", lastName: "" }],
        meal: "",
        dietary: "",
        message: "",
      });
      setGuestCount("1");
      setAttending("");
      setErrors({});
    } catch (error) {
      toast.error("Something went wrong. Please try again");
    }
  };

  return (
    <div className="rsvp">
      <ToastContainer position="top-center" />

      <div className="breadcrumb">
        <a href="/" style={{ color: "#fff" }}>
          <House size={15} />
        </a>
        <span>/</span>
        <h2 className="ro">RSVP</h2>
      </div>

      <h2 className="rs_title">Kindly Respond</h2>
      <p className="rs_para">
        Please let us know if you will be joining us by{" "}
        <strong>July 10, 2026</strong>.
      </p>

      <form className="rs_form" onSubmit={handleSubmit}>
        {/* Attending */}
        <div className="form_input_section">
          <label>Will you be attending?</label>
          <select
            className="form_input"
            value={attending}
            onChange={(e) => setAttending(e.target.value)}
          >
            <option value="">Please select</option>
            <option value="yes">Yes, happily attending</option>
            <option value="no">Regretfully, unable to attend</option>
          </select>
          {errors.attending && (
            <span className="error">{errors.attending}</span>
          )}
        </div>

        {/* YES */}
        {attending === "yes" && (
          <>
            {/* Guest Count */}
            <div className="form_input_section">
              <label>Number of Guests</label>
              <input
                type="number"
                min="1"
                value={guestCount}
                className="form_input"
                onChange={(e) => handleGuestCountChange(e.target.value)}
              />
            </div>

            {/* Guest Inputs */}
            {formData.guests.map((guest, index) => (
              <div className="guest_row" key={index}>
                <div className="puy">
                  <div className="pok q">
                    <input
                      type="text"
                      placeholder="First Name"
                      value={guest.firstName}
                      className="form_inputs"
                      onChange={(e) =>
                        handleGuestChange(index, "firstName", e.target.value)
                      }
                    />
                  </div>
                  <div className="pok">
                    <input
                      type="text"
                      placeholder="Last Name"
                      value={guest.lastName}
                      className="form_inputs"
                      onChange={(e) =>
                        handleGuestChange(index, "lastName", e.target.value)
                      }
                    />
                  </div>
                </div>
                {errors[`guest-${index}`] && (
                  <span className="error">{errors[`guest-${index}`]}</span>
                )}
              </div>
            ))}

            {/* Meal */}
            <div className="form_input_section">
              <label>Meal Preference</label>
              <select
                name="meal"
                value={formData.meal}
                onChange={handleChange}
                className="form_input"
              >
                <option value="">No preference</option>
                <option value="chicken">Chicken</option>
                <option value="beef">Beef</option>
                <option value="vegetarian">Vegetarian</option>
              </select>
            </div>

            {/* Dietary */}
            <div className="form_input_section">
              <label>Dietary Restrictions</label>
              <input
                type="text"
                name="dietary"
                value={formData.dietary}
                onChange={handleChange}
                placeholder="Allergies or special needs"
                className="form_input"
              />
            </div>
          </>
        )}

        {/* Message */}
        <div className="form_input_section">
          <label>Message for Martin & Chantel</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="form_textarea"
            placeholder="Write your wishes"
          />
        </div>

        <button className="form_btn" type="submit">
          Submit RSVP
        </button>
      </form>
    </div>
  );
};

export default Rsvps;
