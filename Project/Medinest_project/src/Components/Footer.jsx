import React from 'react'

const Footer = () => {
    return (
        <div>
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

export default Footer
