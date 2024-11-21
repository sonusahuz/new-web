const ConsultNowForm = ({
  isOpen,
  onClose,
  description,
  width = '400px',
  height = 'auto',
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content" style={{ width }}>
        <div className="modal-header">
          <h1 className="modal-title text-center mx-auto">Enquire Now</h1>
          <i
            className="bi bi-x-lg modal-close"
            onClick={() => onClose(false)}
          ></i>
        </div>
        <div className="modal-body">
          <p className="modal-description">{description}</p>
          <div className="modal-children">
            <form>
              {/* Form fields */}
              <div className="mb-3">
                <label htmlFor="Name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Name"
                  id="name"
                  aria-describedby="nameHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Email1" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Your Email"
                  id="Email"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Phone
                </label>
                <input
                  type="number"
                  placeholder="Enter Your Phone Number"
                  className="form-control"
                  id="number"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Select Service
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  required
                >
                  <option selected>Select - </option>
                  <option value="Custom Website Design & Development">
                    Custom Website Design & Development
                  </option>
                  <option value="MVP Development & Testing">
                    MVP Development & Testing
                  </option>
                  <option value="UI/UX Design & Prototyping">
                    UI/UX Design & Prototyping
                  </option>
                  <option value="Ongoing Software & Website Maintenance">
                    Ongoing Software & Website Maintenance
                  </option>
                  <option value="Blockchain Solutions & Decentralized Applications">
                    Blockchain Solutions & Decentralized Applications
                  </option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  placeholder="Enter Your Message"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="btn rounded-1 btn-primary mt-0 w-100 border-radius-5"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultNowForm;
