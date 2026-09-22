import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import  './Grid.css';
function Grid() {
  return (<>
    <h1 className="container-fluid p-5 bg-secondary text-black ">Let's test the grid!</h1>

    <ul className="nav ms-3 mt-3">
        <li className="nav-item"><a className="nav-link active" aria-current="page" href="#">Active</a></li>
        <li className="nav-item"><a className="nav-link" href="#">Link</a></li>
        <li className="nav-item"><a className="nav-link" href="#">Link</a></li>
        <li className="nav-item"><a className="nav-link disabled" aria-disabled="true">Disabled</a></li>
    </ul>

<div className="container-lg p-3 my-3  ">
    <div className="row   ">
        <div className="col-6 border border-dark    ">First col</div>
    <div className="col-6 border border-dark     ">Second col</div></div>
    <div className="row " >
        <div className="col-4 border border-dark    ">col</div>
        <div className="col-4 border border-dark    ">col</div>
        <div className="col-4 border border-dark    ">col</div>
    </div>    
    <div className="row ">
        <div className="col-3 border border-dark    ">col</div>
        <div className="col-3 border border-dark    ">col</div>
        <div className="col-3 border border-dark    ">col</div>
        <div className="col-3 border border-dark    ">col</div>
    </div>
</div>

<footer className="footer-abc text-center fw-bold">Created by ABC!</footer>
</>
  )
}


export default Grid