import React, { useState } from 'react'
import api from '../api/api'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../Job.css'
function Jobs() {
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
    <div className="container py-5">
  <div className="row g-4">

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
  )
}

export default Jobs