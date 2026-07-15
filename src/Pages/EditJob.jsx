import React, { useEffect, useState } from 'react'
import api from '../api/api'
import { useNavigate, useParams } from 'react-router-dom'
import '../styles/Editpage.css'

function EditJob() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [job, setjob] = useState({
    tittle: "",
    company: "",
    location: "",
    salary: "",
    description: "",
    skills: "",
    erperience: "",
    JobType: ""
  })

 

  useEffect(() => {
     const fetchjob = async () => {
    try {
      const response = await api.get(`/jobs/${id}`)
      setjob(response.data.job)

    } catch (err) {
      console.log(err);

    }
  }
    fetchjob()
  },[id]);
  const handleChange = (e) => {
    setjob({
      ...job,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    try {
      await api.put(`/jobs/${id}`, job, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      alert("Job Updated Successfully");

      navigate("/admin-dashboard");

    } catch (err) {
      console.log(err);
    }
  };

  return (
   <div className="edit-job-page">
  <div className="container py-5">
    <div className="col-lg-8 mx-auto">
      <div className="edit-job-card">
        <div className="text-center mb-5">
          <div className="edit-icon">
            💼
          </div>
          <h2 className="fw-bold mt-3">
            Edit Job
          </h2>
          <p className="text-muted">
            Update the job information below.
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
                name="title"
                className="form-control premium-input"
                value={job.title}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6 mb-4">
              <label className="form-label fw-semibold">
                Company
              </label>
              <input
                type="text"
                name="company"
                className="form-control premium-input"
                value={job.company}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6 mb-4">
              <label className="form-label fw-semibold">
                Location
              </label>
              <input
                type="text"
                name="location"
                className="form-control premium-input"
                value={job.location}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6 mb-4">
              <label className="form-label fw-semibold">
                Salary
              </label>
              <input
                type="text"
                name="salary"
                className="form-control premium-input"
                value={job.salary}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6 mb-4">
              <label className="form-label fw-semibold">
                Job Type
              </label>
              <input
                type="text"
                name="jobType"
                className="form-control premium-input"
                value={job.jobType}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6 mb-4">
              <label className="form-label fw-semibold">
                Experience
              </label>
              <input
                type="text"
                name="experience"
                className="form-control premium-input"
                value={job.experience}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="form-label fw-semibold">
              Description
            </label>
            <textarea
              rows="5"
              name="description"
              className="form-control premium-input"
              value={job.description}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="form-label fw-semibold">
              Skills
            </label>
            <input
              type="text"
              name="skills"
              className="form-control premium-input"
              value={job.skills}
              onChange={handleChange}
            />
            <small className="text-muted">
              Example: React, Node.js, MongoDB
            </small>
          </div>
          <button
            type="submit"
            className="btn update-job-btn w-100"
          >
            💾 Update Job
          </button>
        </form>
      </div>
    </div>
  </div>
</div>
  )
}

export default EditJob