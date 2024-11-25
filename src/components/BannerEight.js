const BannerEight = () => {
  const services = [
    {
      img: 'assets/img/technology1.webp',
      title: 'Next Js',
      description:
        'Build fast, user-friendly websites with Next.js and React framework.',
    },
    {
      img: 'assets/img/technology/3.png',
      title: 'Node Js',
      description:
        'Powerful server-side development made easy with Node.js and JavaScript.',
    },
    {
      img: 'assets/img/technology/2.png',
      title: 'React Js',
      description:
        'Build interactive user interfaces quickly with React.js and component-based architecture.',
    },
    {
      img: 'assets/img/technology2.webp',
      title: 'PHP & Laravel',
      description:
        'Create dynamic webapplications effortlessly using PHP and Laravel framework.',
    },
    {
      img: 'assets/img/technology3.jpg',
      title: 'Flutter',
      description:
        "Build beautiful apps faster with Flutter's seamless cross-platform development.",
    },
    {
      img: 'assets/img/technology4.jpg',
      title: 'AWS',
      description:
        'Unlock cloud potential with AWS: scalable, reliable, and secure solutions.',
    },
  ];
  return (
    <div>
      <div
        style={{
          backgroundImage: 'url("./assets/img/about-background.jpeg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '100px 0',
        }}
      >
        <div className="container d-flex align-items-center justify-content-start">
          <h1 className="text-white" style={{ fontSize: '50px' }}>
            Technologies{' '}
          </h1>
        </div>
      </div>
      <div
        style={{
          backgroundImage: 'url("./assets/img/contact-background.webp")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="service-area ServiceAreaSeven bg-cover pd-top-120 pd-bottom-90 pd-top-110 pd-bottom-90"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8">
              <div className="section-title text-center">
                <h2 className="title">
                  Develop Fast, User-Friendly Platforms with Innovative
                  Frameworks
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            {services.map((service, index) => (
              <div className="col-xl-4 col-md-6" key={index}>
                <div className="style-4 text-center">
                  <div className="thumb">
                    <img
                      src={service.img}
                      alt={`${service.title} image`}
                      style={{
                        width: '350px',
                        height: '350px',
                        objectFit: 'cover',
                      }}
                    />
                  </div>
                  <div className="details mb-4 p-4">
                    <h5 className="mb-3">{service.title}</h5>
                    <p className="content mb-0">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerEight;
