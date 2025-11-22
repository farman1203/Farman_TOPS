import React from 'react'

const Service = () => {
  return (
    <div>
  <div className="container">
    {/* main */}
    <div className="row mt-5 text-center ">
      <div className="col-md-12 mx-auto d-block">
        <h1>Service</h1>
        Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a
        odio <br /> voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum
        dolorem.
      </div>
    </div>
  </div>
  <div className="container-fluid mt-5 ">
    <nav aria-label="breadcrumb" className="bg-body-secondary">
      <ol className="breadcrumb p-3">
        <li className="breadcrumb-item"><a className="text-decoration-none" style={{color: '#099aa7'}} href="index.html">Home</a></li>
        <li className="breadcrumb-item active" aria-current="page">Contact</li>
      </ol>
    </nav>
  </div>
  {/* card */}
  <div className="container">
    <div className="row mt-5 g-4 ">
      <div className="col-md-4 p-3  service">
        <div className="service-icon p-3">
          <i className="fas fa-brain " />
        </div>
        <div className="department-info p-3">
          <h3>General Consultation</h3>
        </div>
        <p>care planning for all family members.</p>
        <div className="department-features mt-3">
          <span className="bg-body-secondary rounded-4">Health Monitoring</span>
          <span className="bg-body-secondary rounded-4">Wellness Program</span>
          <span className="bg-body-secondary rounded-4">Preventive Care</span>
        </div>
        <div className="service-btn mt-5 ms-4">
          <button className="btn">Schedule Visit<i className="fas fa-arrow-right" /></button>
        </div>
      </div>
      <div className="col-md-4 p-3 service">
        <div className="service-icon p-3">
          <i className="fas fa-heart" />
        </div>
        <div className="department-info p-3">
          <h3>Cardiology Services</h3>
        </div>
        <p>Advanced heart care including diagnostics, treatment, and post-operative rehabilitation programs.</p>
        <div className="department-features mt-3">
          <span className="bg-body-secondary rounded-4">Heart Surgery</span>
          <span className="bg-body-secondary rounded-4">ECG Testing</span>
          <span className="bg-body-secondary rounded-4">Cardiac Rehab</span>
        </div>
        <div className="service-btn mt-5 ms-4">
          <button className="btn">Book Appointment<i className="fas fa-arrow-right" /></button>
        </div>
      </div>
      <div className="col-md-4 p-3 service">
        <div className="service-icon p-3">
          <i className="fas fa-vials " />
        </div>
        <div className="department-info p-3">
          <h3>Laboratory Testing</h3>
        </div>
        <p>Complete range of diagnostic tests with quick turnaround times and accurate results.</p>
        <div className="department-features mt-3">
          <span className="bg-body-secondary rounded-4">Blood Work</span>
          <span className="bg-body-secondary rounded-4">Pathology</span>
          <span className="bg-body-secondary rounded-4">Same-Day Results</span>
        </div>
        <div className="service-btn mt-5 ms-4">
          <button className="btn">Order Tests<i className="fas fa-arrow-right" /></button>
        </div>
      </div>
      <div className="col-md-4 p-3 service">
        <div className="service-icon p-3">
          <i className="fas fa-ambulance" />
        </div>
        <div className="department-info p-3">
          <h3>Emergency Care</h3>
        </div>
        <p>Round-the-clock emergency services with trauma center and critical care capabilities.</p>
        <div className="department-features mt-3">
          <span className="bg-body-secondary rounded-4">Health Monitoring</span>
          <span className="bg-body-secondary rounded-4">Wellness Program</span>
          <span className="bg-body-secondary rounded-4">Preventive Care</span>
        </div>
        <div className="service-btn mt-5 ms-4">
          <button className="btn btn-danger">Call emergency<i className="fas fa-arrow-right" /></button>
        </div>
      </div>
      <div className="col-md-4 p-3 service">
        <div className="service-icon p-3">
          <i className="fas fa-baby" />
        </div>
        <div className="department-info p-3">
          <h3>Women's Health</h3>
        </div>
        <p>Comprehensive maternal care from prenatal checkups to delivery and postnatal support.</p>
        <div className="department-features mt-3">
          <span className="bg-body-secondary rounded-4">Health Monitoring</span>
          <span className="bg-body-secondary rounded-4">Wellness Program</span>
          <span className="bg-body-secondary rounded-4">Preventive Care</span>
        </div>
        <div className="service-btn mt-5 ms-4">
          <button className="btn">Learn more<i className="fas fa-arrow-right" /></button>
        </div>
      </div>
      <div className="col-md-4 p-3 service">
        <div className="service-icon p-3">
          <i className="fas fa-syringe" />
        </div>
        <div className="department-info p-3">
          <h3>Vaccination Services</h3>
        </div>
        <p>Complete immunization programs for all ages including travel vaccines and seasonal shots.</p>
        <div className="department-features mt-3">
          <span className="bg-body-secondary rounded-4">Health Monitoring</span>
          <span className="bg-body-secondary rounded-4">Wellness Program</span>
          <span className="bg-body-secondary rounded-4">Preventive Care</span>
        </div>
        <div className="service-btn mt-5 ms-4">
          <button className="btn">Schedule shot<i className="fas fa-arrow-right" /></button>
        </div>
      </div>
    </div>
    {/* call */}
    <div className="row rounded-4 m-5 p-4 " style={{backgroundColor: '#099aa7'}}>
      <div className="col-md-8 text-white d-flex justify-content-between">
        <i className="fas fa-phone mt-3 fs-3" />
        <div className>
          <h4>Need Immediate Assistance?</h4>
          <p>Our medical team is available around the clock for urgent consultations and emergency
            support.</p>
        </div>
      </div>
      <div className="col-md-4">
        <button className="btn btn-light btn-lg mt-3"><i className="fas fa-phone" />(555) 123-4567</button>
        <a href="#" className="text-white ms-3 ">Get Directions</a>
      </div>
    </div>
  </div>
  {/* footer */}
  <div className="container">
    <div className="row gy-4 p-3">
      <div className="col-md-6 col-lg-4">
        <h2>MediNest</h2>
        <p className="mt-3">A108 Adam Street <br />
          New York, NY 535022</p>
        Phone: +1 5589 55488 55
        <br />
        Email: info@example.com
        <div className="fs-4 mt-3">
          <i className="bi bi-twitter-x ms-2" />
          <i className="bi bi-facebook ms-2" />
          <i className="bi bi-instagram ms-2" />
          <i className="bi bi-linkedin ms-2" />
        </div>
      </div>
      <div className="col-md-3 col-lg-2">
        <h5>Useful Links</h5>
        <ul className="list-inline text-secondary">
          <li className="mb-2">Home</li>
          <li className="mb-2">About us</li>
          <li className="mb-2">Services</li>
          <li className="mb-2">Terms of service</li>
          <li className="mb-2">Privacy policy</li>
        </ul>
      </div>
      <div className="col-md-3 col-lg-2">
        <h5>Our Services</h5>
        <ul className="list-inline text-secondary">
          <li className="mb-2">Web Design</li>
          <li className="mb-2">Web Development</li>
          <li className="mb-2">Product Management</li>
          <li className="mb-2">Marketing</li>
          <li>Graphic Design</li>
        </ul>
      </div>
      <div className="col-md-3 col-lg-2">
        <h5>Hic solutasetp</h5>
        <ul className="list-inline text-secondary">
          <li className="mb-2">Molestiae accusamus iure</li>
          <li className="mb-2">Excepturi dignissimos</li>
          <li className="mb-2">Suscipit distinctio</li>
          <li className="mb-2">Dilecta</li>
          <li className="mb-2">Sit quas consectetur</li>
        </ul>
      </div>
      <div className="col-md-3 col-lg-2">
        <h5>Nobis illum</h5>
        <ul className="list-inline text-secondary">
          <li className="mb-2">Web Design</li>
          <li className="mb-2">Web Development</li>
          <li className="mb-2">Product Management</li>
          <li className="mb-2">Marketing</li>
          <li>Graphic Design</li>
        </ul>
      </div>
      <div className="text-secondary">
        <hr />
      </div>
      <p className="text-center">© Copyright MediNest All Rights Reserved
        <br />
        Designed by BootstrapMade
      </p>
    </div>
  </div>
</div>

  )
}

export default Service
