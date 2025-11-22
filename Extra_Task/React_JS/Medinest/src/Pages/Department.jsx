import React from 'react'

const Department = () => {
    return (
        <div>
            <div className="container">
               
                {/* main */}
                <div className="row mt-5 text-center ">
                    <div className="col-md-12 mx-auto d-block">
                        <h1>Departments</h1>
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
                        <li className="breadcrumb-item active" aria-current="page">Department</li>
                    </ol>
                </nav>
            </div>
            {/* card */}
            <div className="container">
                <div className="row">
                    <div className="col-md-6 p-4">
                        <div className="department-item">
                            <div className="department-content">
                                <div className="department-header">
                                    <div className="department-icon">
                                        <i className="fas fa-heartbeat " />
                                    </div>
                                    <div className="department-info">
                                        <h3>Cardiology</h3>
                                        <span className="department-category">Heart &amp; Vascular</span>
                                    </div>
                                </div>
                                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
                                    egestas. Vestibulum tortor quam, feugiat vitae.</p>
                                <div className="department-features">
                                    <span className="bg-info text-white">24/7 Emergency</span>
                                    <span className="bg-info text-white">Advanced Diagnostics</span>
                                </div>
                            </div>
                            <img src="img/cardiology-2.webp" width="100%" height="200px" alt />
                        </div>
                    </div>
                    <div className="col-md-6 p-4">
                        <div className="department-item">
                            <div className="department-content">
                                <div className="department-header">
                                    <div className="department-icon">
                                        <i className="fas fa-brain " />
                                    </div>
                                    <div className="department-info">
                                        <h3>Neurology</h3>
                                        <span className="department-category">Brain &amp; Nervous System</span>
                                    </div>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <div className="department-features">
                                    <span className="bg-info text-white">24/7 Emergency</span>
                                    <span className="bg-info text-white">Advanced Diagnostics</span>
                                </div>
                            </div>
                            <img src="img/neurology-3.webp" width="100%" height="200px" alt />
                        </div>
                    </div>
                    <div className="col-md-6 p-4">
                        <div className="department-item">
                            <div className="department-content">
                                <div className="department-header">
                                    <div className="department-icon">
                                        <i className="fas fa-bone " />
                                    </div>
                                    <div className="department-info">
                                        <h3>Orthopedics</h3>
                                        <span className="department-category">Bones &amp; Joints</span>
                                    </div>
                                </div>
                                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute.</p>
                                <div className="department-features">
                                    <span className="bg-info text-white">24/7 Emergency</span>
                                    <span className="bg-info text-white">Advanced Diagnostics</span>
                                </div>
                            </div>
                            <img src="img/orthopedics-4.webp" width="100%" height="200px" alt />
                        </div>
                    </div>
                    <div className="col-md-6 p-4">
                        <div className="department-item">
                            <div className="department-content">
                                <div className="department-header">
                                    <div className="department-icon">
                                        <i className="fas fa-baby" />
                                    </div>
                                    <div className="department-info">
                                        <h3>Pediatrics</h3>
                                        <span className="department-category">Children's Health</span>
                                    </div>
                                </div>
                                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum sed.</p>
                                <div className="department-features">
                                    <span className="bg-info text-white">24/7 Emergency</span>
                                    <span className="bg-info text-white">Advanced Diagnostics</span>
                                </div>
                            </div>
                            <img src="img/pediatrics-2.webp" width="100%" height="200px" alt />
                        </div>
                    </div>
                    <div className="col-md-6 p-4">
                        <div className="department-item">
                            <div className="department-content">
                                <div className="department-header">
                                    <div className="department-icon">
                                        <i className="fas fa-microscope" />
                                    </div>
                                    <div className="department-info">
                                        <h3>Laboratory</h3>
                                        <span className="department-category">Diagnostic Services</span>
                                    </div>
                                </div>
                                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
                                    egestas. Vestibulum tortor quam, feugiat vitae.</p>
                                <div className="department-features">
                                    <span className="bg-info text-white">24/7 Emergency</span>
                                    <span className="bg-info text-white">Advanced Diagnostics</span>
                                </div>
                            </div>
                            <img src="img/laboratory-3.webp" width="100%" height="200px" alt />
                        </div>
                    </div>
                    <div className="col-md-6 p-4">
                        <div className="department-item">
                            <div className="department-content">
                                <div className="department-header">
                                    <div className="department-icon">
                                        <i className="fas fa-heartbeat " />
                                    </div>
                                    <div className="department-info">
                                        <h3>Emergency</h3>
                                        <span className="department-category">24/7 Critical Care</span>
                                    </div>
                                </div>
                                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
                                    egestas. Vestibulum tortor quam, feugiat vitae.</p>
                                <div className="department-features">
                                    <span className="bg-info text-white">24/7 Emergency</span>
                                    <span className="bg-info text-white">Advanced Diagnostics</span>
                                </div>
                            </div>
                            <img src="img/emergency-4.webp" width="100%" height="200px" alt />
                        </div>
                    </div>
                </div>
                {/* footer */}
                <div className="row gy-4 p-3 ">
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

export default Department
