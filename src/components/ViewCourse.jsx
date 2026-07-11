import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavigationBar from './NavigationBar'

const ViewCourse = () => {
     const [data,changeData]=useState([])
    const fetchData =()=>{
        axios.get(" https://host-demo-app.onrender.com/api/courses").then(
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
         <div className="container mt-4 c1">
        <h2 className="text-center mb-4 text-light">View All COURSES</h2>

        <table className="table table-striped">
          <thead>
            <tr>
              <th>Course_name</th>
              <th>Created_at</th>
              <th>Duration</th>
              <th>Fee</th>
              <th>Id</th>
             
              <th>Mode</th>
              <th>trainer</th>
              
            </tr>
          </thead>

          <tbody>
           
           {
            data.map(
                (value,index)=>{
                    return(
                        <tr>
              <td>{value.course_name}</td>
              <td>{value.created_at}</td>
              <td>{value.duration}</td>
              <td>{value.fee}</td>  
              <td>{value.id}</td> 
              <td>{value.mode}</td> 
               <td>{value. trainer}</td> 
              
            </tr>
                    )
                }
            )
           }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ViewCourse