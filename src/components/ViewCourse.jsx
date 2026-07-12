import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavigationBar from './NavigationBar'

const ViewCourse = () => {
     const [data,changeData]=useState([])
    const fetchData =()=>{
        axios.get("https://host-demo-app.onrender.com/api/courses").then(
            (response)=>{
                changeData(response.data)
            }
        ).catch()
    }
    useEffect(
        ()=>{
            fetchData()
        },[]
    )
  return (
    <div>
        <NavigationBar/>
        <div className="container mt-5">
    <h2 className="heading text-center mb-4">
        All Courses
    </h2>

    <div className="row g-4">
        {
            data.map((value, index) => (
                <div className="col-12 col-sm-6 col-lg-4" key={index}>
                    <div className="card course-card h-100">

                        <div className="card-header text-center">
                            <h4>{value.course_name}</h4>
                        </div>

                        <div className="card-body">

                            <p>
                                <strong> Duration:</strong><br />
                                {value.duration}
                            </p>

                            <p>
                                <strong> Fee:</strong><br />
                                ₹ {value.fee}
                            </p>

                            <p>
                                <strong> Mode:</strong><br />
                                {value.mode}
                            </p>

                            <p>
                                <strong> Trainer:</strong><br />
                                {value.trainer}
                            </p>

                        </div>

                        <div className="card-footer text-center">
                            <small className="text-muted">
                                Course ID : {value.id}
                            </small>
                        </div>

                    </div>
                </div>
            ))
        }
    </div>
</div>
    </div>
  )
}

export default ViewCourse