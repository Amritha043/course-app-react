import React from 'react'
import NavigationBar from './NavigationBar'

const InsertCourse = () => {
  return (
    <div>
        <NavigationBar/>
          <div className="container">
            
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-4">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label text-light"><b>  Course Name</b></label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                             <label htmlFor="" className="form-label text-light"> <b>Duration,</b></label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                             <label htmlFor="" className="form-label text-light"><b>   Fee</b> </label>
<input type="text" className="form-control" />
                           
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                             <label htmlFor="" className="form-label me-3 ms-1 text-light"><b>Mode</b> </label>
                              <select name="" id="" className="form-control">
                                <option value="">---select---</option>
                                <option value="">Online</option>
                                <option value=""> Offline</option>
                                <option value="">Hybrid</option>
                              </select>
                            </div>
                            

                        
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                             <label htmlFor="" className="form-label text-light"><b> Trainer</b></label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                             <button className="btn btn-light t">SUBMIT</button>
                        </div>
                        
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InsertCourse