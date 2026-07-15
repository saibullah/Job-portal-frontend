import React, { useEffect, useState } from 'react'
import api from '../api/api'
import '../styles/Application.css'
import { Link } from 'react-router-dom'

function MyApplication() {
  const [applications, SetApplication] = useState([])
  useEffect(() => {
    fetchAppliaction()

  }, [])
  const fetchAppliaction = async () => {
    const token = localStorage.getItem("token")
    try {
      const response = await api.get("/applications/my", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      SetApplication(response.data)

    } catch (err) {
      console.log(err)
    }
  }
console.log(applications);
  return (
  <div className="container py-5">

  <div className="d-flex justify-content-between align-items-center mb-4">
    <h2 className="fw-bold">📄 My Applications</h2>
    <span className="text-muted">
      Total Applications: {applications.length}
    </span>
  </div>

  <div className="row g-4">

    {applications.map((application) => (

      <div className="col-md-6 col-lg-4" key={application._id}>

        <div className="application-card">

          <div className="d-flex justify-content-between align-items-start">

            <div>
              <h4 className="job-title">
                {application.job.title}
              </h4>

              <p className="company-name">
                {application.job.company}
              </p>
            </div>

            <span
              className={`status-badge ${
                application.status === "Pending"
                  ? "pending"
                  : application.status === "Accepted"
                  ? "accepted"
                  : "rejected"
              }`}
            >
              {application.status}
            </span>

          </div>

          <hr />

          <p className="mb-2">
            📍 <strong>Location:</strong> {application.job.location}
          </p>

          <p className="mb-4">
            💼 <strong>Job Type:</strong> {application.job.jobType}
          </p>

          <button className="btn application-btn w-100">
            <Link to={`/job/${application.job._id}`}> View Job</Link>
           
          </button>

        </div>

      </div>

    ))}

  </div>

</div>
  )
}

export default MyApplication