import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../api/api'
import '../styles/CreateJob.css'

function CreateJob() {
  const navigate = useNavigate()
  const [job, updateJob] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    description: "",
    skills: "",
    experience: "",
    jobType: ""
  })
   const handleChange = (e) => {
    updateJob({
      ...job,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit= async (e)=>{
    e.preventDefault()
    const token = localStorage.getItem("token")

     try{
const response = await api.post("/jobs" ,    {
          ...job,
          skills: job.skills
            .split(",")
            .map((skill) => skill.trim()),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        alert(response.data.message)
        navigate('/admin-dashboard')
 }catch(err){
  console.log(err);
  alert(err.response?.data?.message || "Failed to create job");
  
 }
  }

  return (
   <div className="create-job-page">
  <div className="container py-5">
    <div className="col-lg-8 mx-auto">
      <div className="create-job-card">
        <div className="text-center mb-5">
          <div className="create-job-icon">
            ➕
          </div>
          <h2 className="fw-bold mt-3">
            Create New Job
          </h2>
          <p className="text-muted">
            Fill in the details to post a new job.
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6 mb-4">
              <label className="form-label fw-semibold">
                Job Title
              </label>
              <input
                type="text"
                className="form-control premium-input"
                name="title"
                value={job.title}
                onChange={handleChange}
                placeholder="React Developer"
                required
              />
            </div>
            <div className="col-md-6 mb-4">
              <label className="form-label fw-semibold">
                Company
              </label>
              <input
                type="text"
                className="form-control premium-input"
                name="company"
                value={job.company}
                onChange={handleChange}
                placeholder="Google"
                required
              />
            </div>
            <div className="col-md-6 mb-4">
              <label className="form-label fw-semibold">
                Location
              </label>
              <input
                type="text"
                className="form-control premium-input"
                name="location"
                value={job.location}
                onChange={handleChange}
                placeholder="Bangalore"
                required
              />
            </div>
            <div className="col-md-6 mb-4">
              <label className="form-label fw-semibold">
                Salary
              </label>
              <input
                type="text"
                className="form-control premium-input"
                name="salary"
                value={job.salary}
                onChange={handleChange}
                placeholder="₹12 - ₹18 LPA"
                required
              />
            </div>
            <div className="col-md-6 mb-4">
              <label className="form-label fw-semibold">
                Experience
              </label>
              <input
                type="text"
                className="form-control premium-input"
                name="experience"
                value={job.experience}
                onChange={handleChange}
                placeholder="2 Years"
                required
              />
            </div>
            <div className="col-md-6 mb-4">
              <label className="form-label fw-semibold">
                Job Type
              </label>
              <select
                className="form-select premium-input"
                name="jobType"
                value={job.jobType}
                onChange={handleChange}
                required
              >
                <option value="">Select Job Type</option>
                <option>Full Time</option>
                <option>Part Time</option>
                <option>Internship</option>
                <option>Remote</option>
              </select>
            </div>
          </div>
          <div className="mb-4">
            <label className="form-label fw-semibold">
              Skills
            </label>
            <input
              type="text"
              className="form-control premium-input"
              name="skills"
              value={job.skills}
              onChange={handleChange}
              placeholder="React, Node.js, MongoDB"
            />
          </div>
          <div className="mb-4">
            <label className="form-label fw-semibold">
              Description
            </label>
            <textarea
              rows="5"
              className="form-control premium-input"
              name="description"
              value={job.description}
              onChange={handleChange}
              placeholder="Write the complete job description..."
            />
          </div>
          <button
            type="submit"
            className="btn create-job-btn w-100"
          >
            🚀 Create Job
          </button>
        </form>
      </div>
    </div>
  </div>
</div>
  )
}

export default CreateJob