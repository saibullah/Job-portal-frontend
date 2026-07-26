import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import api from '../api/api'
import { useState } from 'react'

function AdminApplicant() {
    const [applicants, setApplicant] = useState([])
    const { jobId } = useParams()
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
                console.log("Status:", err.response?.status);
                console.log("Data:", err.response?.data);

            }
        }
        fetchjob()
    }, [jobId])
    return (
        <div>AdminApplicant
            {applicants.map((application) => (
                <div key={application._id}>
                    <h4>{application.user.name}</h4>
                    <p>{application.user.email}</p>
                    <p>Status: {application.status}</p>
                </div>
            ))}
        </div>
    )
}

export default AdminApplicant