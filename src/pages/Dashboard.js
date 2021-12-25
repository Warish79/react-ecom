import React from 'react'

const Dashboard = () => {
    return (
        <div className='container-fluid mt-5'>
            <div className='row'>
                <div className='col-md-3'>
                    <div className="card text-white bg-primary mb-3" >
                        <div className="card-header">Header</div>
                        <div className="card-body">
                            <h5 className="card-title">Primary card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>

                </div>

                <div className='col-md-3'>
                <div className="card text-white bg-success mb-3" >
                        <div className="card-header">Header</div>
                        <div className="card-body">
                            <h5 className="card-title">Success card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        </div>

                </div>

                <div className='col-md-3'>
                         <div className="card text-dark bg-warning mb-3" >
                        <div className="card-header">Header</div>
                        <div className="card-body">
                            <h5 className="card-title">Warning card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        </div>

                </div>
                <div className='col-md-3 bg-success' >
                    <div className="card text-dark bg-light mb-3" >
                    <div className="card-header">Electronics</div>
                    <div className="card-body">
                        <h5 className="card-title">Light card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    </div>
                </div>
                <div className="card">
  <ul className="list-group list-group-flush">
    <li className="list-group-item">phone</li>
    <li className="list-group-item">A Laptop item</li>
    <li className="list-group-item">A Earphone</li>
  </ul>
  <div className="card-footer">
    Card footer
  </div>
</div>
<div className="card text-center mt-5 bg-info">
  <div className="card-header">
    <ul className="nav nav-pills card-header-pills">
      <li className="nav-item">
        <a className="nav-link active" href="#">Active</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li>
    </ul>
    </div>
  <div className='col-md-3' >
  <div className="card-body mt-4 bg-secondry">
    <h5 className="card-title">Special title </h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" className="btn btn-primary">Right Here</a>
  </div>
</div>
</div>

            </div>
        </div>

    )
}

export default Dashboard;
