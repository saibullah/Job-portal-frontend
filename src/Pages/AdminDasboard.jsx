import React, { useEffect, useState } from 'react'
import api from '../api/api'
import { Link } from 'react-router-dom'
import '../styles/Admindasboard.css'

function AdminDasboard() {
  const [jobs, setJobs] = useState([])
  useEffect(() => {
    fetchJobs()
  }, [])
  const fetchJobs = async () => {
    try {
      const response = await api.get('/jobs')
      setJobs(response.data.jobs)
    } catch (err) {
      console.log(err);

    }
  }
 
  const handleDelete = async (id) => {

  const confirmDelete = window.confirm(
    "Are you sure you want to delete this job?"
  );

  if (!confirmDelete) return;

  try {
    const response = await api.delete(`/jobs/${id}`);

    alert(response.data.message);

    fetchJobs(); // Refresh the jobs list

  } catch (error) {
    alert("Failed to delete job");
  }
};
  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-5">
        <div>
          <h2 className="fw-bold">🛠️ Admin Dashboard</h2>
          <p className="text-muted">
            Manage jobs and applications
          </p>
        </div>

        <Link
          to="/admin/create-job"
          className="btn admin-create-btn"
        >
          + Create Job
        </Link>
      </div>
      <div className="row g-4">
        {jobs.map((job) => (
          <div className="col-md-6 col-lg-4" key={job._id}>
            <div className="admin-card">
              <h4 className="admin-job-title">
                {job.title}
              </h4>
              <p className="company-name">
                🏢 {job.company}
              </p>
              <p>
                📍 <strong>Location:</strong> {job.location}
              </p>
              <p>
                💰 <strong>Salary:</strong> {job.salary}
              </p>
              <div className="d-grid gap-2 mt-4">
                <Link
                  to={`/admin/edit-job/${job._id}`}
                  className="btn edit-btn"
                >
                  ✏️ Edit Job
                </Link>
                <button
                  className="btn delete-btn"
                 onClick={() => handleDelete(job._id)}
                  >
                  🗑 Delete Job
                </button>
                <Link
                  to={`/admin/applicants/${job._id}`}
                  className="btn applicants-btn"
                >
                  👥 View Applicants
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AdminDasboard