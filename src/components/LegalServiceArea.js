import React from 'react';

const LegalServiceArea = () => {
  const practiceAreas = [
    {
      title: 'Legal Research & Case Preparation',
      description:
        'Conducting in-depth research on legal issues, reviewing case law, and preparing detailed case summaries to support informed legal strategies.',
      link: '#',
    },
    {
      title: 'Document Drafting & Management',
      description:
        'Drafting essential legal documents, including contracts, affidavits, and motions, while maintaining organized and secure document management systems.',
      link: '#',
    },
    {
      title: 'Litigation Support',
      description:
        'Assisting in all phases of litigation, from discovery and evidence gathering to trial preparation, ensuring that attorneys have the resources needed for a successful case.',
      link: '#',
    },
    {
      title: 'Client & Witness Coordination',
      description:
        'Managing communication with clients, witnesses, and third parties, arranging interviews, and ensuring all involved are prepared and informed.',
      link: '#',
    },
    {
      title: 'Regulatory Compliance Assistance',
      description:
        'Providing guidance on regulatory requirements, helping businesses stay compliant with local, state, and federal laws to minimize legal risks and liabilities.',
      link: '#',
    },
  ];
  return (
    <>
      <div
        style={{
          backgroundImage: 'url("./assets/img/about-background.jpeg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '300px',
        }}
      >
        <div className="container py-5 d-flex align-items-center justify-content-start">
          <h1
            data-aos="fade-up"
            data-aos-delay={100}
            className="text-white"
            style={{ fontSize: '60px', paddingTop: '45px' }}
          >
            Paralegals Services{' '}
          </h1>
        </div>
      </div>
      <section
        className="ftco-section mt-5"
        data-aos="fade-up"
        data-aos-delay={100}
      >
        <div className="container">
          <div className="row d-flex justify-content-center">
            {practiceAreas.map((area, index) => (
              <div key={index} className="col-md-4 col-sm-6 mb-4 text-center">
                <div className="card h-100 shadow border-0">
                  <div className="card-body">
                    <h5 className="card-title">
                      <a href={area.link} className="text-decoration-none">
                        {area.title}
                      </a>
                    </h5>
                    <p className="card-text text-muted">{area.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default LegalServiceArea;
