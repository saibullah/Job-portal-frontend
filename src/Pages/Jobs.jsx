import React, { useState } from 'react'
import api from '../api/api'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Job.css'
import AiDrawer from './AiDrawer'
function Jobs() {
  const role = localStorage.getItem("role")

  const [jobs, setJobs] = useState([])
  useEffect(() => {
    api.get("/jobs").then((res) => {
      console.log("Response:", res.data);
      setJobs(res.data.jobs)
    })
      .catch((err) => {
        console.log(err);

      })
  }, [])
  return (
    <div>
    <div className="container py-5">
      <div className="row g-4">
        {role === "admin" ? (
  <Link
    to="/admin-dashboard"
    className="btn btn-dark"
  >
    🛠 Admin Dashboard
  </Link>
) : (
  <Link
    to="/my-application"
    className="btn btn-dark"
  >
    📄 My Applications
  </Link>
)}
        <div>
          <h2 className="fw-bold">Latest Jobs</h2>
          <p className="text-muted">
            Find your next opportunity
          </p>
        </div>


        {jobs.map((job) => (
          <div className="col-md-6 col-lg-4" key={job._id}>

            <div className="job-card">

              <div className="d-flex justify-content-between align-items-start">

                <div>
                  <h4 className="job-title">{job.title}</h4>
                  <p className="company-name">{job.company}</p>
                </div>

                <span className="badge bg-dark">Full Time</span>

              </div>

              <hr />

              <div className="job-info">

                <p>📍 {job.location}</p>

                <p>💰 {job.salary}</p>

              </div>

              <Link
                to={`/job/${job._id}`}
                className="btn job-btn w-100"
              >
                View Details
              </Link>

            </div>
          </div>
        ))}

      </div>
    </div>
    
<AiDrawer/>
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

    </div>
  )
}

export default Jobs