import React from 'react'

const InsertCourse = () => {
  return (
    <div>
          <div className="container">
            
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-4">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label"><b>  Course Name</b></label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                             <label htmlFor="" className="form-label"> <b>Duration,</b></label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                             <label htmlFor="" className="form-label"><b>   Fee</b> </label>
<input type="text" className="form-control" />
                           
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                             <label htmlFor="" className="form-label me-3 ms-1"><b>Mode</b> </label>
                              <select name="" id="" className="form-control">
                                <option value="">---select---</option>
                                <option value="">Online</option>
                                <option value=""> Offline</option>
                                <option value="">Hybrid</option>
                              </select>
                            </div>
                            

                        
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                             <label htmlFor="" className="form-label"><b> Trainer</b></label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                             <button className="btn btn-success">SUBMIT</button>
                        </div>
                        
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InsertCourse