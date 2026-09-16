import React, { useState } from 'react'
import api from '../api/api'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Job.css'
import AiDrawer from './AiDrawer'
import Contact from './Contact'
function Jobs() {
  const role = localStorage.getItem("role")
  const [loading, setLoading] = useState(true);

  const [jobs, setJobs] = useState([])
  useEffect(() => {
    setLoading(true);
    api.get("/jobs").then((res) => {
      console.log("Response:", res.data);
      setJobs(res.data.jobs)
      setLoading(false);
    })
      .catch((err) => {
        console.log(err)
        setLoading(false)

      })
  }, [])
  if (loading) {
    return (
      <div className="d-flex flex-column justify-content-center align-items-center vh-100">

        <div className="spinner-border text-dark mb-3"></div>

        <h4>Loading Jobs...</h4>

        <p className="text-muted">
          Please wait while we fetch the latest opportunities.
        </p>

      </div>
    );
  }
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

      <AiDrawer />

      <Contact />
    </div>
  )
}

export default Jobs