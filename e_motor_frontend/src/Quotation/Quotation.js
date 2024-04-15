import '../App.css';

function Quotation() {
  return (

    <div className="container mt-5 mb-5">
                <div className="row justify-content-center">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title mb-5">Quotation</h5>
                        <form>

                        <div className='row mb-3'>
                            <div className='col'>
                                <div className='card'>
                                    <div className='card-body'>
                                        <div className='form-row'>
                                            <div className="row mb-3">
                                                <div class="form-group">
                                                    <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" id="gridCheck" />
                                                        <label class="form-check-label" for="gridCheck">
                                                            Personal Acceident Benefits (PAB)
                                                        </label>
                                                    </div>
                                                </div>

                                                <div class="form-group">
                                                    <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" id="gridCheck" />
                                                        <label class="form-check-label" for="gridCheck">
                                                            Good In Transit (GIT)
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='col'>
                                <div className='card'>
                                    <div className='card-body'>
                                        <div className='form-row'>
                                            <div className="row mb-3">
                                                <div class="form-group">
                                                    <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" id="gridCheck" />
                                                        <label class="form-check-label" for="gridCheck">
                                                            Personal Acceident Benefits (PAB)
                                                        </label>
                                                    </div>
                                                </div>

                                                <div class="form-group">
                                                    <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" id="gridCheck" />
                                                        <label class="form-check-label" for="gridCheck">
                                                            Good In Transit (GIT)
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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

export default Quotation;
