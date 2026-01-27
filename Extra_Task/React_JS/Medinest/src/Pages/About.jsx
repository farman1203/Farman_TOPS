import React from 'react'

const About = () => {
    return (
        <div>
            <div className="container">
                
                {/* main */}
                <div className="row mt-5 text-center ">
                    <div className="col-md-12 mx-auto d-block">
                        <h1>About</h1>
                        Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a
                        odio <br /> voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum
                        dolorem.
                    </div>
                </div>
            </div>
            <div className="container-fluid mt-5 ">
                <nav aria-label="breadcrumb" className="bg-body-secondary">
                    <ol className="breadcrumb p-3">
                        <li className="breadcrumb-item"><a className="text-decoration-none" style={{ color: '#099aa7' }} href="index.html">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">About</li>
                    </ol>
                </nav>
            </div>
            <div className="container">
                <div className="row mt-5 justify-content-center">
                    <div className="col-md-8 text-center">
                        <h1 style={{ marginTop: 30 }}>Excellence in Healthcare Since 1985</h1>
                        <p className="lh-lg">We believe that exceptional medical care begins with understanding. Our dedicated team
                            of professionals combines cutting-edge technology with compassionate, personalized treatment to
                            ensure every patient receives the highest standard of care.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-7">
                        <img src="img/facilities-3.webp" className="rounded-4" width="100%" alt />
                        <div className="row">
                            <div className="col-md-6 ">
                                <img src="img/staff-12 (1).webp" className="rounded-4 mt-3" width="100%" height="250px" alt />
                            </div>
                            <div className="col-md-6">
                                <img src="img/consultation-4.webp" className="rounded-4 mt-3" width="100%" height="250px" alt />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 mt-5">
                        <h1>Trusted Healthcare <br /> Provider</h1>
                        <p style={{ color: 'color-mix(in srgb, #363f40, transparent 20%)', fontSize: 19 }}>Lorem ipsum dolor sit
                            amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                        <div className="row mt-5 p-2">
                            <div className="col-2 mt-4 ">
                                <p className="text-info fs-1 ">22000</p>
                            </div>
                            <div className="col-10 mt-4">
                                <h4 className="ms-5">Successful Treatments</h4>
                                <p className="ms-5 text-secondary">Completed with excellent patient outcomes</p>
                            </div>
                            <div className="col-2 mt-4">
                                <p className="text-info fs-1 ">95%</p>
                            </div>
                            <div className="col-10 mt-4">
                                <h4 className="ms-5">Patient Satisfaction</h4>
                                <p className="ms-5 text-secondary">Based on comprehensive feedback surveys</p>
                            </div>
                            <div className="col-2 mt-4">
                                <p className="text-info fs-1 ">85</p>
                            </div>
                            <div className="col-10 mt-4">
                                <h4 className="ms-5">Medical Professionals</h4>
                                <p className="ms-5 text-secondary">Specialists across various departments</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* card */}
                <div className="row mt-5">
                    <div className="col-md-4 p-3  ">
                        <div className="card mision " style={{ width: '100%', height: 'auto' }}>
                            <div className=" mision-icon ">
                                <i className="bi bi-heart text-white fs-2 mt-2   " />
                            </div>
                            <h4 className="text-center">Our Mission</h4>
                            <div className="card-body text-center">
                                <p className="card-text text-secondary">To provide comprehensive, patient-centered healthcare that
                                    combines medical excellence with genuine compassion, ensuring every individual receives
                                    personalized care tailored to their unique needs.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 p-3  ">
                        <div className="card mision " style={{ width: '100%', height: 'auto' }}>
                            <div className=" mision-icon align-item-center">
                                <i className="bi bi-eye text-white fs-2 mt-2    " />
                            </div>
                            <h4 className="text-center">Our Vision</h4>
                            <div className="card-body text-center">
                                <p className="card-text text-secondary">To be the leading healthcare provider in our region,
                                    recognized for innovative treatments, exceptional outcomes, and our unwavering commitment to
                                    improving lives in our community.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 p-3  ">
                        <div className="card mision " style={{ width: '100%', height: 'auto' }}>
                            <div className=" mision-icon align-item-center">
                                <i className="bi bi-star text-white fs-2 mt-2    " />
                            </div>
                            <h4 className="text-center">Our Promise</h4>
                            <div className="card-body text-center">
                                <p className="card-text text-secondary">Every patient will receive the highest quality care in a
                                    comfortable, supportive environment where their health, dignity, and well-being are our top
                                    priorities.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Areas of Excellence */}
                <div className="row mt-5 mb-5">
                    <div className="col-md-12 text-center">
                        <h1>Areas of Excellence</h1>
                        <p className="text-secondary lh-lg">Our specialized departments work together to provide comprehensive care
                            <br /> across multiple medical disciplines
                        </p>
                    </div>
                </div>
                {/* litle cards */}
                <div className="row mb-5 ">
                    <div className="col-md-2 p-3">
                        <div className="card special">
                            <i className="bi bi-activity fs-1 text-info" />
                            <h5>Cardiology</h5>
                        </div>
                    </div>
                    <div className="col-md-2 p-3">
                        <div className="card special">
                            {/* <i class="fas fa-brain fs-1 text-info"></i> */}
                            <h5>Neurology</h5>
                        </div>
                    </div>
                    <div className="col-md-2 p-3">
                        <div className="card special">
                            <i className="bi bi-person-hearts fs-1 text-info" />
                            <h5>Pediatrics</h5>
                        </div>
                    </div>
                    <div className="col-md-2 p-3">
                        <div className="card special">
                            <i className="bi bi-scissors fs-1 text-info" />
                            <h5>Surgery</h5>
                        </div>
                    </div>
                    <div className="col-md-2 p-3">
                        <div className="card special">
                            <i className="bi bi-file-medical fs-1 text-info" />
                            <h5>Oncology</h5>
                        </div>
                    </div>
                    <div className="col-md-2 p-3">
                        <div className="card special">
                            <i className="bi bi-clipboard2-pulse fs-1 text-info" />
                            <h5>Emergency</h5>
                        </div>
                    </div>
                </div>
                {/* Recognized Excellence */}
                <div className="row mt-5 mb-5">
                    <div className="col-md-12 text-center">
                        <h1>Recognized Excellence</h1>
                        <p className="text-secondary lh-lg">Our commitment to quality is validated by prestigious healthcare
                            organizations</p>
                    </div>
                </div>
                {/* image card */}
                <div className="row">
                    <div className="col-md-12 flex">
                        <div className="offset-md-3 col-md-1 p-3">
                            <div className="card-img card">
                                <img src="img/clients-6.webp" className="p-2 mt-4" width="100%" alt />
                            </div>
                        </div>
                        <div className="col-md-1 p-3">
                            <div className="card-img card">
                                <img src="img/clients-7.webp" className="p-2 mt-4" width="100%" alt />
                            </div>
                        </div>
                        <div className="col-md-1 p-3">
                            <div className="card-img card">
                                <img src="img/clients-8.webp" className="p-2 mt-4" width="100%" alt />
                            </div>
                        </div>
                        <div className="col-md-1  p-3">
                            <div className="card-img card">
                                <img src="img/clients-9.webp" className="p-2 mt-4" width="100%" alt />
                            </div>
                        </div>
                        <div className="col-md-1  p-3">
                            <div className="card-img card">
                                <img src="img/clients-10.webp" className="p-2 mt-4" width="100%" alt />
                            </div>
                        </div>
                        <div className="col-md-1  p-3">
                            <div className="card-img card">
                                <img src="img/clients-11.webp" className="p-2 mt-4" width="100%" alt />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-secondary mt-5">
                    <hr />
                </div>
             
            </div>
        </div>
            )
    }


export default About
