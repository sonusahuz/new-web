import ConsultNowForm from './ConsultNowForm';
import { useState } from 'react';
import BannerForm from './BannerForm';

const BannerOne = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {/* ================== BannerOne Start ==================*/}
      <div
        className="banner-area bg-relative banner-area-1 pd-bottom-100 bg-cover"
        style={{
          backgroundImage: 'url("./assets/img/back3.jpg")',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dim background color
          backgroundSize: 'cover', // Ensure the image covers the entire background
          backgroundPosition: 'center', // Center the background image
          height: 'auto', // Make sure the banner area takes the full height of the viewport
        }}
      >
        <div className="container">
          <div className="row align-items-center d-flex justify-content-between">
            <div className="col-lg-6" style={{ textAlign: 'left' }}>
              <div className="banner-inner pe-xl-5">
                <h2
                  className="title text-white"
                  style={{ fontSize: '50px' }}
                  data-aos="fade-right"
                  data-aos-delay="200"
                  data-aos-duration="1500"
                >
                  We Build Website That Build Your Business
                </h2>
                <p
                  className="content pe-xl-5 fs-5 text-white"
                  data-aos="fade-right"
                  data-aos-delay="250"
                  data-aos-duration="1500"
                >
                  Alpha Infotech is the best website designing company in delhi
                  with commitment to quantity and the development of true worth.
                </p>
                {/* <button
                  className="btn btn-border-base"
                  data-aos="fade-right"
                  data-aos-delay="300"
                  data-aos-duration="1500"
                  onClick={() => setOpen(true)}
                >
                  Consult Now <FaPlus />
                </button> */}
                <div className="d-flex justify-content-start gap-4">
                  <button
                    type="submit"
                    className="btn rounded-pill btn-danger mt-0 w-40 bg-info"
                  >
                    EXPLORE OUR WORK
                  </button>

                  <button
                    type="submit"
                    className="btn rounded-pill btn-danger mt-0 w-40 ml-4"
                  >
                    CONNECT WITH US
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 text-center mt-5 lg-mt-0">
              <BannerForm />
            </div>
          </div>
        </div>
      </div>
      {open && <ConsultNowForm isOpen={open} onClose={handleClose} />}
    </>
  );
};

export default BannerOne;
