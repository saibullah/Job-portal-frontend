import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import '../styles/JobDetail.css'
import api from '../api/api'

function JobDetails() {
  const [jobdetail, setJob] = useState(null)
  const { id } = useParams()
  const navigate = useNavigate()
  const [applied, setApplied] = useState(false)
  const role = localStorage.getItem("role")
  useEffect(() => {
    fetch(`http://localhost:5000/api/jobs/${id}`)
      .then(res => res.json())
      .then((data) => {
        setJob(data.job);
      });
  }, [id])
  if (!jobdetail) {
    return (
      <div className="container mt-5 text-center">
        <h3>Loading...</h3>
      </div>
    );
  }
  const handleapply = async () => {
    const token = localStorage.getItem("token")
    if (!token) {
      navigate("/login")
      return;
    }
    try {
      const response = await api.post(
        `/applications/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert(response.data.message);
      setApplied(true)
    } catch (error) {
      alert(error.response?.data?.message || "Application failed");
    }
  };
  return (
    <div className="container py-5">
      <div className="job-details-card">
        <div className="d-flex justify-content-between align-items-start flex-wrap">
          <div>
            <h2 className="details-title">{jobdetail.title}</h2>
            <h5 className="company-text">{jobdetail.company}</h5>
          </div>
          <span className="badge bg-dark fs-6 px-3 py-2">
            {jobdetail.jobType}
          </span>
        </div>
        <hr />
        <div className="row text-center g-3 mb-4">
          <div className="col-md-4">
            <div className="info-box">
              <h6>📍 Location</h6>
              <p>{jobdetail.location}</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="info-box">
              <h6>💰 Salary</h6>
              <p>₹ {jobdetail.salary}</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="info-box">
              <h6>💼 Experience</h6>
              <p>{jobdetail.experience}</p>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <h4>Required Skills</h4>
          <div className="d-flex flex-wrap gap-2">
            {jobdetail.skills?.map((skill, index) => (
              <span key={index} className="skill-badge">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <h4>Description</h4>
          <p className="description">
            {jobdetail.description}
          </p>
        </div>
        {role==="admin"?(<button className="btn apply-btn" disabled>
          Admin cannot Apply jobs
        </button>):
        
        applied ? (<button className="btn apply-btn" disabled>
          Applied
        </button>) :
          (<button className="btn apply-btn" onClick={handleapply}>
            Apply Now
          </button>)}
      </div>
    </div>
  )
}

export default JobDetails