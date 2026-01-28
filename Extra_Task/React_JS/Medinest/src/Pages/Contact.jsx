import React from 'react'

const Contact = () => {
    return (
            <div>
                <div className="container">
                  
                    {/* main */}
                    <div className="row mt-5 text-center ">
                        <div className="col-md-12 mx-auto d-block">
                            <h1>Contact</h1>
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
                            <li className="breadcrumb-item active" aria-current="page">services</li>
                        </ol>
                    </nav>
                </div>
                {/* card */}
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 p-5">
                            <div className="info-box">
                                <i className="bi bi-geo-alt" />
                                <h3>Our Address</h3>
                                <p>4582 Magnolia Avenue<br />Riverside, CA 92506</p>
                            </div>
                        </div>
                        <div className="col-md-4 p-5">
                            <div className="info-box">
                                <h1><i className="bi bi-telephone" style={{ color: '#099aa7' }} /></h1>
                                <h3>Call Us</h3>
                                <p>+1 (951) 684-9123<br />+1 (951) 787-4534</p>
                            </div>
                        </div>
                        <div className="col-md-4 p-5">
                            <div className="info-box">
                                <i className="bi bi-envelope" />
                                <h3>Email Us</h3>
                                <p>contact@example.com<br />support@example.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* map form */}
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117527.08369076083!2d72.46481180191044!3d22.997271420144536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85c2fc005927%3A0x918e69150ca1c935!2sTOPS%20Technologies!5e0!3m2!1sen!2sin!4v1757742158720!5m2!1sen!2sin" width="100%" height={450} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="rounded-4 " />
                        </div>
                        <div className="col-md-7">
                            <div className="offset-md-3 col-md-6 mt-3">
                                <form className="row g-3">
                                    <div className=" col-md-6">
                                        <label htmlFor="inputEmail4" className="form-label">Name</label>
                                        <input type="text" placeholder="Your full name" className="form-control" id="inputEmail4" />
                                    </div>
                                    <div className=" col-md-6">
                                        <label htmlFor="inputEmail4" className="form-label">Email</label>
                                        <input type="email" placeholder="Your email id" className="form-control" id="inputEmail4" />
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="inputAddress" className="form-label">Subject</label>
                                        <input type="text" className="form-control" id="inputAddress" placeholder="What this about?" />
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="inputAddress2" className="form-label">Message</label>
                                        <textarea type="e" className="form-control" id="inputAddress2" placeholder="tell me about your project" defaultValue={" "} />
                                    </div>
                                    <div className="col-12">
                                        <button type="submit" className="btn btn-primary w-100 rounded-4">Sign in</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
    )
}


export default Contact
