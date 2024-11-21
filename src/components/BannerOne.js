import { FaPlus } from 'react-icons/fa';
import ConsultNowForm from './ConsultNowForm';
import { useState } from 'react';

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
        style={{ backgroundImage: 'url("./assets/img/banner/0.png")' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6" style={{ textAlign: 'left' }}>
              <div className="banner-inner pe-xl-5">
                <h6
                  style={{ fontWeight: 'bold' }}
                  className="subtitle"
                  data-aos="fade-right"
                  data-aos-delay="100"
                  data-aos-duration="1500"
                >
                  Your all-in-One Solution for every Business Need.
                </h6>
                <h2
                  className="title"
                  data-aos="fade-right"
                  data-aos-delay="200"
                  data-aos-duration="1500"
                >
                  Welcome to<span> NYAS!</span>
                </h2>
                <p
                  className="content pe-xl-5"
                  data-aos="fade-right"
                  data-aos-delay="250"
                  data-aos-duration="1500"
                >
                  We offer customized solutions to business challenges,
                  guaranteeing smooth execution and driving success in every
                  aspect of your operations.
                </p>
                <button
                  className="btn btn-border-base"
                  data-aos="fade-right"
                  data-aos-delay="300"
                  data-aos-duration="1500"
                  onClick={() => setOpen(true)}
                >
                  Consult Now <FaPlus />
                </button>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 text-center">
              <img
                src="assets/img/banner.jpeg"
                alt="img"
                width={400}
                className="img-fluid rounded pt-5"
                data-aos="fade-left"
                data-aos-delay="300"
                data-aos-duration="1500"
              />
            </div>
          </div>
        </div>
      </div>
      {open && <ConsultNowForm isOpen={open} onClose={handleClose} />}
    </>
  );
};

export default BannerOne;
