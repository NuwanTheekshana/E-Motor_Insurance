import '../App.css';

function Vehicle_Details() {
  return (

    <div className="container mt-5 mb-5">
                <div className="row justify-content-center">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title mb-5">Your Vehicle Details</h5>
                        <form>

                        <div className='form-row'>

                        <div className="row mb-3">
                                <div className="col row">
                                    <label htmlFor="job_category" className="col-sm-6 col-form-label h5">Vehicle Type <span className="text-danger">*</span></label>
                                    <div className="col-sm-6">
                                        <select className="form-control" id="job_category" name="job_category">
                                        <option>Motor Car</option>
                                        <option>Dual Purpose</option>
                                        <option>Motor Lorry</option>
                                        <option>Motor Cycle</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="col row">
                                <label htmlFor="job_category" className="col-sm-6 col-form-label h5">Hire Purches / Loan <span className="text-danger">*</span></label>
                                <div className="col-sm-6">
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="hirePurchesLoan" id="hireYes" value="yes" />
                                        <label class="form-check-label" for="hireYes">Hire Purches</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="hirePurchesLoan" id="hireNo" value="no" />
                                        <label class="form-check-label" for="hireNo">Loan</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="hirePurchesLoan" id="hireNo" value="no" />
                                        <label class="form-check-label" for="hireNo">None</label>
                                    </div>
                                </div>
                            </div>


                                
                                
                            </div>


                            <div className="row mb-3">
                                <div className="col row">
                                    <label htmlFor="Username" className="col-sm-6 col-form-label h5">Vehicle Number <span className="text-danger">*</span></label>
                                    <div className="col-sm-6">
                                    <input type="text" className="form-control" id="Username" />
                                    </div>
                                </div>


                                <div className="col row">
                                    <label htmlFor="attachment" className="col-sm-6 col-form-label h5">Vehicle Market Value</label>
                                    <div className="col-sm-6">
                                    <input type="number" className="form-control" id="Username" />
                                    </div>
                                </div>
                                
                            </div>

                            <div className="row mb-3">
                                <div className="col row">
                                    <label htmlFor="Username" className="col-sm-6 col-form-label h5">Vehicle Make <span className="text-danger">*</span></label>
                                    <div className="col-sm-6">
                                    <input type="text" className="form-control" id="Username" />
                                    </div>
                                </div>


                                <div className="col row">
                                    <label htmlFor="attachment" className="col-sm-6 col-form-label h5">Vehicle Model</label>
                                    <div className="col-sm-6">
                                    <input type="text" className="form-control" id="Username" />
                                    </div>
                                </div>
                                
                            </div>

                            <div className="row mb-3">
                                <div className="col row">
                                    <label htmlFor="Username" className="col-sm-6 col-form-label h5">Engine Number <span className="text-danger">*</span></label>
                                    <div className="col-sm-6">
                                    <input type="text" className="form-control" id="Username" />
                                    </div>
                                </div>


                                <div className="col row">
                                    <label htmlFor="attachment" className="col-sm-6 col-form-label h5">Chassis No</label>
                                    <div className="col-sm-6">
                                    <input type="text" className="form-control" id="Username" />
                                    </div>
                                </div>
                                
                            </div>


                            <div className="row mb-3">
                                <div className="col row">
                                    <label htmlFor="Username" className="col-sm-6 col-form-label h5">Vehicle Year <span className="text-danger">*</span></label>
                                    <div className="col-sm-6">
                                    <input type="text" className="form-control" id="Username" />
                                    </div>
                                </div>


                                <div className="col row">
                                    <label htmlFor="attachment" className="col-sm-6 col-form-label h5">Vehicle Cubic Capacity</label>
                                    <div className="col-sm-6">
                                    <input type="text" className="form-control" id="Username" />
                                    </div>
                                </div>
                                
                            </div>

                        

                        </div>

                        

                        <div className="text-center">
                            <button type="button" className="btn btn-primary"> <i className="bi bi-send"></i> Generate Quotation</button>
                        </div>
                        </form>

                    </div>
                    </div>
                </div>
                </div>
    




  );
}

export default Vehicle_Details;
