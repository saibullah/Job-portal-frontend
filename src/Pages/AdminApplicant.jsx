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
                const response = await api.get(`/applicants/job/${jobId}`)
                setApplicant(response.data.jobs)
            } catch (err) {
                console.log(err);

            }
        }
        fetchjob()
    }, [jobId])
    return (
        <div>AdminApplicant
            {applicants.map((applicant)=>(
                <div key={applicant._id}>
                    <h2>{applicant.user.name}</h2>
                                        <h2>{applicant.user.email}</h2>

                </div>
            ))}
        </div>
    )
}

export default AdminApplicant