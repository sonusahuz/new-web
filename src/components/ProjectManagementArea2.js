import React from 'react';

const ProjectsManagement = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="container-fluid text-white py-2">
        <div className="container">
          <div className="row align-items-center justify-content-between text-left text-lg-start">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-3">
                Projects Management Dashboard
              </h1>
              <p className="lead">
                Efficiently manage your projects, track progress, and deliver
                outstanding results with our intuitive dashboard.
              </p>
              <a href="#create-project" className="btn btn-primary">
                Create New Project
              </a>
            </div>
            <div className="col-lg-6 py-5 text-center text-lg-end">
              <img
                src="assets/assetscross/img/project.png"
                alt="Projects Management"
                className="img-fluid"
                width={400}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Project Statistics */}
      <div className="container py-5">
        <div className="row g-4">
          <div className="col-lg-3 col-md-6">
            <div className="bg-light text-center py-4 rounded shadow h-100">
              <h2 className="display-6 fw-bold">150</h2>
              <p className="text-muted mb-0">Total Projects</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="bg-light text-center py-4 rounded shadow h-100">
              <h2 className="display-6 fw-bold">45</h2>
              <p className="text-muted mb-0">Active Projects</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="bg-light text-center py-4 rounded shadow h-100">
              <h2 className="display-6 fw-bold">85%</h2>
              <p className="text-muted mb-0">Completion Rate</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="bg-light text-center py-4 rounded shadow h-100">
              <h2 className="display-6 fw-bold">20</h2>
              <p className="text-muted mb-0">Team Members</p>
            </div>
          </div>
        </div>
      </div>

      {/* Projects List */}
      <div className="container py-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-bold fs-1">Ongoing Projects</h2>
        </div>
        <div className="row g-4">
          {[1, 2, 3, 4, 5].map((project) => (
            <div className="col-lg-4 col-md-6" key={project}>
              <div className="bg-light rounded shadow p-4 h-100">
                <h5 className="fw-bold">Project {project} Name</h5>
                <p className="text-muted">
                  A short description of the project, its goals, and key
                  milestones.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="badge bg-success">Active</span>
                  <button type="button" class="btn btn-primary btn-sm">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Create Project Section */}
      <div
        id="create-project"
        className="container-fluid bg-light py-5 my-5"
        style={{
          backgroundImage: 'url("assets/img/create-bg.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Start a New Project</h2>
          <p className="text-muted">
            Initiate your project by providing the necessary details and
            assigning the right team members.
          </p>
          <a href="#" className="btn btn-primary">
            Get Started
          </a>
        </div>
      </div>

      {/* Testimonials */}
      <div className="container py-5">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: '600px' }}>
          <h2 className="fw-bold fs-1">What Our Clients Say</h2>
          <p className="text-muted">
            See how our project management solutions have helped others achieve
            success.
          </p>
        </div>
        <div className="row g-4">
          {[1, 2, 3].map((testimonial) => (
            <div className="col-lg-4" key={testimonial}>
              <div className="bg-light rounded shadow p-4 h-100">
                <p className="text-muted">
                  "This platform has revolutionized the way we manage projects.
                  Highly recommend!"
                </p>
                <h6 className="fw-bold mb-0">Client {testimonial}</h6>
                <span className="text-primary">CEO, Company {testimonial}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectsManagement;
