import React from 'react';
import { Link, NavLink} from 'react-router-dom';


const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <div className="navbar-brand"> E-store</div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to='/dashboard'><div className="nav-link active" aria-current="page" >Dashboard</div></Link>
        </li>
        <li className="nav-item dropdown">
          <div className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Product
          </div>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><Link to='/product'><div className="dropdown-item" >Product</div></Link></li>
            <li><Link to ='/addproduct'><div className="dropdown-item" >Add Product</div></Link></li>
          </ul>
        </li>
       
       
        <li className="nav-item dropdown">
          <div className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            About us
          </div>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><NavLink to='/profile'><div className="dropdown-item" >Profile</div></NavLink></li>
            <li><NavLink to ='/login'><div className="dropdown-item" >Logout</div></NavLink></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>

        </div>
    )
}

export default Navbar;
