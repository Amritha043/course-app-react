import React, { useState } from 'react'
import NavigationBar from './NavigationBar'
import axios from 'axios'

const InsertCourse = () => {

    const [input,changeInput]=useState(
        {
          
    course_name: "",
    duration: "",
    fee: "",
    mode: "",
    trainer: ""
        }
    )
    const inputHandler = (event)=>{
                changeInput({...input,[event.target.name]:event.target.value})
    }
const readValue =()=>{
    console.log(input)
    axios.post("https://host-demo-app.onrender.com/api/add-course",input).then(
        (response)=>{
             console.log(response.data)
             alert("course added successfully")
        }
    ).catch(
        (error)=>{
            console.error("Error adding course",error)
        }
    )
}
  return (
    <div>
        <NavigationBar/>
          <div className="container">
            <h2 className="heading">
                Insert New Course
            </h2>

            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-4">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label text-light"><b>Course Name</b></label>
                            <input type="text" className="form-control" name="course_name" value={input.course_name} placeholder="Enter Course Name" onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                             <label htmlFor="" className="form-label text-light"> <b>Duration</b></label>
                            <input type="text" className="form-control" name="duration" value={input.duration} placeholder="Enter Duration" onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                             <label htmlFor="" className="form-label text-light"><b>Fee</b> </label>
                            <input type="text" className="form-control" name="fee" value={input.fee} placeholder="Enter Fee" onChange={inputHandler}/>
                           
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                             <label htmlFor="" className="form-label me-3 ms-1 text-light"><b>Mode</b> </label>
                              <select className="form-select" name="mode" value={input.mode} onChange={inputHandler}>
                                    <option value="">--- Select Mode ---</option>
                                    <option value="Online">Online</option>
                                    <option value="Offline">Offline</option>
                                    <option value="Hybrid">Hybrid</option>
                                </select>
                            </div>
                            

                        
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                             <label htmlFor="" className="form-label text-light"><b> Trainer</b></label>
                            <input type="text" className="form-control" name="trainer" value={input.trainer} placeholder="Enter Trainer" onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                             <button className="btn btn-submit " onClick={readValue}>
                                         Submit Course
                                </button>
                        </div>
                        
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InsertCourse