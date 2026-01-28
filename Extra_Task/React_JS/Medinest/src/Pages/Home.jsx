import React from 'react'
import { NavLink } from 'react-router-dom'
import About from './About'

const Home = () => {
  return (
    <>

      <div className="container">

        <div className="row align-item-center mt-5">
          <div className="col-md-6  p-3">
            <img src="img/staff-8.webp" className="img-fluid img rounded-4" width="90%" alt />
          </div>
          <div className="col-md-6">
            <div className="container">
              <button style={{ backgroundColor: '#099aa7' }} className="btn btn-info  text-white">Trusted Healthcare
                Provider</button>
            </div>
            <h1 className="side">Excellence in Medical <br /> Care Since 1985</h1>
            <p className="hero-description">Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Pellentesque in
              ipsum id orci porta dapibus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.
            </p>
            <div className="row">
              <div className="col-md-3">
                <i className="bi bi-award" />
                <div className="set ">
                  <h2>35+</h2>
                  <p> Years Expireance</p>
                </div>
              </div>
              <div className="col-md-3">
                <i className="bi bi-people" />
                <div className="set">
                  <h2>150+</h2>
                  <p> Medical Specialists</p>
                </div>
              </div>
              <div className="col-md-3">
                <i className="bi bi-geo-alt" />
                <div className="set">
                  <h2>12</h2>
                  <p> Clinic Locations</p>
                </div>
              </div>
            </div>
            <div>
              <button style={{ backgroundColor: '#099aa7' }} className="btn btn-info text-white mt-3">Scedule
                consultaion</button>
              <button type="button" className="btn btn-light mt-3"><i className="bi bi-play-circle" /> Watch Our
                Story</button>
            </div>
            <div className="flex">
              <a href className="action-link mt-3"> <i className="bi bi-calendar-check" /><span>Find Available
                Times</span></a>
              <a href="#" className="action-link mt-3 p-3">
                <i className="bi bi-chat-dots" />
                <span>Chat with Support</span>
              </a>
              <a href="#" className="action-link mt-3">
                <i className="bi bi-file-medical" />
                <span>Patient Portal</span>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-8 mx-auto text-center mb-5 ">
          <h2 className="section-heading mt-4">Excellence in Healthcare Since 1985</h2>
          <p className="text-body-secondary lh-base fs-5 mx-auto d-block">We are committed to providing world-class
            medical care through <br />innovation,
            compassion, and unwavering dedication to our <br /> patients' wellbeing and recovery.</p>
        </div>
        {/* images */}
        <div className="row">
          <div className="col-lg-4 p-3">
            <div className="image-card">
              <img src="img/facilities-6.webp" width="100%" style={{ height: 410 }} alt />
            </div>
          </div>
          <div className="col-lg-3 col-md-12 p-3 col-sm-12">
            <div className="row ">
              <div className="col-lg-12 ">
                <div className="image-card">
                  <img src="img/surgery-2.webp" width="100%" style={{ height: 200 }} alt />
                </div>
                <div className="col-lg-12  mt-3">
                  <div className="image-card">
                    <img src="img/consultation-3.webp" width="100%" style={{ height: 200 }} alt />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* image side */}
          <div className="col-md-5">
            <div className="patient">
              <i className="bi bi-heart-pulse-fill" />
              <div className="card-body">
                <h2>Patient-Centered Approach</h2>
                Every treatment plan is carefully customized to <br /> meet individual patient needs and medical
                history.
              </div>
            </div>
            <div className="right">
              <i className="bi bi-check-circle-fill" />
              <p>
                Advanced diagnostic technology and imaging
              </p>
            </div>
            <div className="right">
              <i className="bi bi-check-circle-fill" />
              <p>
                Board-certified physicians and specialists
              </p>
            </div>
            <div className="right">
              <i className="bi bi-check-circle-fill" />
              <p>
                Comprehensive rehabilitation programs
              </p>
            </div>
            <div className="right">
              <i className="bi bi-check-circle-fill" />
              <p>
                24/7 emergency and critical care services
              </p>
            </div>
            <div className="metrix mt-4">
              <div className="mt">
                <h2>98%</h2>
                <p> Patient Satisfaction</p>
              </div>
              <div className="mt">
                <h2>35K+</h2>
                <p>Lives Improved</p>
              </div>
            </div>
            <button className="btn btn-info text-white p-2">Explore Our Services</button>
            <button className="btn botom p-2"><i className="bi bi-telephone" />Schedule Consultation</button>
          </div>
        </div>
        {/* feathurs */}
        <div className="row">
          <div className="col-md-12 mt-5 p-4 mb-5 text-center">
            <h2> Featured Departments</h2>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
          </div>
        </div>
        {/* emergency */}
        <div className="row">
          <div className="col-md-6">
            <p style={{ color: '#099aa7', letterSpacing: 2 }}>Emergency Medicine</p>
            <h1 style={{ fontWeight: 500 }}>24/7 Emergency Care <br /> Services</h1>
            <p className="department-description"> Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium,
              totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.</p>
            <div className="right">
              <i className="bi bi-check-circle-fill" /><span>24/7 Emergency Response</span>
            </div>
            <div className="right">
              <i className="bi bi-check-circle-fill" /><span>Advanced Life Support</span>
            </div>
            <div className="right">
              <i className="bi bi-check-circle-fill" /><span>Trauma Care Specialists</span>
            </div>
            <a className="icon-link mt-3 text-decoration-none icon-link-hover" href="#">
              Learn more
              <svg xmlns="http://www.w3.org/2000/svg" className="bi" viewBox="0 0 16 16" aria-hidden="true">
                <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
              </svg>
            </a>
          </div>
          <div className="col-md-6">
            <img src="img/emergency-3.webp" className="rounded-4" width="100%" alt />
          </div>
        </div>
        {/* cards */}
        <div className="row mt-5">
          <div className="col-md-4  p-3">
            <div className="card card-set " style={{ width: '100%' }}>
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: 45, color: '#099aa7' }}><i className="fas fa-heartbeat" />
                </h5>
                <h6 className="card-subtitle mb-2" style={{ fontSize: 23 }}>Cardiology</h6>
                <p className="card-text mt-3">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                  fugit, sed quia consequuntur magni dolores.</p>
                <div className="row ">
                  <div className="col-md-6 ">
                    <span className="fs-3 text-info">15+</span>
                    <p>Specture</p>
                  </div>
                  <div className="col-md-6">
                    <span className="fs-3 text-info">500+</span>
                    <p>Procedures</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4  p-3">
            <div className=" card card-set" style={{ width: '100%' }}>
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: 45, color: '#099aa7' }}><i className="fas fa-brain" /></h5>
                <h6 className="card-subtitle mb-2" style={{ fontSize: 23 }}>Neurology</h6>
                <p className="card-text mt-3">Eos qui ratione voluptatem sequi nesciunt neque porro quisquam est,
                  qui
                  dolorem ipsum quia dolor sit amet.</p>
                <div className="row ">
                  <div className="col-md-6 ">
                    <span className="fs-3 text-info">8+</span>
                    <p>Specialists</p>
                  </div>
                  <div className="col-md-6">
                    <span className="fs-3 text-info">200+</span>
                    <p>Treatments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 p-3">
            <div className="card card-set" style={{ width: '100%' }}>
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: 45, color: '#099aa7' }}><i className="fas fa-cut" /></h5>
                <h6 className="card-subtitle mb-2" style={{ fontSize: 23 }}>Surgery</h6>
                <p className="card-text mt-3">Consectetur adipisci velit sed quia non numquam eius modi tempora
                  incidunt
                  ut labore et dolore magnam aliquam.</p>
                <div className="row ">
                  <div className="col-md-6 ">
                    <span className="fs-3 text-info">12+</span>
                    <p>Surgeons</p>
                  </div>
                  <div className="col-md-6">
                    <span className="fs-3 text-info">1000+</span>
                    <p>Operations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 p-3">
            <div className="card card-set" style={{ width: '100%' }}>
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: 45, color: '#099aa7' }}><i className="fas fa-baby" /></h5>
                <h6 className="card-subtitle mb-2" style={{ fontSize: 23 }}>Pediatrics</h6>
                <p className="card-text mt-3">Quaerat voluptatem ut enim ad minima veniam quis nostrum
                  exercitationem
                  ullam corporis suscipit laboriosam.</p>
                <div className="row ">
                  <div className="col-md-6 ">
                    <span className="fs-3 text-info">10+</span>
                    <p>Pediatricians</p>
                  </div>
                  <div className="col-md-6">
                    <span className="fs-3 text-info">2000+</span>
                    <p>Young Patients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 p-3">
            <div className="card card-set" style={{ width: '100%' }}>
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: 45, color: '#099aa7' }}><i className="fas fa-eye" /></h5>
                <h6 className="card-subtitle mb-2" style={{ fontSize: 23 }}>Ophthalmology</h6>
                <p className="card-text mt-3">Nisi ut aliquid ex ea commodi consequatur quis autem vel eum iure
                  reprehenderit qui in ea voluptate velit esse.</p>
                <div className="row ">
                  <div className="col-md-6 ">
                    <span className="fs-3 text-info">6+</span>
                    <p>Eye Doctors</p>
                  </div>
                  <div className="col-md-6">
                    <span className="fs-3 text-info">800+</span>
                    <p>Eye Exams</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 p-3">
            <div className="card card-set" style={{ width: '100%' }}>
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: 45, color: '#099aa7' }}><i className="fas fa-band-aid" />
                </h5>
                <h6 className="card-subtitle mb-2" style={{ fontSize: 23 }}>Dermatology</h6>
                <p className="card-text mt-3">Quam nihil molestiae consequatur vel illum qui dolorem eum fugiat quo
                  voluptas nulla pariatur at vero eos.</p>
                <div className="row ">
                  <div className="col-md-6 ">
                    <span className="fs-3 text-info">7+</span>
                    <p>Dermatologists</p>
                  </div>
                  <div className="col-md-6">
                    <span className="fs-3 text-info">600+</span>
                    <p>Skin Treatments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Explore */}
        <div className="row mt-5">
          <div className="col-12 p-5" style={{ backgroundColor: '#e9ebeb' }}>
            <h3 className="text-center">Explore All Our Medical Departments</h3>
            <p className="text-center ">Et accusamus et iusto odio dignissimos ducimus qui blanditiis <br /> praesentium
              voluptatum deleniti atque corrupti quos dolores.</p>
            <button type="button" className="btn btn-outline-primary mx-auto d-block">View All Department</button>
          </div>
        </div>
        {/* feathurs */}
        <div className="row">
          <div className="col-md-12 mt-5 p-4 mb-5 text-center">
            <h2> Featured Departments</h2>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
          </div>
        </div>
        {/* image cards */}
        <div className="row ">
          <div className="col-md-4 p-3">
            <div className="card  shdw " style={{ width: '100%' }}>
              <img className="card-img-top" src="img/cardiology-2.webp" width="100%" alt="Card image" />
              <div className="card-body">
                <h4 className="card-title">Cardiology Excellence</h4>
                <p className="card-text text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
                <a href="#" className="text-decoration-none">Learn More</a>
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className="col-md-4 p-3">
            <div className="card shdw" style={{ width: '100%' }}>
              <img className="card-img-top" src="img/neurology-3.webp" width="100%" alt="Card image" />
              <div className="card-body">
                <h4 className="card-title">Neurology Care</h4>
                <p className="card-text text-secondary">Sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
                <a href="#" className="text-decoration-none">Learn More</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 p-3">
            <div className="card  shdw" style={{ width: '100%' }}>
              <img className="card-img-top" src="img/orthopedics-1.webp" alt="Card image" />
              <div className="card-body">
                <h4 className="card-title">Orthopedic Surgery</h4>
                <p className="card-text text-secondary">Duis aute irure dolor in reprehenderit in voluptate velit
                  esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                <a href="#" className="text-decoration-none">Learn More</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mt-4 shdw" style={{ width: '100%' }}>
              <img className="card-img-top" src="img/pediatrics-4.webp" alt="Card image" />
              <div className="card-body">
                <h4 className="card-title">Pediatric Care</h4>
                <p className="card-text text-secondary">Sunt in culpa qui officia deserunt mollit anim id est
                  laborum.
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</p>
                <br /> <a href="#" className="text-decoration-none">Learn More</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mt-4 shdw " style={{ width: '100%' }}>
              <img className="card-img-top" src="img/oncology-2.webp" alt="Card image" />
              <div className="card-body">
                <h4 className="card-title">Oncology Treatment</h4>
                <p className="card-text text-secondary">At vero eos et accusamus et iusto odio dignissimos ducimus
                  qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et.
                </p>
                <br /> <a href="#" className="text-decoration-none">Learn More</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mt-4 shdw" style={{ width: '100%', height: 'auto' }}>
              <img className="card-img-top" src="img/laboratory-3.webp" alt="Card image" />
              <div className="card-body">
                <h4 className="card-title">Laboratory Services</h4>
                <p className="card-text text-secondary">Temporibus autem quibusdam et aut officiis debitis aut rerum
                  necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
                </p>
                <a href="#" className="text-decoration-none">Learn More</a>
              </div>
            </div>
          </div>
        </div>
        {/* Find doctots */}
        <div className="row">
          <div className="col-md-12 mt-5 p-4 mb-3 text-center">
            <h2>Find A Doctor</h2>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
          </div>
        </div>
        {/* discover */}
        <div className="row">
          <div className="col-md-12 mt-2 p-4 mb-3 text-center">
            <h2 style={{ fontSize: 40 }}>Discover Your Ideal Medical Specialist</h2>
            <p className="text-secondary">Connect with our network of certified healthcare professionals across all
              medical disciplines</p>
          </div>
        </div>
        {/* search bar */}
        <div className="row ">
          <div className="col-md-8 card  shadow-lg mb-5 mx-auto d-block p-4">
            <div className="row ">
              <div className="col-md-3">
                <label>Practitioner Name</label>
                <input className="form-control" type="text" />
              </div>
              <div className="col-md-4">
                <label htmlFor>Medical Specialty</label>
                <select className="form-select" name id>
                  <option value>Select speciality</option>
                  <option value>Cardiovascular Medicine</option>
                  <option value>Neurological Sciences</option>
                  <option value>Orthopedic Surgery</option>
                </select>
              </div>
              <div className="col-md-4 ">
                <label htmlFor>Practitioner Name</label>
                <select className="form-select" name="select" id>
                  <option value>All Locations</option>
                  <option value>Downtown Medical Center</option>
                  <option value>Northside Clinic</option>
                  <option value>West End Hospital</option>
                </select>
              </div>
              <div className="col-md-1">
                <button className="btn text-white mt-4" style={{ backgroundColor: '#099aa7' }}><i className="bi bi-arrow-right" /></button>
              </div>
            </div>
          </div>
        </div>
        {/* profile card */}
        <div className="row ">
          <div className="col-md-4 p-3">
            <div className="card p-3 hvr" style={{ width: '100%' }}>
              <div className="row">
                <div className="col-md-4">
                  <img src="img/staff-1.webp" className="img-fluid rounded" width="100%" />
                  <i className="bi bi-star-fill text-warning" />
                  <i className="bi bi-star-fill text-warning" />
                  <i className="bi bi-star-fill text-warning" />
                  <i className="bi bi-star-fill text-warning" />
                  <i className="bi bi-star-fill text-warning" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Dr. Jennifer Morgan</h5>
                    <p className="card-text text-secondary">Senior Cardiologist</p>
                    <p className="card-text"> <span className="bg-info text-white">MD, FACC</span> 18 years</p>
                  </div>
                </div>
                <div className="col-12 mt-4 d-block mx-auto">
                  <button className="btn btn-outline-secondary" style={{ width: 150 }}>Profile</button>
                  <button className="btn btn-info text-white" style={{ width: 150, backgroundColor: '#099aa7' }}>Consult</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 p-3">
            <div className="card hvr p-3" style={{ width: '100%' }}>
              <div className="row ">
                <div className="col-md-4">
                  <img src="img/staff-3.webp" className="img-fluid rounded mx-auto d-block" alt="..." />
                  <i className="bi bi-star-fill text-warning" />
                  <i className="bi bi-star-fill text-warning" />
                  <i className="bi bi-star-fill text-warning" />
                  <i className="bi bi-star-fill text-warning" />
                  <i className="bi bi-star-half text-warning" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Dr. Robert Kim</h5>
                    <p className="card-text text-secondary">Neurosurgeon</p>
                    <p className="card-text"> <span className="bg-info  text-white">MD, PhD</span> 24 years</p>
                  </div>
                </div>
                <div className="col-12 mt-4 d-block mx-auto">
                  <button className="btn btn-outline-secondary" style={{ width: 150 }}>Profile</button>
                  <button className="btn btn-info text-white" style={{ width: 150, backgroundColor: '#099aa7' }}>Sechedule</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 p-3">
            <div className="card p-3 hvr " style={{ width: '100%' }}>
              <div className="row ">
                <div className="col-md-4">
                  <img src="img/staff-5.webp" className="img-fluid rounded mx-auto d-block" alt="..." />
                  <i className="bi bi-star-fill text-warning" />
                  <i className="bi bi-star-fill text-warning" />
                  <i className="bi bi-star-fill text-warning" />
                  <i className="bi bi-star-fill text-warning" />
                  <i className="bi bi-star-fill text-warning" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Dr. Sarah Thompson</h5>
                    <p className="card-text text-secondary">Pediatric Specialist</p>
                    <p className="card-text"> <span className="bg-info text-white">MD, FAAP</span> 12 years</p>
                  </div>
                </div>
                <div className="col-12 mt-4 d-block mx-auto">
                  <button className="btn btn-outline-secondary" style={{ width: 150 }}>Profile</button>
                  <button className="btn btn-info text-white" style={{ width: 150, backgroundColor: '#099aa7' }}>Consult</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 p-3">
            <div className="card hvr p-3" style={{ width: '100%' }}>
              <div className="row ">
                <div className="col-md-4">
                  <img src="img/staff-7.webp" className="img-fluid rounded mx-auto d-block" alt="..." />
                  <i className="bi bi-star-fill text-warning" />
                  <i className="bi bi-star-fill text-warning" />
                  <i className="bi bi-star-fill text-warning" />
                  <i className="bi bi-star-fill text-warning" />
                  <i className="bi bi-star-half text-warning" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Dr. Michael Rivera</h5>
                    <p className="card-text text-secondary">Orthopedic Surgeon</p>
                    <p className="card-text"> <span className="bg-info text-white">MD, FAAOS</span> 20 years</p>
                  </div>
                </div>
                <div className="col-12 mt-4 d-block mx-auto">
                  <button className="btn btn-outline-secondary" style={{ width: 150 }}>Profile</button>
                  <button className="btn btn-info text-white" style={{ width: 150, backgroundColor: '#099aa7' }}>Consult</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 p-3">
            <div className="card hvr p-3" style={{ width: '100%' }}>
              <div className="row ">
                <div className="col-md-4">
                  <img src="img/staff-9.webp" className="img-fluid rounded mx-auto d-block" alt="..." />
                  <i className="bi bi-star-fill text-warning" />
                  <i className="bi bi-star-fill text-warning" />
                  <i className="bi bi-star-fill text-warning" />
                  <i className="bi bi-star-fill text-warning" />
                  <i className="bi bi-star text-warning" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Dr. Lisa Garcia</h5>
                    <p className="card-text">Dermatologist</p>
                    <p className="card-text"> <span className="bg-info text-white">MD, FAAD</span> 15 years</p>
                  </div>
                </div>
                <div className="col-12 mt-4 d-block mx-auto">
                  <button className="btn btn-outline-secondary" style={{ width: 150 }}>Profile</button>
                  <button className="btn btn-info text-white" style={{ width: 150, backgroundColor: '#099aa7' }}>Consult</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 p-3">
            <div className="card hvr p-3" style={{ width: '100%' }}>
              <div className="row">
                <div className="col-md-4">
                  <img src="img/staff-12.webp" className="img-fluid rounded mx-auto d-block" alt="..." />
                  <i className="bi bi-star-fill text-warning" />
                  <i className="bi bi-star-fill text-warning" />
                  <i className="bi bi-star-fill text-warning" />
                  <i className="bi bi-star-fill text-warning" />
                  <i className="bi bi-star-fill text-warning" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Dr. Daniel Wong</h5>
                    <p className="card-text">Oncology Expert</p>
                    <p className="card-text"> <span className="bg-info text-white">MD, FASCO</span> 21 years</p>
                  </div>
                </div>
                <div className="col-12 mt-4 d-block mx-auto">
                  <button className="btn btn-outline-secondary" style={{ width: 150 }}>Profile</button>
                  <button className="btn btn-info text-white" style={{ width: 150, backgroundColor: '#099aa7' }}>Consult</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="btn btn-outline-secondary mx-auto d-block m-5 p-3">Browse Complete Directory<i className="bi bi-chevron-right p-1" /></button>
      </div>
      {/* Exceptional Care for Your Health Journey */}
      <div className="container-fluid  bg-body-secondary">
        <div className="container">
          <div className="row m-3 p-3">
            <div className="col-md-6">
              <h2 className="fw-bold fs-1">Exceptional Care for Your Health Journey</h2>
              <p className="text-body-secondary">
                Discover comprehensive healthcare services delivered with <br /> compassion and expertise. Our
                dedicated team is committed to <br /> providing personalized medical care that puts you first.
              </p>
              <button className="btn btn-info text-white p-2" style={{ width: 210, backgroundColor: '#099aa7' }}>Schedule
                Consultation</button>
              <a className="icon-link icon-link-hover p-3 text-decoration-none" href="#">
                Explore Services
                <svg xmlns="http://www.w3.org/2000/svg" className="bi" viewBox="0 0 16 16" aria-hidden="true">
                  <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                </svg>
              </a>
            </div>
            <div className="col-md-6">
              <img src="img/showcase-2.webp" className="img-fluid rounded-4" width="100%" alt />
            </div>
          </div>
          <div className="text-secondary">
            <hr />
          </div>
          {/* rankes */}
          <div className="row m-5 ">
            <div className="col-md-3 text-center">
              <span className="text-info fs-1 ">25+</span> <br />
              <p>Years Experience</p>
            </div>
            <div className="col-md-3 text-center">
              <span className="text-info fs-1 ">15K+</span> <br />
              <p>Happy Patients</p>
            </div>
            <div className="col-md-3 text-center">
              <span className="text-info fs-1 ">50+</span> <br />
              <p>Medical Experts</p>
            </div>
            <div className="col-md-3 text-center">
              <span className="text-info fs-1 ">24/7</span> <br />
              <p>Emergency Care</p>
            </div>
          </div>
          <div className="text-secondary">
            <hr />
          </div>
          {/* last card */}
          <div className="row">
            <div className="col-md-4 p-3">
              <div className="card" style={{ width: '100%', height: 'auto' }}>
                <i className="fas fa-heartbeat fs-1 mx-auto d-block m-4 text-info" />
                <h4 className="text-center">Cardiology Excellence</h4>
                <div className="card-body text-center">
                  <p className="card-text text-secondary">Advanced cardiac care with state-of-the-art diagnostic
                    equipment and experienced cardiologists dedicated to heart health.</p>
                  <br /> <a href="#" className="text-decoration-none text-center">Learn More</a>
                </div>
              </div>
            </div>
            <div className="col-md-4 p-3">
              <div className="card" style={{ width: '100%', height: 'auto' }}>
                <i className="fas fa-brain fs-1 text-info mx-auto d-block m-4" />
                <h4 className="text-center">Cardiology Excellence</h4>
                <div className="card-body text-center">
                  <p className="card-text text-secondary">Advanced cardiac care with state-of-the-art diagnostic
                    equipment and experienced cardiologists dedicated to heart health.</p>
                  <br /> <a href="#" className="text-decoration-none text-center">Learn More</a>
                </div>
              </div>
            </div>
            <div className="col-md-4 p-3">
              <div className="card" style={{ width: '100%', height: 'auto' }}>
                <i className="fas fa-shield-alt fs-1 text-info mx-auto d-block m-4" />
                <h4 className="text-center">Cardiology Excellence</h4>
                <div className="card-body text-center">
                  <p className="card-text text-secondary">Advanced cardiac care with state-of-the-art diagnostic
                    equipment and experienced cardiologists dedicated to heart health.</p>
                  <br /> <a href="#" className="text-decoration-none text-center">Learn More</a>
                </div>
              </div>
            </div>
          </div>
          {/* call */}
          <div className="row rounded-4 m-5 p-4 " style={{ backgroundColor: '#099aa7' }}>
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
      </div>
    </>

  )
}


export default Home
