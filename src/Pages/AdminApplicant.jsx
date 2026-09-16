import React from 'react'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import api from '../api/api'

function AdminApplicant() {

    const [applicants, setApplicant] = useState([])
    const { jobId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const fetchjob = async () => {
            try {
                const token = localStorage.getItem("token")

                const response = await api.get(`/applications/job/${jobId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })

                console.log("Response:", response.data)
                setApplicant(response.data)

            } catch (err) {
                console.log("Status:", err.response?.status)
                console.log("Data:", err.response?.data)
            }
        }

        fetchjob()
    }, [jobId])
const handleStatusChange = async (applicationId, newStatus) => {
    try {
        const token = localStorage.getItem("token")

        const response = await api.put(
            `/applications/${applicationId}/status`,
            { status: newStatus },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        )

        console.log(response.data)

        setApplicant((prev) =>
            prev.map((application) =>
                application._id === applicationId
                    ? { ...application, status: newStatus }
                    : application
            )
        )

        alert("Status updated successfully")

    } catch (error) {
        console.log("STATUS:", error.response?.status)
        console.log("DATA:", error.response?.data)

        alert(
            error.response?.data?.message ||
            "Failed to update status"
        )
    }
}

    const getStatusClass = (status) => {
        if (status === "approved") {
            return "bg-success"
        }

        if (status === "rejected") {
            return "bg-danger"
        }

        return "bg-warning text-dark"
    }


    return (
        <div className="container py-5">

            {/* Header */}
            <div className="d-flex justify-content-between align-items-center mb-4">

                <div>
                    <h2 className="fw-bold mb-1">
                        Job Applicants
                    </h2>

                    <p className="text-muted mb-0">
                        Manage applicants and update their application status
                    </p>
                </div>

                <button
                    className="btn btn-outline-dark"
                    onClick={() => navigate(-1)}
                >
                    ← Back
                </button>

            </div>


            {/* Applicant Count */}
            <div className="mb-4">
                <span className="badge bg-dark fs-6 px-3 py-2">
                    {applicants.length} Applicants
                </span>
            </div>


            {/* Applicants */}
            {applicants.length === 0 ? (

                <div className="text-center py-5 border rounded">
                    <h5>No applicants found</h5>
                    <p className="text-muted">
                        No one has applied for this job yet.
                    </p>
                </div>

            ) : (

                <div className="row g-4">

                    {applicants.map((application) => (

                        <div
                            className="col-md-6 col-lg-4"
                            key={application._id}
                        >

                            <div className="card h-100 border-0 shadow-sm">

                                <div className="card-body p-4">

                                    {/* User */}
                                    <div className="d-flex align-items-center mb-3">

                                        <div
                                            className="bg-dark text-white rounded-circle d-flex justify-content-center align-items-center me-3"
                                            style={{
                                                width: "50px",
                                                height: "50px",
                                                fontSize: "20px"
                                            }}
                                        >
                                            {application.user?.name
                                                ?.charAt(0)
                                                ?.toUpperCase()}
                                        </div>

                                        <div>
                                            <h5 className="fw-bold mb-1">
                                                {application.user?.name}
                                            </h5>

                                            <small className="text-muted">
                                                Applicant
                                            </small>
                                        </div>

                                    </div>


                                    {/* Email */}
                                    <div className="mb-3">

                                        <small className="text-muted">
                                            Email
                                        </small>

                                        <p className="mb-0">
                                            {application.user?.email}
                                        </p>

                                    </div>


                                    {/* Status */}
                                    <div className="mb-3">

                                        <small className="text-muted d-block mb-1">
                                            Application Status
                                        </small>

                                        <span
                                            className={`badge ${getStatusClass(
                                                application.status
                                            )} px-3 py-2`}
                                        >
                                            {application.status}
                                        </span>

                                    </div>


                                    {/* Actions */}
                                    <div className="d-flex gap-2 mt-4">

                                        <div className="mb-3">
    <small className="text-muted d-block mb-1">
        Application Status
    </small>

    <select
        className="form-select"
        value={application.status}
        onChange={(e) => handleStatusChange(application._id, e.target.value)}
    >
        <option value="pending">Pending</option> 
        <option value="approved">Approved</option>
        <option value="rejected">Rejected</option>
    </select>
</div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            )}

        </div>
    )
}

export default AdminApplicant