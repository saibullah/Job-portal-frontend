import React from 'react'
import api from '../api/api'
import { useEffect } from 'react'

function Jobs() {
  useEffect(() => {
    api.get("/jobs").then((res) => {
      console.log(res.data)
        .catch((err) => {
          console.log(err);
        })
    })
  },[])
  return (
    <div>jobs</div>
  )
}

export default Jobs