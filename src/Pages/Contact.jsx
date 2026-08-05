import React from 'react'

function Contact() {
  return (
    <section id="contact">
      <div className="container-fluid bg-dark text-light mt-5">
        <div className="container py-5">
          <div className="row">

            {/* About */}
            <div className="col-md-4 mb-4">
              <h3 className="text-warning mb-3">About Job Portal</h3>
              <p>
                Job Portal is a platform that connects talented professionals with
                top companies. We help job seekers discover opportunities and make
                hiring easier for employers.
              </p>
            </div>

            {/* Contact */}
            <div className="col-md-4 mb-4">
              <h3 className="text-warning mb-3">Contact Us</h3>

              <p>📧 support@jobportal.com</p>
              <p>📞 +91 98765 43210</p>
              <p>📍 Tirunelveli, Tamil Nadu, India</p>

              <p>
                Feel free to reach out if you have any questions or need assistance.
              </p>
            </div>

            {/* Quick Links */}
            <div className="col-md-4 mb-4">
              <h3 className="text-warning mb-3">Quick Links</h3>

              <p><a href="/" className="text-light text-decoration-none">Home</a></p>
              <p><a href="/" className="text-light text-decoration-none">Browse Jobs</a></p>
              <p><a href="/login" className="text-light text-decoration-none">Login</a></p>
              <p><a href="/register" className="text-light text-decoration-none">Register</a></p>

              <div className="mt-3">
                <span className="me-3">🌐 Facebook</span>
                <span className="me-3">📷 Instagram</span>
                <span>💼 LinkedIn</span>
                 <button className='btn btn-md bg-light text-dark m-auto'>  <a href="#navbar" className='btn'>Return To Top</a> </button>
              </div>
            </div>

          </div>

          <hr className="border-secondary" />

          <div className="text-center">
            <p className="mb-0">
              © 2026 Job Portal | Designed with ❤️ using React, Node.js, Express & MongoDB
            </p>
          </div>
         
        </div>
      </div>

    </section>
  )
}

export default Contact